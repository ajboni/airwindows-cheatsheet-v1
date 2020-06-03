
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    const identity = x => x;
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }

    const is_client = typeof window !== 'undefined';
    let now = is_client
        ? () => window.performance.now()
        : () => Date.now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new Set();
    function run_tasks(now) {
        tasks.forEach(task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0)
            raf(run_tasks);
    }
    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     */
    function loop(callback) {
        let task;
        if (tasks.size === 0)
            raf(run_tasks);
        return {
            promise: new Promise(fulfill => {
                tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function select_option(select, value) {
        for (let i = 0; i < select.options.length; i += 1) {
            const option = select.options[i];
            if (option.__value === value) {
                option.selected = true;
                return;
            }
        }
    }
    function select_value(select) {
        const selected_option = select.querySelector(':checked') || select.options[0];
        return selected_option && selected_option.__value;
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    const active_docs = new Set();
    let active = 0;
    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--)
            hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
        return hash >>> 0;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
        }
        const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
        const name = `__svelte_${hash(rule)}_${uid}`;
        const doc = node.ownerDocument;
        active_docs.add(doc);
        const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
        const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
        if (!current_rules[name]) {
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
        active += 1;
        return name;
    }
    function delete_rule(node, name) {
        const previous = (node.style.animation || '').split(', ');
        const next = previous.filter(name
            ? anim => anim.indexOf(name) < 0 // remove specific animation
            : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
        );
        const deleted = previous.length - next.length;
        if (deleted) {
            node.style.animation = next.join(', ');
            active -= deleted;
            if (!active)
                clear_rules();
        }
    }
    function clear_rules() {
        raf(() => {
            if (active)
                return;
            active_docs.forEach(doc => {
                const stylesheet = doc.__svelte_stylesheet;
                let i = stylesheet.cssRules.length;
                while (i--)
                    stylesheet.deleteRule(i);
                doc.__svelte_rules = {};
            });
            active_docs.clear();
        });
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }

    let promise;
    function wait() {
        if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }
    function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    const null_transition = { duration: 0 };
    function create_in_transition(node, fn, params) {
        let config = fn(node, params);
        let running = false;
        let animation_name;
        let task;
        let uid = 0;
        function cleanup() {
            if (animation_name)
                delete_rule(node, animation_name);
        }
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
                task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, 'start'));
            task = loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(1, 0);
                        dispatch(node, true, 'end');
                        cleanup();
                        return running = false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(t, 1 - t);
                    }
                }
                return running;
            });
        }
        let started = false;
        return {
            start() {
                if (started)
                    return;
                delete_rule(node);
                if (is_function(config)) {
                    config = config();
                    wait().then(go);
                }
                else {
                    go();
                }
            },
            invalidate() {
                started = false;
            },
            end() {
                if (running) {
                    cleanup();
                    running = false;
                }
            }
        };
    }
    function create_out_transition(node, fn, params) {
        let config = fn(node, params);
        let running = true;
        let animation_name;
        const group = outros;
        group.r += 1;
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, 'start'));
            loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(0, 1);
                        dispatch(node, false, 'end');
                        if (!--group.r) {
                            // this will result in `end()` being called,
                            // so we don't need to clean up here
                            run_all(group.c);
                        }
                        return false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(1 - t, t);
                    }
                }
                return running;
            });
        }
        if (is_function(config)) {
            wait().then(() => {
                // @ts-ignore
                config = config();
                go();
            });
        }
        else {
            go();
        }
        return {
            end(reset) {
                if (reset && config.tick) {
                    config.tick(1, 0);
                }
                if (running) {
                    if (animation_name)
                        delete_rule(node, animation_name);
                    running = false;
                }
            }
        };
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.23.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function prop_dev(node, property, value) {
        node[property] = value;
        dispatch_dev("SvelteDOMSetProperty", { node, property, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.data === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    var db = [
      {
        Name: "Acceleration",
        Type: "Eq",
        Use: "Mixing",
        Description: "Acceleration limiter tames edge, leaves brightness",
        Comments: "",
      },
      {
        Name: "ADClip7",
        Type: "Limiter",
        Use: "Mastering",
        Description: "The ultimate Airwindows loudness maximizer",
        Comments: "",
      },
      {
        Name: "ADT",
        Type: "Delay",
        Use: "Mixing",
        Description: "ADT is a double short delay tap with saturation.",
        Comments: "",
      },
      {
        Name: "Air",
        Type: "Eq",
        Use: "Mixing",
        Description: "A different bright EQ from any other",
        Comments: "",
      },
      {
        Name: "Apicolypse",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "Apicolypse is a re-release of my old API-style color adder, exactly as it was.",
        Comments: "",
      },
      {
        Name: "AQuickVoiceClip",
        Type: "Utility",
        Use: "Post",
        Description:
          "Soften headset mic recordings that have been super hard clipped on capture",
        Comments:
          "It subdues the HF hash while retaining clarity when not clipping, and contains a highpass that works with the anti-clipper code. ",
      },
      {
        Name: "Atmosphere",
        Type: "Mix Buss Replacement",
        Use: "Mixing",
        Description: "Console5 processing with powerful acoustic distance effects.",
        Comments:
          " If you need up-close, bright and loud sounds, you’ll need to use another system (such as PurestConsole), this one is for space and scale.",
      },
      {
        Name: "Aura",
        Type: "Eq",
        Use: "Mixing",
        Description: "New kind of resonant lowpass EQ",
        Comments:
          "It gives a kind of presence peak never done before in software, along with attenuation past that peak",
      },
      {
        Name: "Average",
        Type: "Eq",
        Use: "Mixing",
        Description:
          "A lowpass filter you probably don’t have in your DAW, with a distinctive tone",
        Comments:
          "As you go full wet on the dry/wet fader, the resonant quality gets enhanced, so be sure and explore the half-wet or barely-wet settings. If it’s too scary-resonant, just pull it back a teeny bit and it should cooperate.",
      },
      {
        Name: "BassDrive",
        Type: "Saturation",
        Use: "Mixing",
        Description: "BassDrive is an old secret weapon, like a kind of bass amp.",
        Comments: "",
      },
      {
        Name: "BassKit",
        Type: "Eq",
        Use: "Mixing",
        Description:
          "Centered bass reinforcement with subs fill. Clean and controllable.",
        Comments: "",
      },
      {
        Name: "Baxandall",
        Type: "Eq",
        Use: "Mixing",
        Description: "Baxandall is a killer general-purpose EQ",
        Comments: "",
      },
      {
        Name: "Biquad",
        Type: "Eq",
        Use: "Mixing",
        Description: "Biquad is the Airwindows implementation of a biquad filter",
        Comments: "",
      },
      {
        Name: "Biquad2",
        Type: "Eq",
        Use: "Mixing",
        Description:
          "Biquad2 is the Airwindows biquad filter that’s more sweepable and synthy.",
        Comments: "",
      },
      {
        Name: "Bite",
        Type: "Eq",
        Use: "Mixing",
        Description: "An unusual edge-maker",
        Comments:
          "Capacitor > Bite is a nice combo. The presence added by bite tickles near the quirk zone of capacitor.",
      },
      {
        Name: "BitGlitter",
        Type: "Bitcrusher",
        Use: "Mixing",
        Description:
          "Hardware-style bit and resolution crusher, like really old sampler",
        Comments: "",
      },
      {
        Name: "BitShiftGain",
        Type: "Gain",
        Use: "Mixing",
        Description: "Gain plugin Extremely accurate Only works in 6db increments",
        Comments: "",
      },
      {
        Name: "BlockParty",
        Type: "Limiter",
        Use: "Mastering",
        Description: "BlockParty is like a moderately saturated analog limiter.",
        Comments:
          "The threshold’s determining compression, which means BlockParty doesn’t have a stable compression threshold. It’s interactive with the audio you’re giving it.",
      },
      {
        Name: "BrassRider",
        Type: "Utility",
        Use: "Mixing",
        Description: "Drum overheads gate",
        Comments: "",
      },
      {
        Name: "BuildATPDF",
        Type: "Dither",
        Use: "Mastering",
        Description: "Design your own tone-shaped TPDF",
        Comments: "see webpage for tips",
      },
      {
        Name: "BussColors4",
        Type: "Saturation",
        Use: "Mixing",
        Description: "The Airwindows console emulations",
        Comments:
          "Dark - MCI (unusual midrange articulation, solid sound when pushed)\nRock - SSL (tightens bass; more character added using the input trim)\nLush - Neve (more bass; pillowy and fat, with airy highs and large in scale)\nVibe - funky old console (could bring an old dub platter sound to a track)\nHolo - Focusrite (3D space; locations of sound sources take on a special holographic quality)\nPunch - API (loaded with punch and impact)\nSteel - special effects console (lacks bass, old reggae consoles, it could accentuate the personality of some electronic music; cleans up low mid mud)\nTube - Manley (luminous, airy)\n\nSee more details on the different settings here http://www.airwindows.com/busscolors3/\n",
      },
      {
        Name: "ButterComp2",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          " ButterComp2 is improved ButterComp with an output control and sound upgrades.",
        Comments: "The plugin also adds the second harmonic to the source",
      },
      {
        Name: "C5RawConsole",
        Type: "Mix Buss Replacement",
        Use: "Mixing",
        Description:
          "The original Console5 with DC offset (and a very minimal, defeatable DC remover)",
        Comments: "",
      },
      {
        Name: "Calibre",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "This one’s got kind of a steely quality and if you hype the Character control there’s a point where bass cancels out: weird variation on a tone control! Also, that means if you duplicated the track (or used Blue Cat Patchwork or something) and flipped phase, you’d get a really unusual lowpass and would have only the bass and a lot of strange color.",
        Comments: "",
      },
      {
        Name: "Capacitor",
        Type: "Eq",
        Use: "Mixing",
        Description: "Quirky filter",
        Comments:
          "Capacitor > Bite is a nice combo. The presence added by bite tickles near the quirk zone of capacitor.",
      },
      {
        Name: "Channel4",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Console channel 'emulation'",
        Comments: "SSL, Neve, API",
      },
      {
        Name: "Channel5",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Channel for 2018, with new subtleties.",
        Comments:
          "extra Output level control; if you set Output to 1.0 it bypasses itself and becomes exactly, exactly the same as Channel4.",
      },
      {
        Name: "Channel6",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Channel uses the Spiral algorithm",
        Comments: "",
      },
      {
        Name: "Channel7",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "Channel7 improves slew clipping and lets you blend Channel 6 and 5.",
        Comments: "",
      },
      {
        Name: "Chorus",
        Type: "Modulation",
        Use: "Mixing",
        Description: "Mono chorus, also works as a vibrato",
        Comments: "",
      },
      {
        Name: "ChorusEnsemble",
        Type: "Modulation",
        Use: "Mixing",
        Description: "A more complex, multi-tap chorus",
        Comments: "",
      },
      {
        Name: "Cider",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Sounds kinda like an MCI console?",
        Comments: "",
      },
      {
        Name: "ClipOnly",
        Type: "Clipper",
        Use: "Mastering",
        Description:
          "2-buss safety clipper at -0.2dB with powerful anti-glare processing",
        Comments: "",
      },
      {
        Name: "Coils",
        Type: "Distortion",
        Use: "Mixing",
        Description:
          "Coils models the types of distortion you’ll find in transformers.",
        Comments:
          "Coils is like the inverse of Focus. Instead of boosting/distorting UP the mids, it saturates DOWN the extreme highs and lows leaving the mids untouched.",
      },
      {
        Name: "Cojones",
        Type: "Saturation",
        Use: "Mixing",
        Description: "New kind of distorty",
        Comments: " has some of the StudioTan and DitherMeTimbers colors.",
      },
      {
        Name: "Compresaturator",
        Type: "Compressor",
        Use: "Mixing",
        Description: "Compresaturator fades between compressing and soft clipping",
        Comments:
          " Dial in qualities unachievable with normal dynamics processors!",
      },
      {
        Name: "Console5",
        Type: "Mix Buss Replacement",
        Use: "Mixing",
        Description:
          "Digital Mix Buss\n1 Channel is the last plugin on tracks\n2 Buss is the first plugin on the 2buss\n\nVERY IMPORTANT: Keep your track faders at unity level; change the track level using the trim in Console5Channel or with a gain plugin before Console5.",
        Comments:
          "It works through a channel plugin on every sound source, feeding at unity gain into the buss plugin which overrides the digital summing with Airwindows summing (more internal space, more depth, and with Console 4 it now has glue making the top-end more listenable)\n\nDO NOT hit it hard; tracks at -35lufs each are still too loud for it if it's a 50+ tracks session. Aim for -50lufs, then use a gain trim on the master buss to make-up the lost volume to help when mixing.\n\nDon't use any plugins after Console5Channel, nor before Console5Buss as this changes what they're doing and won't be able to work properly.\n\nWARNING: it eats up low end, so maybe don't use on bass and kicks. If you do use it on low-end-rich tracks, also send them to an auxiliary track with FATHOM FIVE on it, to help recover the low end. \n\nIf the newly-added low end distorts,\n1. create a mix buss with Console4Buss for everything but the FATHOM FIVE track.\n2. Send both the mix buss and the FATHOM FIVE track to the 'master buss'\n3. Process your master buss as usual.",
      },
      {
        Name: "Console6",
        Type: "Mix Buss Replacement",
        Use: "Mixing",
        Description:
          "New more intense Console, peaks at lower dB\n\nDigital Mix Buss\n1 Channel is the last plugin on tracks\n2 Buss is the first plugin on the 2buss\n\nVERY IMPORTANT: Keep your track faders at unity level; change the track level using the trim in Console6Channel or with a gain plugin before Console6.",
        Comments:
          "So the bottom line here is simply usability: mix into this like it’s an analog mixing console that can be overstressed. You can still put full scale single tracks through there, losslessly, because that’s what any Console does. You can mix into it provided you don’t stress the buss too hard (or don’t mind the distortion you get). Gain stage before hitting the Channel plugins, one Console6Channel plugin on each sound source with unity gain through the mix structure into the Console6Buss plugin. If you need to slam stuff louder afterward you must do it AFTER the Console6Buss plugin, in whatever way you like. Console is always a digital Mix Buss without an EQ-style sound of its own, so if you want further color you need to use other plugins outside Console. If you’re daring or just curious you can use things between the plugins (‘inside’ Console) such as a DAW EQ, echoes, subtle reverb etc. If you choose wrongly, it’ll distort or be weird, and things like EQs will be much more sensitive than usual to boosts and cuts.\n\nWARNING: it eats up low end, so maybe don't use on bass and kicks. If you do use it on low-end-rich tracks, also send them to an auxiliary track with FATHOM FIVE on it, to help recover the low end. \n\nIf the newly-added low end distorts,\n1. create a mix buss with Console6Buss for everything but the FATHOM FIVE track.\n2. Send both the mix buss and the FATHOM FIVE track to the 'master buss'\n3. Process your master buss as usual.\"",
      },
      {
        Name: "CrunchyGrooveWear",
        Type: "Eq",
        Use: "Mixing",
        Description: "Bug-restored version of GrooveWear for more edge",
        Comments: "",
      },
      {
        Name: "Crystal",
        Type: "Clipper",
        Use: "Mastering",
        Description: "Crystal is a tone shaper and buss soft-clipper.",
        Comments: "",
      },
      {
        Name: "CStrip",
        Type: "Channel Strip",
        Use: "Mixing",
        Description: "Channel Strip",
        Comments:
          "The signal flow goes like this:\nGate—Highpass—Compressor—EQ(High/Mid/Low)—Timing—Lowpass",
      },
      {
        Name: "Curve",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          "curve is the simplest, purest form of airwindows recurve with no extra boosts.",
        Comments: "",
      },
      {
        Name: "DCVoltage",
        Type: "Utility",
        Use: "Mixing",
        Description: "Control voltages for digital workstations",
        Comments:
          "Do NOT just put this in a mix and crank it up to see what it’ll do. If your whole system is DC-coupled you will blow your woofers, just like that, after a big ‘whump’",
      },
      {
        Name: "DeBess",
        Type: "De-esser",
        Use: "Mixing",
        Description:
          "DeBess is an improved DeEss, with perfect rejection of non-ess audio.",
        Comments: "",
      },
      {
        Name: "Deckwrecka",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Deckwrecka fattens and dirties up beats",
        Comments: "",
      },
      {
        Name: "DeEss",
        Type: "De-esser",
        Use: "Mixing",
        Description:
          "DeEss is the best de-essing solution there is. A go-to utility plugin.",
        Comments: "",
      },
      {
        Name: "DeHiss",
        Type: "Special",
        Use: "Mixing",
        Description: "DeHiss tries to suppress background hiss, like a hiss gate.",
        Comments: "",
      },
      {
        Name: "Density",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Smoothest saturation or antisaturation, plus highpass",
        Comments: "",
      },
      {
        Name: "DeRez",
        Type: "Bitcrusher",
        Use: "Mixing",
        Description: "Analog-style bit and samplerate crusher",
        Comments: "",
      },
      {
        Name: "DeRez2",
        Type: "Bitcrusher",
        Use: "Mixing",
        Description: "DeRez2 brings more authentic retro-digital hardware tones.",
        Comments: "",
      },
      {
        Name: "Desk",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Classic Airwindows subtle analog modeling.",
        Comments: "",
      },
      {
        Name: "Desk4",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Distinctive analog coloration",
        Comments:
          "The more tracks and busses (including 2bus) you use this one, the more 'analog' the mix sounds, without it sounding crunchy.",
      },
      {
        Name: "Digital Black 2",
        Type: "Gate",
        Use: "Mixing",
        Description: "The ultimate gate for djent or anything staccato",
        Comments: "",
      },
      {
        Name: "Distance2",
        Type: "Reverb",
        Use: "Mixing",
        Description: "Versatile space shaper for creating depth",
        Comments: "not on 2buss",
      },
      {
        Name: "Distortion",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "Distortion is a slightly dark analog-style distortion with several presets, like Focus.",
        Comments: "",
      },
      {
        Name: "Dither Me Timbers",
        Type: "Dither",
        Use: "Mastering",
        Description: "Dark deep ‘dither’ (includes 16 bit version)",
        Comments: "",
      },
      {
        Name: "DitherBox",
        Type: "Dither",
        Use: "Mastering",
        Description:
          "It's (nearly) every Airwindows dither plugin in one box, with a control to select between them.",
        Comments: "",
      },
      {
        Name: "DitherFloat",
        Type: "Dither",
        Use: "Mixing",
        Description:
          "Look down. Look up. Your plugins are now dithered to 32 bit floating point :D",
        Comments: "",
      },
      {
        Name: "DoublePaul",
        Type: "Dither",
        Use: "Mastering",
        Description: "Like PaulDither, but more so",
        Comments:
          "If you don’t trust NotJustAnotherDither, but you’d like something even quieter than PaulDither, try this.",
      },
      {
        Name: "Drive",
        Type: "Overdrive",
        Use: "Mixing",
        Description: "Overdrive unit",
        Comments: "Angry overdrive.",
      },
      {
        Name: "DrumSlam",
        Type: "Saturation",
        Use: "Mixing",
        Description: " Heavy-processing tape modeler",
        Comments: "",
      },
      {
        Name: "DubCenter",
        Type: "Utility",
        Use: "Mixing",
        Description:
          "DubCenter is a version of DubSub where the bass reinforcement is purely mono.",
        Comments: "",
      },
      {
        Name: "DubSub",
        Type: "Utility",
        Use: "Mixing",
        Description: "DubSub is a fully featured bass doctor.",
        Comments: "",
      },
      {
        Name: "DustBunny",
        Type: "Sound Design",
        Use: "Mixing",
        Description: "Creates weird distortion",
        Comments: "",
      },
      {
        Name: "Dyno",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "Dyno is a lot like Mojo, but for intensity instead of loudness.",
        Comments: "",
      },
      {
        Name: "Ed Is Dim",
        Type: "Utility",
        Use: "Mixing",
        Description: "Mid/side conversion utility plugins",
        Comments:
          "MidSide converts your stereo track into mid/side (on left and right channels). Then apply your processing (there’s a control with which you can balance the mid/side balance, which also means you can gain stage the M/S content into your plugin), then, go into EdIsDim (read it backwards) to convert back to stereo. The same control is present, and can reverse the gain staging you applied.",
      },
      {
        Name: "ElectroHat",
        Type: "Noise Generator",
        Use: "Mixing",
        Description:
          "Hihat tone generator (uses original sound as control voltage)",
        Comments: "",
      },
      {
        Name: "Energy",
        Type: "Eq",
        Use: "Mixing",
        Description: "Electrifying fixed-frequency treble boosts",
        Comments: "",
      },
      {
        Name: "Ensemble",
        Type: "Modulation",
        Use: "Mixing",
        Description: "Weird flangey little modulation effect",
        Comments: "Big 70s synth strings chorus effect",
      },
      {
        Name: "EQ",
        Type: "Eq",
        Use: "Mixing",
        Description: "Just the EQ out of CStrip",
        Comments: "",
      },
      {
        Name: "EveryTrim",
        Type: "Utility",
        Use: "Mixing",
        Description: "Left/Right, Mid/Side, and Master in one plugin",
        Comments: "",
      },
      {
        Name: "Facet",
        Type: "Limiter",
        Use: "Mixing",
        Description:
          "Facet is a new kind of hard clip that adds two sharp corners into the wave.",
        Comments: "",
      },
      {
        Name: "FathomFive",
        Type: "Eq",
        Use: "Mixing",
        Description:
          "Build this bass-enhancer into an aux on your mix to generate controllable tape-like fullness and bass depth",
        Comments: "",
      },
      {
        Name: "Floor",
        Type: "Eq",
        Use: "Mixing",
        Description: "Fake bottom octave for fun and profit!",
        Comments: "",
      },
      {
        Name: "Focus",
        Type: "Distortion",
        Use: "Mixing",
        Description:
          "Focus brings out clarity by distorting. Aggressive, subtle, flexible.",
        Comments: "",
      },
      {
        Name: "Fracture",
        Type: "Utility",
        Use: "Mixing",
        Description: "Soft frequency-doubling-and-tripling waveshaper",
        Comments: "",
      },
      {
        Name: "FromTape",
        Type: "Saturation",
        Use: "Mixing",
        Description: "A minimalist analog tape emulation",
        Comments: "Louder - \nSofter - \nWeight - ",
      },
      {
        Name: "Gatelope",
        Type: "Gate",
        Use: "Mixing",
        Description: "A special gate that applies filters.",
        Comments:
          "For the 2buss. Can cut mostly treble for toms, or tighten bass on kicks and snares.",
      },
      {
        Name: "Golem",
        Type: "Utility",
        Use: "Mixing",
        Description: "Blend a stereo track of two mics on an amp",
        Comments: "",
      },
      {
        Name: "Gringer",
        Type: "Distortion",
        Use: "Mixing",
        Description:
          "Gringer is a full-wave rectifier plugin, like a Green Ringer guitar effect.",
        Comments: "",
      },
      {
        Name: "GrooveWear",
        Type: "Eq",
        Use: "Mixing",
        Description: "Scrubbing highs off mechanically like a stylus would",
        Comments: "",
      },
      {
        Name: "Guitar Conditioner",
        Type: "Distortion",
        Use: "Mixing",
        Description:
          "Replace your Tube Screamer with this plugin, to get ‘scrunch’ and subs conditioning, but without the sponginess that even hardware TS9s have",
        Comments: "",
      },
      {
        Name: "HardVacuum",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Tube style saturation effects",
        Comments: "",
      },
      {
        Name: "HermePass",
        Type: "Eq",
        Use: "Mastering",
        Description: "Mastering highpass to set by ear only",
        Comments: "",
      },
      {
        Name: "HermeTrim",
        Type: "Trim",
        Use: "Mixing",
        Description: "Very fine volume adjustments",
        Comments: "",
      },
      {
        Name: "HighGlossDither",
        Type: "Dither",
        Use: "Mastering",
        Description: "Weird dither",
        Comments: "",
      },
      {
        Name: "HighImpact",
        Type: "Compressor",
        Use: "Mixing",
        Description: "Grit and punch without fatness",
        Comments: '"aggro" knob',
      },
      {
        Name: "HighPass2",
        Type: "Eq",
        Use: "Mixing",
        Description:
          "Highpass2 is an unusual-sounding variable-slope highpass filter.",
        Comments: "",
      },
      {
        Name: "Holt",
        Type: "Eq",
        Use: "Mixing",
        Description: "Synthy resonant lowpass filter focussed on low frequencies.",
        Comments: "",
      },
      {
        Name: "Hombre",
        Type: "Delay",
        Use: "Mixing",
        Description: "Atmosphere and texture. Very subtle delays",
        Comments: "",
      },
      {
        Name: "Interstage",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Interstage is a subtle and sophisticated analogifier",
        Comments: "",
      },
      {
        Name: "IronOxide 5",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Old school tape emulation, not made for mix buss use",
        Comments:
          "This is the old school, rowdy, obvious tape emulation, full of grunge and bark :)",
      },
      {
        Name: "IronOxide Classic",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Old school tape emulation, extra pure and free of grunge",
        Comments: "",
      },
      {
        Name: "Logical4",
        Type: "Compressor",
        Use: "Mixing",
        Description: "Classic 2-buss compressor, somewhat similar to the SSL",
        Comments:
          "You can approach compression duties from several directions with Logical. It has three distinct stages, and will entirely bypass stages it’s not using. It’ll go from 1/1 compression, up to 2/1 using just a single stage (for the utmost transparency): keep it below 2/1 ratio and use the threshold control to bring in the compression. This is a traditional 2-buss natural-sounding compression. From 2/1 to 4/1 ratio, you can get various behaviors and the two stages in use still sound very clean: the speed control will give you different kinds of ‘swing’ and spring-back out of the compression.\n\nThen as you pass 4/1 ratio and go off to a max of 16/1 (approximate, but that’s the basic idea) there’s a tone change, and as you get into crazy high ratios, Logical goes a little bonkers. This was NOT available in previous Logicals. The issue was, if you rely heavily on that final compression stage, things can get messy. You can push Logical until it’s nasty and so full of energy it’s forcing you to use the makeup gain to PAD the output, just to handle all the madness.",
      },
      {
        Name: "Loud",
        Type: "Compressor",
        Use: "Mixing",
        Description: "Distortion and demolition of air molecules, modeled",
        Comments: "",
      },
      {
        Name: "Lowpass/Highpass",
        Type: "Eq",
        Use: "Mixing",
        Description: "Lowpass gives rich textures, Highpass timewarps your tone",
        Comments: "",
      },
      {
        Name: "Lowpass2",
        Type: "Eq",
        Use: "Mixing",
        Description:
          "Lowpass2 is an unusual-sounding variable-slope lowpass filter.",
        Comments: "",
      },
      {
        Name: "Luxor",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "Luxor is the Character plugin that’s based off Manley impulses.",
        Comments:
          " It does NOT sound like a Manley anything. Instead, it does a weird and maybe cool thing: you might treat it like an amp sim or something, see what you can get out of it. Cranking syn drums through it ought to be good. It is what it is, namely ‘a weird plugin not like anything else’ and I hope you like it.",
      },
      {
        Name: "Melt",
        Type: "Delay",
        Use: "Mixing",
        Description: "Wobbly and weird sort-of delay",
        Comments: "",
      },
      {
        Name: "MineSpace",
        Type: "Delay",
        Use: "Mixing",
        Description: "A game ambiance reverb for Let’s Plays",
        Comments: "",
      },
      {
        Name: "Mojo",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Mojo is a biggenator that also works as a loudenator.",
        Comments: "",
      },
      {
        Name: "Monitoring",
        Type: "Utility",
        Use: "Mixing",
        Description: "Monitoring is your one-stop shop for final 2-buss work!",
        Comments: "",
      },
      {
        Name: "MoNoam",
        Type: "Utility",
        Use: "Mixing",
        Description:
          "MoNoam gives you variations on mono, mid, and side in different channels.",
        Comments: "",
      },
      {
        Name: "MV",
        Type: "Reverb",
        Use: "Mixing",
        Description:
          "MV is a dual-mono reverb based on BitShiftGain and the old Midiverbs",
        Comments: "",
      },
      {
        Name: "NaturalizeDither",
        Type: "Dither",
        Use: "Mastering",
        Description:
          "This dither is often considered best by listeners It works on every genre, at every sample rate It adds no tonal color to the audio, and the noise it produces is quiet… but more than quiet, the noise of Naturalize has a fugitive quality where it seems to ‘hide’ behind the reverb tails, and once you start listening to the music it’s difficult to hear there’s any noise present",
        Comments: "",
      },
      {
        Name: "NC-17",
        Type: "Limiter",
        Use: "Mastering",
        Description: "Loudness limiter keeps drums on top",
        Comments: "",
      },
      {
        Name: "Neverland",
        Type: "Saturation",
        Use: "Mixing",
        Description: "My old Neve emulation from 2007",
        Comments: "Some people use it for deharshing as well.",
      },
      {
        Name: "NodeDither",
        Type: "Dither",
        Use: "Mastering",
        Description: "The testbed for the TPDF-based dithers Flanger dither!",
        Comments: "use as an effect",
      },
      {
        Name: "Noise",
        Type: "Noise Generator",
        Use: "Mixing",
        Description: "The Airwindows deep noise oscillator, as a sound reinforcer.",
        Comments:
          "Can be used in sound design for video, or as a texture for music.",
      },
      {
        Name: "NonLinearSpace",
        Type: "Reverb",
        Use: "Mixing",
        Description: "Airwindows flexible reverb plugin",
        Comments:
          "The sample rate thing really just tells it what buffer lengths to use: shorter buffers make tighter spaces. \nIt should give a roughly consistent sound if you use the buffer corresponding to your sample rate, but then you can also be at 44.1K and set it to 96K just to have a huge stadium soundscape.",
      },
      {
        Name: "NotJustAnotherDither/CD",
        Type: "Dither",
        Use: "Mastering",
        Description:
          "NotJustAnotherDither is 24 bit and NotJustAnotherCD is 16 bit",
        Comments:
          "So, if you’re sending an output to your DAC for monitoring, or to mix down a bunch of outputs using an external mixer, you’d use NotJustAnotherDither, for the 24 bit output.\n\nIf you’re making a CD or something else that requires 16 bit output, use NotJustAnotherCD. ",
      },
      {
        Name: "OneCornerClip",
        Type: "Limiter",
        Use: "Mastering",
        Description: "An ultimate full-bandwidth clipper.",
        Comments: "",
      },
      {
        Name: "Pafnuty",
        Type: "Eq",
        Use: "Mixing",
        Description: "Chebyshev filter adds harmonics.",
        Comments: "",
      },
      {
        Name: "PaulDither",
        Type: "Dither",
        Use: "Mastering",
        Description: "Single pole highpassed TPDF dither",
        Comments: "It’s silky and sweet and a bit quieter than the usual kind.",
      },
      {
        Name: "PDConsole",
        Type: "Mix Buss Replacement",
        Use: "Mixing",
        Description: " smoothes and rounds stuff off",
        Comments: " big analogue console sound",
        "":
          "- really soft, lush tapestry\n- the version of Console5 that most closely resembles an analog console built of hardware electronic parts",
      },
      {
        Name: "PeaksOnly",
        Type: "Utility",
        Use: "Mixing",
        Description: "PeaksOnly is a transformative mix check tool.",
        Comments: "",
      },
      {
        Name: "PhaseNudge",
        Type: "Phase-eq",
        Use: "Mixing",
        Description: "Phase rotator/allpass filter",
        Comments: "",
      },
      {
        Name: "PocketVerbs",
        Type: "Reverb",
        Use: "Mixing",
        Description:
          "PocketVerbs is my popular old special effects reverbs plugin!",
        Comments: "",
      },
      {
        Name: "Podcast",
        Type: "Utility",
        Use: "Mixing",
        Description:
          "Podcast is a simpler pile of curve-style compressors with hard clipping.",
        Comments:
          "You pick between Podcast and Podcast Deluxe, throw it on your voiceover track (recorded with good headroom) and enjoy managed voice levels without a lot of zooming background noise.",
      },
      {
        Name: "PodcastDeluxe",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          "PodcastDeluxe is a pile of compressors (curve style) and phase rotators.",
        Comments: "",
      },
      {
        Name: "Point",
        Type: "Transient Designer",
        Use: "Mixing",
        Description: "Transient redesigner. Explosive",
        Comments:
          "For squishing off the fronts of snaredrums to make them huge, use Point -1.0 and a reaction speed around 0.166.\n\nTo spotlight cymbal attacks while rounding the drums, use Point -1.0 and a reaction speed around 0.14.\n\nTo hype up kick drum attacks and suppress the sustain in a gatey sort of way, use a reaction speed of around 0.3 and carefully add positive Point until you have the effect you want.",
      },
      {
        Name: "Pop",
        Type: "Compressor",
        Use: "Mixing",
        Description: "Pop is a crazy overcompressor with a very exaggerated sound.",
        Comments: "",
      },
      {
        Name: "PowerSag",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Emulates power supply limitations for analog modeling",
        Comments:
          "The neat thing about PowerSag is that, if you like grunge and distortion, it’s capable of adding some grind to the sound while pulling the channel back in the mix, where traditional distortion and saturation pushes sounds forward",
      },
      {
        Name: "PowerSag2",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "PowerSag2 is my improved circuit-starve plugin, now with inverse effect!",
        Comments: "",
      },
      {
        Name: "Precious",
        Type: "Saturation",
        Use: "Mixing",
        Description:
          "Might serve as a good color-adder, or fake guitar amp? Based on Precision 8 impulses, but it’s turned into very much its own thing: I think this became Holo in the Busscolors plugins. In the original form, here, you can crank up the color intensity a lot, or distort the hell out of it.",
        Comments: "",
      },
      {
        Name: "Pressure4",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          "The Airwindows compressor, malleable into many forms if you know how",
        Comments: "",
      },
      {
        Name: "PurestAir",
        Type: "Eq",
        Use: "Mixing",
        Description: "PurestAir is a brightness experiment.",
        Comments: "",
      },
      {
        Name: "PurestConsole",
        Type: "Mix Buss Replacement",
        Use: "Mixing",
        Description: "Console 5 with the least coloration it can have",
        Comments: "",
      },
      {
        Name: "PurestDrive",
        Type: "Clipper",
        Use: "Mixing",
        Description: "A virtually transparent clipper",
        Comments: "",
      },
      {
        Name: "PurestEcho",
        Type: "Delay",
        Use: "Mixing",
        Description: "Optimized Airwindows echo with a twist!",
        Comments: "",
      },
      {
        Name: "PurestGain",
        Type: "Gain",
        Use: "Mixing",
        Description: "A gain trim plugin",
        Comments: "",
      },
      {
        Name: "PurestSquish",
        Type: "Compressor",
        Use: "Mixing",
        Description: "PurestSquish is an open-sounding compressor with bass bloom",
        Comments:
          "You can use it very gently to ‘float’ the mix elements in a barely perceptible way, or you can lean into it harder for more textural effects.",
      },
      {
        Name: "PurestWarm",
        Type: "Distortion",
        Use: "Mixing",
        Description: "Subtle tone shaper and warmth adder",
        Comments:
          "Pick which polarity you want to distort, and it applies the single most soft-textured distortion in existence",
      },
      {
        Name: "Pyewacket",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          "is all about retaining the attack transients of things and just stepping on the tails of envelopes.",
        Comments: "",
      },
      {
        Name: "RawTimbers and RawGlitters",
        Type: "Utility",
        Use: "Mastering",
        Description:
          "Just the quantization from Dither Me Timbers… and the opposite, as a brightener.",
        Comments: "",
      },
      {
        Name: "Recurve",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          "Recurve is a special buss compressor with no threshold point.",
        Comments: "",
      },
      {
        Name: "Remap",
        Type: "Utility",
        Use: "Mixing",
        Description: "Remap puts the guts back into overloudenated audio!",
        Comments: "",
      },
      {
        Name: "ResEQ",
        Type: "Eq",
        Use: "Mixing",
        Description: "ResEQ is a bank of mostly midrange resonances",
        Comments: "",
      },
      {
        Name: "Righteous4",
        Type: "Limiter",
        Use: "Mastering",
        Description: "Final output stage for targeting dynamic range",
        Comments: "For the 2buss",
      },
      {
        Name: "SideDull",
        Type: "Eq",
        Use: "Mixing",
        Description: "Lowpass on the side channel",
        Comments: "",
      },
      {
        Name: "SidePass",
        Type: "Eq",
        Use: "Mixing",
        Description: "Highpass on the side channel",
        Comments: "",
      },
      {
        Name: "SingleEndedTriode",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Unusual analog modeling effects",
        Comments: "",
      },
      {
        Name: "Slew",
        Type: "Eq",
        Use: "Mixing",
        Description: "Slew clipping",
        Comments:
          "You can use it to morph and transform percussive sounds or hats, you can give a unique and interesting ‘grind’ to instruments or glue stuff together into a retro, old-school-sampler, grungey grind, or you can use it on things like reverb sends to really amp up the sense of distant loud sound in a room or space.",
      },
      {
        Name: "Slew2",
        Type: "Eq",
        Use: "Mixing",
        Description:
          "Limit or wipe out the highest frequencies, near the Nyquist frequency",
        Comments: "",
      },
      {
        Name: "SlewOnly/SubsOnly",
        Type: "Monitoring",
        Use: "Mixing",
        Description:
          "Monitor through these plugs to hear only the highs, or only the subsonics, \nand adjust your mix accordingly ",
        Comments: "Also works as special effects.",
      },
      {
        Name: "Smooth",
        Type: "Clipper/expander",
        Use: "Mixing",
        Description: "Smooth can tame pointy sounds or make drums explode",
        Comments: "",
      },
      {
        Name: "SoftGate",
        Type: "Gate",
        Use: "Mixing",
        Description:
          "SoftGate is a gate that can mute hiss and smooth sample tails.",
        Comments: "",
      },
      {
        Name: "Space",
        Type: "Reverb",
        Use: "Mixing",
        Description: "Algorithmic reverb",
        Comments: "",
      },
      {
        Name: "SpatializeDither",
        Type: "Dither",
        Use: "Mastering",
        Description: "Spatial positioning and clarity dither",
        Comments:
          "hyper-real, high-definition sound of extreme clarity and accuracy",
      },
      {
        Name: "Spiral",
        Type: "Saturation",
        Use: "Mixing",
        Description: "New best smoothest distortion algorithm",
        Comments: "",
      },
      {
        Name: "Spiral2",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Spiral with controls including Presence",
        Comments: "",
      },
      {
        Name: "Srsly",
        Type: "Width",
        Use: "Mixing",
        Description: "Srsly is a psychoacoustic stereo processor.",
        Comments: "",
      },
      {
        Name: "StarChild",
        Type: "Reverb",
        Use: "Mixing",
        Description:
          "A variation on the old Ursa Minor Space Station, but different It’s a high purity stereo-only rendition of a raw and grainy antique digital spacemaker",
        Comments: "",
      },
      {
        Name: "StereoFX",
        Type: "Width",
        Use: "Mixing",
        Description: "Aggressive stereo widener",
        Comments: "",
      },
      {
        Name: "StudioTan",
        Type: "Dither",
        Use: "Mastering",
        Description:
          "StudioTan is all the ‘non-dither’ dithers, up to date and convenient.",
        Comments: "",
      },
      {
        Name: "Surge",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          "Surge is about very smooth gain shifts that are totally transparent and more like an automatic gain control",
        Comments: "",
      },
      {
        Name: "SurgeTide",
        Type: "Compressor",
        Use: "Mixing",
        Description: "SurgeTide is like Surge, only almost unmanageable",
        Comments: "Use on 2buss",
      },
      {
        Name: "Swell",
        Type: "Gate",
        Use: "Mixing",
        Description:
          "Swell is about stomping out attack transients until they’re all gone.",
        Comments:
          "Swell reacts to EVERY attack that comes along, provided the threshold’s set right.",
      },
      {
        Name: "Tape",
        Type: "Saturation",
        Use: "Mixing",
        Description: "Tape needed to get improved. So now it is!",
        Comments: "",
      },
      {
        Name: "TapeDelay",
        Type: "Delay",
        Use: "Mixing",
        Description: "An old school tape echo with pitch swerve effects.",
        Comments: "",
      },
      {
        Name: "TapeDither",
        Type: "Dither",
        Use: "Mastering",
        Description: "TPDF variant with noise like reel-to-reel tape",
        Comments: "",
      },
      {
        Name: "TapeDust",
        Type: "Utility",
        Use: "Mixing",
        Description: "High end tamer, sort of",
        Comments: "",
      },
      {
        Name: "TapeFat",
        Type: "Eq",
        Use: "Mixing",
        Description: "TapeFat is the tone control from TapeDelay.",
        Comments: "",
      },
      {
        Name: "Thunder",
        Type: "Compressor",
        Use: "Mixing",
        Description:
          "With this buss compressor, sub-lows get bigger the harder you drive it",
        Comments: "",
      },
      {
        Name: "ToMono",
        Type: "Utility",
        Use: "Mixing",
        Description:
          "ToMono (LeftoMono and RightoMono) copy one channel to both, losslessly.",
        Comments: "",
      },
      {
        Name: "ToneSlant",
        Type: "Eq",
        Use: "Mastering",
        Description: "Mastering grade very low Q tilt EQ",
        Comments: "",
      },
      {
        Name: "ToTape5",
        Type: "Saturation",
        Use: "Mixing",
        Description: "The highest quality Airwindows analog tape emulation",
        Comments: "see the product page",
      },
      {
        Name: "ToTape6",
        Type: "Saturation",
        Use: "Mixing",
        Description: "ToTape6 is Airwindows tape emulation for 2020!",
        Comments: "",
      },
      {
        Name: "ToVinyl4",
        Type: "Eq",
        Use: "Mixing",
        Description: "Elliptical EQ, acceleration limiter, groove sim.",
        Comments:
          "You can cut side-channel bass and tighten and control the extreme lows in the middle.",
      },
      {
        Name: "TPDF Dither",
        Type: "Dither",
        Use: "Mastering",
        Description: "Clean, correct dither Only does 24bit",
        Comments: "Place in the last slot of the 2buss. Forget about it.",
      },
      {
        Name: "Transdesk",
        Type: "Saturation",
        Use: "Mixing",
        Description: "More of a transistory, rock desk tone coloring",
        Comments:
          "This isn’t a plugin for making things soft and sweet, it’s for rocking out.",
      },
      {
        Name: "Tremolo",
        Type: "Modulation",
        Use: "Mixing",
        Description: "Fluctuating saturation curves for a tubey tremolo",
        Comments: "",
      },
      {
        Name: "TubeDesk",
        Type: "Saturation",
        Use: "Mixing",
        Description: "A tube recording console type tone coloring",
        Comments:
          "It acts like there’s a vintage tube rectifier, imparting an obvious rectifier sag.",
      },
      {
        Name: "uLaw",
        Type: "Mix Buss Replacement",
        Use: "Mixing",
        Description:
          "uLaw is a Console-like encode/decode pair, but much more extreme.",
        Comments: "",
      },
      {
        Name: "UnBox",
        Type: "Distortion",
        Use: "Mixing",
        Description:
          "Unbox is a distortion where only the harmonics that don’t alias are allowed to distort.",
        Comments: "",
      },
      {
        Name: "VariMu",
        Type: "Compressor",
        Use: "Mixing",
        Description: "A more organic variation on Pressure",
        Comments: "",
      },
      {
        Name: "Vibrato",
        Type: "Modulation",
        Use: "Mixing",
        Description:
          "Vibrato lets you vibrato, chorus, flange, and make odd FM noises.",
        Comments: "",
      },
      {
        Name: "VinylDither",
        Type: "Dither",
        Use: "Mastering",
        Description: "Dither which adds retro vinyl feel",
        Comments: "",
      },
      {
        Name: "VoiceOfTheStarship",
        Type: "Noise Generator",
        Use: "Mixing",
        Description: "Deep noise tone source",
        Comments:
          "It lets you go from regular noise to deep dark noise to purely subsonic rumble. ",
      },
      {
        Name: "VoiceTrick",
        Type: "Special",
        Use: "Recording",
        Description:
          "VoiceTrick lets you record vocals while monitoring over speakers.",
        Comments: "",
      },
      {
        Name: "Wider",
        Type: "Width",
        Use: "Mixing",
        Description: "Stereo width controller",
        Comments: "",
      },
    ];

    /* src/Header.svelte generated by Svelte v3.23.0 */
    const file = "src/Header.svelte";

    function create_fragment(ctx) {
    	let section;
    	let div1;
    	let div0;
    	let h1;
    	let t1;
    	let h2;
    	let cite;
    	let t3;
    	let p;
    	let t4;
    	let a0;
    	let t6;
    	let br0;
    	let t7;
    	let a1;
    	let t9;
    	let br1;

    	const block = {
    		c: function create() {
    			section = element("section");
    			div1 = element("div");
    			div0 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Airwindows Cheatsheet";
    			t1 = space();
    			h2 = element("h2");
    			cite = element("cite");
    			cite.textContent = "\"In a mix, no-one can hear your screen.\"";
    			t3 = space();
    			p = element("p");
    			t4 = text("This site is ment to be a quick reference for a constantly growing list\n        of the\n        ");
    			a0 = element("a");
    			a0.textContent = "AirWindows Plugins.";
    			t6 = space();
    			br0 = element("br");
    			t7 = text("\n        Info originally collected by Tiki Horea with help of the\n        ");
    			a1 = element("a");
    			a1.textContent = "Airwindows Audiophiles Facebook Group.";
    			t9 = space();
    			br1 = element("br");
    			attr_dev(h1, "class", "title");
    			add_location(h1, file, 13, 6, 209);
    			add_location(cite, file, 15, 8, 290);
    			attr_dev(h2, "class", "subtitle");
    			add_location(h2, file, 14, 6, 260);
    			attr_dev(a0, "href", "https://www.airwindows.com");
    			attr_dev(a0, "class", "svelte-1fjy292");
    			add_location(a0, file, 20, 8, 469);
    			add_location(br0, file, 21, 8, 538);
    			attr_dev(a1, "href", "https://www.facebook.com/groups/111040482827627/");
    			attr_dev(a1, "class", "svelte-1fjy292");
    			add_location(a1, file, 23, 8, 618);
    			add_location(p, file, 17, 6, 362);
    			add_location(br1, file, 27, 6, 757);
    			attr_dev(div0, "class", "container");
    			add_location(div0, file, 12, 4, 179);
    			attr_dev(div1, "class", "hero-body has-text-centered");
    			add_location(div1, file, 11, 2, 133);
    			attr_dev(section, "class", "hero is-light");
    			add_location(section, file, 10, 0, 99);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section, anchor);
    			append_dev(section, div1);
    			append_dev(div1, div0);
    			append_dev(div0, h1);
    			append_dev(div0, t1);
    			append_dev(div0, h2);
    			append_dev(h2, cite);
    			append_dev(div0, t3);
    			append_dev(div0, p);
    			append_dev(p, t4);
    			append_dev(p, a0);
    			append_dev(p, t6);
    			append_dev(p, br0);
    			append_dev(p, t7);
    			append_dev(p, a1);
    			append_dev(div0, t9);
    			append_dev(div0, br1);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Header> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Header", $$slots, []);
    	$$self.$capture_state = () => ({ db });
    	return [];
    }

    class Header extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Header",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    /* src/Nav.svelte generated by Svelte v3.23.0 */

    const file$1 = "src/Nav.svelte";

    function create_fragment$1(ctx) {
    	let nav;
    	let div0;
    	let a0;
    	let span0;
    	let i0;
    	let t0;
    	let span1;
    	let t1;
    	let span2;
    	let t3;
    	let a1;
    	let span3;
    	let t4;
    	let span4;
    	let t5;
    	let span5;
    	let t6;
    	let div2;
    	let div1;
    	let a2;
    	let t8;
    	let a3;
    	let t10;
    	let a4;
    	let span6;
    	let i1;
    	let t11;
    	let span7;
    	let t12;
    	let span8;

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			div0 = element("div");
    			a0 = element("a");
    			span0 = element("span");
    			i0 = element("i");
    			t0 = space();
    			span1 = element("span");
    			t1 = space();
    			span2 = element("span");
    			span2.textContent = "Home";
    			t3 = space();
    			a1 = element("a");
    			span3 = element("span");
    			t4 = space();
    			span4 = element("span");
    			t5 = space();
    			span5 = element("span");
    			t6 = space();
    			div2 = element("div");
    			div1 = element("div");
    			a2 = element("a");
    			a2.textContent = "Airwindows";
    			t8 = space();
    			a3 = element("a");
    			a3.textContent = "Suggest Update";
    			t10 = space();
    			a4 = element("a");
    			span6 = element("span");
    			i1 = element("i");
    			t11 = space();
    			span7 = element("span");
    			t12 = space();
    			span8 = element("span");
    			span8.textContent = "Contribute!";
    			attr_dev(i0, "class", "fas fa-headphones");
    			attr_dev(i0, "aria-hidden", "true");
    			add_location(i0, file$1, 40, 8, 1163);
    			attr_dev(span0, "class", "icon has-text-primary is-size-3 ");
    			add_location(span0, file$1, 39, 6, 1107);
    			attr_dev(span1, "class", "separator svelte-uctykv");
    			add_location(span1, file$1, 42, 6, 1234);
    			add_location(span2, file$1, 43, 6, 1267);
    			attr_dev(a0, "class", "navbar-item has-text-primary");
    			attr_dev(a0, "href", "/");
    			add_location(a0, file$1, 38, 4, 1051);
    			attr_dev(span3, "aria-hidden", "true");
    			add_location(span3, file$1, 52, 6, 1455);
    			attr_dev(span4, "aria-hidden", "true");
    			add_location(span4, file$1, 53, 6, 1489);
    			attr_dev(span5, "aria-hidden", "true");
    			add_location(span5, file$1, 54, 6, 1523);
    			attr_dev(a1, "role", "button");
    			attr_dev(a1, "class", "navbar-burger burger");
    			attr_dev(a1, "aria-label", "menu");
    			attr_dev(a1, "aria-expanded", "false");
    			attr_dev(a1, "data-target", "navbarBasicExample");
    			add_location(a1, file$1, 46, 4, 1299);
    			attr_dev(div0, "class", "navbar-brand");
    			add_location(div0, file$1, 37, 2, 1020);
    			attr_dev(a2, "href", "https://airwindows.com");
    			attr_dev(a2, "target", "blanl");
    			attr_dev(a2, "class", "navbar-item");
    			add_location(a2, file$1, 60, 6, 1659);
    			attr_dev(a3, "href", "https://github.com/ajboni/airwindows-cheatsheet/issues");
    			attr_dev(a3, "target", "blank");
    			attr_dev(a3, "class", "navbar-item");
    			add_location(a3, file$1, 63, 6, 1764);
    			attr_dev(i1, "class", "fab fa-github");
    			attr_dev(i1, "aria-hidden", "true");
    			add_location(i1, file$1, 74, 10, 2113);
    			attr_dev(span6, "class", "icon is-size-5");
    			add_location(span6, file$1, 73, 8, 2073);
    			attr_dev(span7, "class", "separator-small svelte-uctykv");
    			add_location(span7, file$1, 76, 8, 2184);
    			add_location(span8, file$1, 77, 8, 2225);
    			attr_dev(a4, "href", "https://github.com/ajboni/airwindows-cheatsheet#how-to-contribute");
    			attr_dev(a4, "target", "blank");
    			attr_dev(a4, "class", "navbar-item");
    			add_location(a4, file$1, 69, 6, 1929);
    			attr_dev(div1, "class", "navbar-start");
    			add_location(div1, file$1, 59, 4, 1626);
    			attr_dev(div2, "id", "navbarBasicExample");
    			attr_dev(div2, "class", "navbar-menu");
    			add_location(div2, file$1, 58, 2, 1572);
    			attr_dev(nav, "class", "navbar is-dark");
    			attr_dev(nav, "role", "navigation");
    			attr_dev(nav, "aria-label", "main navigation");
    			add_location(nav, file$1, 36, 0, 942);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, div0);
    			append_dev(div0, a0);
    			append_dev(a0, span0);
    			append_dev(span0, i0);
    			append_dev(a0, t0);
    			append_dev(a0, span1);
    			append_dev(a0, t1);
    			append_dev(a0, span2);
    			append_dev(div0, t3);
    			append_dev(div0, a1);
    			append_dev(a1, span3);
    			append_dev(a1, t4);
    			append_dev(a1, span4);
    			append_dev(a1, t5);
    			append_dev(a1, span5);
    			append_dev(nav, t6);
    			append_dev(nav, div2);
    			append_dev(div2, div1);
    			append_dev(div1, a2);
    			append_dev(div1, t8);
    			append_dev(div1, a3);
    			append_dev(div1, t10);
    			append_dev(div1, a4);
    			append_dev(a4, span6);
    			append_dev(span6, i1);
    			append_dev(a4, t11);
    			append_dev(a4, span7);
    			append_dev(a4, t12);
    			append_dev(a4, span8);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	document.addEventListener("DOMContentLoaded", () => {
    		// Get all "navbar-burger" elements
    		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    		// Check if there are any navbar burgers
    		if ($navbarBurgers.length > 0) {
    			// Add a click event on each of them
    			$navbarBurgers.forEach(el => {
    				el.addEventListener("click", () => {
    					// Get the target from the "data-target" attribute
    					const target = el.dataset.target;

    					const $target = document.getElementById(target);

    					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    					el.classList.toggle("is-active");

    					$target.classList.toggle("is-active");
    				});
    			});
    		}
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Nav> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Nav", $$slots, []);
    	return [];
    }

    class Nav extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Nav",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    var config = {
      AIRWINDOWS_SITE: "https:/www.airwindows.com/",
      AIRWINDOWS_YOUTUBE_QUERY:
        "https://www.youtube.com/user/airwindows/search?query=",
    };

    /* src/TableItem.svelte generated by Svelte v3.23.0 */
    const file$2 = "src/TableItem.svelte";

    // (47:4) {#if plugin.Comments}
    function create_if_block(ctx) {
    	let div;
    	let span;
    	let i;
    	let t0;
    	let t1_value = /*plugin*/ ctx[0].Comments + "";
    	let t1;

    	const block = {
    		c: function create() {
    			div = element("div");
    			span = element("span");
    			i = element("i");
    			t0 = space();
    			t1 = text(t1_value);
    			attr_dev(i, "class", "fas fa-comments");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$2, 49, 10, 1144);
    			attr_dev(span, "class", "icon has-text-primary is-size-6  svelte-1x7ydk1");
    			add_location(span, file$2, 48, 8, 1086);
    			attr_dev(div, "class", "comments svelte-1x7ydk1");
    			add_location(div, file$2, 47, 6, 1055);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, span);
    			append_dev(span, i);
    			append_dev(div, t0);
    			append_dev(div, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*plugin*/ 1 && t1_value !== (t1_value = /*plugin*/ ctx[0].Comments + "")) set_data_dev(t1, t1_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(47:4) {#if plugin.Comments}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div4;
    	let a;
    	let header;
    	let p;
    	let t0_value = /*plugin*/ ctx[0].Name + "";
    	let t0;
    	let t1;
    	let div1;
    	let div0;
    	let span0;
    	let t2_value = /*plugin*/ ctx[0].Use + "";
    	let t2;
    	let t3;
    	let span1;
    	let t4_value = /*plugin*/ ctx[0].Type + "";
    	let t4;
    	let t5;
    	let div3;
    	let div2;
    	let t6_value = /*plugin*/ ctx[0].Description + "";
    	let t6;
    	let t7;
    	let if_block = /*plugin*/ ctx[0].Comments && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			div4 = element("div");
    			a = element("a");
    			header = element("header");
    			p = element("p");
    			t0 = text(t0_value);
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			span0 = element("span");
    			t2 = text(t2_value);
    			t3 = space();
    			span1 = element("span");
    			t4 = text(t4_value);
    			t5 = space();
    			div3 = element("div");
    			div2 = element("div");
    			t6 = text(t6_value);
    			t7 = space();
    			if (if_block) if_block.c();
    			attr_dev(p, "class", "card-header-title");
    			add_location(p, file$2, 33, 6, 660);
    			attr_dev(span0, "class", "tag ");
    			add_location(span0, file$2, 37, 10, 793);
    			attr_dev(span1, "class", "tag is-primary");
    			add_location(span1, file$2, 38, 10, 842);
    			attr_dev(div0, "class", "tags has-addons");
    			add_location(div0, file$2, 36, 8, 753);
    			attr_dev(div1, "class", "card-header-icon");
    			add_location(div1, file$2, 35, 6, 714);
    			attr_dev(header, "class", "card-header has-background-white-bis svelte-1x7ydk1");
    			add_location(header, file$2, 32, 4, 600);
    			attr_dev(a, "href", /*airwindowsSiteLink*/ ctx[1]);
    			attr_dev(a, "target", "blank");
    			add_location(a, file$2, 31, 2, 551);
    			attr_dev(div2, "class", "content");
    			add_location(div2, file$2, 45, 4, 975);
    			attr_dev(div3, "class", "card-content");
    			add_location(div3, file$2, 44, 2, 944);
    			attr_dev(div4, "class", "card");
    			add_location(div4, file$2, 30, 0, 530);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div4, anchor);
    			append_dev(div4, a);
    			append_dev(a, header);
    			append_dev(header, p);
    			append_dev(p, t0);
    			append_dev(header, t1);
    			append_dev(header, div1);
    			append_dev(div1, div0);
    			append_dev(div0, span0);
    			append_dev(span0, t2);
    			append_dev(div0, t3);
    			append_dev(div0, span1);
    			append_dev(span1, t4);
    			append_dev(div4, t5);
    			append_dev(div4, div3);
    			append_dev(div3, div2);
    			append_dev(div2, t6);
    			append_dev(div3, t7);
    			if (if_block) if_block.m(div3, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*plugin*/ 1 && t0_value !== (t0_value = /*plugin*/ ctx[0].Name + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*plugin*/ 1 && t2_value !== (t2_value = /*plugin*/ ctx[0].Use + "")) set_data_dev(t2, t2_value);
    			if (dirty & /*plugin*/ 1 && t4_value !== (t4_value = /*plugin*/ ctx[0].Type + "")) set_data_dev(t4, t4_value);
    			if (dirty & /*plugin*/ 1 && t6_value !== (t6_value = /*plugin*/ ctx[0].Description + "")) set_data_dev(t6, t6_value);

    			if (/*plugin*/ ctx[0].Comments) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					if_block.m(div3, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div4);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { plugin } = $$props;
    	let airwindowsSiteLink = config.AIRWINDOWS_SITE + plugin.Name.toLowerCase();
    	let youtubeLink = config.AIRWINDOWS_YOUTUBE_QUERY + plugin.Name.toLowerCase();
    	const writable_props = ["plugin"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TableItem> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("TableItem", $$slots, []);

    	$$self.$set = $$props => {
    		if ("plugin" in $$props) $$invalidate(0, plugin = $$props.plugin);
    	};

    	$$self.$capture_state = () => ({
    		config,
    		plugin,
    		airwindowsSiteLink,
    		youtubeLink
    	});

    	$$self.$inject_state = $$props => {
    		if ("plugin" in $$props) $$invalidate(0, plugin = $$props.plugin);
    		if ("airwindowsSiteLink" in $$props) $$invalidate(1, airwindowsSiteLink = $$props.airwindowsSiteLink);
    		if ("youtubeLink" in $$props) youtubeLink = $$props.youtubeLink;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [plugin, airwindowsSiteLink];
    }

    class TableItem extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { plugin: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TableItem",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*plugin*/ ctx[0] === undefined && !("plugin" in props)) {
    			console.warn("<TableItem> was created without expected prop 'plugin'");
    		}
    	}

    	get plugin() {
    		throw new Error("<TableItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set plugin(value) {
    		throw new Error("<TableItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    function cubicOut(t) {
        const f = t - 1.0;
        return f * f * f + 1.0;
    }

    function fade(node, { delay = 0, duration = 400, easing = identity }) {
        const o = +getComputedStyle(node).opacity;
        return {
            delay,
            duration,
            easing,
            css: t => `opacity: ${t * o}`
        };
    }
    function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 }) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;
        const od = target_opacity * (1 - opacity);
        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
        };
    }

    /* src/Table.svelte generated by Svelte v3.23.0 */

    const { console: console_1 } = globals;
    const file$3 = "src/Table.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[23] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[26] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[26] = list[i];
    	return child_ctx;
    }

    // (192:12) {#each uniqueUse as item}
    function create_each_block_2(ctx) {
    	let option;
    	let t_value = /*item*/ ctx[26] + "";
    	let t;
    	let option_value_value;

    	const block = {
    		c: function create() {
    			option = element("option");
    			t = text(t_value);
    			option.__value = option_value_value = /*item*/ ctx[26];
    			option.value = option.__value;
    			add_location(option, file$3, 192, 14, 5078);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, option, anchor);
    			append_dev(option, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(option);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(192:12) {#each uniqueUse as item}",
    		ctx
    	});

    	return block;
    }

    // (204:12) {#each uniqueTypes as item}
    function create_each_block_1(ctx) {
    	let option;
    	let t_value = /*item*/ ctx[26].substring(0, 16) + "";
    	let t;
    	let option_value_value;

    	const block = {
    		c: function create() {
    			option = element("option");
    			t = text(t_value);
    			option.__value = option_value_value = /*item*/ ctx[26];
    			option.value = option.__value;
    			add_location(option, file$3, 204, 14, 5432);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, option, anchor);
    			append_dev(option, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*uniqueTypes*/ 1 && t_value !== (t_value = /*item*/ ctx[26].substring(0, 16) + "")) set_data_dev(t, t_value);

    			if (dirty & /*uniqueTypes*/ 1 && option_value_value !== (option_value_value = /*item*/ ctx[26])) {
    				prop_dev(option, "__value", option_value_value);
    			}

    			option.value = option.__value;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(option);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(204:12) {#each uniqueTypes as item}",
    		ctx
    	});

    	return block;
    }

    // (238:2) {:else}
    function create_else_block(ctx) {
    	let div1;
    	let div0;
    	let h1;
    	let div1_intro;
    	let div1_outro;
    	let current;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			h1 = element("h1");
    			h1.textContent = "No results for the given search. 😞";
    			add_location(h1, file$3, 243, 8, 6459);
    			attr_dev(div0, "class", "notification has-text-centered");
    			add_location(div0, file$3, 242, 6, 6406);
    			attr_dev(div1, "class", "container is-widescreen ");
    			add_location(div1, file$3, 238, 4, 6286);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    			append_dev(div0, h1);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;

    			add_render_callback(() => {
    				if (div1_outro) div1_outro.end(1);
    				if (!div1_intro) div1_intro = create_in_transition(div1, fade, { duration: 200 });
    				div1_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			if (div1_intro) div1_intro.invalidate();
    			div1_outro = create_out_transition(div1, fade, { duration: 200 });
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			if (detaching && div1_outro) div1_outro.end();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(238:2) {:else}",
    		ctx
    	});

    	return block;
    }

    // (215:2) {#if filteredDb.length > 0}
    function create_if_block$1(ctx) {
    	let div2;
    	let nav;
    	let div1;
    	let div0;
    	let p0;
    	let t1;
    	let p1;
    	let span0;
    	let i;
    	let t2;
    	let span1;
    	let t3_value = /*filteredDb*/ ctx[7].length + "";
    	let t3;
    	let t4;
    	let div2_intro;
    	let current;
    	let each_value = /*filteredDb*/ ctx[7];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			nav = element("nav");
    			div1 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "Plugins Found";
    			t1 = space();
    			p1 = element("p");
    			span0 = element("span");
    			i = element("i");
    			t2 = space();
    			span1 = element("span");
    			t3 = text(t3_value);
    			t4 = space();

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(p0, "class", "heading");
    			add_location(p0, file$3, 220, 12, 5821);
    			attr_dev(i, "class", "fas fa-headphones");
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$3, 223, 16, 5948);
    			attr_dev(span0, "class", "icon is-size-4");
    			add_location(span0, file$3, 222, 14, 5902);
    			add_location(span1, file$3, 225, 14, 6035);
    			attr_dev(p1, "class", "title");
    			add_location(p1, file$3, 221, 12, 5870);
    			add_location(div0, file$3, 219, 10, 5803);
    			attr_dev(div1, "class", "level-item has-text-centered");
    			add_location(div1, file$3, 218, 8, 5750);
    			attr_dev(nav, "class", "level");
    			add_location(nav, file$3, 217, 6, 5722);
    			attr_dev(div2, "class", "container");
    			add_location(div2, file$3, 215, 4, 5651);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, nav);
    			append_dev(nav, div1);
    			append_dev(div1, div0);
    			append_dev(div0, p0);
    			append_dev(div0, t1);
    			append_dev(div0, p1);
    			append_dev(p1, span0);
    			append_dev(span0, i);
    			append_dev(p1, t2);
    			append_dev(p1, span1);
    			append_dev(span1, t3);
    			append_dev(div2, t4);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div2, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*filteredDb*/ 128) && t3_value !== (t3_value = /*filteredDb*/ ctx[7].length + "")) set_data_dev(t3, t3_value);

    			if (dirty & /*filteredDb*/ 128) {
    				each_value = /*filteredDb*/ ctx[7];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div2, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			if (!div2_intro) {
    				add_render_callback(() => {
    					div2_intro = create_in_transition(div2, fade, { delay: 100, duration: 500 });
    					div2_intro.start();
    				});
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(215:2) {#if filteredDb.length > 0}",
    		ctx
    	});

    	return block;
    }

    // (232:6) {#each filteredDb as plugin}
    function create_each_block(ctx) {
    	let div;
    	let t;
    	let current;

    	const tableitem = new TableItem({
    			props: { plugin: /*plugin*/ ctx[23] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(tableitem.$$.fragment);
    			t = space();
    			attr_dev(div, "class", "table-item svelte-awwsmt");
    			add_location(div, file$3, 232, 8, 6174);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(tableitem, div, null);
    			append_dev(div, t);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const tableitem_changes = {};
    			if (dirty & /*filteredDb*/ 128) tableitem_changes.plugin = /*plugin*/ ctx[23];
    			tableitem.$set(tableitem_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(tableitem.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(tableitem.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(tableitem);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(232:6) {#each filteredDb as plugin}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let section0;
    	let div2;
    	let div0;
    	let p0;
    	let span0;
    	let select0;
    	let option0;
    	let option1;
    	let option2;
    	let t3;
    	let p1;
    	let input;
    	let t4;
    	let span1;
    	let i;
    	let p1_class_value;
    	let t5;
    	let div1;
    	let p2;
    	let span2;
    	let select1;
    	let option3;
    	let option4;
    	let option5;
    	let t9;
    	let p3;
    	let span3;
    	let select2;
    	let option6;
    	let t11;
    	let p4;
    	let span4;
    	let select3;
    	let option7;
    	let t13;
    	let section1;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	let mounted;
    	let dispose;
    	let each_value_2 = /*uniqueUse*/ ctx[8];
    	validate_each_argument(each_value_2);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	let each_value_1 = /*uniqueTypes*/ ctx[0];
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const if_block_creators = [create_if_block$1, create_else_block];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*filteredDb*/ ctx[7].length > 0) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			section0 = element("section");
    			div2 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			span0 = element("span");
    			select0 = element("select");
    			option0 = element("option");
    			option0.textContent = "Name";
    			option1 = element("option");
    			option1.textContent = "Description";
    			option2 = element("option");
    			option2.textContent = "Name/Desc";
    			t3 = space();
    			p1 = element("p");
    			input = element("input");
    			t4 = space();
    			span1 = element("span");
    			i = element("i");
    			t5 = space();
    			div1 = element("div");
    			p2 = element("p");
    			span2 = element("span");
    			select1 = element("select");
    			option3 = element("option");
    			option3.textContent = "Sort by Name";
    			option4 = element("option");
    			option4.textContent = "Sort by Type";
    			option5 = element("option");
    			option5.textContent = "Sort by Use";
    			t9 = space();
    			p3 = element("p");
    			span3 = element("span");
    			select2 = element("select");
    			option6 = element("option");
    			option6.textContent = "All Uses";

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t11 = space();
    			p4 = element("p");
    			span4 = element("span");
    			select3 = element("select");
    			option7 = element("option");
    			option7.textContent = "All Types";

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t13 = space();
    			section1 = element("section");
    			if_block.c();
    			option0.__value = "name";
    			option0.value = option0.__value;
    			add_location(option0, file$3, 147, 12, 3722);
    			option1.__value = "desc";
    			option1.value = option1.__value;
    			add_location(option1, file$3, 148, 12, 3769);
    			option2.__value = "all";
    			option2.value = option2.__value;
    			add_location(option2, file$3, 149, 12, 3823);
    			if (/*searchField*/ ctx[3] === void 0) add_render_callback(() => /*select0_change_handler*/ ctx[13].call(select0));
    			add_location(select0, file$3, 146, 10, 3644);
    			attr_dev(span0, "class", "select is-small");
    			add_location(span0, file$3, 145, 8, 3603);
    			attr_dev(p0, "class", "control");
    			add_location(p0, file$3, 144, 6, 3575);
    			attr_dev(input, "class", "input is-small is-expanded");
    			attr_dev(input, "type", "search");
    			attr_dev(input, "placeholder", "Search");
    			add_location(input, file$3, 156, 8, 4017);
    			attr_dev(i, "class", "fas fa-search");
    			add_location(i, file$3, 163, 10, 4260);
    			attr_dev(span1, "class", "icon is-small is-left");
    			add_location(span1, file$3, 162, 8, 4213);
    			attr_dev(p1, "class", p1_class_value = "" + (null_to_empty("control filter  has-icons-left has-icons-right " + /*isLoadingSearchClass*/ ctx[2]) + " svelte-awwsmt"));
    			add_location(p1, file$3, 154, 6, 3916);
    			attr_dev(div0, "class", "field has-addons has-addons-centered");
    			add_location(div0, file$3, 143, 4, 3518);
    			option3.__value = "name";
    			option3.value = option3.__value;
    			add_location(option3, file$3, 174, 12, 4545);
    			option4.__value = "type";
    			option4.value = option4.__value;
    			add_location(option4, file$3, 175, 12, 4600);
    			option5.__value = "use";
    			option5.value = option5.__value;
    			add_location(option5, file$3, 176, 12, 4655);
    			if (/*sortBy*/ ctx[4] === void 0) add_render_callback(() => /*select1_change_handler*/ ctx[17].call(select1));
    			add_location(select1, file$3, 173, 10, 4469);
    			attr_dev(span2, "class", "select is-small");
    			add_location(span2, file$3, 172, 8, 4428);
    			attr_dev(p2, "class", "control");
    			add_location(p2, file$3, 171, 6, 4400);
    			option6.__value = "all";
    			option6.value = option6.__value;
    			add_location(option6, file$3, 190, 12, 4988);
    			if (/*useFilter*/ ctx[5] === void 0) add_render_callback(() => /*select2_change_handler*/ ctx[19].call(select2));
    			add_location(select2, file$3, 184, 10, 4820);
    			attr_dev(span3, "class", "select is-small");
    			add_location(span3, file$3, 183, 8, 4779);
    			attr_dev(p3, "class", "control");
    			add_location(p3, file$3, 182, 6, 4751);
    			option7.__value = "all";
    			option7.value = option7.__value;
    			add_location(option7, file$3, 202, 12, 5339);
    			if (/*typeFilter*/ ctx[6] === void 0) add_render_callback(() => /*select3_change_handler*/ ctx[21].call(select3));
    			add_location(select3, file$3, 200, 10, 5258);
    			attr_dev(span4, "class", "select is-small");
    			add_location(span4, file$3, 199, 8, 5217);
    			attr_dev(p4, "class", "control");
    			add_location(p4, file$3, 198, 6, 5189);
    			attr_dev(div1, "class", "field has-addons has-addons-centered mb-075rem svelte-awwsmt");
    			add_location(div1, file$3, 169, 4, 4332);
    			attr_dev(div2, "class", "field is-grouped is-grouped-multiline is-grouped-centered svelte-awwsmt");
    			add_location(div2, file$3, 142, 2, 3442);
    			attr_dev(section0, "class", "section-small has-background-primary has-text-white svelte-awwsmt");
    			add_location(section0, file$3, 141, 0, 3370);
    			attr_dev(section1, "class", "section-small svelte-awwsmt");
    			add_location(section1, file$3, 213, 0, 5585);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, section0, anchor);
    			append_dev(section0, div2);
    			append_dev(div2, div0);
    			append_dev(div0, p0);
    			append_dev(p0, span0);
    			append_dev(span0, select0);
    			append_dev(select0, option0);
    			append_dev(select0, option1);
    			append_dev(select0, option2);
    			select_option(select0, /*searchField*/ ctx[3]);
    			append_dev(div0, t3);
    			append_dev(div0, p1);
    			append_dev(p1, input);
    			set_input_value(input, /*searchString*/ ctx[1]);
    			append_dev(p1, t4);
    			append_dev(p1, span1);
    			append_dev(span1, i);
    			append_dev(div2, t5);
    			append_dev(div2, div1);
    			append_dev(div1, p2);
    			append_dev(p2, span2);
    			append_dev(span2, select1);
    			append_dev(select1, option3);
    			append_dev(select1, option4);
    			append_dev(select1, option5);
    			select_option(select1, /*sortBy*/ ctx[4]);
    			append_dev(div1, t9);
    			append_dev(div1, p3);
    			append_dev(p3, span3);
    			append_dev(span3, select2);
    			append_dev(select2, option6);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(select2, null);
    			}

    			select_option(select2, /*useFilter*/ ctx[5]);
    			append_dev(div1, t11);
    			append_dev(div1, p4);
    			append_dev(p4, span4);
    			append_dev(span4, select3);
    			append_dev(select3, option7);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(select3, null);
    			}

    			select_option(select3, /*typeFilter*/ ctx[6]);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, section1, anchor);
    			if_blocks[current_block_type_index].m(section1, null);
    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(select0, "change", /*select0_change_handler*/ ctx[13]),
    					listen_dev(select0, "input", /*input_handler*/ ctx[14], false, false, false),
    					listen_dev(input, "input", /*input_input_handler*/ ctx[15]),
    					listen_dev(input, "input", /*input_handler_1*/ ctx[16], false, false, false),
    					listen_dev(select1, "change", /*select1_change_handler*/ ctx[17]),
    					listen_dev(select1, "change", /*change_handler*/ ctx[18], false, false, false),
    					listen_dev(select2, "change", /*select2_change_handler*/ ctx[19]),
    					listen_dev(select2, "change", /*change_handler_1*/ ctx[20], false, false, false),
    					listen_dev(select3, "change", /*select3_change_handler*/ ctx[21]),
    					listen_dev(select3, "change", /*change_handler_2*/ ctx[22], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*searchField*/ 8) {
    				select_option(select0, /*searchField*/ ctx[3]);
    			}

    			if (dirty & /*searchString*/ 2) {
    				set_input_value(input, /*searchString*/ ctx[1]);
    			}

    			if (!current || dirty & /*isLoadingSearchClass*/ 4 && p1_class_value !== (p1_class_value = "" + (null_to_empty("control filter  has-icons-left has-icons-right " + /*isLoadingSearchClass*/ ctx[2]) + " svelte-awwsmt"))) {
    				attr_dev(p1, "class", p1_class_value);
    			}

    			if (dirty & /*sortBy*/ 16) {
    				select_option(select1, /*sortBy*/ ctx[4]);
    			}

    			if (dirty & /*uniqueUse*/ 256) {
    				each_value_2 = /*uniqueUse*/ ctx[8];
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_2(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(select2, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_2.length;
    			}

    			if (dirty & /*useFilter, uniqueUse*/ 288) {
    				select_option(select2, /*useFilter*/ ctx[5]);
    			}

    			if (dirty & /*uniqueTypes*/ 1) {
    				each_value_1 = /*uniqueTypes*/ ctx[0];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(select3, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}

    			if (dirty & /*typeFilter, uniqueTypes*/ 65) {
    				select_option(select3, /*typeFilter*/ ctx[6]);
    			}

    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(section1, null);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(section0);
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(section1);
    			if_blocks[current_block_type_index].d();
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function deepSort(array, sortBy) {
    	switch (sortBy) {
    		case "type":
    			array = array.sort((x, y) => {
    				if (x.Type > y.Type) {
    					return 1;
    				}

    				if (x.Type < y.Type) {
    					return -1;
    				}

    				if (x.Name > y.Name) {
    					return 1;
    				}

    				if (x.Name < y.Name) {
    					return -1;
    				}
    			});
    			break;
    		case "use":
    			array = array.sort((x, y) => {
    				if (x.Use > y.Use) {
    					return 1;
    				}

    				if (x.Use < y.Use) {
    					return -1;
    				}

    				if (x.Name > y.Name) {
    					return 1;
    				}

    				if (x.Name < y.Name) {
    					return -1;
    				}
    			});
    			break;
    		default:
    			console.log("local");
    			array = array.sort((x, y) => x.Name > y.Name);
    			break;
    	}

    	return array;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	const uniqueUse = [...new Set(db.map(item => item.Use))].sort();
    	let uniqueTypes = [...new Set(db.map(item => item.Type))].sort();
    	let searchString = "";
    	let searchDelayTimer;
    	let searchDelayTime = 350;
    	let isLoadingSearchClass = "";
    	let searchField;
    	let sortBy = "Name";
    	let useFilter = "all";
    	let typeFilter = "all";

    	function filterDatabase() {
    		let tempDb = db;

    		// Filter by use
    		if (useFilter !== "all") {
    			tempDb = tempDb.filter(plugin => plugin.Use === useFilter);
    			$$invalidate(0, uniqueTypes = [...new Set(tempDb.map(item => item.Type))].sort());
    		} else {
    			$$invalidate(0, uniqueTypes = [...new Set(db.map(item => item.Type))].sort());
    		}

    		// Filter by Type
    		if (typeFilter !== "all") {
    			tempDb = tempDb.filter(plugin => plugin.Type === typeFilter);
    		}

    		// Search query
    		if (searchString === "" || searchString === " ") {
    			$$invalidate(7, filteredDb = tempDb);
    		} else {
    			switch (searchField) {
    				case "name":
    					tempDb = tempDb.filter(plugin => plugin.Name.toLowerCase().includes(searchString.toLowerCase()));
    					break;
    				case "desc":
    					tempDb = tempDb.filter(plugin => plugin.Description.toLowerCase().includes(searchString.toLowerCase()));
    					break;
    				default:
    					tempDb = tempDb.filter(plugin => plugin.Name.toLowerCase().includes(searchString.toLowerCase()) || plugin.Description.toLowerCase().includes(searchString.toLowerCase()));
    					break;
    			}
    		}

    		// Sort
    		tempDb = deepSort(tempDb, sortBy);

    		$$invalidate(7, filteredDb = tempDb);
    		console.log(filteredDb);
    	}

    	// Delay search until certain time after the user stopped writing.
    	function handleSearch() {
    		$$invalidate(2, isLoadingSearchClass = "is-loading");
    		clearTimeout(searchDelayTimer);

    		searchDelayTimer = setTimeout(
    			function () {
    				filterDatabase();
    				$$invalidate(2, isLoadingSearchClass = "");
    			},
    			searchDelayTime
    		);
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Table> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("Table", $$slots, []);

    	function select0_change_handler() {
    		searchField = select_value(this);
    		$$invalidate(3, searchField);
    	}

    	const input_handler = () => handleSearch();

    	function input_input_handler() {
    		searchString = this.value;
    		$$invalidate(1, searchString);
    	}

    	const input_handler_1 = () => handleSearch();

    	function select1_change_handler() {
    		sortBy = select_value(this);
    		$$invalidate(4, sortBy);
    	}

    	const change_handler = () => filterDatabase();

    	function select2_change_handler() {
    		useFilter = select_value(this);
    		$$invalidate(5, useFilter);
    		$$invalidate(8, uniqueUse);
    	}

    	const change_handler_1 = () => {
    		$$invalidate(6, typeFilter = "all");
    		filterDatabase();
    	};

    	function select3_change_handler() {
    		typeFilter = select_value(this);
    		$$invalidate(6, typeFilter);
    		$$invalidate(0, uniqueTypes);
    	}

    	const change_handler_2 = () => filterDatabase();

    	$$self.$capture_state = () => ({
    		TableItem,
    		db,
    		fade,
    		fly,
    		uniqueUse,
    		uniqueTypes,
    		searchString,
    		searchDelayTimer,
    		searchDelayTime,
    		isLoadingSearchClass,
    		searchField,
    		sortBy,
    		useFilter,
    		typeFilter,
    		filterDatabase,
    		deepSort,
    		handleSearch,
    		filteredDb
    	});

    	$$self.$inject_state = $$props => {
    		if ("uniqueTypes" in $$props) $$invalidate(0, uniqueTypes = $$props.uniqueTypes);
    		if ("searchString" in $$props) $$invalidate(1, searchString = $$props.searchString);
    		if ("searchDelayTimer" in $$props) searchDelayTimer = $$props.searchDelayTimer;
    		if ("searchDelayTime" in $$props) searchDelayTime = $$props.searchDelayTime;
    		if ("isLoadingSearchClass" in $$props) $$invalidate(2, isLoadingSearchClass = $$props.isLoadingSearchClass);
    		if ("searchField" in $$props) $$invalidate(3, searchField = $$props.searchField);
    		if ("sortBy" in $$props) $$invalidate(4, sortBy = $$props.sortBy);
    		if ("useFilter" in $$props) $$invalidate(5, useFilter = $$props.useFilter);
    		if ("typeFilter" in $$props) $$invalidate(6, typeFilter = $$props.typeFilter);
    		if ("filteredDb" in $$props) $$invalidate(7, filteredDb = $$props.filteredDb);
    	};

    	let filteredDb;

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	 $$invalidate(7, filteredDb = db);

    	return [
    		uniqueTypes,
    		searchString,
    		isLoadingSearchClass,
    		searchField,
    		sortBy,
    		useFilter,
    		typeFilter,
    		filteredDb,
    		uniqueUse,
    		filterDatabase,
    		handleSearch,
    		searchDelayTimer,
    		searchDelayTime,
    		select0_change_handler,
    		input_handler,
    		input_input_handler,
    		input_handler_1,
    		select1_change_handler,
    		change_handler,
    		select2_change_handler,
    		change_handler_1,
    		select3_change_handler,
    		change_handler_2
    	];
    }

    class Table extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Table",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/App.svelte generated by Svelte v3.23.0 */

    function create_fragment$4(ctx) {
    	let t0;
    	let t1;
    	let current;
    	const nav = new Nav({ $$inline: true });
    	const header = new Header({ $$inline: true });
    	const table = new Table({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(nav.$$.fragment);
    			t0 = space();
    			create_component(header.$$.fragment);
    			t1 = space();
    			create_component(table.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(nav, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(header, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(table, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(nav.$$.fragment, local);
    			transition_in(header.$$.fragment, local);
    			transition_in(table.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(nav.$$.fragment, local);
    			transition_out(header.$$.fragment, local);
    			transition_out(table.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(nav, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(header, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(table, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;
    	validate_slots("App", $$slots, []);
    	$$self.$capture_state = () => ({ Header, Nav, Table });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    const app = new App({
      target: document.body,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
