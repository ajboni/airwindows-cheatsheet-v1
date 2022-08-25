export default[
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "128_Jackhammer",
    Date: 1411776000000,
    Url: "https://www.airwindows.com/128_jackhammer/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "3DClip",
    Date: 1285545600000,
    Url: "https://www.airwindows.com/3dclip/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "64-bit-audio-units",
    Url: "https://www.airwindows.com/64-bit-audio-units/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is an acceleration limiter that tames edge, leaves brightness.\r\n\r\nAs requested, I’ve made a dedicated acceleration limiter, like the one in ToVinyl4. You don’t have to mess with Groove Wear, or highpass anything: as a result, this ends up being the ‘high end’ acceleration limiter, mastering grade and useful in situations where ToVinyl might be overkill (ToVinyl was made in an era where I still had to make ‘amazing marketable plugins with lots of features so people would pay $50 quickly before it got all pirated etc’)\r\n\r\nAh, I remember those days ;P\r\n\r\nBut now, it’s different because Acceleration is free! AU, Mac and PC VST (stay tuned for a surprise on that front) and if you can’t pay, go ahead and use it anyway. If you can, please do because I think the usefulness of me doing this work will become increasingly obvious, and the usefulness of me opensourcing plugin code has also become increasingly obvious. And it’s brought you Acceleration, here and now.\r\n\r\nThe reason to be excited about that is, Acceleration’s not a simple filter. It pretty much targets exactly the digital behavior that creates Gibb effect overshoots (the reason you often have to pad heavily limited material down to stop it being crackly and glare-y) and would probably work very well as literally an acceleration limiter for record cutting heads. But, in a largely digital world, it might be even more useful because you can feed it any old ITB mix, any weird edgy source material, and it’ll clean up the nasty digital brightness while not sounding like it’s doing anything. Check the video (it should be relatively obvious if you’ve got half decent tweeters) and try it out. The key is to not try and get the apparent volume of the highs to be less: instead, you’re going after the character, or the presentation. If highs seem to be coming forward with nasty spikey extra energy, Acceleration will fix that tonal problem without altering the basic mix balance.",
    Comments: "",
    Name: "Acceleration",
    Date: 1518307200000,
    Url: "https://www.airwindows.com/acceleration/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is Acceleration, better! Updated for high sample rate and more extreme effect.\r\n\r\nAcceleration2 is an updated version of my high-frequency limiter, Acceleration. It’s like a brightness control that doesn’t really take away apparent brightness, just glues it really hard. Acceleration limiting is what you’d use mastering to vinyl, to avoid burning out the cutting head: it will get you a nice retro tone without obviously coloring things. It is not an ’emulation’ of any specific gear: real mastering engineers are not looking for ’emulation of Neumann sound’ or anything like that, they’re looking to get the functionality of this in the most colorless way.\r\n\r\nIt’s been updated to work exactly the same at all sample rates (the previous one had issues adapting to them) and now has more intense depth of effect: if you crank it up you can make things real soft and dull. Don’t do that :) the purpose is not to do what you could do with an EQ, the purpose is to glue things and take the edge off the super-highs without harming the sparkle and air of the recording. Acceleration2 can do that real well: you might even find it useful if you’re doing very digital mixes and avoiding my other stuff like Console7. If you put this on the mix buss of an otherwise super-digital mix, you can make the highs prettier without making them any darker or duller. Do that by applying only small amounts of the Limit control.",
    Comments: "",
    Name: "Acceleration2",
    Date: 1609027200000,
    Url: "https://www.airwindows.com/acceleration2/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "AcousticBass",
    Date: 1177286400000,
    Url: "https://www.airwindows.com/acousticbass/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "ADClip",
    Date: 1285545600000,
    Url: "https://www.airwindows.com/adclip/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is the ultimate Airwindows loudness maximizer/ peak control.\r\n\r\nFinally! The newest version of Airwindows’ famous ADClip is out, and it’s Mac and PC VST for the first time, and it’s free! If you have dense, busy mixes and you want to push their loudness to the max, this is the one you want. And, oddly, if you’re mastering for streaming services or iTunes and don’t want to do a thing besides convey your mix at a set LUFS and intersample peak level, this is still the one you want :)\r\n\r\nHere’s how it works.\r\n\r\nYou’ve got a boost control, a soften control, an enhance control, and a popup or multi-function control with three options: normal, gain matched, and Clip Only. These are all interactive, so I’ll explain them in the context of that ‘mode selector’ popup.\r\n\r\nIn normal mode, boost makes things louder. This is a clipper, and no more polite method can ever make things louder than a clipper: you need to either give it a busy and complicated mix to mask the clip artifacts, or use it to snip off non-tonal percussive peaks, at which it excels. A clipper does NOT produce ‘limiter-like unvarying block of sound’, and you shouldn’t try to achieve that. A clipper gives you punchy but LOUD, and tries to retain all the dynamics you’re feeding it, rather than smooth them out for a ‘clean’ sound.\r\n\r\nThe soften control manages the way that high frequencies enter and exit the clips. It algorithmically reshapes the edges of your clip, stopping it from getting digital glare and fizz. This is the heart of ADClip (also present in my simpler clippers, not counting One Corner Clip, which is still upcoming).\r\n\r\nThe soften control also balances the outputs of two separate energy-fill algorithms, one for bass and one for highs. This was the response to a certain other loudness maximizer that launched proclaiming clippers were dead, and which is still promising its version 2 (and some bugfixes) while ADClip has gone far beyond it. Turned out the secret of that one was an elaborate way of massaging clipped-off loudness back into the signal, in a way that was supposed to be transparent but ‘cracked’ into artifacts when pushed too hard. The algorithms were presumably very sophisticated, which tends to just make the breaking point more obvious when you hit it.\r\n\r\nThe Airwindows version is a completely different, cruder and more direct version of doing the same thing, so when you slam the heck out of ADClip7, you get a deep bass slam that ‘overhangs’ a bit to add weight, and still fits into the clipped output. And you get the softened, analog-style clips to add ‘heat’ and overtones, but you also get a high-mids reinforcement that normally just highlights bright transients that would otherwise be lost to the clipping. And the Enhance control lets you go between purely ‘analog clip’ energy, and these added reinforcements.\r\n\r\nThe gain-matched mode has two uses. You could use it to ‘set your slam level’ in a way guaranteed not to trick you into thinking louder is better: it turns the output down, so instead of hearing everything get bigger and louder, you just listen for the point that the clipping’s adversely affecting the sound. Then you can flip back to normal mode, if that’s what you wanted (maximum loudness without blatant grunge). Or, you can ignore the slam and use gain-matched mode as I demonstrate in the video: ADClip7 already suppresses intersample peaks when they’re part of clipping, already reinforces energy lost to clipping, so you can use it in conjunction with a tool like Youlean’s loudness meter to dial in a specific intersample peak level for iTunes or other such picky streaming services. It’ll work like padding the output. and if you’re already in the ballpark LUFS-wise, ADClip is a far more sophisticated tool than just limiting and then padding the output to get to your ‘true peak’ target.\r\n\r\nThe last mode is Clip Only, and rather than selecting the various algorithm outputs individually, this version of ADClip gives you them at their respective loudnesses, combined. That means you can engage this mode to hear ONLY the clips, and check that you’re not hearing any recognizable ‘scrunch’ of continuing clippage. But since you’re also hearing the enhance outputs, you can adjust softness and enhance level to balance the stuff being introduced to the sound. My recommendation is to set the controls so no one type of artifact predominates: it’s not necessarily great to throw in a bunch of ‘enhance’ bass just because you can. If you’re hearing that much of it that you’re tempted to use it as an effect, you’re definitely also over-slamming your music.\r\n\r\nSo my recommendation in 2017 heading to 2018, is to use ADClip7 in gain-matched mode, to keep that ‘true peak’ measurement within the Mastered For iTunes requirements. I’m sure not everybody will stick to that, but I’m happy to say it is actually quite good for doing that, and if people want to smash stuff with it and enjoy the bass thud, that’s their affair. Remember a clipper makes stuff dynamic and punchy, not ‘flattened out’: use a limiter if you need dynamically flat, or perhaps both. In this modern era of replay gain, I’m going to suggest that dynamic and punchy is where it’s at. Learn the lessons of the LUFS meter! They’re available to us all, now.",
    Comments: "",
    Name: "ADClip 7",
    Date: 1507420800000,
    Url: "https://www.airwindows.com/adclip-7/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ADClip2",
    Date: 1319068800000,
    Url: "https://www.airwindows.com/adclip2/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "ADClip3",
    Date: 1342310400000,
    Url: "https://www.airwindows.com/adclip3/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "ADClip4",
    Date: 1384387200000,
    Url: "https://www.airwindows.com/adclip4/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ADClip5",
    Date: 1442620800000,
    Url: "https://www.airwindows.com/adclip5/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ADClip6",
    Date: 1456617600000,
    Url: "https://www.airwindows.com/adclip6/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a double short delay tap with saturation.\r\n\r\nADT means ‘artificial double-tracking’. You could also call it fixed flanging. It’s a single short delay, as heard on lots of Beatles tracks. It’s now my job to explain what’s different about the Airwindows ADT, what you can do with it beyond the obvious ‘stick it on like a preset and pretend you are a Beatle’, and why you’d bother.\r\n\r\nWith the Airwindows ADT, you get two delay taps (making it A3T?) and an important feature: the mix sliders used to apply the delayed taps are ‘attenuverters’. That’s a word from Modular Synthesizer Land, which means you get both output level control and the ability to invert the output. Here’s why that matters.\r\n\r\nIf you apply a fixed delay tap, you get an effect called ‘comb filtering’ where you’re emphasizing and cancelling frequencies based on how long the delay is. You’d think that would sound really strange, but it’s the same way you hear a direct sound and also the sound bouncing off a floor or wall: we naturally hear through comb filtering rather well, which is why room design is important in studio control rooms. (you could have a bass frequency getting cancelled, be unable to hear it at all at your listening position, and yet things will still sound perfectly normal.) Applying a quick delay like this can make your sound richer and more textural, and a little more ambient. If it’s a very short delay it may not be heard as an echo at all.\r\n\r\nBut, if you’re using an INVERTED delay tap, something else happens: the shorter the delay and the closer to the volume of the dry signal, the more it’ll cancel out the bass. You’ll still get all the comb filtering effects, but you’ll also be removing lows, either the deep lows or even low midrange if the delay’s really short.\r\n\r\nIf you blend two taps that are both inverted, you can cut bass while averaging out the comb-filter effects. If the taps are in phase (not inverted) what you’re doing is reinforcing the bass, because the cancellation effects will run out below a certain frequency and just add together. All this is using very quick delays, though ADT lets you lengthen them to where they’re slapbacks. Don’t be too distracted by that, part of what makes ADT its own effect is the ability to shape the tone with delays too quick to hear as echoes.\r\n\r\nFinally, now that you know you can cut bass using these very quick delays, or reinforce it, or any combination you like… there’s a headroom control. ADT will distort like crazy using low headroom. That can be used as a distortion effect… but it’s not just ordinary distortion, it’s a combination of Spiral into Console5’s buss (PurestConsole, for clarity and well-behavedness). These don’t perfectly cancel out. Instead, it produces a slightly leaned-out, skinnier tone to complement the way ADT fattens things up. If you’re using it to thin bass, it’ll be even more effective. If you’re reinforcing the body of the sound, it’ll color things in a subtle but interesting way. And of course if you love it, you can set up mixes that way (swap out Console5Channel for original Spiral, either on mix elements you’d like a little thinner and more energetic, or the whole thing). Sometimes there are new types of coloration that owe nothing to EQ or traditional processing: this is one of those times.",
    Comments: "",
    Name: "ADT",
    Date: 1540684800000,
    Url: "https://www.airwindows.com/adt-vst/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "ADT2",
    Date: 1298160000000,
    Url: "https://www.airwindows.com/adt2/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a different bright EQ from any other. Requires 44.1K.\r\n\r\nSee Air2 for more on this. Air is the same, but simpler, and restricted to one sample rate so that if you're at a higher sample rate, the effects will shift up in frequency, possibly making them inaudible.",
    Comments: "",
    Name: "Air",
    Date: 1493510400000,
    Url: "https://www.airwindows.com/air-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a different bright EQ with silk tone and high sample rate support.\r\n\r\nHere’s what you get: Air2 has three treble-boost bands, Hiss, Glitter and Air. The first two are very like what’s in Energy2, but Air2 is NOT the same: it’s a different algorithm, not done the samw way Energy2’s ‘Rat’ band is done, and it has a broader, softer air band that’s less ‘raw harsh energy injection’ and more ‘bright and pretty’.\r\n\r\nAnd then, they all run through a ‘Silk’ control… inspired by but NOT the same as the Neve Portico Silk circuit. That is a real hardware transformer biased into second harmonic creation by a DC current. Air2’s Silk control is the same thing as Single Ended Triode (which you can download and use already) but only applied to the highs out of Air2, so it’s the same general concept but is not a clone of the Portico preamp. Plus if they freak out I will rename it to ‘Sow’s Ear’: it’s part of a treble brightener and the same basic functionality and as far as I’m concerned, nothing is stopping me from asymmetrically distorting highs, and Silk is the best general term for what that does. Except with mine you can push it too far for effect, because of course you can :)\r\n\r\nAnd finally, unlike Energy2, the Dry/Wet control for Air2 strikes a new balance between the Energy style of increasing the effect, and the traditional Dry/Wet control. New with Air2, you can now turn it to full-wet and get ONLY the output of the brightener bands. They’re not exactly filters but they act like it, and by adjusting them against each other you can produce insanely treble-boosted sounds and wipe out everything else using Dry/Wet. The way it works is, up to 75% (0.75) you still have full volume Dry. It won’t re-balance your track, just add whatever Air2 highs you’re looking for. Then, between 0.75 and 1 (full Wet) the dry goes away, so if you crank it up all the way you get the fullest extreme, but for most normal use it’s like Energy2, taking an unvarying dry signal (which is NOT undersampled) and adding however much of the effect you like.",
    Comments: "",
    Name: "Air2",
    Date: 1625961600000,
    Url: "https://www.airwindows.com/air2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Airwindows Chord Organ Firmware",
    Date: 1578787200000,
    Url: "https://www.airwindows.com/airwindows-chord-organ-firmware/"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "Airwindows Impulses",
    Date: 1179360000000,
    Url: "https://www.airwindows.com/airwindows-impulses/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Airwindows Linux",
    Date: 1518393600000,
    Url: "https://www.airwindows.com/airwindows-linux/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Airwindows Plugins Starter Kit",
    Date: 1586304000000,
    Url: "https://www.airwindows.com/airwindows-plugins-starter-kit/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Airwindows Starter Kit 2022",
    Date: 1649030400000,
    Url: "https://www.airwindows.com/airwindows-starter-kit-2022/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "airwindows-nodal-tempo-guide",
    Url: "https://www.airwindows.com/airwindows-nodal-tempo-guide/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "airwindows-on-mac-pro-tools",
    Url: "https://www.airwindows.com/airwindows-on-mac-pro-tools/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "All Airwindows Plugins Now Run Natively on Raspberry Pi",
    Date: 1647993600000,
    Url: "https://www.airwindows.com/raspberry-pi/"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "AllSpace",
    Date: 1325980800000,
    Url: "https://www.airwindows.com/allspace/"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "8388352.0",
    Comments: "",
    Name: "Ambience",
    Date: 1171670400000,
    Url: "https://www.airwindows.com/ambience/"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "",
    Comments: "",
    Name: "Amps",
    Date: 1192406400000,
    Url: "https://www.airwindows.com/amps/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "antialiasing-plugins",
    Url: "https://www.airwindows.com/antialiasing-plugins/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "AORKit",
    Date: 1415404800000,
    Url: "https://www.airwindows.com/aorkit/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a re-release of my old API-style color adder, exacly as it was.\r\n\r\nApicolypse works the same way Neverland did. It’s a drop-in replacement for old mixes, and was a precursor to BussColors. It’s got a simpler method of generating its dynamic impulses, making them a sort of continuous spectrum between the low-level and high-level sounds. Like Neverland, it’s 44.1K though it will still function at any rate you like (sort of pitched up): like Neverland, it’s got a hardness control that at 0 is the ‘Density’ algorithm, at 1.0 is straight digital clipping at the extreme, and at any setting between is a sort of hybrid that turned out to not be the greatest: a switch from perfectly clean, to soft-clip at any desired transition point. Technically if you had it so it only kicked in on hot peaks, it’d be hard to find fault with it: I don’t recommend setting it (on this or any Character plug or ‘Crystal’) to a position where soft-clip kicks in at very low level. Either do Hardness at zero, or high enough that most of the audio stays ‘un-distorted’: you can do what you like, though, I’m not the boss of you :)",
    Comments: "",
    Name: "Apicolypse",
    Date: 1582416000000,
    Url: "https://www.airwindows.com/apicolypse/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "softens headset mic recordings that have been super hard clipped on capture.\r\n\r\nI hope this is handy for somebody: I made it for myself. The idea is, if you’re a youtuber or something and have the ability to post-process your mic feed, you might have it set up so normal levels give a normal sound, but then if some monster jumps out and KILLS you in your video game, you might scream very loudly into your mic and blow the recording into ridiculously loud clipping.\r\n\r\nThis does several things. Firstly, it clips and softens those moments further and tries to suppress some of the highs you got from the super-hard clipping. Secondly, it’s got a highpass which can subdue thumps and pops, and can also be used in conjunction with something like a pitch shifter to give cartoony voices (I’ve tried this with DiracFxAU, now known as zynaptiq: only used their demo AU, didn’t use their library in anything code-wise and won’t be doing so as they are unaffordable). I found highpassing before the pitch processing was very helpful for toon voices of that type.\r\n\r\nThis isn’t the seriousest of plugins, but I’ve seen people ask me for it, so now it’s free and Mac/PC VST too. I think it’s best confined to its intended use, processing single voice tracks that have wildly distorted moments. If you try to use it on the 2-buss I will be very cross with you ;)",
    Comments: "",
    Name: "AQuickVoiceClip",
    Date: 1499558400000,
    Url: "https://www.airwindows.com/aquickvoiceclip-vst/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is Console5 processing with powerful new acoustic distance effects.\r\n\r\nI’m pleased with this one: it’s in the Console5 family (so its parts can be interchanged with any other Console5 plugins) but it represents a few different breakthroughs, and if they work out, I’ll be keeping them.\r\n\r\nFirst, this is a multi-stage slew clipper. The effect’s a bit like PDConsole, a gluing and taming of bright digital highs: but, where PDConsole uses the algorithm of PurestDrive to get a more analog mixing-desk kind of sound, Atmosphere’s many stages of slew clipping (across fourteen samples, each with a different maximum slew) enforces the behavior of free air and acoustic distance. This has been a goal for quite a while, but I’ve never got results like these before (might be worth fitting a more exaggerated version into a ‘Distance 2’, if people like). It’s not calibrated to overwhelm, but the scale of your mix should be huge, and since it’s an extended-window slew clipping effect your quieter, subtler sounds don’t get muddied.\r\n\r\nThis type of processing steps on the annoying digital harshness with a heavy foot, but doesn’t directly EQ: the results you get will depend on what it would be like to have your sound blasting away through a perfect playback system at a distance of ten to thirty feet. If you need up-close, bright and loud sounds, you’ll need to use another system (such as PurestConsole), this one is for space and scale. It’ll probably work well for some electronic mixes if they’re meant to sound loud, it’ll give a real hugeness to rock or metal mixes (so long as the desired effect is more ‘live gig’ in scale) and it will really come into its own summing orchestral stuff from virtual instruments (or anything with similar scale/power needs).",
    Comments: "",
    Name: "Atmosphere",
    Date: 1524960000000,
    Url: "https://www.airwindows.com/atmosphere/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a new kind of resonant lowpass EQ.\r\n\r\nSo this turned out to be a bear to bring up to date, because the original code was insane. I’m not quite sure how I got there, and I was still bugfixing long after the demo video was made. You’ll find the actual version of Aura has a slightly wider range, better adjustability in the low range, and the Dry/Wet control gets a touch of added functionality: as you go full wet, the resonant quality gets enhanced, so be sure and explore the half-wet or barely-wet settings. If it’s too scary-resonant, just pull it back a teeny bit and it should cooperate.\r\n\r\nAnd this one is a bit scary as it seems to be channeling analog filters. I agree that it would be great to have this principle work as a full-range, synth-style filter that goes all the way into the bass. I can’t do it, though: it freaks out when I try, and it took endless hacking just to expand it a bit from what you see in the video. This is the algorithm derived from GrooveWear, which averages the rate of change OF the rate of change of the waveform. It’s not even slightly normal. You get what you get.\r\n\r\nBut what you get, is a lowpass with a striking resonant edge that’s implemented in a totally new way, and which has no pre-ring at all… and the way it gets its sound gives it an extraordinary sonority. Pretty much anything in audio that you’d want to project loudly as if from an acoustic space, can be given a sheen and glisten and sonority with Aura. I’ve got it extending down fairly low into the midrange if you’re at 44.1K or so: that should help if you need to use it at high sample rates, because the technique for doing it is not exactly cooperative and I found no way to simply tune it down: everything’s so geared to slew rate between samples that it’s best used for treble effects. I think it’s got a useful tonality for its treble manipulations, and I’ve spent a lot of time coming up with interesting ways to cut or enhance treble. This one’s good at what it does. You can really do stuff with the texture of your mix by aggressively using Aura on suitable elements.",
    Comments: "",
    Name: "Aura",
    Date: 1524355200000,
    Url: "https://www.airwindows.com/aura-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is for getting some organic stereo movement into your mix.\r\n\r\nThis is pretty simple: I got asked for an auto-pan. So I Airwindowsified it a bit, and here you go.\r\n\r\nIt’s set up to get some nice organic movement into your mix in various ways. Rate is how fast it goes (from nearly static, to a rapid flutter).\r\n\r\nPhase means each channel relative to each other: on either side, you get full L-R and back again. At the center, it’s a mono tremolo (though, for stereo channels). Off-center, it’ll offset the sines in such a way that the sound sets up a swirling, circular stereo motion: swooping forward from the side, going across, and then back to near-silence again. Basically, centered is ‘not side motion’ and to the sides is ‘more side motion’.\r\n\r\nWide just cuts the mid channel. What this does for the auto-panning is, it’ll make stuff stretch out a bit beyond the edges of the speakers. If you’ve got something full to the side then you’ll get a bit of the opposite on the other speaker. Full wide is ‘only side channel’ and you’ll hear it in both because that’s what you get when you have only side channel: centered ‘mono’ sound, just out of phase completely. You’ll probably want to use smaller amounts of this, unless…\r\n\r\nDry/Wet is the final useful thing here. You can set up extreme stuff, like full Side or weird motions with Phase, and then just dial it back with Dry/Wet and it’ll give you a nice subtle activity of whatever you set up: don’t sleep on Dry/Wet here, you can get nice effects through using aggressive settings elsewhere and just sneaking in a little Dry/Wet. Especially if you’re doing extreme things with Wide, Dry/Wet is how you can integrate that into a sound so it’s just a nice little subtle motion that’s interesting. Or of course you can just crank it out, I’m not your mom :)",
    Comments: "",
    Name: "AutoPan",
    Date: 1616889600000,
    Url: "https://www.airwindows.com/autopan/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a distinctive sort of lowpass filter.\r\n\r\nThis plugin is an exploration of a fascinating filter type that, I think, is really underrated. It’s a straight-up extremely simple averaging filter. If you set it to integer values, it exactly averages that number of taps on the input audio (adjacent samples). If you pick in-between values it interpolates, causing the ‘frequency’ of the filter to smoothly blend between the values.\r\n\r\nThere’s a reason you don’t see this filter used for lowpasses: it’s not technically correct. In fact it whacks a great big cancellation node into the high frequencies, and the tone (while pleasing) is very obviously affected by this. It’s a bit of a flangey quality.\r\n\r\nBUT, we know better than to be limited by technical concepts, right? After all, the classic Scream Tracker resonant lowpass is known to be broken, and that has a real character to it. And even the Roland Supersaw is known to have some quirks that make it what it is…\r\n\r\nAverage has a fantastic tonality once you accept the response quirks. You can dial in the notches to suppress unwanted content, and (in a post-video revision) it’s got a dry-wet control so you can moderate the effect—and, typically for Airwindows, if this dry/wet is set to full wet, the calculations for doing that drop out of the plugin entirely so you’re not doing an unnecessary multiply.",
    Comments: "",
    Name: "Average",
    Date: 1476144000000,
    Url: "https://www.airwindows.com/average-2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "turns averaging into a full-featured EQ.\r\n\r\nMy Average plugin is pretty handy. It gives you from one to ten taps of simple averaging, as a continuously variable thing. At higher settings, there are comb-filtery artifacts that come in as a result of how averaging works, but you can tune them with the filter setting and they sound pretty natural… and averaging has very good time response because it doesn’t have an IIR ‘tail’, so it’s very clean-sounding in ways normal filters aren’t.\r\n\r\nAverMatrix takes that, and gives you one to ten POLES of filtering like in the first Average. That’s continuous too: you can have three and a half poles, no trouble (it just generates the third pole and then fades halfway into it) so the subtlety of adjustment is great.\r\n\r\nAND, also by request, AverMatrix uses the Inv/Dry/Wet trick some of my other plugins use, and it’s a great idea to include. Go to full ‘inverse’ and AverMatrix is made to keep the dry and subtract the inverted wet from it… which means, now it’s a highpass. An amazing-sounding highpass, with great clarity and airy-ness and just as clean transient behavior, and just like applying dry/wet on the regular averaging, you can apply dry/inverse to give only a subtle treble lift. I think this is going to work real well for people. And one more thing: since native averaging at high numbers of taps gives a funny notch that you can tune, and since this is inverse, you can use this behavior to give a highs boost with a funny, tuneable peak. Set it wrongly and maybe it’ll make your mic sound nasty (don’t reinforce existing spikes in the mic’s response) but place it just right and you can get treble lift that neatly avoids the resonances of your mic… and enjoy the response of a much fancier microphone. (your settings will be sample-rate dependent so tune it again if you change sample rate)",
    Comments: "",
    Name: "AverMatrix",
    Date: 1591488000000,
    Url: "https://www.airwindows.com/avermatrix/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "lets you run an XLR input into a stereo input, sum it to mono, and use it.\r\n\r\nBalanced is inspired by the adorably tiny Teenage Engineering TX-6 mixer. You might know that the TX-6 is notorious for being wildly overpriced as a small line mixer, since you can get a Bastl Dude for one-twelveth the price and have almost as many inputs (five jacks to plug in, rather than six). If you multiply that by twelve you've got sixty jacks, ten times as many inputs per dollar, and pretty much as tiny.\r\n\r\nBut the TX-6 is a digital mixer, not analog. And its inputs are stereo. And it also functions as a ADC, a converter for getting stuff into your DAW (at 48k, granted, but 32 bit audio). And that means it can serve other functions, like replacing other multichannel converters… and it's normal for multichannel converters to be sort of costly.\r\n\r\nBut how much can it replace? Enter Airwindows Balanced (and some patchcords you will have to make).\r\n\r\nFirstly, with breakout cables (also very expensive, from Teenage Engineering) you can get twelve inputs. You will have to process them in pairs or leave them untouched: the TX-6 will do stuff ITB on input before sending the result to your DAW, but I don't think it can operate on sides of its stereo channels, so the processing has to match.\r\n\r\nWith Airwindows Balanced, you can plug a balanced, professional XLR output into your TX-6 (or ANY consumer grade stereo input of any kind) and turn it into a mono channel with all the benefits of balanced operation. In fact if your poor-quality consumer input hums or buzzes the same on both channels, Airwindows Balanced will cancel that out as if it was interference in the analog domain. It flips one of the sides and then sums to mono, with a handy gain trim based on BitShiftGain to let you gain-stage stuff that might come in very quiet.\r\n\r\nThe reason that's an interesting option is this: with Airwindows Balanced and Teenage Engineering TX-6, you can record certain things at professional quality in multichannel WITHOUT professional mic pres. And that makes TX-6 the budget option. Completely aside from its tininess and portability… or the fact that everything in this portable rig is internally battery powered and can exist, in any combination of professional mic input and stereo line input, miles away from mains power.\r\n\r\nThe key here is that you can get a battery-powered 48v phantom power box (I'm using Xvive P1s, which charge off a laptop or charger) and power a high-headroom and high-output condenser mic (I'm using Roswell Mini K47s), make a XLR to TRS 1/8\" cable, and put the mic in front of LOUD things. The key is that the TX-6 (and some other bad quality line inputs on laptops and such) is not professional line level. It's consumer line level. There's no headroom, it maxes out way short of professional grade.\r\n\r\nAnd that means when you put your mics in front of loud things (and I mean brutally loud drums, stage amps, etc) the peaks won't be limited by the phantom power box. They won't clip a mic pre inside the TX-6 as there isn't one. And it's a bit like trying to run your mic into a line input and getting no signal… BUT, with the right signals, you will actually get peaks within 6dB or so of clipping. Hell, if you clip the TX-6 it doesn't sound particularly bad, it handles clipping gracefully compared to some boutique ADCs: and it would take impossibly high loudness to do that off a mic.\r\n\r\nThe budget gear you can record with can't do that, not even close. In the 'loud into condenser mic into DAW' scenario, this setup with the Xvive P1 and TX-6 compares most closely with APIs and Lavrys, just without 96k capability, and everything on the budget side comes off as congested and flat by comparison.\r\n\r\nMy hope is that Airwindows Balanced also helps other recording situations. You should be able to take a hot XLR condenser mic, a 48V phantom power box, make the cable (these do not exist as far as I know) and a cheap old laptop with a 1/8\" stereo line input, and get a respectable and good sound as a mono capture… also entirely on batteries, and anywhere. My hope is that if you're not buying tiny $1000 digital mixers on a whim you can still get value out of this.\r\n\r\nBut if you're able to get the TX-6 and scorned it, check out what I was able to make it do. I could have put up four other mics, all on things that would crush budget pres and converters, and carried the whole rig in a backpack including the laptop to anywhere I wanted to record, and also would never have to set a level because by definition nothing the mics can do can ever overload the inputs in a negative way. That makes setup quicker. Just saying.\r\n\r\nI can give you Balanced. You gotta make the cables yourself, as I did :)",
    Comments: "",
    Name: "Balanced",
    Date: 1660521600000,
    Url: "https://www.airwindows.com/balanced/"
  },
  {
    Use: "",
    Type: "",
    Description: "is an old plugin with new tweaks, that gives some bass guitar tones.\r\n\r\nThis is BassAmp. (I’ve been asked to do amp sim type plugins, so it’s a start). Back in the day I experimented with some of these things, though I’ve always been more interested in wiring up physical hardware, especially for guitar distortions and things. I’ve brought this one up to date in some ways, debugging a problem with the ‘dub’ channel and using my modern techniques for dithering to the floating point bus, and so on.\r\n\r\nIt’s got basically a bright channel, midrange (which is just dry, as a slider), a bass channel with a characteristic woolly tone that has a kind of noisy blur on the small amount of treble it does have, and a ‘sub’ channel that really doesn’t work, so use it as a crazy special effect. BassKit might get you a cleaner sub-octave, but this will give you a trashy sub-octave that’s mostly garbage, even on a single-note line. So you’ll be leaving it off, I think.",
    Comments: "",
    Name: "bassamp",
    Url: "https://www.airwindows.com/bassamp/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an old secret weapon, like a kind of bass amp.\r\n\r\nThere was this plugin called BassDrive… and it was a secret weapon. It was unlike any Airwindows plugin because it ran on painfully hard-coded biquad filter code, looked up from calculators online: which also meant it was locked to 44.1K (at least, to get the expected behavior). But it was also unlike anyone else’s plugin of that nature, because it used lots of Airwindows overdrive inside it. The controls seemed to say normal EQ things like ‘bass, mid, treble’, but they didn’t give you those things, they gave you funny bands voiced in a weird way.\r\n\r\nAnd this is because it was the eccentric Airwindows way of trying to mimic the SansAmp Bass DI. Not the pedal form… the rackmount RBI version.\r\n\r\nThe weird part is I ended up not liking that one (I came to prefer the pedal-form VT Bass) but before I got rid of it, I’d gone and shaped biquad filters to its voicings. But then, I implemented them strangely (note the intense notch at 10K, not present in the real one!) and made ’em overdrive a lot more. So it’s a lot LIKE a SansAmp RBI, but then again it’s totally not because it turned into its own thing.\r\n\r\nAnd then, even though this could be used for bass guitars, I started to hear about how it was working as a secret weapon on heavy guitar sounds…\r\n\r\nSo this is exactly how the ‘secret weapon’ plugin was. It’s the blast from the past, now also available for Mac, Windows and Linux VST. And I know how eccentric it is, but sometimes that’s the point. I’m working on a bunch of stuff that’s meant to be normal (or at least flexible). This ain’t. It’s just weird. If you hate it, it’s not getting any better, abandon it with a clear conscience. On the other hand if its dark magic speaks to you… then hey, enjoy the new weapon. And rest assured that people who need good behavior out of their plugins will not be finding your secret, because BassDrive will scare them away first.",
    Comments: "",
    Name: "BassDrive",
    Date: 1563062400000,
    Url: "https://www.airwindows.com/bassdrive-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is centered bass reinforcement with subs fill. Clean and controllable.\r\n\r\nThis is much like DubSub or DubCenter, except it’s strictly mono bass and is designed to be super controllable. The controls are simplified and kind of optimized so only good-sounding results come out. You need to have good subwoofers (or use SubsOnly to test) to use the Sub output, otherwise you may not be able to hear what you’re doing as it’s much deeper and more filtered than you get with most DubSub patches (the filters are somewhat rearranged).\r\n\r\nThe Bass reinforcement works like if you were using the head bump in ToTape, except it’s mono-only so it will only reinforce usefully. Because BassKit is meant for mastering and 2-buss duties, and not the full range of madness available in DubSub/DubCenter, it uses the bass and sub augmentation ONLY as additions to dry: never ‘wet only’. You can exaggerate it, but the intention is to make it easy to add bass and subs in a sensible, controlled way. I hope it proves useful, and I know it will be more well-behaved than DubSub in case that one was too unmanageable for normal use :)",
    Comments: "",
    Name: "BassKit",
    Date: 1541894400000,
    Url: "https://www.airwindows.com/basskit-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a killer general-purpose EQ.\r\n\r\nBaxandall starts with a two-band filter that, zeroed out, subtracts an inverse lowpass from a lowpass and gives you bit-identical, perfectly transparent sound. That’s if you’re being subtle. If you boost or cut, lows or highs, it gives you the gentle broad boosts you expect, centered on the vital midrange. As you get more intense with the boosting, it gets more extreme, to where if you’re doing double boosts to get an intense exaggerated sound, a mids notch will naturally develop to accentuate the boosting. The whole voicing shifts to accomodate what you want to do with it, and you can play bass against treble or vice versa to get really wild voicings, such as for extreme EQ treatments (in terms of lows or highs)… but using the same natural Airwindows Baxandall tonality, so it won’t sound ‘filtery’, it’ll sound like it was meant to be that way.\r\n\r\nAirwindows Baxandall uses my interleaved biquad filters (original, purest form, not meant for rapid automation) that run inside a Console5 instance to deepen the sound of the filter.",
    Comments: "",
    Name: "Baxandall",
    Date: 1577577600000,
    Url: "https://www.airwindows.com/baxandall/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "",
    Description: "is a wordlength reducer that tries to heighten sonority.\r\n\r\nBeam’s a wordlength reducer like Dark, but instead of seeking to always give you the least departure from whatever trajectory the audio’s on (like Dark: and that suppresses highs, including noise in the highs), Beam seeks to make all waveforms converge on the same angle (either ascending, or descending). Imagine a world of triangle-waves, the deepest frequencies taking the most energy, and progressively quieter until high frequencies are in balance with the lows. That’s Beam. Beam has a ‘focus’ control that sort of optimizes the frequency range it’s providing a window into (as in, lower settings SEEM to encourage focus on deeper sounds, higher settings SEEMS to highlight the treble, and the 0.5 is set to zero in on where our hearing’s most sensitive.) And it uses those frequencies, across a broad range of possible sounds, to emphasize the energy and depth of the audio to shocking effect.\r\n\r\nExcept, it’s not. It doesn’t know what a frequency is. It’s only ‘dithering’ in such a way as to try and accentuate certain waveform slope angles, and has no real power to do even that beyond statistical averaging of a bunch of samples.\r\n\r\nOn top of that, its noise floor is WEIRD. Dark gates into silence, sort of well-behavedly. Normal dithers become noise seamlessly. Beam goes nuts and screams, and the only thing I can say for it is, raw truncation is worse. It’s super weird… and yet, even while it’s doing that, the background audio retains a startling depth and personality. Or at least so it seems… even more than Dark, with this one you turn up DeRez and nothing happens to the sound at all. You don’t even hear the noise until it’s silly loud. (there will be a series of dither reissues with DeRez, both for auditioning and for lo-fi duties.) It might even be a ‘sonic maximizer’, putting tone qualities into the audio that weren’t there to begin with.\r\n\r\nI admit I don’t know what to make of this at all. I know how I got it, and I know it’s doing what I made it to do. But nobody knows what you get if you sculpt audio, not by frequencies or loudness, but by reinforcing certain waveform slope angles, because to my knowledge nobody has ever wanted to do that or had a way to make it happen, even in subtle ways like this. And now that I’ve done it, I’m not certain it’s better than Dark. I understand what Dark’s doing, and why that’s useful. This is a wilder beast. Looking forward to getting people’s reactions… because one of these may replace NJAD in my flagship Airwindows plugin, Monitoring. (followup: turns out it is Dark in Monitoring2)",
    Comments: "",
    Name: "beam",
    Url: "https://www.airwindows.com/beam/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Bespoke Live Drums (and Modular Kicks)",
    Date: 1635120000000,
    Url: "https://www.airwindows.com/bespoke-live-drums-and-modular-kicks/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a very flexible amplike thing with a taste for the bizarre.\r\n\r\nLet’s go a little farther! BigAmp steps even farther away from what you might call ‘realistic’ amp sim behavior. It’s more like the Z series filters, or perhaps the X filters: you can make it act sort of ‘normal’, but it also lets you twist the knobs way beyond what’s realistic. So, you can use BigAmp for layering, or to supplement a sound, or just do strange things. There’s one more amp sim before I get into other, different plugins (and indeed different whole things like the sample instruments I’m developing, as heard in ‘Skronk’ and these demos) but BigAmp is perhaps the widest-ranging of the lot.",
    Comments: "",
    Name: "BigAmp",
    Date: 1659312000000,
    Url: "https://www.airwindows.com/bigamp/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is the Airwindows implementation of a biquad filter.\r\n\r\nThis little puppy is really flexible!\r\n\r\nThat’s true of any biquad filter, but I find most of them are really flexible and slightly plastic. Traditionally biquads require special handling, because you can’t push them too far before they break, and also they sound ‘DAW-y’ and synthetic. Not in the same way as linear-phase EQs, mind you, but still with something about them that feels digital.\r\n\r\nSo I fixed that :) with a couple caveats. Firstly, part of it is brute force. I figured that if biquads run into trouble with 32-bit coefficients on some filter curves, and it’s widely known that you should do things like run ’em in series to get better behavior, we could always run long doubles and be totally sure they work as intended. Overkill? Meh. Sure, but it’s known that these break due to losing control of themselves due to not long enough wordlengths. Why wouldn’t they work and sound better with long enough wordlengths? And so they do. Also, you get to run simpler biquads if you don’t have to run lots of them, so it averages out. I think it’s just a matter of audio DSP coders stubbornly insisting on not using long data words on the grounds it doesn’t matter to the sound. This, when the filters go obviously wrong under some conditions for just that reason? Anyway, here’s long double biquad, because nobody else was doing it far as I know.\r\n\r\nThe second part is trickier, because if you use it you remove some functionality. Biquads make great DC blockers. But, biquads also work through the summing of many delay taps, all very close together. Some are on input, others on output. They’re a mixing of multiple copies of the signal.\r\n\r\nThat means Console applies to the biquad filter.\r\n\r\nWe already knew that, of course: I’ve long observed that you can put Console (or BussColors4/ConsoleBuss4) around a bog-standard DAW EQ and get an enhanced sound out of it. Mind you, I wasn’t controlling that EQ, but it still worked. But now, I have Console5 (not 6, but I COULD do 6 in the right context) built right into Biquad. So, it does expect to have a signal between -1 and 1 (or lower than 0dBFS in the DAW), and that means Biquad itself can’t remove huge DC offsets ten times the size of the audio content. (It can still remove smaller offsets just fine). And it runs into basically PurestConsoleChannel, does the biquad, then uses PurestConsoleBuss and goes out to an inverse/dry/wet control (which itself has multiple uses).\r\n\r\nWhat’s a biquad, you ask? The Airwindows biquad uses four of the six common biquad options (I prefer to do shelves with subtractive/additive use of filtered audio). The top control has settings one through four. They go lowpass, highpass, bandpass and notch. That’s what I consider the platonic set of biquads, and it lets the filter design be simple and clear. You can set a frequency (in ‘amount of the audio range’) from ‘zero’ to ‘one’. There’ll be EQs with more specific frequencies, that’s easy, but this is proof of concept and to be used by ear, plus it will always cover DC to Nyquist at any sample rate. Zero is not really DC, because that kills the biquad: also, One is not really the Nyquist frequency (half the sample rate) for the same reason. But, they act a lot like they range that far, because the high resolution lets Biquad calculate things accurately even that far out of the normal range.\r\n\r\nThey don’t update/recalculate every sample, but the way I’ve defined the data structures means they could if you wanted them to (at a cost in higher CPU-eating). The code’s MIT licensed open source, so GPL people can just take it if they credit me, and all the projects that are using the Airwindows library are advised to get up to date and include this one. Set right, it is THE ultimate sample-instrument tone shaper to sit ‘under the hood’ and voice somebody’s musical product after the sample-playback stuff is taken care of. You’ll be seeing a lot of stuff come out that uses this code, as there are many plugins that require this type of filter to work, often ones that will benefit from the sonic improvements that are part of Biquad.\r\n\r\nMore will be revealed. Suffice to say this is a very useful building block that’ll allow for some very special plugins.",
    Comments: "",
    Name: "Biquad",
    Date: 1562457600000,
    Url: "https://www.airwindows.com/biquad/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is the Airwindows biquad filter that's more sweepable and synthy.\r\n\r\nThis time, it’s time for the impossible!\r\n\r\nAs in, there was a reason nobody was doing sweepable, ‘synthy’ biquad filters…\r\n\r\nTurns out it simply doesn’t work. One uses a different type, like state variable filters, for the synthy stuff. The reason is that, while biquads can sound pretty great (especially implemented like I do ’em), they fundamentally can’t cope with changing the filter coefficients mid-calculation. They flip out: you’ll hear some of that, especially at the frequency extremes. Low Q makes low frequency motions flip out, and high Q (and boy do I have a high Q for you this time) makes ultra-high frequency motions flip out in a really wild. glitchy way.\r\n\r\nSo obviously I gave up.\r\n\r\n:D\r\n\r\nnope! Instead, I just kind of forced the filter into zones where it mostly is controllable. This is partly through REALLY smoothing the filter cutoff, especially at low Q and low frequencies. If you try and update biquad coefficients every sample (and I already changed the form from the more CPU-efficient to the more stable form: didn’t help much at all) the algorithm gets super twitchy, so part of what I’ve done is just stabilizing things. I tried for ages to come up with some bizarre hack to force the filter back into stability: no dice. So, the range has been limited a little, the Q doesn’t adjust below a Q of 1, and it reacts really slowly, because that was the only way I could get it to behave at all. (the original Biquad can sometimes be better behaved, because it’s only recalculating coefficients every new buffer. So, zipper noise. When you get rid of that your troubles get infinitely worse, with biquads)\r\n\r\nI’ve also got the resonance (on low and highpass) working differently. I’m scaling back loudness, but I’m also applying a distortion, then averaging after that, to try and get an ‘overdriving filter effect’ not present in the purer original Biquad. You can go quieter into Biquad2 and avoid this, or not use as much resonance: I feel it’s kind of like the Roland Alpha Juno filter resonance distortion, not an everyday thing but when it pops up it has its own distinct quality that’s interesting.\r\n\r\nAnyway here’s Biquad2 ;)",
    Comments: "",
    Name: "Biquad2",
    Date: 1569110400000,
    Url: "https://www.airwindows.com/biquad2/"
  },
  {
    Use: "",
    Type: "",
    Description: "is a handy Airwindows cascaded biquad filter: steeper roll-off before resonance.\r\n\r\nSo it’s a boring old biquad.\r\n\r\nExcept, if you’re into the details of how stuff works, it’s not THAT boring. It’s two biquad filters stacked, which means you can get twice as much cutoff steepness before resonance. Since it’s Airwindows, you can have any possible resonance setting anyway, from ‘impossibly high’ to so wide that it’s basically full bandwidth. That interacts interestingly with the stacked filters: some of the weird effects with super-wide filters will act different here. On top of that, it’s two stacked filters inside an internal Console mixing system: so the tone of the filter itself is ‘expanded’ in a way not common to boring old biquad filters. And it’s the most efficient (but least cooperative) biquad, meaning that it runs and sounds great but doesn’t always cooperate with rapid automation, so that might get interesting if you’re not careful.\r\n\r\nWhy do this at all?\r\n\r\nBecause I sometimes like mocking up effects and plugins out of component parts. And if I was to use a stacked biquad filter as part of something else, it’s just more convenient to dial in the correct settings and get the tone exactly right: I could use two ‘Biquad’ instances, but remember that BiquadDouble stacks its filters INSIDE the Console processing, so it might not be as good to fake it, plus I’d have to set both the Biquad instances the same…\r\n\r\nThe real answer is ‘because that’s how I roll’. Nobody asked for this. But maybe you reach for a biquad filter for simple tone shaping, and you keep trying to find a butter zone between too shallow, and too resonant. This might become your go-to basic filter. I can’t predict what will take off: for all I know, this is THE basic digital filter everyone’s been waiting for, the one that just sounds right for every purpose. Or not. But you can’t know until you try :)",
    Comments: "",
    Name: "biquaddouble",
    Url: "https://www.airwindows.com/biquaddouble/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an interleaved biquad filter like Biquad.\r\n\r\nBiquadOneHalf is tech that’s going into my future plugins. You have to set the frequency twice as high as you would using Biquad, and it can only go up to 1/4 Nyquist, but the way it interacts with the sampling frequency is special and works very well for some types of filtering. You’ll be getting more developed plugins of that nature soon, and all through January, but for now I got this: working version of the new Biquad filter variation, that you can use on stuff.\r\n\r\nIt’s the first version, not the ‘sweepable’ version, because this is going to find its way into fixed-frequency EQs, ‘head bump’ etc… compare it to Biquad remembering to use twice the frequency you otherwise would. It’s happiest on bass or midrange: much like regular Biquad, trying to force it to get real close to its high frequency limit can get messy.",
    Comments: "",
    Name: "BiquadOneHalf",
    Date: 1576972800000,
    Url: "https://www.airwindows.com/biquadonehalf/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is Biquad plus zipper noise suppression! For twiddling the controls.\r\n\r\nBy request, a kind of bugfix!\r\n\r\nUnderstand, a simpler implementation of a biquad filter isn’t a ‘bug’, exactly. I may have not had everything figured out, but if you’re designing fixed filters or looking to tune in EQs on something in your mix, the biquad filters I’ve been making are actually better. Without the extra smoothing code they run more efficiently and eat less CPU, and they’re still useful, plus there’s less to them so they’re more approachable.\r\n\r\nBut, a lot of musicians seem to enjoy cranking the filters around… and now that I’m using Bespoke all the time, I can put an LFO literally on any damn thing by rightclicking it. And it wasn’t all that difficult to do… I rolled it in to some documentation upgrades I did on the advice of Paul from Surge Synthesizer. One thing about hanging out with the open source music people is, stuff starts happening faster than you could possibly imagine. I had a crash bug in Bespoke on some strange things I needed to build into my main music making procedures, and Ryan had a fix the next MORNING. It’s daunting and wonderful to hang out with these earnest, motivated people.\r\n\r\nYou’ll see more on that, sooner than you think.\r\n\r\nBut right now… enjoy a cleaner, smoother Biquad, plus zipper noise suppression! I needed to come up with my Airwindows way to accomplish this, and got it done. More to come.",
    Comments: "",
    Name: "BiquadPlus",
    Date: 1633219200000,
    Url: "https://www.airwindows.com/biquadplus/"
  },
  {
    Use: "",
    Type: "",
    Description: "is a handy Airwindows cascaded biquad filter: steeper roll-off before resonance.\r\n\r\nHere’s another utility plugin! This is the same as BiquadDouble, except it’s three stacked biquads. Otherwise the same: you get to set the frequency, Q etc. for all the filters in parallel. This saves time over doing three instances of Biquad, plus they’re run in series inside Console inside the plugin, so there will be a deeper tone out of this one.\r\n\r\nIt’s for if you wanted to get steeper filter slopes without the cutoff going resonant. This, like BiquadDouble, is very much ‘tools to make tools’, for if you’re mocking up some kind of effect and know you’re going to be using filters. You can test out what you’ll use in your effect, this way. Note: seems like the inv/dry/wet is really just wet/dry/wet, and I have too many new and more worthwhile plugins to put out to fuss over it so I’d advise just taking BiquadTriple as it is. I’d be using it as full-wet anyway though you can bleed in dry for more of a shelf effect if you’re doing a steep rolloff of some kind.\r\n\r\nI expect to be doing some more variations on this as there are known ways to stack filters where the Q factors are very specific and staggered: however, those will be more aimed at the mixer/end user, and probably will be called isolators (that being a common term for this type of steep crossover-like filter). And again, I’ve got other things to put out that are more interesting, so more will be revealed as I do those experiments. I think an Airwindows isolator-style effect would be good. Bear in mind the biquads can be fussy about extreme settings and moving the sliders abruptly.",
    Comments: "",
    Name: "biquadtriple",
    Url: "https://www.airwindows.com/biquadtriple/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is an unusual edge-maker.\r\n\r\nBite puts on a sort of midrange edge. At high sample rates it’ll be more of a trebly edge. It’s no specific frequency, so much as it’s just a harshening factor: you can also use it inversely, to take out midrange edge. It runs a couple samples of latency: on VST that works as a couple samples of delay. Again: an experiment, a science project.",
    Comments: "",
    Name: "Bite",
    Date: 1494720000000,
    Url: "https://www.airwindows.com/bite-vst/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is an old-sampler style digital lo-fi plugin.\r\n\r\nDeRez is the simpler, purer bit and frequency crusher, and is still the best ‘analog setting’ bitcrusher (because it lets you use floating-point or fractional frequency and bit crushes). It’s a very pure example of those things and you can make it gate with a touch of DC offset from DC Voltage, and it’s even got a touch of grit softening when it frequency crushes to improve its tone.\r\n\r\nBitGlitter, however, isn’t DeRez. BitGlitter’s something a lot more sophisticated: a kind of sampler emulator. At every stage it’s designed not for bitcrush alone, but to get the particular tonalities you can get out of primitive old samplers. An earlier attempt intentionally went after the old Akai sound, but currently BitGlitter has no specific model. It’s just there to dial in a kind of punchy grit that will make beats sit well against other elements: the video demonstates this.\r\n\r\nNow, I know there are people who get mad when I make plugins like these. They say, ‘stop making the sound worse!’ and I understand what they mean, but sorry, I won’t stop because I know there are elements to certain ‘bad’ sounds that aren’t just ‘bad’ but usefully different. BitGlitter maximizes this as much as I can, and might be the go-to textural element for this sort of thing if generic bitcrushing etc. just never works for you. And then for some people I think it’ll immediately be their best friend, but I don’t need to explain to that crew what this is. For those who aren’t used to ‘crappy old sampler’ magic…\r\n\r\nFirst, BitGlitter’s got gain trim going into a stage of Spiral analog-style saturation. You can overdrive the input effectively. Then, it does a hint of bitcrushing and splits into two separate frequency crushers, each set slightly different. This isn’t ‘accurate’ to any real retro sampler, but it helps broaden the sound. The output of these are blended and given an output gain and a dry/wet in case you need to sneak a little clarity back in there, and a slight averaging blur is added to the blend to further emulate analog circuitry.\r\n\r\nThe result is a coarser, more opaque sound which still lacks modern digital ‘edge’: you can plainly see on a metering plugin like Voxengo SPAN how the highs are softened. It’s not a digital bright-maker, it’s a texture-changer and impact-maker. Especially if you go for darker regions of the Bit Glitter control, you can use this to add ridiculous amounts of midrange punch in that ‘retro hip-hop’ kind of way. There’s a visceralness and aliveness to the grunge because it’s made by an algorithm to act like analog gear might: you won’t get the same result out of just a pile of typical DAW bitcrush and EQ. BitGlitter will do the extreme damage you might be looking for, but it’ll do it with a personality that contributes instead of detracts.",
    Comments: "",
    Name: "BitGlitter",
    Date: 1534723200000,
    Url: "https://www.airwindows.com/bitglitter-vst/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is the ‘One Weird Trick’ perfect boost/pad, but in 6db increments ONLY.\r\n\r\nHere is one final trick for clean gain aficionados.\r\n\r\nTurns out the only way to get cleaner gain trim than PurestGain, with its high mathematical precision and noise shaping… is not to do any of that. No fancy math, no noise shaping or dither. Just a very narrowly defined boost or cut, in the form of a ‘bit shift’.\r\n\r\nDoing this means your waveform is scaled up or down by increments of 6 dB exactly. No 3 db, no 9, no 7 or even 6.001! Only 6 or 12 or 18 and so on, up or down. Select the number of bits you want to shift, and BitShiftGain applies the exact number, not even calculating it in floating-point through repeated operations: from a look-up table to make sure it’s absolutely exact and precise.\r\n\r\nAnd when it does, all the bits shift neatly to the side inside your audio, and whether you lose the smallest and subtlest or gain up and fill it in with a zero… every single sample in your audio is in exactly, EXACTLY the same relative position to the others. Apart from the gain or loss of the smallest bit, there is literally no change to the audio at all: if there was a noise shaping, it would have nothing to work with.\r\n\r\nPerfection, at exclusively increments of 6 dB. That’s the catch. You probably can’t mix with gain changes that coarse (though it’s tempting to try!) but here’s what you can do: you can take 24-bit dithers, gain down 8 bits in front and 8 bits up after, and have a perfect 16 bit dither. Or a 17 bit, if that pleases you… or shift 16 bits down so you can hear what your dither’s noise floor acts like (we’ll be doing lots of that when I start bringing out the dithers). +-16 bits of gain trim is a very big boost or cut. The overall range of BitShiftGain is huge. But the real magic of BitShiftGain is the sheer simplicity of the concept. Provided your math is truly, rigorously accurate and your implementation’s perfect, gain trim with bit shift is the only way in digital (fixed OR floating point) where you can apply a change, and the word length of your audio doesn’t have to expand, AND every sample which remains in your audio continues to be in exactly the same relation to all the others.\r\n\r\nDigital audio is like some crystalline structure: it’s fragile, brittle, and suffers tiny fractures at the tiniest alterations. There’s almost nothing you can do in digital audio that’s not going to cause some damage. But as long as you stick to 6 dB steps and rigidly control the implementation (BitShiftGain doesn’t even store the audio in a temporary variable!), you can chip away at that least significant bit, and the whole minutes-or-hours-long crystalline structure of digital bits can remain perfectly intact above it.",
    Comments: "",
    Name: "BitShiftGain",
    Date: 1479600000000,
    Url: "https://www.airwindows.com/bitshiftgain/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is like a moderately saturated analog limiter.\r\n\r\nWhat do you get when you cross an Airwindows compressor, with OneCornerClip?\r\n\r\nPretty much this. Okay, so it wasn’t a very difficult riddle, was it?\r\n\r\nBlockParty acts like a somewhat distorty limiter. It’s not at all about lookahead (in fact it doesn’t have any) or preserving tones pristinely. Instead, it takes the onset of sounds that would compress, and manipulates the attack in the way that OneCornerClip does. The threshold gets kicked way down, and gradually expands to full scale, and since the threshold’s determining compression, that means BlockParty doesn’t have a stable compression threshold. It’s interactive with the audio you’re giving it.\r\n\r\nBecause it’s on the OneCornerClip model, that means it’s a mostly-compressor with OneCornerClip-like behaviors. That means bass which blooms and has fullness even under heavy load, and highs that don’t poke out or distract. The result is a thing that sounds real analog-y but not super clean. You can use very small amounts of it (there’s a lot of gain on tap) to do peak limiting for loudness maximizing, or you can slam things into it for effect. It’s called BlockParty because heavily limited stuff sounds like blocks of loudness: it’ll get you some of those sounds, but not as cleanly as your classic ‘loudness war’ limiters. It’ll also smash drums and things in its own distinctive way, which might be its strongest suit. On the end of it is a clipping stage to make sure nothing you do will ever produce overs. The clipping stage is AFTER the dry/wet, so to get a true dry you’ve got to turn it off: this is because raw digital clipping is another style of loudenating, so if you were going super-hot into BlockParty and wanted to dial in some pure digital clipping you could use the dry/wet to do it (or, if including some dry would have given you overs because your direct buss signal includes overs).\r\n\r\nBlockParty is a fierce loudenator with a voice and style all its own, using techniques that are distinctly Airwindows. It might be just what you needed, or it might be a little too grungy for you… but either way, there’s nothing quite like it, so check it out.",
    Comments: "",
    Name: "BlockParty",
    Date: 1552176000000,
    Url: "https://www.airwindows.com/blockparty/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is One Weird Trick for drum overheads in metal!\r\n\r\nSo this is pretty simple, and pretty distinctive. I made it for my friend Tim (one day I’ll repost his amazing rant, on the brink of his possible death, to musicians about ‘stop buying DAWs! Stop buying mic pres and plugins and becoming sound engineers! Learn to play your instrument!’) and it’s possible it has only one user, Tim. If so, it’s okay. This is a weird trick, a very specialized little toy. I do think it’s good at its strange purpose, though.\r\n\r\nBrassRider is a drum overhead rider for metal mixers.\r\n\r\nHere’s the situation. If you are doing a metal mix of extreme brutality, you are probably making very intense, sculpted spot-mic sounds. You probably have a mic on every tom, every drum, perhaps also on key cymbals. And you probably have overheads, because hey, overheads. Drums use overheads, right?\r\n\r\nAnd your overheads probably aren’t helping you AT ALL. You’re getting ‘jazz drummer’, ‘classic rock’ snare and tom sounds poking through from the overheads, and you hate them. Yet, there are some cymbal crashes that should get into the mix. What to do?\r\n\r\nBrassRider does one thing (one weird trick!) to help you. It watches for crashes (noise like white noise) and it cranks the volume WAY up when that goes beyond a threshold. You turn up the threshold control to start engaging this behavior. There’s a dry wet control that you might not even use if your mixes are truly brutal and heavy (who needs reality?)\r\n\r\nSo then, BrassRider is cranking your overheads when the crashes are hit. So what you do is you bury the overhead mics in the mix, completely. And you use BrassRider to make them peek out only when there has to be a decent hint of crash cymbal in there. And most of the time, BrassRider totally kills the overheads so your drum sounds have maximum sculpted brutality and work the way you want them.\r\n\r\nI don’t sit around making metal mixes so I can’t demo this properly, and I made it so I’m not that concerned with doing the ultimate demo for people who don’t know what they’re doing and have to be sold on the tool. Tim would be disgusted with me if I went around trying to popularize this one and teach noobs how to use it. So, if all that confused you, this is not the plugin for you. Also, I’m not going to teach you how to use it in a metal mix (except maybe on Monday livestreams. ;) ) And if you know exactly what I’m talking about and you’re already dialing it in, a wild mad light in your eyes, well… you’re welcome :)",
    Comments: "",
    Name: "BrassRider",
    Date: 1554595200000,
    Url: "https://www.airwindows.com/brassrider-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "",
    Description: "is a plugin for very bright gated reverbs.\r\n\r\nBrightAmbience is one of the old secret weapons of classic Airwindows. It’s nasty enough to be pretty unique, and nice enough to be useable. What it does, is it sets up a BIG pile of delay taps spaced by prime numbers. There’s a decay control and a sustain control: the sustain will help with its CPU hungriness, the decay won’t. Dry/wet is at the top (what can I say, this was an early one) and wet tends to run HOT so you might like to use it as mostly dry and add its coloration to things as needed.\r\n\r\nIt’s CPU hungry because it’s using a really naive method of doing all that, but it also has a really distinct sound that differs from what you can get out of convolution reverbs. And since the distribution of delay taps is prime-numbered but also kind of naive, instead of getting a convincing room you get a sort of steel-chamber effect with a nasty resonance up near the Nyquist frequency. But that can work as a special effect. Back in the day I meant this to be a great reverb, but it’s not. However, it IS a great ‘crazy bright ambience effect’, though it’s pretty CPU hungry like I said. You can apply it to anything that you’d like a halo of shiny around, and its tone is nicer at 96K as I demo it. (the sustain is tied to maximum sample delay, so higher sample rates will give you shorter sustains and denser shininess)",
    Comments: "",
    Name: "brightambience",
    Url: "https://www.airwindows.com/brightambience/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "",
    Description: "is more BrightAmbience with better tone and more slapbacky effects.\r\n\r\nThis is just like BrightAmbience, except different in pretty much every detail. Techwise (skip to next paragraph if you like) it is using a totally different prime number series, ‘super-primes’ for its delay spacing, and then it’s offsetting alternately left and right delay taps to the next prime number in line, meaning that it’s a dual mono ‘ambience’ but center signals WILL get stereo spread. Also, there’s a kind of regeneration that was real tricky to do, but it means you can get a clean digital slapback, or any degree of ‘fuzzed out’ bright ambient slapback all the way to the wash of sparkly atmosphere, either subtly regenerated or cleanly gated.\r\n\r\nOkay, but what does it do, and what does it sound like?\r\n\r\nSuper ultra bright ambience space that doesn’t get in the way. You can put it on things like drums for 80s gated verb, you can do dub-like things through using it to make a blurry slapback, but this thing is bonkers at putting Star Quality Vocal Glitter on voices. You don’t have to have it loud, and you don’t have to stretch it out so long that it feels like a reverb. That’s not the point, this is about doing that classic Lexicon thing (without, I might add, using ANY actual Lexicon sounds or algorithms) where you can fill in a bright, glossy atmosphere around the voice that makes it sound like star quality. You probably don’t want to treat it like a reverb, on a send or whatever (maybe on a vocal bus? It’ll handle split harmony vocals very elegantly since it’s dual-mono). Instead you want to use it like your lead vocals alone go into a special chamber. Might also be an inspiring thing to monitor while tracking: I sure had fun playing with it in my headphones, and if it’s on your mix while tracking you might not have to print it on the actual vocal track. Everything about it is evolved from BrightAmbience, even the algorithm that makes it.\r\n\r\nOh, also if you’re a coder and want to get your hands on the delay taps, it took hours of looking up and typing in specific prime numbers, as there is no such thing as a ‘list of super-primes except every other one uses the next real prime after the super-prime, making the list pan every little echo to alternate sides using inter-aural delays’. And maybe you never even thought of such a thing. But if you think you can make use of such a thing, in the .h file (for the AU, anyway) is a definition of ‘primeL[]’ and ‘primeR[]’ that you can simply copy and paste. It’s 489 total entries which will get you a half-second or more out from the dry signal, even at 96k, and you just use ‘primeL[]’ and ‘primeR[]’ to specify the delay taps you want, typically in a range (like, entries 40 to 60 will give you a little ambient blur starting at whatever ‘primeL[40]’ is, which is 1031 samples)\r\n\r\nIt’s MIT license so you only have to shout me out and you can do anything you want with it… so don’t say I never gave you nothin’ :D",
    Comments: "",
    Name: "brightambience2",
    Url: "https://www.airwindows.com/brightambience2/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "adds undersampling for high sample rates, and better feedback.\r\n\r\nBrightAmbience is a very old plugin. The original was all about taking sounds coming in, and transforming them into lengths of extruded and very bright reverb. BrightAmbience2 transformed that, in turn, into a more adaptable creation that used inter-aural delays to create a subtle stereo effect like an aura around mono content.\r\n\r\nBrightAmbience3 adds undersampling. Now high sample rate mixes retain a consistent tone and reverb length to what the CD-rate plugin would do… and it’s more CPU-efficient running at the elevated rates… and the subtle darkening in tone makes it worth a re-listen.\r\n\r\nBut now, on top of all that, we’ve got a new way to apply feedback at the ‘wider’ reverb settings, which allows you to feed THOSE back too. And that means, BrightAmbience3 has just taken on a new life for a variety of vibey, distinctly analog-feeling blurred delay effects. Even the really wide reverb settings will still feed back at full crank (though they just give you a sort of droney resonant quality) and the medium settings produce a variety of unusual sounds that are a little bit like when you have a crummy old antique echo effect, and it has no clarity, but when you turn up the feedback strong retro flavors begin to take over… you can’t get clean infinite regeneration that way, but tune it to taste and dial back the feedback control until you have enough echo for your purposes.\r\n\r\nOr, ignore the feedback and just use it as BrightAmbience, but with a greater range of effect at higher sample rates, and a richer tone thanks to the undersampling.",
    Comments: "",
    Name: "BrightAmbience3",
    Date: 1626566400000,
    Url: "https://www.airwindows.com/brightambience3/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Broadcast",
    Date: 1311638400000,
    Url: "https://www.airwindows.com/broadcast/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a dither-making toolkit.\r\n\r\nI've explained how DoublePaul was made: taking a TPDF highpass dither, and including additional nearby samples to cause the tone of the noise to be more high-pitched.\r\n\r\nWouldn’t be fair if I didn’t give you a chance to play with it yourself :)\r\n\r\nTo use BuildATPDF the way I used it, set the middle sliders to -1 and +1. Then adjust the other sliders until you’ve tailored the sound of the noise in a way you like. With the other sliders at 0, you have PaulDither. If the surrounding sliders ‘oscillate’ (going minus, plus, minus, plus) you have more of what DoublePaul is. Tailor the highpass in ways gentle or obvious, or even darken the highpass while leaving its dither functionality intact! It’s the combination of a -1 and +1 tap that gives you highpassed TPDF. (This won’t work with +1 and +1, because it’s the same random noise passing through the plugin: it needs to play a positive node against a negative node)\r\n\r\nOr, you can set up the -1 and +1 taps, and then just play with the sliders to see what it sounds like!",
    Comments: "",
    Name: "BuildATPDF",
    Date: 1488067200000,
    Url: "https://www.airwindows.com/buildatpdf/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "4 is the Airwindows console emulations, now working up to 192K correctly.\r\n\r\nThis plugin’s a pretty huge deal: it’s been around since before console emulations were a thing, and I’ve been steadily working on it year after year. There’s not been much to do: my original algorithms, once I moved past the earliest incarnation as the ‘Character’ plugins, were so solid that it left little to do. BussColors has sold $22,445 of plugins over the years, as Audio Units alone, in spite of the fact that it has always been a 44.1K plug (due to being based on a convolution model).\r\n\r\nThe story there is, a guy at NoiseVault always wanted someone to make a plugin which used his sets of hardware convolution kernels, which he’d done at all different levels. Sort of the Nebula thing (Giancarlo has been a great help when I was getting the VST thing going, check out Nebula)\r\n\r\nI’m not that. I’m Chris from Airwindows… so I set out to make my own version of this sort of thing, with hardcoded algorithms generated on-the-fly, as raw and close to the metal as I could get it. And I got some pretty respectable CPU efficiency with all of the tone quality I wanted, limited to 44.1K.\r\n\r\nUNTIL NOW :)\r\n\r\nTry it. BussColors4 is the newest version of BussColors, and it works at any sample rate and gets you the same sound. Better, in fact: I like what it does a lot better at 96K and 192K. It also doesn’t greatly expand processing and CPU hit at higher sample rates. I think this one’s a real highlight of the Airwindows arsenal. It would definitely be worth your $50, like its predecessors (well, I always did give existing BussColors users free updates for life, I mean for new buyers). Feel free to shoot it out against the most expensive and/or CPU-hungry options and I think it will clobber all comers.\r\n\r\nThe sources of the models in BussColors are as follows: \r\n\r\nDark (originally Cider) is a Focusrite and resembles an MCI console a bit\r\nRock (also seen in the Logical compressor) is from SSL impulses, obviously it's SSL in nature\r\nLush (originally Neverland) is from Neve impulses\r\nVibe (originally in the Elation compressor) is from LA-2A impulses\r\nHolo (originally in Precious) is from Precision8 impulses\r\nPunch (originally in APIcolypse) is from API impulses\r\nSteel (originally in Calibre) is something else, I don't remember what\r\nTube (originally Luxor) is from Manley Massive Passive impulses\r\n\r\nAll of these run a form of dynamic convolution which means they are never EXACTLY what the source impulses would have them be: it's more complicated than that. So, treat them as original things, not as attempts to clone whatever original gear sourced the impulses. In the end, they're BussColors(4).",
    Comments: "",
    Name: "BussColors",
    Date: 1285545600000,
    Url: "https://www.airwindows.com/busscolors/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Comments: "",
    Name: "BussColors 4",
    Date: 1496534400000,
    Url: "https://www.airwindows.com/busscolors-4/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "BussColors2",
    Date: 1312675200000,
    Url: "https://www.airwindows.com/busscolors2/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "BussColors3",
    Date: 1342310400000,
    Url: "https://www.airwindows.com/busscolors3/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is my softest, smoothest compressor.\r\n\r\nSometimes a plugin can be a sort of cult favorite. That’s the story of ButterComp, a compressor of great subtlety that’s no use for quite a few normal compressor tasks… but still has a fervent following. I’ve been begged for the new version of this one (not merely VST, but revamped with all the current Airwindows sophistication and purity) and I’m delighted to bring it, though I think it might puzzle some people. If the stock Logic comp would do as well, this isn’t the plugin for you. But if you’re looking for a certain thing and thought it unattainable in software, this might be your lucky day.\r\n\r\nButtercomp, under the hood, is absolutely unique (or unique, until I start working on variations and until other people try to copy it. They’re free to, but it’ll be possible to test that quite easily with special audio files).\r\n\r\nIt’s a bipolar, interleaved compressor (with rather slow attack and release: a version with access to much faster dynamics is available in CStrip). This one’s the original, the cult classic. What is a bipolar, or an interleaved compressor? For the purposes of Buttercomp, it’s four totally independent compressors per channel. Two are sensitive to positive swing, and flip back and forth every sample. Two are sensitive to negative swing, also flipping back and forth every sample. The compression factor’s reconstructed through combining these poles, through the screen of the interleaved compressors switching back and forth at the Nyquist frequency… that mysterious digital frequency that is on the one hand the literal highest frequency that can be encoded, and the lowest frequency that ought to be totally rejected and filtered out.\r\n\r\nWhat happens is this: the tone of things gets some added second harmonic, wherever the compression is more strong on one side than the other. High frequencies take on a particular airy openness, since they too get second harmonic, plus individual sample spikes can only affect one out of four compressors: ButterComp deals with all samples only as samples relative to other samples, and doesn’t get thrown off by isolated samples that don’t represent the actual waveform. It’s got a sound, but the sound is hard to define because of its extreme fluidity and purity.\r\n\r\nIf this sounds like your idea of fun, enjoy ButterComp. If you’re looking for the ‘all buttons in’ mode, I’ll get back to the drawing board and probably do something totally different for you. This compressor is not for everybody. Also, if you start slamming it really hard (demonstrated in the video), it’ll volume invert: you can squish it down to become more quiet than the quiet passages, but still it will retain its tone quality. It’s perhaps best used as a particular kind of ‘glue’ compressor, at which it is exceptional… or maybe I should say, it’s unique. Start working with it and you’ll soon work out whether you’re part of the ButterComp cult. Not everybody will be, and it’s only one type of sound… but nothing else can get that sound, and this is why I’ve kept this purest form of the algorithm available.",
    Comments: "",
    Name: "ButterComp",
    Date: 1513468800000,
    Url: "https://www.airwindows.com/buttercomp-vst/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is improved ButterComp with an output control and sound upgrades.\r\n\r\nSo here’s what happened: in working on the new ButterComp, I found a mistake. Because of a thing C programming lets you do (assign, in an if statement) it turned out the original ButterComp didn’t actually use the interleaved compressors after all. The one in CStrip does, but actual ButterComp (which has its own distinct fans!) doesn’t. It’s strictly a bi-polar compressor: it does each half of the wave different, and blends them.\r\n\r\nBecause of this, I’ve made the source code (also being released) represent what the plugin actually does in practice. It’s a little simplified, and it’s worth paying attention to, for people who like the simplest most minimal form of ButterComp.\r\n\r\nBut, because of this, I get to release ButterComp2 as very much its own thing! I even came up with a subtle tweak: it modifies its release just a touch, slowing it when the signal’s hot. That’s on a sample-by-sample basis… and it’s on the OUTPUT of the compressor. So, this further smoothing effect is subject to the output level control. And the dry/wet. In fact if you had it all dry, the release modification is therefore as if you had it on the input… making it blend not only between positive and negative wave compression, but also between feedback and feed-forward release time modifications :)\r\n\r\nBut really what you need to do is listen to it.\r\n\r\nWith the interleaved compressors fully working AND the bi-polar compression on each, there is indeed the four distinct compressors working in parallel. The whole thing is very gentle (hence the name) but you’ll get a glue and tonal reshaping out of it as it will even out the bulk of the waveform, making it balanced between positive and negative. It’ll also soak up treble detail in a characteristic way, and you’ll really hear the quality of ButterComp2 on ambiences and reverb tails. It’ll float things in space in this holographic way… I thought it made for a significant tonal improvement over the simpler ButterComp.",
    Comments: "",
    Name: "ButterComp2",
    Date: 1538265600000,
    Url: "https://www.airwindows.com/buttercomp2/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is the original Console5 algorithm, with optional very gentle DC suppression.\r\n\r\nBack in December of 2017, I launched Console5. It had some innovations I’d come up with that got it to a height of sonic deliciousness I’d not reached before. I put it out Xmas morning… and immediately panicked and scrambled, because I’d been testing it with a sort of ‘choir’ and hadn’t thrown enough softsynths, etc. at it. And when you hit it with a intensely asymmetrical slew (how fast the waveform moves) it flipped out and began producing powerful DC voltages.\r\n\r\nEver since, I’ve been doing variations on Console5 (which all interoperate with each other) that avoid the problem. That same day, I rushed out a bugfix. I tried an alternate method for getting that tone, which wasn’t as good but was more resilient to DC offset. I came up with a good workaround for Console5, which watches for silences as a good place to pull back on DC, and set up the final Console5 that way. I released PurestConsole to offer a cleaner, clearer version that totally avoids the problem in the first place. I released PDConsole, because if you can’t have the original Console5 tone algorithm, why not have PurestConsole crossed with PurestDrive (which doesn’t have the DC issue)?\r\n\r\nAll the time, there were SOME sorts of audio that were fine… or mostly fine… with the original, special-toned Console5. Technically, nothing’s perfect: if you went for long enough under the original Console5, the DC would inevitably drift, unless the tones were really perfectly symmetrical. But it was a lost opportunity: the DC bug was so severe that the original version was forever lost, banished for endangering DC-coupled equipment and never to be heard again.\r\n\r\nUNTIL NOW :D\r\n\r\nDon’t use this Console5 version if you’re not willing to work with it and keep an eye on it. Much like the plugin DC Voltage, which simply turns the output into a fixed DC offset for signal-processing or testing purposes, C5RawConsole is capable of giving you signals that are bad for your gear. The final Console5 is very nice and automatically handles DC problems, PurestConsole can’t possibly give you DC issues, neither can PDConsole, and you can mix and match these if you like. There’s plenty of Console5 stuff out there if you just want to get some sounds and go.\r\n\r\nBut, that original algorithm captured people’s hearts. The way it handled the fabric of sound was something a little special… so now, that original Console5 lives again. The Xmas morning one, the ‘wow factor’, dangerous one. With one tiny detail added, that can make it tame if you know how to handle it.\r\n\r\nThe control ‘Centering Force’ defaults to 0.0, which is the ‘Xmas Morning’ setting. If you turn it up to maybe 0.7 or 0.8, you have the first bugfix, where the correcting force took away some bass just to make sure the problem was fixed. Cranked up, it’s a little bit like a highpass and you can use it to tighten non-bass tracks, seeing as it’s there… it’s like a free highpass, but very gentle slope. But if you keep it at 0.5 or below, Centering Force reacts so very slowly that it won’t touch your bass. I don’t think it’s really perceptible at 0.5, but you can always be even more cautious and go to 0.25 or so. At settings close to 0.0, it will take minutes to erode away any DC offset that sneaks in. And at 0.0 it’s completely defeated and there’s no centering force at all.\r\n\r\nThis is for the people who wanted that very first version back. You can couple the plugins with other, outboard DC correction filters if you like, or you can use the Centering Force (especially if you see voltages lingering anywhere in your mix, that tells you that you need to apply some). You can treat it like there’s a built-in highpass as part of the circuitry of the Console, and tune the dominance of your subs very conveniently without having to run an extra highpass (much less a multi-pole, steep-cutoff highpass). I guarantee C5RawConsole can be used for this, because it dials between the extremes nicely, from noticeable subs reduction at 1.0 to absolutely no reduction at 0.0, with a really really extreme exaggeratedly logarithmic curve making it so the middle setting is still pretty much no bass rolloff.\r\n\r\nI think this should give people a chance to play. I could’ve stuck with the final Console5, in practical terms I think that’s the one most people should use. But Airwindows people like pushing the limits, so I needed to make that possible. Now, if you use C5RawConsole and leave the centering force off, you have that untame, primitive version that came out first and was gone in mere hours in a frenzy of bugfixing. It’s what I made when testing obsessively against the ‘choir’ sounds, trying to get something special while still mourning the loss of my Mom, who sang in a choir. That’s where that first Console5 came from, and it pleases me to (with caution) bring back that original tone, and let people have access to it.\r\n\r\nJust be careful how you apply it, and if you see voltages hanging around (on tracks or the buss), put some of the Centering Force in! We could all use some of that :)",
    Comments: "",
    Name: "C5RawConsole",
    Date: 1521936000000,
    Url: "https://www.airwindows.com/c5rawconsole/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an Airwindows guitar speaker cabinet simulator.\r\n\r\nI’ve been asked for ITB guitar plugins before. Never been all that interested, because I like real amps and real tubes etc: have never found a lot of enthusiasm for going to great lengths to digitally fake all the colorations of some amp/speaker or other, because when the soul’s not there the color is irrelevant.\r\n\r\nThis is different. I took on the challenge of updating my old Cabs plugin: originally dynamically convolved cab impulses, except they hadn’t been MADE with that in mind so it became a series of wild experiments. I wasn’t happy… then.\r\n\r\nCabs completely overhauled everything I’d attempted. It’s undersampled, so it’ll run on whatever sample rate you like, efficiently. It’s got the same tricks of allowing you to heighten the particular speaker coloration it uses, or dial it right back to nothing.\r\n\r\nBut around that core is a completely different approach to getting ITB amp tones. I’m using the cab size and ‘room loud’ controls to let you dial in the exact presentation you want, from clear and up front power-soaked clearness to complete wall-of-stacks meltdown, and beyond (in classic Airwindows fashion). This is done through an alternate approach to loudness emulation based on the destruction of audio signals through ultimate volume, such as a Space Shuttle takeoff, and what happens to the waveforms there.\r\n\r\nI think you should listen to it. Careful that you don’t jump for odd settings right away and get confused: for instance, settings of Room Loud beyond say 0.6 are not really real-world things. Settings of the cab tone intensity beyond 0.6 or 0.7 might be a bit weird. The way the cabs take on character and intensity is related to cab size: everything is basically related to everything else. You have to know what sound you’re trying to get, to clone something real-world. This is not a preset box, at all, at all. You have to be a real guitar tone maven to dial this in to convincing amp clone territory.\r\n\r\nOR… or… or!\r\n\r\nYou can use the range of adjustment here, with the controls that give you a basic idea of ‘what you’re doing and how you want it’, combined with for instance Edge or the upcoming Dirt plugin (softer saturation) to get tones that DO NOT EXIST but act like real amps in significant ways. You can get tones that you can’t get in the real world, and dial them in to match what’s in your head: in some cases maybe to a point that the real world amps couldn’t reach.\r\n\r\nAnd track through them because the whole rig (when using entirely Airwindows plugins) runs NO LATENCY, so it’ll feel as close as it can to the real thing, and respond with electric immediacy.\r\n\r\nAnd then unlike any real amp situation… once you’ve got the final mix done, you can wiggle any of these parameters to where they need to be for THE SONG and tune the tones to best suit whatever else is there, even if it didn’t exist when you were tracking it. This is a freedom of the DAW experience (don’t go too overboard, make decisions!) and it might bring you the results you need.\r\n\r\nAnd all of this can be lightly applied to any other tone: real genuine amp-and-cab that was tracked too quietly or didn’t pick up enough mojo, synths, drums, you name it!",
    Comments: "",
    Name: "Cabs",
    Date: 1645920000000,
    Url: "https://www.airwindows.com/thenewcabs/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "CabSVT",
    Date: 1177286400000,
    Url: "https://www.airwindows.com/cabsvt/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a re-release of another old Character plugin.\r\n\r\nCalibre is another Character plugin, re-released in AU and VST form. This one’s got kind of a steely quality and if you hype the Character control there’s a point where bass cancels out: weird variation on a tone control! Also, that means if you duplicated the track (or used Blue Cat Patchwork or something) and flipped phase, you’d get a really unusual lowpass and would have only the bass and a lot of strange color.",
    Comments: "",
    Name: "Calibre",
    Date: 1584835200000,
    Url: "https://www.airwindows.com/calibre/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a lowpass/highpass filter of a new type.\r\n\r\nSometimes half the fun is just inventing :)\r\n\r\nPeople say all filter plugins are just biquads with different GUIs. It’s not true… or at least it’s not true at Airwindows. (actually I have to see what I can get out of biquads: I generally don’t even use ’em at all)\r\n\r\nThis is a new filter. When I say new, I mean that you don’t have it. I can demonstrate that, because due to the way it works it has a little characteristic response quirk at 1/3 the sampling rate: nothing that hurts the sound, just an odd little notch under some circumstances.\r\n\r\nBecause it’s a typically Airwindowsy, not-normal EQ algorithm, nobody has tried it, and because of the little quirk, if anybody did try it they knew they had to reject it, because it wasn’t perfect. It had a quirk! And even if they experimented, they probably weren’t that invested in concepts like the sequence of operations on stuff that, in theory, could be done in any order. Why care so much about the implementation details of an idea that had a quirk anyhow and was therefore useless?\r\n\r\nMore fools they :)\r\n\r\nBecause musically, this filter has tone for DAYS.\r\n\r\nThere’s almost an analog-synth-like effect to it: though it doesn’t accentuate the rolloff point, it behaves almost like a DJ ‘isolator’ in the obviousness of its filtering. It has a highpass, a lowpass, and dry/wet, and the high and lowpass are melded into each other as part of the algorithm to get the sound more fluid. It’s also got new experiments in rejecting zipper noise and clicks, because I’m figuring people will want to automate this one. But, even though it’ll work for crazy effects and ‘isolator’ madness, the fullness of the tone will also let you use it in mastering: if you need to tighten bass or roll off just a hint of brightness, you’ll pay no penalty in the body of the music. And the dry/wet is there to let you treat it as a shelf… or to create a presence boost by isolating an area of interest, and then leaving it mostly dry with a hint of the clarified zone.\r\n\r\nI’m thrilled with this filter, and nobody else has it: nobody else would be allowed to do this one, because it has a quirk at 1/3 the sampling rate, and typical commercial developers are not allowed DSP quirks. But, since I’m supported by Patreon, I am.",
    Comments: "",
    Name: "Capacitor",
    Date: 1486857600000,
    Url: "https://www.airwindows.com/capacitor/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is Capacitor with extra analog modeling and mojo.\r\n\r\nDidn’t see this coming!\r\n\r\nMy researches led me to a webpage by the electronics company Murata, and an observation: for a particular line of capacitors they make, namely high dielectric ceramic caps made of barium titanate, there’s a concern. The capacitance drops sharply if you put the capacitor under voltage pressure. How much? As much as 50% for a little over six volts. It’s pretty linear. Thing is, the signal is ALSO a voltage. What if it tended to modulate the cutoff? As part of analog modeling?\r\n\r\nI have plugins, the old Lowpass and Highpass, which frequency-modulate the cutoff based on the input signal. But they did it symmetrically… what about doing it the way the real-world capacitor would do it? What would you get, in the event that other capacitors had some of this behavior? It seemed like you might get a lot of even harmonics, and people tend to like that. Why not give it a try?\r\n\r\nAnd that’s how something interesting got discovered.\r\n\r\nCapacitor2 is Capacitor, already a popular plugin, but with this analog modeling built in. There’s a ‘NonLin’ control that lets you crank up the distortedness from very minimal, to quite extreme. It’s sensitive to input level (naturally) so that’s another reason to have it on a control.\r\n\r\nAnd what you get is INTENSE analog coloration, and something unexpected: it emphasizes transients and brings out the articulateness of sounds in a really distinctive way. You may not have heard anything quite like this… or if you’ve been using analog gear, maybe you’re used to hearing it. I really didn’t plan for the result I got: if real-world caps have any of this behavior, it explains a lot. Literally all that’s happening is modulating the cutoff frequency of the rather Airwindows-y Capacitor algorithm. There’s no dynamics processing in there at all, but the result is incredibly dynamic. (you can even use it to boost narrow bandpasses for effect!)",
    Comments: "",
    Name: "Capacitor2",
    Date: 1595721600000,
    Url: "https://www.airwindows.com/capacitor2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "",
    Description: "is a feedforward reverb based on the golden ratio.\r\n\r\nI actually meant to do something completely different. Honest.\r\n\r\nIt was time to dig into the feedforward reverbs again, maybe rearrange them in some interesting way. Do something with the geometry of them, have them go two-into-three-into-four or something along those lines, and we were hanging out in the Monday coding livestream, starting to experiment… and one of my crew tossed out a sequence of numbers. Fibonacci numbers. Could we hear what those sounded like as delay constants?\r\n\r\nWasn’t bad. Chat got buried in Fibonacci numbers for a while: we are always enthusiastic at finding weird applications of things that shouldn’t be any use. After all, to get reverb tails to become seamless, the delay constants have to be set up properly. Prime numbers are key. Fibonacci sequences have nothing to do with this. And then, someone in chat observed… as the Fibonacci numbers get bigger they start approximating to the golden ratio.\r\n\r\nYoicks, scooby! We’d better try it! AND THEN…\r\n\r\nChamber is a feedforward reverb, using three banks of four delays each in a Householder feedback matrix, except it’s feedforward. Only the very end feeds back into the beginning again, just like Verbity, just like Galactic (it is dual-mono like Verbity, as its peculiar merits fit well with a dual-mono arrangement). And the delays go to a longest delay (maximum delay size) and each one in turn, back to the first, is exactly the golden ratio smaller than the previous. It’s like a big spiral of delay times, perfect to lots of decimal places. If you listen to just one instance of each delay (by turning Longness to zero, and Chamber lets you HAVE literally zero feedback), that’s a weird stuttery slapback. By itself, an arbitrary little chirp, a complicated slapback that doesn’t sound particularly interesting.\r\n\r\nAnd then if you turn the feedback up, with Longness, it stretches out into a continuous, seamless, perfect reverb tail, just as if all the delay times had been worked out to be perfect little prime ratios.\r\n\r\nThis was an astounding discovery. It means you can dial in any degree of feedback or none, use any delay time (everything’s calculated out on the fly), do anything with it and it’ll adapt. It’ll always sound like a chamber, hence the name, but it’s maybe more malleable than any reverb I’ve ever made. And to make it even more malleable, Chamber’s Darkness control is tweaked so that the fall-off over time is always accurate to the sound of audio decaying in air in a theoretically ultimate room (studied from recordings of giant underground concrete cisterns) but the tone-shaping is darkened using very warm, basic IIR filters. And on top of that, a new control for the feedforward reverbs: since Chamber is such a studio tool, I gave it a highpass. So you can plunk it on any sort of buss or channel, run it mostly dry, bring in the reverb (Chamber and Verbity are designed so as you add verb, the dry remains unaltered until you get to 0.5 on the Wetness control, at which point the verb is at full volume and you start fading the dry signal) and then begin dialing back the bassiness of the reverb without touching the dry. Very useful for a chamber or plate send, and built right in!\r\n\r\nHope you like it. Oh, and one more thing: in working on this, I found a bug that was in the Undersampling code I use. The bug was making a bit of unwanted edge, only in high sample rate stuff, only above 20kHz. I’d had someone discover this in Verbity, but I didn’t know what to do other than filter it at the time, and hadn’t done anything yet.\r\n\r\nSo now (as of right now: redownload what you need) Verbity, Galactic, IronOxideClassic2, and Chamber are FIXED. Go back and redownload them, or get them out of the collections for various different platforms. They have all had the ultrasonic noise cleaned up: there is still a touch of audio there as part of the algorithm, but it turns out it’s much less than I thought and that’s reflected in cleaner sound. It should not change saved mixes significantly as it is entirely supersonic, but if it did it would only help as the traces of noise weren’t useful for any purpose, they were a bug, samples being slightly out of order at 96 and 192k. No change at 44.1 or 48k.\r\n\r\nChamber actually goes a step farther, in that I added more code that subtly averages the supersonic samples… that can apply to new plugins going forward, but Verbity, Galactic, and IronOxideClassic2 don’t have that as it could work like a tone change. So, compare the new Verbity to Chamber if you’d like to check out the tiny amount of added depth we’ll have going forward.",
    Comments: "",
    Name: "chamber",
    Url: "https://www.airwindows.com/chamber/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Channel",
    Date: 1191888000000,
    Url: "https://www.airwindows.com/channel/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Channel2",
    Date: 1285286400000,
    Url: "https://www.airwindows.com/channel2/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Channel3",
    Date: 1311465600000,
    Url: "https://www.airwindows.com/channel3/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a tone coloring plugin that gives more of an analog feel.\r\n\r\nChannel4 uses a very good-sounding saturation function, a calibrated slew clipper and a highpass to approximate the tone coloration of a recording console. (the plugin Console4 approximates the space and depth on the mix buss, which is different.) Because the bandwidth-limiters are set up based on measurements of real gear (through impulse responses), Channel4’s console type is labeled ‘Neve/API/SSL’. It doesn’t actually contain any of those things or any convolution kernels, but the presentation of the sound ought to suggest those voicings.\r\n\r\nThere’s also an argument for doing it that way, because in many cases you can’t hear those limitations unless they’re being way overloaded. Channel’s a very clean, pure ‘coloration’ plugin, especially with the drive kept at 50% or under. It’ll voice extreme sounds the way it’s labeled, but you would struggle to consistently set plugins like Slew to those targets because mostly you can’t hear what it’s doing, especially on normal/musical sounds.",
    Comments: "",
    Name: "Channel4",
    Date: 1471219200000,
    Url: "https://www.airwindows.com/channel4vst/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is Channel for 2018, with new subtleties.\r\n\r\nChannel has long been a sort of test-bed of mine, and so when I started working with new methods for some of my stuff it was an obvious choice. I’ve been asked for an extra Output level control, which it has (for those of you who are really into level matching, can’t fault you for that though sometimes I think it’s not relevant) but if you set Output to 1.0 it bypasses itself and becomes exactly, exactly the same as Channel4.\r\n\r\nExcept for two things, which first appeared in Atmosphere: this lets you A/B them with the original versions, using Channel 4 and 5.\r\n\r\nOne, I introduced the concept of live air denormalizing: before this (and on plugins I think are suited to it), Airwindows plugins watched for total digital black silence, and if it was present, produced an impossibly faint hiss sound, at around 300 dB down. If there was any audio at all that wasn’t digital black, this got switched off. With Atmosphere, it’s different: the denormalizing signal is always there, and if the result WITH the signal is digital black, then the signal’s subtracted again. Same result, but there’s a permanent noise hundreds of times quieter than typical ‘noise adding plugins’. The idea is that there can be no ‘dead’ silence, only ‘alive’ silence: you can’t save the file in normal formats and retain it (24 bit audio saving will simply turn this noise to digital black again), you most likely can’t hear it ever no matter what you do, but I wanted the deepest darkest silence to be alive rather than dead black nothingness.\r\n\r\nTwo, it noise shapes to the floating point buss differently, and on the one hand I bet you can’t consistently hear it but on the other, I think it matters. Before, I used an interleaving technique much like I often use in IIR filters and plugs such as Capacitor. It related to the sample rate by forcing everything to be considered as the interaction between two or more samples, and the energy being brought back into the output audio provided corrections at high frequencies. What began with Atmosphere, and what you’ll (maybe) hear with Channel5, is a completely different and more radical approach. These plugins noise shape ALL the error energy back into the audio. It accumulates, sticks around, and so it can contribute to bass energy in tiny amounts because it persists over thousands and thousands of samples. There’s a ‘pull-back’ in the form of multiplying the amount by something like 0.999999, which will bleed built-up energy away, but this multiply doesn’t happen on a per-sample basis. It happens per BUFFER. So, in the world of noise shaping floating point error, this is the one that stores up every tiniest bit of error and applies it, not interleaved but very smoothly, to the audio.\r\n\r\nWhat should happen as a result of this is, there’s a sense of ease from switching from interleaved to the smooth way. It might seem a little less lively, and I’ll have some plugins that retain the other way. But due to the greatly increased time during which the error is held, plugins that use the new noise shaping will be crazy good at presenting analog-like, seamless bass and mids. So, more soothing, possibly less exciting, but a huge jump in depth and naturalness.\r\n\r\n…in RELATIVE terms to what was there before. That’s the thing. I feel it’s possible that when you get used to it the change can be dimly sensed as a good thing. I don’t think you, or I, or anyone would be able to pick this out double blind. I can think of a mastering guy or two that MIGHT, but they’d struggle: these are people who take pains to dither to 24 bit and say that they sense something wrong if they don’t. It’s on the order of that, or even more subtle.\r\n\r\nBut I do feel that one eventually senses the full range of a sound one works with, and more importantly if I can make something better I will do so, without hesitating.\r\n\r\nHave fun playing with Channel5. And if anyone needs to sound the alarm and say HEY! You need to stop using the new stuff! That noise is driving me crazy, and your noise shaping sounds awful now!\r\n\r\n…well, that’d be pretty funny :)",
    Comments: "",
    Name: "Channel5",
    Date: 1526169600000,
    Url: "https://www.airwindows.com/channel5/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "uses the Spiral algorithm.\r\n\r\nI use the plugin Channel to test out my latest code regarding things like how to prevent denormalized numbers, what’s the best noise shaping to return to the floating point buss, and so on. That’s because after a fairly brief debug period (at first, the model-choosing popup wasn’t actually changing anything and you always got SSL behavior) the plugin was established as a totally complete plugin: it always used the same ‘Density’ algorithm for the saturation, it always blended that with dry signal using a drive control that was really a dry/wet control (which gave it its openness at partial settings), and it always used the same slew clipping and simple IIR highpass code each time, which was so simple that it couldn’t be improved.\r\n\r\nAnd it’s always been ‘one’ of my most popular and successful plugins, through all those variations. Once there was a big blind shootout on the most popular plugin forum (back when people did that) and someone put up my stuff against several contenders including the most hyped plugins out there. At the time I was selling plugins for $50 a pop, and I’d hoped someone would pick BussColors and do a comparison against my flagship tone-emulator, and have it clobber its rivals in blind testing.\r\n\r\nInstead they picked the latest Channel, and used its settings of ‘API’ and ‘Neve’ and ‘SSL’ (in other words ‘slew clipping and a simple highpass and Density’, no real ’emulation’ just shaping set to calibrated amounts), and that free plugin was the one that clobbered the pricey rivals. And soon blind testing went out of fashion, because such shenanigans get embarrassing I guess :) And I didn’t get any sales out of it as Channel was free, but it was fun to watch.\r\n\r\nSo will this be…\r\n\r\nChannel is back in version 6, and there’s one key change. The distortion algorithm which I thought was unbeatable has now been beaten by Spiral… so now Channel uses Spiral, not Density, for its distortion model! For once this should be a plainly audible change: Spiral’s less fat-sounding than the Density algorithm. (I fixed the bug with the dry/wet control in the video: now dry doesn’t clip)\r\n\r\nWhat won’t change is this: you’d be surprised how little ‘processing’ can give you a great, analog-style sound. Literally all Channel does is apply a very simple IIR highpass, add a distortion that’s very clear and pure-sounding, and do a slew clipping set so high that it will almost never kick in. The highpass isn’t very steep, because it’s just one stage of interleaved IIR filter (a trick I use in a more complicated way in Capacitor). These are subtle, gentle differences… but they’re done with absolutely minimal processing, not tons of processing, and the data integrity is kept pristine through long double math and noise shaping to the floating point buss. In simpler terms: this doesn’t suck your tone like heavy digital processing does, this applies ‘hardware-like’ changes calibrated to measurements of real hardware, and this does it at impressively low CPU compared to other plugins of this type.",
    Comments: "",
    Name: "Channel6",
    Date: 1535241600000,
    Url: "https://www.airwindows.com/channel6/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "improves slew clipping and lets you blend Channel 6 and 5.\r\n\r\nShort and sweet. You know how Interstage got an update because the slew clipping was too intense on high sample rates? This applied to Channel, too. So, Channel7 now handles high sample rates better than any previous Channel.\r\n\r\nThere’s more: Channel5 was the last one with the ‘Density’ algorithm, that’s extra fat-sounding. Channel6 got the Spiral algorithm, much purer and clearer… but without that fatness effect Density gets. My attempts to make a special algorithm that does both gave me Mojo and Dyno… neither of which are Channel or a replacement for either Spiral or Density.\r\n\r\nSo, Channel7 simply goes to 200%, not 100%. Up to 100% it’s the same as Channel6, but with the slew clipping fix. From 100% to 200% it does a crossfade into Channel5’s Density algorithm—so it ends up being best of all possible worlds. You can seamlessly go from perfectly clean, to the purest saturation there is, and beyond that to add any degree of fatness you like to the sound (and it fades between Spiral and Density, so there’s extra subtlety to the way it transitions).\r\n\r\nChannel7: yeah, you’re pretty much going to want this upgrade no matter which Channel you liked. It is all of the best, more effective than ever.",
    Comments: "",
    Name: "Channel7",
    Date: 1568505600000,
    Url: "https://www.airwindows.com/channel7/"
  },
  {
    Use: "",
    Type: "",
    Description: "is Channel7 with updates from Capacitor2 and Slew3. More and better of what Channel is.\r\n\r\nChannel8 is a subtle ‘analogifier’ that applies saturation boosts, subtle highpass filtering, and slew clipping. What that means is, there’s a ‘drive’ knob you can turn up to boost things, and you can pick three ‘flavors’ you might recognize. They’re not really the consoles associated with those things, but they are calibrated to take effect about the same way, and when you use Channel8 (on tracks, on the mix buss, wherever) you add a little ‘analog flavor’ by restricting what the audio can do, in ways that are characteristic of real analog gear’s limitations. This restricting can help make things sound bigger and more solid.\r\n\r\nThis is basically the newest evolution of Channel, which has always been one of my most popular plugins. It uses the improvements in Capacitor2 and Slew3, so basically it’s still relatively subtle, still very much Channel, but it’s taken on a new level in quality and natural tone. I’m real happy with it, and I’ll be returning to trying to fix up my video setup etc (and finishing up the dither re-releases, etc etc) knowing that I’ve dropped a nice audio bomb on the world. If you ever liked Channel, this should make you real happy.",
    Comments: "",
    Name: "channel8",
    Url: "https://www.airwindows.com/channel8/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is Channel8 with ultrasonic filtering, and new Teac and Mackie 'low end' settings.\r\n\r\nChannel9 retains everything it had—the two-stage drive control, the newly improved highpass, the slew clipping—the same calibrated Airwindows algorithms to not clone, but give you the general sense of various fancy name brand consoles in a cleaner, less ’emulated’ way which lets the music through…\r\n\r\nBut now, Channel9 has the same ultrasonic aliasing-filtering that’s come to Console and other recent Airwindows plugins. In a new way! Because Channel9 isn’t just sticking to ’20k’ as its definition of supersonic. Instead, Channel9 steepens its filter with a teeny resonant peak at this cutoff point… and then selects it in keeping with what the real console would be doing, if you had it! The Neve is the most extended, well beyond 20k. The SSL cuts off tighter, gives more audible sparkle (due to the additional gain stages in a really huge SSL desk, the cutoff will be steeper over the entire desk). API is between the two. The lift at the peak comes before the saturation stage, for better smoothness when the console is being driven.\r\n\r\nAnd then I went and added two MUCH more affordable ‘models’, with their own usefulness.\r\n\r\nThe new settings are ‘Teac’ and ‘Mackie’. That’s right, old school house/techno classic basement mixers! The Teac, I was able to reference recordings of a real unit. I didn’t get it perfect as the real board had a noticeable high-mids peak that doesn’t belong in Channel, but it’s the correct kind of dark and vibey. And the Mackie’s my take on what you get out of the classic vintage 1202: A hair leaner than the Teac, but brighter. They both grind a bit harder than any of the big expensive desks, they both have slightly more exaggerated reshaping of the deep bass (using the Capacitor2 algorithm, like the others), they both control the brightest highs much like you’d get in a classic old low end mixer. It’s two new settings that follow entirely different rules than the big guns, for folks who know how to use an actual mixer much like metal guitarists use a Tube Screamer.\r\n\r\nYou can still have your fancy desk models (only better: the ultrasonic filtering brings just the right additional distinction to the models) but now you can go cheap and get the tone and vibe of some house music warhorses. The sonic reshaping these low end models do is just the ticket for sculpting relentlessly synthetic sounds into an appealing result. And since it’s Channel… it won’t have the noise of the real ones, it won’t have weird extra colorations, it’ll honor more of your real mix as it reshapes it: sort of best of both worlds! You can always add funky colorations or noise to your digital mix, but you can’t remove that stuff from the real mixers. Channel9 will shape your sound in ‘classic’ ways but along Airwindows lines: getting out of the way so your sound is interfered with as little as possible.\r\n\r\nChannel9 can be used anywhere you like. If you’re doing a Console mix, I’d put it after ConsoleBuss. If you’re not doing a Console mix, you can literally do anything you want with it: it’s a subtle distortion/fattener combined with a set of careful tone shaping algorithms. Hope you like it!",
    Comments: "",
    Name: "Channel9",
    Date: 1610841600000,
    Url: "https://www.airwindows.com/channel9/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "ChannelEQ",
    Date: 1172102400000,
    Url: "https://www.airwindows.com/channeleq/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Character",
    Date: 1285027200000,
    Url: "https://www.airwindows.com/character/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "cheap-ass-rhymes",
    Url: "https://www.airwindows.com/cheap-ass-rhymes/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "chord-organ-redux",
    Url: "https://www.airwindows.com/chord-organ-redux/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "chord-slide-rule",
    Url: "https://www.airwindows.com/chord-slide-rule/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a mono chorus, also works as a vibrato.\r\n\r\nHere’s the start of some modulation plugins: Chorus will give you a nice basic mono chorusing effect, sweeping one moving delay tap against the dry signal. What makes it unusual is a pile of odd Airwindows things to adjust it this way and that.\r\n\r\nThe sweep is done with a peculiar Airwindows interpolation which both applies a bit of an averaging function, and also a subtle lift to highs to compensate for that. The idea is to have the moving part be totally fluid, analog-like, even though it’s digital.\r\n\r\nTo drive that, there’s a treble boost going into this smoothing delay tap, and it’s based on the Airwindows Energy algorithms: that means this plugin interacts with the raw sample rate in two different ways. It’s designed to make it so, whatever the sample rate, the sounds project through to the most extreme highs without edge or dullness. That means Chorus won’t sound exactly the same at 44.1K, 96K and so on: it will try to deliver the most finely tuned treble for each sample rate, whatever that is, and the tonality might be different. Also, since it’s running a delay buffer, it’s giving you full use of the buffer at all times: the broader settings might be more useful at high sample rates.\r\n\r\nIn general, this should be pretty approachable. Hope you like the tone: there’s more where that came from.",
    Comments: "",
    Name: "Chorus",
    Date: 1503792000000,
    Url: "https://www.airwindows.com/chorus-vst/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "Chorus2",
    Date: 1298246400000,
    Url: "https://www.airwindows.com/chorus2/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a more complex, multi-tap mono chorus.\r\n\r\nHere we can fill out the Airwindows palette of modulation plugins a bit… like Chorus, this is using my special slightly dark interpolation with a little pre-sparkle to get an adaptable, rich chorusing effect. But ChorusEnsemble uses a bank of chorus taps to get a more complex, textured sound that’s farther from the original. You can set it wrongly, so don’t assume all the settings are appropriate: that said, a little care should give you nice lush chorusing that’ll work great on pads and backgrounds. The reason I allow for the ‘ugly’ settings is, who’s to say you might not have a use for them, and if you find that use you’ll have a tonal element that other people don’t have on tap (generally, it’s so hard to sell plugins that can sound wrong and broken that people will tend to shun that and limit you to ‘nice’).",
    Comments: "",
    Name: "ChorusEnsemble",
    Date: 1505606400000,
    Url: "https://www.airwindows.com/chorusensemble/",
    Category: "Ambience"
  },
  {
    Name: "Chrome",
    Description: "Oxide is an alternate path to vibey old tape sonics.\r\n\r\nChrome Oxide was an experiment, one that didn’t go further than this. It is a dual-band tape emulation, where the lows are a bit saturated but the highs are delayed by a random noise warble that can also be biased to delay them a bit further. My pursuits of tape emulation have always gone toward the ‘BETTER than digital’ direction, where I tried to capture the magic without diving into the audio degradation.\r\n\r\nBut revisiting Chrome Oxide (and re-releasing it, with modern wordlength handling etc and dithering to the floating point output buss) showed me a plugin that excels at some tonalities I didn’t even know about when I made it. For instance, your Boards of Canada type stuff, mulch-core audio where it sounds like it’s coming off an old Walkman or Wollensack? This will not do crazy pitch wobbles or dropouts… but you can instantly, effortlessly get the tone of it. The intensity controls a noise effect that is FM, frequency modulating the highs against the lows. Bias further delays the highs, and this sculpts the phase aberrations of the output and the flavor of roll-off… so, without ever getting aggressive or obvious, you can just dial-a-mulch and go as fuzzy and old-sounding as you like, but musically. It is subtle enough to use on anything and aggressive enough to completely change the mood of a track.\r\n\r\nAnd now you can have it. Mulch away! You don’t have to obliterate a track to get into the vibe you crave. (and of course some people hate this sort of thing: if you doubly hate this one, I’ll know I’ve done it right :D )"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "Chrome Oxide",
    Date: 1590278400000,
    Url: "https://www.airwindows.com/chrome-oxide-vst/"
  },
  {
    Category: "Saturation",
    Name: "Cider",
    Description: "is a re-release of another old Character plugin.\r\n\r\nCider is another Character plugin. Works like the last few, sounds kinda like an MCI console? This plugin was posted on a week full of troubles, so there's very little instruction about it. It's a tone coloring plugin, and you can find a more current version of this sound in BussColors4 on the Dark setting."
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Cider (and Beyond Snares)",
    Date: 1585440000000,
    Url: "https://www.airwindows.com/cider/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Circle Of Fifths Reference Wheels",
    Date: 1601856000000,
    Url: "https://www.airwindows.com/circle-of-fifths-reference-wheels/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Clicks",
    Date: 1413763200000,
    Url: "https://www.airwindows.com/clicks/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "Clip",
    Date: 1286409600000,
    Url: "https://www.airwindows.com/clip/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "Clip2",
    Date: 1316476800000,
    Url: "https://www.airwindows.com/clip2/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a clipper plugin that suppresses the brightness of digital clipping without affecting unclipped samples.\r\n\r\nHere’s what I’ve done. I started with Clip2 and the original Clip freebie, and I used the new plugin as a way to experiment with ideas about the recurrence of mathematical constants. For instance, a common value used in reverb allpass filters is 0.618… which can be continued into a mathematical constant, the Golden Ratio (0.618033988749894848204586). It’s common for these things to turn up in disparate situations, so I look for them. And in the code where OneCornerClip rapidly converges onto full clipping with the broadest resulting variation of clip onset tonality, I found it zeroing in on cos(x) == x (0.739085133215160641655312) and selecting that optimal value for the guts of the thing I ended up with ClipOnly.\r\n\r\nIf you watch the video (one of the least necessary to watch for instructions: it’s a clipper at -0.2dB) you’ll see a lot about the other factors that went into ClipOnly. I show ADClip and its many controls, but then make an impassioned case for designs like ClipOnly, a known quantity with a predictable sound and no controls or adjustments whatsoever. Under normal circumstances there should be nothing you’d want or need to adjust, since the clip level combined with the anti-glare prevents any ‘digital reconstruction overs’ in normal use. It doesn’t do anything tricky to ‘enhance loudness’ beyond what it already is, unlike recent ADClip versions. It does have a very sophisticated enter/exit clip behavior, but to put it bluntly you don’t need to be thinking about that when mixing into a safety clipper (or tracking into such a mix).\r\n\r\nIn fact, you should not be thinking of that OR me while tracking your music and mixing it, you should be thinking about the sounds you’re making, and any distraction into the lands of ‘oh gee Chris is so clever, ClipOnly was well worth the money, look at all these knobs’ is hurting you even as it rewards me, the plugin developer, with attention.\r\n\r\nAnd THIS is why I program things like ClipOnly, where possible. It might be the most forgiving safety clipper yet, as far as avoiding glare and harshness (I’m measuring extreme highs as much as 12 db down from the max under heavy load, and usually clippers by their nature exaggerate ‘crunch’ even when perfectly implemented). But ClipOnly is also part of a concept that I can run with now that I use Patreon: I get to make stuff that’s not showing off, either with controls or concepts or fancy faceplates, and just delivers the sonic goods.\r\n\r\nI hope you like ClipOnly, but I also hope you quickly stop noticing anything about it, so you can focus on your mixing. You should be able to work into it, even hit it with heavy load and severe clipping for effect, without fussing or being distracted. The best silver bullet plugins are not the trickiest :)",
    Comments: "",
    Name: "ClipOnly",
    Date: 1473811200000,
    Url: "https://www.airwindows.com/cliponly/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "suppresses the brightness of digital clipping without affecting unclipped samples, at any sample rate.\r\n\r\nClipOnly2 is the heart of my mastering-grade clipping algorithm. Instead of trying to define the cleanest possible nasty sharp edge, or doing a soft-clip thing, ClipOnly passes through ALL nonclipped samples totally untouched… but when you get a clipped sample, what ClipOnly does is it takes the sample entering clipping, and the sample exiting clipping, and it interpolates between the last unclipped sample and the clipped stuff. So, it is synthesizing a soft entry and exit from what is otherwise total hard clipping, and if only the one sample clipped? That very bright clip simply goes away, turned right down.\r\n\r\nThis produces a hard-clip suitable for safety clipper purposes, which is purely ‘bypass’ (plus a one sample delay to allow for the processing), with softer highs than you’d get from any pure hard-clip, no matter how oversampled. It’s an alternate technique, and is also pretty CPU-efficient.\r\n\r\nClipOnly2 takes this principle and changes the ‘one sample’ to ‘the space of one sample at 44.1k’. Same tone, same ear-friendly approach to clipping extreme highs, except that now it’s effective at high sample rates. I’m demonstrating it and its predecessor at 96k, but ClipOnly2 is designed to work up to 700k or so, in case people get giddy with their newfound power :)",
    Comments: "",
    Name: "ClipOnly2",
    Date: 1635638400000,
    Url: "https://www.airwindows.com/cliponly2/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "models the types of distortion you'll find in transformers.\r\n\r\nCoils is like the inverse of Focus. Instead of boosting/distorting UP the mids, it saturates DOWN the extreme highs and lows leaving the mids untouched. Because it’s a fixed mid shape mimicking the Neve transformer picture I was shown, the biquad doesn’t have to run inside Console as it’s not a high-Q filter at all (you’ll notice way more of an effect on steep filters) so it trades off that effect for less processing. The saturation is the Density algorithm, but without clipping, so if you trash it you get wrap-around on the transfer function curve, which works out to be kinda transformery.\r\n\r\nThe top control increasingly distorts (still kinda subtle), the middle one DC biases the core (second harmonics!) which does more when you’re less saturated, and then there’s a dry/wet. Enjoy :)",
    Comments: "",
    Name: "Coils",
    Date: 1576368000000,
    Url: "https://www.airwindows.com/coils/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a transformer overdrive emulator.\r\n\r\nThis is to Coils what Srsly2 was to Srsly. In other words, Coils was always ultra subtle. Coils2 lets you dial up the cheapness until the tone is wrecked (if you so choose).\r\n\r\nThere’s two controls, Saturation and Cheapness. Saturation determines what happens outside the ‘resonant band’, and Cheapness narrows the band in which the transformer’s putting out clean, pure sound. This is not a ‘stompbox distortion’ type of distortion. It’s shaping the way the transformer produces sonority. If you narrow the ‘sonority’ band with more Cheapness, you increasingly distort and lose the lows and highs, and also get a hysteresis effect of magnetizing the transformer core. More Cheapness lets you hear the transformer crap out better when you overdrive it.\r\n\r\nSaturation gives you the maximum overload you can get to, NOT ‘more total gain’. It’s clamping down, not boosting into. That means if you turn it up all the way you get a sort of bandpass: it’s no longer really a model, you’re hearing only what’s left over after the transformer dies. To hear the grind, you have to set it to less than full crank, and halfway should already be quite a lot of overload (except if Cheapness is really low, it might be hard to overload the transformer, so it’s a matter of taste.\r\n\r\nThat’s a lot of talk to say: play with the knobs. They should do what they’re labeled to do, and as long as you’re not thinking ‘turn everything up all the way’ you’ll be fine. It’s meant to pass through a great deal of sonority even for tiny cheap transformers, just in such a way that you can really hear it this time. Coils2 is still in the spirit of Coils, in that you’ll get the most accurate ‘modeling’ by not treating it as its own stompbox. It’s the output stage, for shaping and sculpting things that already exist. You might combine it with tube distortion effects to get an ‘amp-like’ character, or use it subtly on a 2-buss to tighten lows and give you more impact and vibe. Remember to not use too much saturation and cheapness for full mixes :)",
    Comments: "",
    Name: "Coils2",
    Date: 1619308800000,
    Url: "https://www.airwindows.com/coils2/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a new kind of distorty.\r\n\r\nCojones is one of the promised releases from back when I started all this. What’s interesting is, Cojones is also the seeds of Dither Me Timbers and StudioTan. That’s because it does a similar thing: it tracks the trajectory of the waveform (over five instead of three samples) and either heightens or minimizes any disparities it finds. It’s called Cojones, because I thought it highlighted that sort of quality in voices and guitars, though it’s easy to just make it be distorty and strange.\r\n\r\nYou’ll find that boosting Cojones can give a peculiar sort of midrangey sonority. I’m not going to say it’s GOOD sounding, but it is at least distinctive. There’s also a ‘breathy’ which is more three-sample stuff like Dither Me Timbers and StudioTan, and a ‘body’ control that can beef up or cut bass and low mids.\r\n\r\nPretty much play with it and if you hate it, throw it away and curse its name and mine. It’s all the rage! :D seriously, if you’re the sort to like this, you know who you are. If you’ve been putting Dither Me Timbers or StudioTan in places that aren’t the output dither, you need to try this instead as you’ll get a lot more out of it. And if its seasoning seems way too spicy and always produces trebly grit, try very slight amounts of its mojo, as this is one that’s set up so you can apply too much.\r\n\r\nAfter all, what good is an ugly new distorty if you can’t overuse it and make unpleasant yet unrecognizable noises? :)",
    Comments: "",
    Name: "Cojones",
    Date: 1550361600000,
    Url: "https://www.airwindows.com/cojones-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "fades between compressing and soft clipping.\r\n\r\nOne of the final plugins from the Kagi era, this stopped being available for a while when Kagi went out of business. It’s like a soft-saturator in which you can dial in even more cleanness, but couple it with a weird springy quality that’s very dynamic. It occupies more of the role of a stem or buss compressor than a peak limiter, but makes for a very powerful loudenator. The idea is that you can get a loud punchy sound but with more attitude than usual.\r\n\r\nSince it’s one of those strange Airwindows algorithms, be aware you can push it too far and get it to ‘flutter’ or oscillate like a tremolo or do other odd things: in normal use that shouldn’t ever be a concern, I’m just saying that this plugin isn’t normal and doesn’t sound or act quite like other plugins.\r\n\r\nIn other words, classic Airwindows :) hope you like it!",
    Comments: "",
    Name: "Compresaturator",
    Date: 1552780800000,
    Url: "https://www.airwindows.com/compresaturator-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Compressor",
    Date: 1171843200000,
    Url: "https://www.airwindows.com/compressor/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Console",
    Date: 1297641600000,
    Url: "https://www.airwindows.com/console/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "moves to a channel/submix/buss topology and adds analog simulation.\r\n\r\nYep. Told you I had stuff in the works! ;)\r\n\r\nThese are subtle things, not meant to be wildly wildly more colored and different from regular digital mix buss. It’s not like an amp sim. BUT, all the same, if you start to seriously listen to the texture and depth and how stuff communicates through Console8 relative to even Console7 much less a straight DAW mix, Console8 pretty much obliterates the rest. I made it because I needed it. I’m going to be using it, lots, and you can use it too: my plugins and digital things are free, Patreon-supported. These are tough times but that’s still working and has become all the more important to commit to.\r\n\r\nBut what makes Console8 that much better?\r\n\r\nUltrasonic filtering at 24k, distributed among more stages than ever before in a Console version, for extended highs (and it switches off at lower sample rates when it wouldn’t be helping, for lower CPU and more direct sound)\r\n\r\nDistributed highpass filtering emulating real analog gear. This is a new filter that doesn’t exist anywhere else and is only part of Console8. It’s more a texture/attitude filter than a sound-shaping filter, and is quite low but its effect is strongly felt.\r\n\r\nDistributed, gradiated treble softening across the whole mix topology. The idea is that your inputs are clean and low level, and as we go deeper into the console the levels rise as does the energy level, until the final mix buss is very powerful and pushing any electronics, transformers etc. quite hard. This gives Console8 the ability to do airy subtle sparkle and big roaring powerful energy all at the same time. It should just naturally happen through appropriate mixing. Think big, grand scale.\r\n\r\nA new mix topology with much simpler rules for how to set it up, using six dedicated plugins in six places.\r\n\r\nChannelIn, SubIn, and BussIn go FIRST on your channels, submixes, and master buss.\r\nChannelOut, SubOut, and BussOut go LAST on your channels, submixes, and master buss.\r\nAll channels must go to a Submix with unity gain between the Out plugins and the In plugin on the submix.\r\nAll submixes must go to the Master Buss with unity gain between the Out plugins and the In plugin on the master buss.\r\nThe output of the BussOut goes directly to your converter, your file etc. and you’re done :)\r\n\r\nDon’t use any added processing between BussOut and the file or converter. It uses a version of ClipOnly2 plus a new wordlength reducer that doesn’t exist anywhere else and is a hybrid between my old Ten Nines process and Airwindows Dark. It only does 24 bit and if you must make 16 bit you can add a 16 bit dither (but you don’t need to make 16 bit, this is 2022, come on). This wordlength reducer is specially optimized for Console8, so if you’re using one of my existing Monitoring plugins that applies a wordlength reducer, switch it off when not in use (I’ll produce a ‘plain’ Monitoring that doesn’t interfere, though Monitoring2 is probably going to end up arriving at the same output as Console8BussOut)\r\n\r\nI realize this is a lot to take in but in practice it should all just work and fall into place very naturally. The Out plugins all have faders, which are good to assign to midi controllers so you can adjust them with physical controls and not the mouse. I have mine working with a TX-6 :) They’re designed so that 0.5 is unity: less than that fades down to zero, and more than that gives you about 12dB of boost in each stage. That’s also true for the master buss, except it also drives into the ClipOnly2 so it gets a punchier ‘slam’ than the channels and submixes get if you push those.\r\n\r\nIt’s not really intended for ‘everything is louder than everything else’ overloudenated nonsense but will probably do that better than anything else you can have, especially if you’re trying to get a grand scale on things and not just ear-maiming grit :)\r\n\r\nAgain, ‘In’ goes first. ‘Out’ goes last. All Channels go to a Sub, all Subs go to the Buss, and you’re done. Easy to explain :)",
    Comments: "",
    Name: "Console 8",
    Date: 1655164800000,
    Url: "https://www.airwindows.com/console-8/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Console2",
    Date: 1342310400000,
    Url: "https://www.airwindows.com/console2/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Console3",
    Date: 1413849600000,
    Url: "https://www.airwindows.com/console3/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is the original Airwindows ITB mixing system, a two-plugin mix buss replacement for DAWs. This was also the release plugin for my switch to Patreon, and the announcement that Kagi had gone out of business owing me hundreds of dollars, so for this AirwindowsPedia entry from August 3, 2016, I'm including the Patreon blurbs and explanation of what my business was going to do. Turns out everything I promised, I delivered on, and now everything is MIT-licensed open source. Over to the 2016 post!\r\n\r\nConsole 4 is the most recent version of basically my flagship Airwindows plugin. It works through a channel plugin on every sound source, feeding at unity gain into the buss plugin which overrides the digital summing with Airwindows summing (more internal space, more depth, and with Console 4 it now has glue making the top-end more listenable).\r\n\r\nYou can also watch the half-hour long introduction video that goes into a lot more detail about how it’s used, how it works, how you make ‘big kicks and snares’—Console doesn’t let you crank any given channel up to full volume, but it’s designed to layer stuff so if you need giant sounds the best way is to make them composite sounds, everything layered from separate channels in the mix. Rather than layer samples and put them on a single loud track, keep the layers accessible in mix. That does mean if you wanted things like sines to be superloud you’d have to get creative, but the principle’s clear.\r\n\r\nSpeaking of principles…\r\n\r\nYou may notice no demo link, and also there’s no Kagi shopping cart link. There’s a reason for that. Kagi went bust Sunday. I may still get my last two months of sales out of whoever’s divvying up the assets, but as of this Monday you cannot pay me for my work through Kagi, because there is no Kagi. They served me for close to ten years, always with perfect efficiency and scrupulous honesty, but the commission off my work wasn’t enough to keep ’em going.\r\n\r\nI could go find the newest-trendiest shopping cart e-commerce people, but when I started shopping-cart shopping I found them all horrible, tacky hypemongers offering to do things like find people who’d left a cart un-checked-out, and spamming them with reminder emails like ‘Hi, I’m your shopping cart and I’m looonely! Do you miss me? I miss you! Surely you just forgot me?”\r\n\r\nI ran away before I threw up all over their e-commerce portals. After all, I have never spammed or bugged people, never advertised, and what’s more I give people free updates for as long as I live, none of which ‘makes sense’ in this happy future of badgering people for every cent, preferably by hyping them into a rental arrangement and DRMing the stuff until it’s nearly ready to explode all by itself, never mind when the rent is due or the authorization servers are having a bad day. (but I digress)\r\n\r\nThere’s something completely different I can do—something I would never have done, except Kagi went out of business and I have no reason not to be completely rebellious and flip the marketplace table.\r\n\r\nEver heard of a thing called Patreon? It’s not for discovering new artists. Really, it’s more of a… payment processor. For people who are already well established, who are appreciated for what they do, and who are busy devoting their lives to giving the world something for ‘free’ (like comics, or perhaps music, or art). Much like I already do for existing customers: I’ve promised all Console owners that they will have all Console updates for free.\r\n\r\nThere you have it. I am going all in on Patreon, and that is the full release version of Console 4, with the new Mac and PC VST builds, for free. Please remember this when I have figured out the details and started my Patreon. From now on, I will be relying completely on that to survive. I’ve seen more than one person (for instance, Vechs, or Jim Sterling) who are doing great with Patreon, usually because they too are rebelling against some commercial thing and making a bid for total freedom from obligation.\r\n\r\nFrom now on all Airwindows plugins will be ported to Windows and Mac VST as well as being Audio Unit, and they will all be free from now on, and if I get enough Patreon support I will release all source code under the MIT license and document it as I go so that everybody can use the tools and concepts I’ve built to create their own software. That will be my legacy, and if that ain’t a worthy Patreon goal I don’t know what is.\r\n\r\nThis includes old versions of plugins for when people preferred a certain version, so the total number of plugins to cover is over 250. That means if I do one a month it will take me more than 20 years. If I work like a maniac (well, more like a maniac) and put out one a week, that’s still around five years just to turn Airwindows into a sort of audio plugin library and DSP school. And it will all be AU/VST with VST covering Mac VST2 and Win VST2 (built on older OS versions so the plugins work on the very widest range of hosts). I feel this isn’t a bad strategy because if I set up the Patreon so I can actually survive on it, I can make the rate of these ports (and free releases of the existing AUs) conditional on whether I was able to eat that month, which seems fair. :)\r\n\r\nThat’s not counting new research and new plugins… but I have a lot of VST plugins to do, to catch up. Over 250 of them. I’d also ask pirates and haxxors (who don’t have any VST airwindows but what I make, and don’t have most of the AUs) to please leave this ‘making them all free’ process to me through Patreon and my own website. If all goes well, all the plugins will be free in the end (even with source code!) so if you could not mess this up I’d be grateful. ;) leave it to me, please.\r\n\r\nOh, and the VST versions do ‘double replacing’, which means they noise shape to the 64 bit floating point buss. Technically that makes them higher sound quality than Apple’s CoreAudio can offer, though I promise you really won’t notice (and the VST versions also do 32 bit ‘replacing’ so they’ll work on all hosts)\r\n\r\nConsider Console 4 an advance on this new concept. If it works, and if I can live for five or twenty years doing it, every possible Airwindows plugin will be part of everyone’s toolbox and the code will be out there making people’s products better.",
    Comments: "",
    Name: "Console4",
    Date: 1470182400000,
    Url: "https://www.airwindows.com/console4/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a richer, warmer Console system.\r\n\r\nConsole5 uses some more ‘expensive’ math operations, where previous Consoles tried to do their thing while keeping the Channel component as low-CPU as they possibly could. This might mean a heavier CPU cost, or it might be not that much of a difference. It’s a change (the math here more closely resembles Density or PurestDrive).\r\n\r\nWhat do you gain? Using this more advanced math means there are functions which can exactly ‘undistort’ what comes in (more on that property later: there’s a variation on Console that perfectly nulls when only one track is active). This brings an added level of bigness and signal purity. Then, Console5 applies a similar behavior to the slew factor, but backwards to what the amplitude factor is getting. Doing that takes Console5 away from perfect transparency (and subtlety) and gives it a big, beefy, large-console sound that still doesn’t radically alter individual tones… but throws in TONS of ‘glue’ and solidness compared to the raw digital mix.\r\n\r\nThis is not a thing you’d struggle to hear (listen for depth and space, not frequency changes). This is not a thing that’d get washed out in mp3 encoding (in fact, because of the way it restricts slews in Console5Buss, it’ll actually help encoding a teeny bit, because superhigh frequencies waste bandwidth better used on the mids). This is the new Console, and it should be a real revelation to mix through, no matter what style or genre you’re working in.\r\n\r\nAs seen in the video, if you’ve got a DAW that can enable/disable plugins on selected channels, you can audition it with one mouse click to switch. Console5 works like this: you want Console5Channel on every channel feeding the 2-buss (with all submixing and all post-plugin faders at unity gain), and Console5Buss first on the 2-buss. That’s all, just replace digital summing with this system. If you can do post-fader plugins, you can use the faders (otherwise, best use the trims on the Console5Channels, or any earlier gain trim). The point is to replace your digital summing network with the Console5 system.\r\n\r\nIf you have that mastered, you can start playing with stuff like putting things ‘inside’ Console: delays, reverbs, EQs. Plain digital EQ in particular benefits from being post-Console5Channel on the track. Gain stage everything so you’re not slamming Console5Buss more than about +3 dB: it should survive hot peaks but there’s no special benefit to clipping it, and Console5Buss will clip there. Ideally, you’ll frame a mix with Console5 in place, and you may find you don’t need to do nearly as much ‘twitchy DAW stuff’ to get things sounding acceptable. Console5 addresses the root of the problem in a way no other ‘console emulation’ does. (if they do, you’ll find they have exactly the same constraints: needing to keep unity gain between Channel and Buss plugins is a dead giveaway they are using the Airwindows design)\r\n\r\nThis is the Console version that can generate DC offset from sawtooth waveforms due to its interaction with slew rate handling, and the final Console5 you can get attempts to accomodate that. For the launch version (with a different DC-block strategy in place), use C5RawConsole.",
    Comments: "",
    Name: "Console5",
    Date: 1514160000000,
    Url: "https://www.airwindows.com/console5/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a new more intense Console that peaks at lower dB.\r\n\r\nA little while ago I got a note from veteran GSposter torridgristle, entitled “Simple Encode/Decode (Inverse Square)”. It was a very simple little note.\r\n\r\n“Something I’d been using in GLSL shaders for brightening the image turns out to work pretty well for an encoder / decoder pair when demoed with Maths. It may already have a name but I refer to it as inverse square. 1-(1-x)^2 and 1-(1-x)^0.5 https://www.desmos.com/calculator/3vhxkwjjyi The quiet parts are shaped like a plain multiplication, just a simple scale up or down, and then it curves back toward 1.”\r\n\r\nNow, this wasn’t quite code yet (for audio purposes, it has to be able to do negative voltages, perhaps suppress inputs that would give broken outputs) but I asked if I could have it under MIT license anyway, and torridgristle said yes, and off I went to code it into a Console-like thing to see what happened.\r\n\r\nRight away, I noticed that it was kicking in WAY harder. You could still put full-scale audio through it as one track, but for a dense mix, it broke up a lot sooner than Console5 or any previous Console had done. The channel plugin made stuff a lot louder and more aggressive, and the buss plugin cut stuff back harder. I had to pad my choir demo back a lot simply to stop it exploding in distorty noise. However, when I did… it was a hell of a big, intense, Console-style sound. This one wasn’t subtle at all.\r\n\r\nAnd then, when I remembered how many times people had wanted a Console that did NOT have to peak near 0dBFS… I knew me and torridgristle, whom I’ve never met and don’t even know the first thing about… were onto something.\r\n\r\nThat’s the neat thing about open source when people are willing to use it. I mean, yes Patreon, you wouldn’t have this at all if not for that, you wouldn’t have future stuff inspired by this etc etc… but the heart of it is, you have the newest greatest Console because two complete strangers got together and cooperated. torridgristle used this in shaders and has never heard what it sounds like until today, and had no idea what it would do or what it would sonically mean. I know an incredible sound when I hear one, and I know it’s useful for people who are NOT trying to mix super-loud into their DAW buss, but I didn’t think up the very simple and elegant little algorithm. torridgristle didn’t code the Mac AU and VST Mac/Win/Linux ports, I didn’t code the GLSL shaders and have never seen what they do.\r\n\r\nBut the whole is greater than the sum of its parts, and without either of us being too troubled with great struggling, Console6 happened, and here it is.\r\n\r\nSo the bottom line here is simply usability: mix into this like it’s an analog mixing console that can be overstressed. You can still put full scale single tracks through there, losslessly, because that’s what any Console does. You can mix into it provided you don’t stress the buss too hard (or don’t mind the distortion you get). Gain stage before hitting the Channel plugins, one Console6Channel plugin on each sound source with unity gain through the mix structure into the Console6Buss plugin. If you need to slam stuff louder afterward you must do it AFTER the Console6Buss plugin, in whatever way you like. Console is always a digital mix buss replacement without an EQ-style sound of its own, so if you want further color you need to use other plugins outside Console. If you’re daring or just curious you can use things between the plugins (‘inside’ Console) such as a DAW EQ, echoes, subtle reverb etc. If you choose wrongly, it’ll distort or be weird, and things like EQs will be much more sensitive than usual to boosts and cuts.",
    Comments: "",
    Name: "Console6",
    Date: 1558828800000,
    Url: "https://www.airwindows.com/console6/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "adds anti-alias filtering and special saturation curves tied to the slider position.\r\n\r\nIf you don’t already know what Console is: it’s the Airwindows digital mix buss. You put the channel plugin on every channel, feeding directly (at unity gain) into the 2-buss where the buss plugin lives. It applies saturation and anti-saturation functions so that, for individual sounds, there is no change, but when there’s two signals interfering with each other, it makes the channels saturate easier if the buss’s ‘input impedance’ is fluctuating based on other signals coming in. You set it up, and then mix with gain trim controls or the controls on the plugins because to change the faders would violate the need for unity gain between the plugins.\r\n\r\nThat’s been the case for six previous versions of Console, and now it’s Console7. Here’s what’s new, that I didn’t have before.\r\n\r\nEvery stage of the Console system now runs ultrasonic filtering. Not ‘the Ultrasonic filter’, which is heavier in CPU and steeper: it’s a system designed and built for Console, optimised for use with Console. It’s a gentler, less phase-smeary version equivalent to the Isolator filter across the entire Console system, but set up backwards: the Channel plugins lead off with the steepest stage of filtering, causing highs to hit the saturation in a particular way. Then, on the Buss plugins, the remaining two stages use decreasing resonances, so the end result is as flat as Isolator’s fifth-order Butterworth filtering: but one stage runs before the processing, and one after. Doing this causes aliasing to be repeatedly removed at every step it might occur, rather than trying to whack it completely on input and then expecting the whole chain to be clean. You can still drop Ultrasonic in there, anyplace that you think needs extra attention… but this is actually better. Especially if you’re working at 192k (but it’s designed to be fantastic at 96k).\r\n\r\nEvery channel and the buss now gets a dedicated seed value for the dithering to the floating point buss. This might seem (and in fact is) a mighty subtle point, but it turned out to be fine to do at no cost to the CPU of the actual mix (it’s just a little extra getting done as each plugin loads). In a (real, though kind of theoretical) sense, that means every single channel produces its own dedicated noise for dithering, even though it’s just to the floating point buss. No previous Airwindows plugin has done this, but it worked so well that it’s now the new standard for how they’re built.\r\n\r\nEvery channel and the buss now has a dedicated saturation/anti-saturation algorithm that ONLY exists in Console7. It’s based off of a blend of Spiral, and Density, with the first instance of Spiral run as a ConsoleBuss algorithm, ever. They go to the trouble of blending between this new Spiral/antiSpiral sort of Console, and the Density-based one as seen in Console5 and PurestConsole, because doing this allowed a tweak in the way channels hit saturation, where the harmonics are generated in a balanced way, a smoother onset of saturation than I’ve ever had before in a plugin. Console7 channels saturate in an incredibly sweet, non-edgy way, and that’s before the ultrasonic filtering.\r\n\r\nAll the channel plugins now default to 0.772 on the gain control. That, not 1.0, is ‘unity gain’. Why? Because you can now push Console channels into the red in a special way. For the first time, the gain staging is flexible and tied to the Fader controls on the plugins (the Master control on the buss also does this in its own way, but that’s normally kept at 1.0). Unlike any previous Console, and opposite to what you get if you use the DAW faders, these channels saturate MORE as you push them, and saturate LESS if you pull them back. By the way the Density algorithm works, that means stuff tends to come forward as you nudge the gain up, and drop back into the soundstage if you pull the gain back. It opens up in a very literal way when you pull channels back, like some idealized analog console. What that means is, if you use these controls (they are smoothed for zero zipper noise) stuff will practically mix itself: the mix ought to fall into place more easily and quickly, plus if you’re whacking around the controls in some mad dubby way it ought to romp with you quite delightfully! They are simple 0-1 controls specifically to get you to set them by ear: there is no such thing as ‘dB’ with these, and even if there was, you’re adjusting the saturation curves so it’s completely down to what sounds right. I recommend using control surfaces to ride these Fader controls in the plugins: this is another way to get back to (automatable) analog console days.",
    Comments: "",
    Name: "Console7",
    Date: 1607212800000,
    Url: "https://www.airwindows.com/console7/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "",
    Description: "is a drop-in replacement for Console7Channel that allows for MUCH higher gain.\r\n\r\nI heard you liked slamming consoles. So I put five individually ultrasonic-filtered stages of slamming into your console so you can slam console while you Console7 :D\r\n\r\nThis is pretty straightforward. It’s a drop-in replacement for Console7Channel, right down to the gain staging that works with the trim control to fit the result into the mix.\r\n\r\nThe difference is, this uses FIVE gain stages of the same processing in Console7Channel. And of course it’s always better (I’m learning) to filter more gently between individual stages, rather than try to super-filter all at once and then do all the distorting. And so, Console7Cascade is born: turns out to be a very very ‘consoley’ type of crunch.\r\n\r\nBy that I mean it seems to barely crunch at all. It just intensifies and gets REALLY LOUD. Might work as a guitar amp sim too? It worked so well for me on my drums that I might end up just using it by default for that: just all of the channels, all get Console7Cascade. You could also put it in place on a submix… or all the submixes, if you’re kind of insane. This produces a really intense tubey loud effect with very little scratchyness or grind. I’m pretty sure it’ll be kind of brutal on the CPU as it’s not only an Ultrasonic, but also five Console7Channels, each of which run two sine functions.\r\n\r\nYou might just find it was all worth it, though. Why compress when you can cascade Console7Channels?",
    Comments: "",
    Name: "console7cascade",
    Url: "https://www.airwindows.com/console7cascade/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "shows you Cascade but with its EQ weighted for more edge and grit.\r\n\r\nConsole7Crunch is a variation on Console7Cascade, to experiment with something. Cascade stacked up distortion algorithms inside an instance of Ultrasonic, basically. For that reason, it distorted the super-highs very early on, and compensated for this in later stages, rolling off brightness and smoothing the distortion out. Well, with experiments like UltrasonX, and some upcoming even-more-intense filtering of that nature, I wanted to do a variation on Console7Cascade where the ONLY thing I changed was the order of the filtering. They’re supposed to combine to a perfectly flat multistage filter, and they do… but the way it hits nonlinearities and clipping is a whole other story.\r\n\r\nThe result is a Console7Cascade that’s more crunchy, with more obvious clipping and an additional ability to deliver distorted punch in the extreme highs: Console7Crunch. It’s not wildly different (all this is meant to be ultrasonic! But of course it affects everything anyhow) but it’s a noticeably different color for when you’re looking for higher gain in the Console7 system. I hope you like it, and I found the experiment interesting.",
    Comments: "",
    Name: "Console7Crunch",
    Date: 1643500800000,
    Url: "https://www.airwindows.com/console7crunch/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "swaps out just the In sections of Console8, for a brighter sparklier circuit.\r\n\r\nThe original Console8 had a treble soften that was too weird to let people have. Used in every stage, it shaped the sound plenty, but it let through this weird airy brightness and hyper-focus that was far too extreme to have as the base Console sound. I tried reining it in with a dry/wet and that only created bizarre cancellations and other problems, and so I dug deeper and came up with a treble softening that played better at widely varying audio levels and gave the impact and solidity I needed. And the weird airy first version was gone forever.\r\n\r\nHere it is :)\r\n\r\nHere’s what you need to know: the plugins Console8ChannelHype, Console8SubHype, and Console8BussHype have no controls, and you can swap them out with Console8ChannelIn, Console8SubIn, and Console8BussIn. Those are the plugins that have the treble softening at each stage, and those are the ones you replace. The more stages you replace, the more hyped and trebly the result will be: maybe not to the extent of taking an EQ and cranking it, but the whole tonality is different. The In plugins have a solidness, more tough-sounding and physical: the Hype plugins are softer, more ethereal. They’re still manipulating the sound and are actually softening high-mids and treble, but the presence band is sticking out.\r\n\r\nTreat them like they’re preamp modules with a different circuit and its own sound, which you can use in three places on the resulting console. You can have them on individual channels for the most direct effect, or on the submixes where they’ll change the tone of the whole sub, or on the buss to take the entire mix and hype it in this way. If you’ve got a sound going through two or more stages of hype, it’ll be more obvious, and using it on later stages will tend to change the shape and color of the mix as a whole, not just the individual sounds.\r\n\r\nI can’t tell you how to incorporate these: it’s too Airwindowsy for that. Console8 is the latest Console made more direct with simpler, more obvious rules, but it doesn’t tell you how to mix, and when you include the Console8Hype plugins it becomes very difficult to explain what swapping them in will do. It depends on what your mix is, what you’re trying to do with it, and it’s heavily about textural values like solidness versus ethereal spaceyness, physical versus abstract, hard versus soft, not stuff you can just boil down to frequencies and DB values. It means direct access to tone options that are distinctly different, and applying them to not only sounds but the way the mix comes together. Hype on an individual track versus Hype on the buss are the same amount of ‘hype’, but totally different things in the final mix, and I can’t tell you which are going to be better for you.\r\n\r\nSo I won’t. Console8Hype is your secret weapon and where you incorporate it is your affair: even other people knowing about Console8 might not hit upon the way you integrate Hype stages into the mix. This post may well drop out of sight quickly as Console8Hype is another layer of tricky on top of the already demanding Console8… and that’s fine. I’ll be using it, and I’ll answer questions about it, but not everybody needs to ‘get’ this.",
    Comments: "",
    Name: "Console8Hype",
    Date: 1656288000000,
    Url: "https://www.airwindows.com/console8hype/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "counterpart",
    Url: "https://www.airwindows.com/counterpart/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "CrispKit",
    Date: 1415404800000,
    Url: "https://www.airwindows.com/crispkit/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a version of GrooveWear for more edge and distortion.\r\n\r\nGrooveWear began as a feature on ToVinyl. It defaulted to ‘on a tiny bit’ and gave a slight treble lift and sculpting of the highs, following its working principle: averaging/smoothing the rate of change of the signal, something that’s not normally present in audio processing. This would cause the output to try and ‘keep going’ at the speed it was moving, like a phono cartridge needle that had weight and inertia.\r\n\r\nThe thing is, it was also implemented with a bug (or possibly just an unwitting choice). It’d overshoot, and bring on a kind of treble zing that was distorted and didn’t always work for everybody. When I split this feature out into a dedicated plugin, GrooveWear, I found out through trying to incorporate a dry/wet control that I could apply half the effect and then the ‘groove wear’ wouldn’t overshoot. And it produced a treble-eroding plugin with a different operating principle than normal EQs, with the same ‘glue’ effect but none of the tizz or distortion. And that’s GrooveWear, and I considered it a good bugfix and came up with a way to run the dry/wet control in four stages so you could have the new ‘glue’ over an even wider frequency range, from a ‘purest’ one stage to twice the intensity of the original thing in ToVinyl. I still see that as the ‘groove wear’ to have, for realistically getting a ‘vinyl warmth’ effect, and I stand by that version.\r\n\r\nAnd yet… some folks missed the zing. So, this is for them.\r\n\r\nI’ve experimented and I think this is the optimal algorithm for doing that original ‘energy boost’ up top, except now you can apply it, too, at a wider range, and you can also get up to four stages of the effect. Adjusting the dry/wet will dial in a wide range of tones because of the way the effect kicks in (halfway engaged stages give that treble-eroded quality, so the effect is most striking at 0.25, 0.5, 0.75, and 1.0). And if you fully crank it out, you can get a really intense sort of treble hype that’s not like traditional EQs. It’s more exciter-like, and has no pre-echo even though it seems like it’s a very high Q filter with lots of resonance. It’s crunchy and adds zing and character and if you’re actually seeking fake zip of an interesting color, CrunchyGrooveWear has lots of potential. Remember, if you’re looking for the most extreme crunch, use 0.25, 0.5, 0.75 or 1.0 as intermediate settings actively take highs away again (GrooveWear functions linearly so it doesn’t have this behavior). But you’ve got the full range of adjustments, because sometimes it’s nice to let a plugin into the wild that’s extremely weird and untame. This one’s born to be a secret weapon because it’s strange and unpredictable.",
    Comments: "",
    Name: "CrunchyGrooveWear",
    Date: 1523750400000,
    Url: "https://www.airwindows.com/crunchygroovewear/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Crush All Boxes for Patrons",
    Date: 1483228800000,
    Url: "https://www.airwindows.com/crush-all-boxes/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a tone shaper and buss soft-clipper.\r\n\r\nCrystal’s the first of the Character reissues, by request: I know there’s the possibility for this to become people’s favorite plugin, because it already is one user’s favorite buss plugin and he begged me to rerelease it with updated code and VST compatibility. This is the result. Tonally it’s exactly the same as the classic ‘magic’ Audio Unit, but it’s got the denormalization and noise shaping to the floating point buss of 2018 and beyond.\r\n\r\nThe controls you’ll be interested in are Hardness and Personality. Hardness applies the same algorithm that was in ‘New Channel’: though it’s not a replacement for what made Channel special, it’s got its own uses. It lets you define the onset of clipping, whether soft-clip saturation or digital hard clipping. Though this dirties up the sound a little, it lets you dial the ‘fatness’ of the saturation effect and gives you a tonal parameter that no other Airwindows plugin gives you. Think of it as a slider for how much the roaring, overdriven midrange sticks out.\r\n\r\nPersonality is a precursor to what became BussColors (and there are other flavors to come) but in Crystal it’s a little different. The BussColors algorithms are taken from hardware convolution impulses, and there’s a time-constant making the interpolation between ‘loud’ and ‘soft’ impulses happen over several samples. In the Character plugins, this didn’t happen. It was sample-by-sample, so on the one hand there was no dynamic behavior, just each sample got a fixed convolution behavior.\r\n\r\nOn the other hand (and it took me a while to properly understand this) every convolution sample got its own, separate dynamic behavior. The curve was different for each one, so it became a more tightly controlled little kernel rather than a set of possible kernels. There are still people who swear these were the great ones, and I’ve learned to pay closer attention to such things.\r\n\r\nAnd the thing is, Crystal’s not using a hardware sample. Unlike anything in BussColors, Crystal’s using a data set that comes from doing a brickwall filter: if I remember correctly, two different ones at different Q/steepness, and then generating the dynamic behavior out of that. So it’s doing a treble-restricting EQ behavior (a FIR filter), but then it manipulates that. The question is, do you like what it does? Some people really, really liked this one. Not everything about it is in line with how I usually do things. That’s why it’s different. Maybe it’s right up your alley? Let your ears guide you, and have fun checking it out.",
    Comments: "",
    Name: "Crystal",
    Date: 1546128000000,
    Url: "https://www.airwindows.com/crystal-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is an Airwindows channel strip.\r\n\r\nSometimes, Airwindows dabbles with what you might call ‘the normal’ plugins: for instance, CStrip. I was asked to make a channel strip, and while I usually prefer to do things in a more modular sense, it seemed like a fine idea, and so now there’s an Airwindows channel strip, with sort of the usual things you might find there.\r\n\r\nSort of. ;)\r\n\r\nIt’s never quite that simple with Airwindows. So, you’ve got a three band EQ, but if you boost the top you get traces of the ‘Energy’ plugin just to add some aggressiveness to the extreme highs for heavy boosts. You’ve got crossover frequencies, you’ve got highpass and lowpass, but the highpass and lowpass aren’t normal algorithms either: they’re designed for ‘trapping in’ already bandlimited sounds to get the most out of them. There’s a gate, but it’s an Airwindows gate where the release is designed to pull the audio back in the sound picture, not just volume-ramp it. There’s a time delay control that exists only to give the track a micro-delay relative to other tracks for groove purposes. And there’s the compressor… CStrip uses the ButterComp algorithm plus a speed control that lets you do odd things like increase the speed hugely. ButterComp compresses interleaved samples in Class AB, so that’s four independent compressors per channel. If you crank the speed under heavy compression you can get artifacts (for normal behavior, keep the speed a lot lower).\r\n\r\nThe whole idea with CStrip was to do the channel strip, but take it out into stranger realms where it can be used for various sonic destruction. It may not be the last of such plugins: some new stuff coming out is giving me ideas for other ‘combination’ plugins, especially ones where the algorithms can be interwoven to produce effects you literally couldn’t have out of discrete plugins. (one day, I’ll be open sourcing all of that and telling other plugin coders all about it)\r\n\r\nCStrip also uses a technique I came to rely on, where if a component of the plugin isn’t being used (for instance, the lowpass and highpass when set to their extremes switch off) then it gets completely bypassed, and not even the math of the component is used: this is sort of like how ‘unity gain’ in code isn’t the same as ‘bypass’. (if you’re in floating point and you’re multiplying by 1.0, you’re also doing a math operation at a given exponent and this can wipe out floating point values at very different levels of detail)\r\n\r\nBut that’s getting too wonky: I hope you enjoy CStrip.",
    Comments: "",
    Name: "CStrip",
    Date: 1512259200000,
    Url: "https://www.airwindows.com/cstrip-vst/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is the simplest, purest form of Recurve with no extra boosts.\r\n\r\nsometimes you just want the effect to be lowercase.\r\n\r\nthe previous plugin recurve slammed home with 6 db of gain in its compression so you could hear it working, and had a clipper on the end in case you wanted to use it as a loudenator.\r\n\r\nbut maybe you don’t. maybe the best thing for the purest, subtlest compression (the one with no transition point between getting louder and getting quieter, and no edges in the sound anywhere) is to have no gain either. it can still catch overs… most of the time, occasionally not. it can still be heard, probably, but in this form it can sit on nearly any track, unnoticed, quietly balancing levels in lowercase.\r\n\r\nyou could put it on everything, even though compression multiplies (you get the ratio of all the different compressions, times each other). curve is so calm and gentle that even putting it on all tracks and stems and then the 2-buss still shouldn’t give you a heavily compressed sound.\r\n\r\npeople have asked whether you can still do airwindows patreon for one dollar a month rather than the ‘fifty dollars a year’ concept. the answer is yes, of course, the per-plugin concept is just to give people something they can relate to. also if you can only spare one dollar a month i would rather help you. but hey, if you gotta share the love i cannot argue as it would be most hypocritical given my own fierce affections for the music producing community.\r\n\r\ni was helping clean up my late dad’s house and got a book called archy and mehitabel. whether it influenced curve will have to remain a mystery to the non-literary. suffice to say there’s a dance in the old plugin-monger yet. whatthehell, whatthehell\r\n\r\n<3\r\n\r\ndo 2s and 3s count as uppercase",
    Comments: "",
    Name: "curve",
    Date: 1556496000000,
    Url: "https://www.airwindows.com/curve/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a wordlength reducer that gives your music a blacker backdrop.\r\n\r\nSome weeks are MY kind of fun…\r\n\r\nThis won’t make big changes in your audio. In fact if you think you can reliably hear this on its HD setting, I think you’re mistaken. And yet, this might be the funnest thing I’ve done all year.\r\n\r\nWhy? Because I’m back to the dithers again. I figured out a way (or two) to go EVEN FARTHER in the direction I’d chosen. And it worked: it worked super well, and you can have it. Introducing Airwindows Dark.\r\n\r\nHow does it work? It’s very simple, really. Much like Not Just Another Dither (NJAD, my previous best) it analyzes the results of the audio, depending on whether the dither rounds up or down. With correct TPDF dither, it’s a factor of randomness, a noise that breaks up patterns in the output. With NJAD, it runs a Benford Realness calculation and uses that (for a more natural-sounding audio output). But Dark?\r\n\r\nIt simply works out the average trajectory of where the audio’s going. It’s following the lower frequencies, suppressing the highs. And then it makes its choice based solely on whatever is going to further this trajectory… and keep the output as smooth as possible. It is ‘dithering’ with intent, doing whatever it has to in order to get a darker, softer output. All done by truncation alone.\r\n\r\nThe result is delightful, if you are into analog sonics and the absence of bright digital artifacts and hisses. It is NOT obvious, unless 16 bit artifacts are already obvious to you, and at HD (24 bit) it is purely a matter of thoroughness and making correct choices and you shouldn’t be hearing a difference. You damn sure won’t be able to blind test a difference (that requires much more obvious stuff happening).\r\n\r\nBut, but, but! If your experience with audio (and probably loud listening levels, and REALLY good monitoring, and amazing source files) involves sinking into a lush bed of analog-rich sonics, where you quickly notice subtle shifts in sonic attitude and then take much longer to get used to them and form your judgements… there’s nothing at all like this.\r\n\r\nIt can only wordlength reduce, so especially at 24 bit it shouldn’t be able to ever hurt bright sounds that are supposed to be there. It’s only dithering (in a novel way). But it’s doing its thing in a way that’s completely outside of anything you can do with filtering or normal processing. If you need depth and space, if you need rich black silence behind your mix, this beats NJAD… soundly.\r\n\r\nI hope you like it. The demonstration at 8 bit wordlength in the video ought to show you what to expect. Dark is yours to use (in fact, you can have the source code under the MIT license!). For now, if you are using Monitoring you’ll need to switch it off to use Dark, as Monitoring defaults to a 24 bit wordlength reduction using NJAD and I’m not prepared to simply update it and have it default to Dark for all things.\r\n\r\nThough I’m tempted. ;) (in fact, this is what Monitoring2 became)\r\n\r\nAnd in turn, within two weeks, Dark became Dark Redux: same Dark, exactly as before, BUT now it has one added control. DeRez! Just like in the DeRez plugin, it zooms seamlessly down to 1 (or 0) bits. It’s continuous, not discrete: you can do one and a half bits or whatever, play it by ear. Except that unlike the DeRez plugin, it’s still Dark… so you can hear more clearly what the new wordlength reducer is doing.\r\n\r\nIt defaults to 0, which is exactly as it was before. Both the 24 and 16 bit settings derez, which means you can take it to 0 bit (silence) with 16 bit, switch to 24 bit, and the result is you’re listening to 8 bit. (if you need really specific behavior, you can use BitShiftGain before and after the plugin to get exact bit values).\r\n\r\nThis makes it possible to do old school sampling effects, dark bitcrushed sounds. It also demonstrates that the Dark algorithm is a bit special, because you have to really trash the wordlength to deteriorate the tone much. It’s more like a slightly noisier, slightly funkier, slightly gated grunge tone, even though the output is literally just bitcrushing. There isn’t even any smoothing applied to get the ‘dark’ tonality, it’s literally all a wordlength reducer, and with DeRez at 0 it’s exactly the original Dark plugin.\r\n\r\nIf there’s a problem or if you need to not see a control marked ‘DeRez’, my updates-in-place always leave the original file there, in this case renamed to DarkOriginal. They have the same ID and DAWs ought to be able to handle swapping the new one in, even on existing projects that use Dark, it’s just to make sure people can get back the original release if they ever need to.",
    Comments: "",
    Name: "Dark",
    Date: 1590883200000,
    Url: "https://www.airwindows.com/dark/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "Dark (Redux)",
    Date: 1592092800000,
    Url: "https://www.airwindows.com/dark-redux/"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is an alternative method for producing bassier noise directly. Sound design stuff.\r\n\r\nDarkNoise is a technical experiment, that might be useful for sound design folks, or game coders, or people coding things like algorithmic clap effects. It’s basically a way to generate noise directly that’s more midrangey, or more bassy, without having to filter it (though there’s a filter included, too!)\r\n\r\nSo how it works is: if you just generate rand() every sample, that’s white noise. (or if you use an algorithm like my dithering-to-the-floating-point, which is not crypto-grade noise but runs more CPU-efficiently). And if you take a value and add rand() to it every sample, that’s Brownian noise (something moves, but randomly) but it generates DC offset and needs to get filtered. I’ve also done clever forms of noise like VoiceOfTheStarship (there in your NewUpdates.zip download for free, try it and compare with DarkNoise) which do the brownian noise, but at regular intervals it forces the random noise always to move TOWARDS zero, suppressing the DC naturally.\r\n\r\nThis is different. I’m not sure it’s better but it’s different, and what it does is: say you’re keeping a list of values that are all random. And you’re replacing them with new random values, and you get your output by adding ’em together. Now, imagine that for each random number you put in, that tells you the next position in the list to replace. That’s DarkNoise. It has a brighter top-end than VoiceOfTheStarship, and runs just as fast, but requires you keep a big pile of numbers around. However, you don’t have to actually add them all every sample. It’s in the code, how to work around that part.\r\n\r\nEnjoy the plugin if you like weird noise sources: again, might be sound design, maybe you’d like to gate it along with something? Gate it along with your snare and pick one of the midrangey settings and you might get a nice beefy reinforcement. Cranked way up, it gives a background noise ambience that’s like wind (heard from indoors, or being out in the wind) which can go from almost still, to thousands of miles an hour.",
    Comments: "",
    Name: "DarkNoise",
    Date: 1608422400000,
    Url: "https://www.airwindows.com/darknoise/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is literally a DC control voltage, in a plugin.\r\n\r\nThis is exactly what it says on the tin. Do NOT just put this in a mix and crank it up to see what it’ll do. If your whole system is DC-coupled you will blow your woofers, just like that, after a big ‘whump’. I will not take responsibility for damage caused by misusing unusual tools.\r\n\r\nWhat SHOULD you do? Here are some ideas.\r\n\r\nThere is no DC offset filter nearly as good as applying an opposite offset. Use metering, perhaps option/alt-dragging on the slider if your DAW permits it, to cancel out a DC offset without any sonic penalty at all. This is called a ‘DC servo’, but digitally. If you can get it perfect and then bounce files so you can work with a center corrected section (so you don’t have to get a pop from turning it on or off) this would be the highest quality way to get rid of a FIXED DC offset without altering any of the bass at all. It’ll retain right down to 0.001 hz or whatever, and only kill what is totally unvarying DC.\r\n\r\nIf you have a converter that’s DC coupled, and analog modular synthesizers, you can use this to create and modulate control voltages. Use it as a voltage source and then mix stuff together using DAW routing much like you use patchcords on your synthesizers, and be careful not to route control voltages to your monitors! I know there are people who’ve done odd things to get DC voltages inside their DAWs. Now it’s a lot simpler :)\r\n\r\nThis plugin may not be any use to you, and don’t play with it if you don’t know what it is. If it is useful to you, you already know exactly what you’ll do with it, so go right ahead, now you’ve got DAW control voltages out of a simple plugin.",
    Comments: "",
    Name: "DC Voltage",
    Date: 1490227200000,
    Url: "https://www.airwindows.com/dc-voltage/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "DCOffset",
    Date: 1298851200000,
    Url: "https://www.airwindows.com/dcoffset/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is an improved DeEss, with perfect rejection of non-ess audio.\r\n\r\nMeet DeBess.\r\n\r\nNamed because, for some of you at least, it is at last The Best De Ess. Period. Ever.\r\n\r\n…assuming certain conditions.\r\n\r\nDeBess is an extension of my former DeEss, which itself was the high point of several earlier attempts at a special de-esser with an unusual algorithm for finding specifically ess content and rejecting anything else in that frequency range, no matter how many overtones it had. DeEss used a set of sample comparisons to try and find esses, and was very successful at this… except some folks had trouble getting it to engage, and others needed it to be more perfect at rejecting even the faintest softening of other content.\r\n\r\nDeBess does this by extending the sample comparison window a LOT. In fact, it’s now a slider! You can set it to be even blurrier than DeEss if you like… or barely crack it open to replicate the original DeEss… or crank it up for high isolation de-essing. If you are recording on prosumer equipment or using moving-coil microphones, you might not get enough change between samples to engage DeBess. Same if you’re using high sample rates and your mics do NOT extend right up as far as the sampling lets you: DeBess is not for taking stage mics and making them lisp. It is very distinctly for taking the most high-end of vocal tracks and de-essing only the ess sounds out of them, with zero cost to anything else. Whatever you’re using, if your esses are blowing out the highest treble (which is exactly what you need a de-esser for) then it ought to work for you.\r\n\r\nIf you’re using high sample rate and struggling to get DeBess action and you’re going to be treble boosting for that ultra-bright voice sound, try brightening BEFORE DeBess and you’ll probably be able to get what you need. It wants very bright esses to work with, so it can duck and darken them. Use the filter control to shape a better EQ on your esses, rather than just trying to duck ’em.",
    Comments: "",
    Name: "DeBess",
    Date: 1572134400000,
    Url: "https://www.airwindows.com/debess/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "fattens and dirties up beats.\r\n\r\nBack in the day, I was asked by composer Alan Gold to create a special plugin. How special? To give you some idea, you might recognize the name quicker as Agzilla… or the DECKWRECKA. And so, that became the name of the plugin, appearing on the Deckwrecka blog, then lost to time.\r\n\r\nUntil now! Hope this sits well with the eponymous Deckwrecka. It was always free and now it’s doubly free because it’s open source too. Now it’s brought up to date with the most recent Airwindows technologies, and it’s available in VST form for the first time ever. :D\r\n\r\nSo what exactly is this thing? It’s like a thunderousness overdrive. It’s huge, slamming, dirty bass, like spinning records on a turntable run through 1000 watts and a pile of monster bassbins. Technically it’s like extra bass plus overdrive plus certain types of dirt and grunge all rolled up together into a pile of funk. Or at least that’s the endeavour.\r\n\r\nYou can use it how you please, but you can throw it on kick drums for EDM and hip-hop, or whatever elements need to be more beefy and sub-rattling.",
    Comments: "",
    Name: "Deckwrecka",
    Date: 1558224000000,
    Url: "https://www.airwindows.com/deckwrecka/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is the best de-essing solution there is. A go-to utility plugin.\r\n\r\nThe Airwindows DeEss works by tracking slew rates, not by filtering and frequencies. It keeps a string of recent slew rates, and if it sees high slews that keep going back and forth (flipping direction) that’s how it triggers. It doesn’t trigger on things like square wave or sawtooth waves, because those aren’t going back and forth fast enough to be an ess. It’s purely mechanical: the trigger for DeEss happens instantly and way more powerfully on real esses, making it extremely easy to set. It’s not fiddly, just crank up the effect so you can plainly hear where it hits and use that (don’t overtrigger, for the bad esses you’ll get a HUGE powerful trigger even when everything else is totally clear of de-essing)\r\n\r\nThen you use the ducking control and the treble rolloff to tailor the kind of esses you do want. The tone thing lets you have darker esses that are still very audible, and the ducking control means you can retain the original sound but duck it as much as you like. It should be possible to template it: since it triggers so powerfully on real esses, if you’ve got a working setting it should always work. De-essing is now a solved problem, for good. Use good taste (avoid ‘lisping’ effects) and de-essing is easy.",
    Comments: "",
    Name: "DeEss",
    Date: 1541376000000,
    Url: "https://www.airwindows.com/deess-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "DeEss2",
    Date: 1347321600000,
    Url: "https://www.airwindows.com/deess2/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "DeEss3",
    Date: 1421193600000,
    Url: "https://www.airwindows.com/deess3/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "tries to suppress background hiss, like a hiss gate.\r\n\r\nThis acts like a filtery gate. It tries to apply a lowpass filter to suppress quiet background noise whenever loud bright treble isn’t happening. You can use it in creative ways, but it really was designed to suppress hiss from a cheap USB condenser mic. Sort of an experiment. It’s got a dry/wet now in case that comes in handy. I’m not sure how much else is out there specifically like this, but then I’m not sure how much call there is for it in the first place :)",
    Comments: "",
    Name: "DeHiss",
    Date: 1561852800000,
    Url: "https://www.airwindows.com/dehiss-vst/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a Swiss Army Knife of saturation/antisaturation.\r\n\r\nThis one started a lot! The algorithm used here has echoed through many other Airwindows plugins. It’s literally the smoothest saturation you can have in a plugin: the transfer function’s a sine. This is what’s in Channel, too: there are many ways to adapt such a simple mathematical function.\r\n\r\nBut there’s more! Because Density runs multiple stages, allowing it to bulk up the tone into an overblown, insanely fat and saturated distort-fest. And then you can highpass just the distorted stuff alone, and trim its output gain, and mix it with the unfiltered dry to produce lots of tonal possibilities. And then there’s the spatial positioning factor: saturating stuff this way brings it forward in the mix. You can also isolate midrangey elements and bring them forward using that trick.\r\n\r\nAnd then there’s the negative values: if you UNsaturate, you get a thinned out lean tone and it drops back instead of pushing forward. And you can blend that too.\r\n\r\nDensity’s one of the better utility plugins. It’s there to reshape tones in myriad ways, mostly having to do with fatness or thinness, also having to do with upfrontness or recedingness. It can also give articulation to sounds that are murky, or simply produce the hugest fattest roaring wall of grunge you ever heard.",
    Comments: "",
    Name: "Density",
    Date: 1476835200000,
    Url: "https://www.airwindows.com/density-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a different color for Density, some old code I had that people wanted.\r\n\r\nSo in the absence of somebody coming forth and saying ‘this is on my quadrillion selling hit record’… weirder things have happened, occasionally to me… you should consider this as an alternate tone for Density. It’s been around for a while, but people wanted to see it again: specifically, to see it run on modern machines and in VST and so on. How could I say no? I’ve altered it as little as possible: there were always some weird things about it, but I refactored it to retain EVERYTHING unintentional or unusual. I gave it modern Airwindows handling of denormalized numbers, and it dithers to floating point instead of using the noise shaping to floating point that I used back then. Everything else is just as it was: no ‘fixing’ or making it do what I ‘meant to do’.\r\n\r\n…this is on somebody's quadrillion selling hit record. I'm still not going to tell you who, or how they used it. <3",
    Comments: "",
    Name: "Density2",
    Date: 1613260800000,
    Url: "https://www.airwindows.com/density2-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is an analog-style bit and sample rate crusher with continuous adjustments. This entry includes the Patreon blurb from mid-2018, because the things it says about the build systems, what they target and why I'm doing it, are still relevant today. That makes that stuff its own sort of Airwindowspedia entry as part of the DeRez entry.\r\n\r\nWhat would an analog bitcrusher even be? It doesn’t even make sense. You’ve got sixteen bits, eight bits, twelve bits: you can’t have, like, eight and a half bits.\r\n\r\nSure you can! DeRez is here! Its dark magic can be yours! If you don’t believe in dark magic, the source code can be and is yours under the MIT license. Folks who are constructing strange models of things like obscure old digital gear should find this useful: do whatever compansion thing you had in mind using for instance PurestConsole, then use DeRez to dial in the right amount of bitcrunch.\r\n\r\nHere’s how you use it: slide the Frequency control down, to continuously sweep the sample-rate crushing. Slide the Resolution control down, to continuously sweep the bit crushing. There are no transition points: the algorithm will always let you do just a tiny bit more, or less, of either, because it’s really a floating-point algorithm at very high resolution. It’s doing a fairly simple samplerate crush and softening the transitions just a tad for an analog feel, and it’s doing the bit crush by chopping away bit-sized amounts and then truncating once it can no longer take away a whole ‘bit’. Due to this decision, a ‘bit’ can be any size at all, so you can sweep it without having transition points. Obviously, you can also automate the controls in your DAW to program continuous sweeps.\r\n\r\nIt should just work, and you’ll never have to lament, “But why can’t I set the bitcrusher to three and five-eighth bits?” Because now YOU CAN.\r\n\r\nI know there are a few audiophile ears out there who’ll pop a blood vessel over this nasty little toy, but I’m not a ‘bit’ sorry. Those of you who love this will know who you are right away. Those of you who think this is a really irritating and pointless idea, this one is not for you, and there will be things coming up that are more to your taste.\r\n\r\nThis work is supported by Patreon, for those of you who like me making stuff even when I know it will get some flak and hate-comments: the whole point of being on Patreon for me is that I get freedom to do stuff that’s not popular. Mind you, it’s 2018, so this may well be one of the popular ones. Depends on whether bitcrushing and frequency crushing are ‘in’ or ‘out’. Another nice thing about keeping me around doing this stuff is that it stops mattering whether stuff is ‘in’ or ‘out’: I build the plugins on a Windows 7 VM and an OSX 10.6.8 system kept in a time capsule especially so that my stuff works EVERYWHERE, and by that I mean Mac, Windows, Linux and on machines so old they run PPC chips. Yep! The Mac builds are slightly larger because they’re triple binaries and run 32 bit, 64 bit, and PPC. They should probably also work on OSes older than 10.6.8 but I don’t even have any of those, it’s just build settings. So these plugins are as close as I can get to ‘Grandpa’s Tools’ levels of reliability, and you should never be forced to update, alter, or break your system just to keep up with compatibility with Airwindows plugins. This is in spite of Apple (for one) continuously breaking XCode w.r.t building for older OSes. Hence the old build system. Maybe one day I’ll be running that in a virtual machine that runs it ten times faster than the original laptop. Maybe I’ll run the Windows 7 virtual machine inside the 10.6.8 virtual machine inside the new computer. I will note that I have to keep the old Windows cut off from the internet, and have already had to do workarounds to stop Visual Studio breaking itself in a fit of pique that it can’t install Win10 over the Windows 7 and blow itself up, so it’s not only Apple that gets up to this stuff.\r\n\r\nSupport my Patreon, so I can keep on expanding the pool of plugins that don’t break your system demanding updates and wrecking the joint. I know acting that way gets you more money… because I barely have any money, and the folks working that strategy have lots of money. And it’s not a good enough excuse as far as I’m concerned, so as always I will just not do the behavior that I don’t like to see in others. Vote with your dollars, that’s a somewhat practical way to be heard. It won’t fix the world, but it definitely is able to keep me going :)",
    Comments: "",
    Name: "DeRez",
    Date: 1530403200000,
    Url: "https://www.airwindows.com/derez-vst/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "brings more authentic retro-digital hardware tones.\r\n\r\nDeRez is the Airwindows bitcrusher that interpolates a sample between sample-rate-crushed outputs so the top end is smooth rather than gritty, and the only (far as I know) ANALOG bitcrusher (or at least floating point resolution?). That means you can set it to 32 and a third K sample rate, and seven point one three five bits. By ear, please: if you are needing to set a third of a K of sample rate without hearing it, I can’t help you. The point being, DeRez was already cool as a continuous-rate rate-crusher and arbitrary bit depth linear bitcrusher. I don’t think anyone else has that (of course now they can: it’s open source MIT license, so just credit Airwindows and code away)\r\n\r\nHow do you make that not just better but way better?\r\n\r\nDeRez2’s ‘Hard’ control maxes out as the previous plugin (with a few behind-the-scenes upgrades, but exactly the same algorithm at the heart). But the interesting part is when you turn it OFF: set ‘Hard’ to zero. Two things happen.\r\n\r\nThe sample-rate crusher begins to incorporate intermediate samples in a different way. When it’s changing, it saves up the previous sample… and uses that, not an interpolation, as the intermediate value. It’s trying to bridge the gap between rate-crushed values with a dry sample value. This causes a strange grungy transparency and a zone between ‘clean’ and rate-crushed that’s eerily reminiscent of old digital hardware. It stops sounding in-the-box, even though it remains completely bitcrushed with a totally different texture.\r\n\r\nThe bit-crusher remains ‘analog’ (arbitrary bit depth, like 12 and a half bits) but on full soft, it uses uLaw encode and decode, so it becomes nonlinear! Same as the famous Aphex Twin ‘long play DAT’ and old retro nonlinear digital hardware, the loud parts get bigger ‘steps’ and quiet stuff gets smaller ‘steps’, producing a totally different tonality. You can use this and the sample-rate crush at the same time, subtly or obviously, to dial in vintage-digital tonalities that are totally satisfying and convincing, but completely different from the source audio. You’d never know it started out different because it winds up sounding completely right.\r\n\r\nI’ve been asked for dedicated emulations of vintage sampler gear. Instead, try this: no copying, but a new way to get that kind of tonality and dial it in to taste. If you need the darkening and texture of classic samplers, DeRez2 will do the same job in a new way with features the real retro gear didn’t have.\r\n\r\nWhy does this one have the dry/wet? Because since the rate-crusher uses the previous sample for transitions, blending it with dry makes the transitions further softened with averaging. You can fade between pristine and clear, dark and cloudy, and totally retro-sampler thanks to that effect (which wouldn’t have happened with the previous DeRez, though you can try it on full Hard and see)\r\n\r\nWhat’s with the halfway settings between Soft and Hard? It engages wet/dry balance on the uLaws inside the plugin. If you do that to uLaw, you get weird broken results and it doesn’t work nicely. It just so happens that going from soft to halfway gives a big volume and grunge boost. So rather than have it as a clean off/on control, the Hard control lets you use that unforeseen weirdness as an intentional effect. If you have it dialed in but you’d like to punch up the aggression for effect, automate the Hard control and use it as a booster, for a unique result.",
    Comments: "",
    Name: "DeRez2",
    Date: 1561248000000,
    Url: "https://www.airwindows.com/derez2/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is classic Airwindows subtle analog modeling.\r\n\r\nDesk is a little bit like a precursor to ‘PurestDrive’. It’s entirely an analog modeler, with a behavior that’s far from a plugin stomp-box distortion. It glues and thickens the sound, with a headroom of about 30 dB, much like a true analog console (those don’t turn into distorto-pedals the instant you hit 0 dB). Desk is the canonical version of this type of sound processing.\r\n\r\nNote that it’s not tricky to use like Console4. It’s not calibrated to work as a ConsoleChannel replacement (that’s the most recent Desk3, which is one of the Kagi plugins to be released later). It doesn’t have elaborate tone colors added like BussColors3 (also a Kagi plugin). It’s not obvious in normal use, not adjustable like some of these plugins. In normal operation you’re miles from clipping it anyway, and get only a subtle glue and tone shaping.\r\n\r\nBut what it IS… is classic Airwindows tone coloring brought up to 2017 standards. You can stick Desk on any channel, any submix or buss, the 2-buss, or all of the above. The more places you put it, the more obvious the analogifying becomes. And since it’s Airwindows tone and transparency, you can put it up against any ‘analog modeler’ by anybody, at any price or subscription fee, and it should beat everything and give a bigger, punchier sound. If it’s ‘analog warming’ and tone you want, and you require the sound not to turn into digital sludge and glitter, this is the one.\r\n\r\nAs a further note, the reason I've been willing to engage in hype like the above is a fundamental Airwindows principle: less is more. What Desk does is very simple and minimal. Doing less to the digital signal generally hurts the tone less. So, as long as you're getting enough 'analog tone shaping' cues in the particular ways Desk does them, it is actually true that if you find a plugin that does this as minimally as possible, with the fewest math operations, it is likely to sound bigger and punchier and better than more elaborate processing.",
    Comments: "",
    Name: "Desk",
    Date: 1484092800000,
    Url: "https://www.airwindows.com/desk-vst/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Desk2",
    Date: 1319068800000,
    Url: "https://www.airwindows.com/desk2/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "Desk3",
    Date: 1342310400000,
    Url: "https://www.airwindows.com/desk3/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is distinctive analog coloration (a tuneable version of the control-less Desk plugins)\r\n\r\nThough I’ve put out BussColors to mimic existing audio hardware, it was always my intention to create analog-ifying plugins that weren’t about cloning existing gear: that produced their own distinctive sound. The first Desk plugins (Desk, TransDesk, TubeDesk) were made in this way, using audio DSP which isn’t typical.\r\n\r\nAs this line of experimentation evolved, it led me to what we’ve got here. Desk4 is the latest refinement of the Desk line, now for Mac and PC VST (as well as AU)… and free.\r\n\r\nThe drive control is a boost as you might expect. Turn it up for more slam and dirt. It’s very soft, textured, rich-in-nutrients dirt, but it’s basically ‘distortion’.\r\n\r\nTreble Choke is more unusual: don’t overcrank this control or you’ll generate artifacts such as uncontrolled DC. It’s not a normal algorithm and not a traditional EQ or even a saturation: as you can tell from the weird behavior when you crank it. Use it subtly and you’ll have a brightness conditioner not found outside quality analog gear. Since it’s a plugin, you can also push the extremes of the behavior, just don’t get too carried away. It’s designed to let you break it with extreme settings, so it’ll be flexible across different kinds of audio.\r\n\r\nThe power sag and frequency controls are the heart of some behaviors in the earlier TubeDesk and TransDesk: you can make your imaginary analog hardware overload its power supply. Cranking the frequency slider moves the area of interest down, for tube power supply sag behaviors. Tiny settings work over a tiny range of samples, causing the effect to hit higher frequencies. If you hear an obvious effect, you’re probably applying too much… unless you intentionally want to crap out the audio, in which case this is a uniquely aggressive way of doing that. It’ll add grunge in an entirely different way from simple distortion, so you can do both.",
    Comments: "",
    Name: "Desk4",
    Date: 1501977600000,
    Url: "https://www.airwindows.com/desk4/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a quick, staccato gate.\r\n\r\nSo here’s a gate. And here is why you should care :D\r\n\r\nDigitalBlack is real simple on the surface: a threshold, and a dry/wet control. But what it does is more complicated. This isn’t a ‘gently fade to silence’ gate like SoftGate, or a ‘special effect’ like Gatelope. DigitalBlack was designed for one purpose: tightening up staccato direct-recorded tracks. I’m demonstrating it with a worst-case scenario because that’s all I had: I don’t get to do music, mostly, except for my live jams. But I had a drum room track where you can get some idea: play with it yourself if you’re curious, it’s free.\r\n\r\nDigitalBlack does three things that are interesting, two of which are pretty unique. Firstly, it uses hysteresis to prevent ‘sputtering’. That’s pretty normal. Second, it fades not with a simple volume, instead it fades into negative Density (bulk of the sound attenuated, only the transients stick out) which has the effect of sounding like it’s fading backwards away from you, very quick. This gives it a physical motion not common to gates. And third, it tracks zero crossings in a special way so that the ‘silence’ time it has to traverse, before hitting the negative Density area and then true silence, is related to the bassiness of the content.\r\n\r\nWhat this means is, if you’re hitting it with bassy content it’ll handle that gracefully. If you’ve got loads of midrange, it’ll gate that tighter. And if you’re making bright trebly sounds without a lot of bass, it’ll gate those FAST. And you can hear this on my lame demo, because in situations where only the initial spike of the drum hit got through on one side? (this is not linked: it’s designed so you could throw it on a submix with different stuff happening on L and R so it’s dual-mono) Even in my demo you can hear that some of those attacks are chopped off insanely fast. You’ll probably recognize pretty quickly if this is the gate for you. Try it on something like a DI guitar going into heavy ampsims, and see if you can’t get good results out of it. Put it on something like a kick or on individual drum mics (that you’re not already using Gatelope on), or on anything that needs to be insanely tight and quick to gate itself. It might be just what you needed. (for linked gentler slower gating to silence, try SoftGate: for a gate that also acts like envelope filters, use Gatelope)",
    Comments: "",
    Name: "DigitalBlack",
    Date: 1583020800000,
    Url: "https://www.airwindows.com/digitalblack-vst/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "DigitalBlack2",
    Date: 1343606400000,
    Url: "https://www.airwindows.com/digitalblack2/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Dimensional Kicks/Hats/Snares for Patrons",
    Date: 1475020800000,
    Url: "https://www.airwindows.com/dimensional-kickshatssnares-for-patrons/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a soft-clip distortion in the spirit of Edge.\r\n\r\nIn the event that you’d like a softer, tubier Edge… I’ve got you covered.\r\n\r\nIf you liked Airwindows Edge, this is a variation. It doesn’t go nearly as high gain but it’s got a much softer clip to it, and the same controls set up the same way (so highpass/lowpass settings ought to match if you want them to). My intent with it was to have a companion plugin to Edge for use with ITB guitars: I’d be using it with Cabs, but folks who need full-on IRs might try that too, or sandwiching your IR between Dirt and Cabs as a final tone/presentation tweak.\r\n\r\nI hope you like it… and not just on guitars. In line with my current ultrasonic filtering approach, you’ll get more mileage out of this and Edge at high sample rates, but the lowpass will let you get some space between you and aliasing no matter what sample rate you’re at.",
    Comments: "",
    Name: "Dirt",
    Date: 1646524800000,
    Url: "https://www.airwindows.com/dirt/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a sound design or reverb far-away-izer.\r\n\r\nHere’s another utility plugin: Distance is specifically set up to mimic through-air high frequency attenuation. It’s from my initial wave of Airwindows plugins, come to VST and with a new twist: though in the video it’s a one-knobber, when you download it you’ll find that it’s got a Dry/Wet control, just to expand the things you can do with it. That’s new! I try to listen to people, even when it’s tempting to make it a super-dedicated one-trick pony.\r\n\r\nAs you can see from how it behaves, Distance is a lot more complicated than just running a shelf. For that reason, I suggest this plugin for sound design and creative mixing purposes. Don’t try to use it for mastering or 2-buss, I feel it’s too intensely colored. However, for creative use it’s exactly what it says on the tin! Stick it on anything that’s supposed to ‘read’ sonically like it’s super far away, and you’ll be able to hear for miles and miles. Works on anything from pads to thunder to basses to reverb returns (I suggest using it on reverb returns rather than sends: it will be able to add thunder and size to the output of the reverb algorithm)",
    Comments: "",
    Name: "Distance",
    Date: 1478995200000,
    Url: "https://www.airwindows.com/distance-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a versatile space shaper for creating depth.\r\n\r\nAs requested, this is the unholy hybrid of Distance and Atmosphere. This one doesn’t work like a Console5 system, it’s strictly ‘put it on and get a sound’, but I wasn’t expecting how cool it would be. Turns out this thing is completely absurdly good at taking tracks like drums, and making them huge and pounding and stage-like, without even the use of reverb or compression.\r\n\r\nThe beginning of the video’s about using Distance2 as a loudenator, though I think using it on a full mix is overkill (maybe you want SOME elements to be up front and present). Bear in mind that you can keep the Atmosphere control set very low and still get an effect: the equivalent to the Atmosphere mixing system is to have it incredibly low, like 0.1 or less. The more you push it, the more nasty it’ll get, because that algorithm alone is NOT enough to make a distance sound. It’s not doing any of the high frequency attenuation you’d get, so technically the sound of high Atmosphere settings is the sound of extreme loudness rupturing the air and your eardrums: pushed hard, it’s unrecognizable as any natural sound. You wouldn’t survive exposure to a sound so loud that it broke the air like that.\r\n\r\nBut when you also include the Darken control, that’s when things start sounding realistic again. This is one of those plugins where I could have built these into a single control to deliver good-sounding results no matter what setting you used… and where I chose to give you access to the wrongest possible settings because people NEED to break rules sometimes. Somebody out there is going to be able to get a great sound by taking the right source, and obliterating it with extreme Distance2 settings, and who am I to stand in the way? And you can also apply a dry/wet that will conceal the wreckage: surprisingly small amounts of dry signal will mask the amount of distortion going on.\r\n\r\nAnd the reason I’m able to put out a plugin where I KNOW that some people will set it wrongly and then hate it, is my Patreon. The thing about Patreon is that when it works, I’m completely protected from having to make things market friendly. Market friendly is a curse: it makes you do only predictable things that most people would like, and it punishes you if you want to do something unpopular, or if you want to take something great and widen the range until people get into trouble with it. It’s safer to give people presets that are known to behave on all source audio, that always sound nice. It’s safer to give people a pile of mulch than a chainsaw.\r\n\r\nPatreon lets me give you the chainsaw :D now, whether you do damage with it is your own affair. But I think once you strap it across some buss with drums or guitars or whatever, and fire it up, you’ll like chainsaws too. Just remember to dial it back when you need it not to be distractingly obnoxious. Or not: hey, it IS a distinct new distortion voice, with a whole new approach to slew clipping not previously available. Darken it or not, as it pleases you. Have fun.",
    Comments: "",
    Name: "Distance2",
    Date: 1528588800000,
    Url: "https://www.airwindows.com/distance2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a slightly dark analog-style distortion with several presets, like Focus.\r\n\r\nI think this one ought to go over well. People often want ‘analog-style distortion’. Here’s a collection of Airwindows distortion algorithms in a handy plugin with a new twist: it’s optimized for high sample rate in an innovative way.\r\n\r\nWhat does that mean? Distortion is a slightly ‘dark’ distortion plugin. Not only are the algorithms pretty smooth (with some exceptions: check the end of the video for one!), it uses sample averaging to stop extreme highs from getting through. At 44.1k, there’s an averaging stage before the distortion, darkening the output but also interfering with aliasing. Averaging also has some tonal benefits to midrange and bass, so this gives the plugin more of a ‘voice’. That’s at 44.1k, CD quality.\r\n\r\nBut, if you use higher rates like 96k or 192k, Distortion begins to use more ‘poles’ of simple averaging. It’ll bring in averaging after the distortion, softening the tone. It’ll use more and more stages of this treble-softening, still always on just the most recent two samples, even though that becomes more and more finely grained as the sample rate goes up. Because of how averaging works, this never brings in weird notches or cancellations (like broader averages) but it does produce a sort of bleed-off of highs. Run at 44.1k this would give you an increasingly wide roll-off.\r\n\r\nAt the high sample rates this was designed for, what you get instead is exactly the same ‘dark distortion’ tonality, but increasingly better aliasing rejection as the sample rate goes up. I think 96k is a sweet spot for this: at 96k, still a basically normal sample rate, you get extremely warm and fluid distortion, even when pushed to extremes.\r\n\r\nIf you like extremes, look into the final two distortion modes. In Distortion, the modes Mojo and Dyno operate in their purest form, where the distortion shape can curl around again to produce strange effects if you slam them ruthlessly. In the video you see me discovering this on Mojo, running a simple DI bass at far too high a volume into Mojo, and then doubling it up to make crazy organic synth-like effects. Other modes like Density, Drive or Spiral will just go to ultra-clipping normally.\r\n\r\nDistortion will give you truly warm overdrive effects, especially at high sample rates, without a bunch of fake analog modeling. I don’t recommend using it on everything (because maybe some sounds are good WITH extended high-end, especially if you’re working at 96k and all) but as always, I’m not the boss of you.\r\n\r\nAgain, the notable thing about this relative to other cascaded aliasing-suppressed distortions like Console7Cascade is that Distortion is doing it all with simple averaging filters. That will give you a distinct, softer sound without the clarity you get from multi-pole biquad rolloffs. Distortion is for when you want warm, warm, warm and are OK with letting the highs soften, plus if you want to pick different sorts of crunch edge (not often a feature on Airwindows plugins).",
    Comments: "",
    Name: "Distortion",
    Date: 1586649600000,
    Url: "https://www.airwindows.com/distortion/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is dark deep 'dither' (includes 16 bit version, DitherMeDiskers)\r\n\r\nWhat is a dither? Dither is a way of changing one type of noise, quantization, to a different type, just plain noise. It’s all about manipulating a situation where your waveform must decide between two options, ‘up’ or ‘down’, and pick one of a very limited number of positions in a lower-resolution space. In the strictest sense, dither is adding two sources of calibrated noise in order to make the resulting noise floor completely unrelated to the audio signal.\r\n\r\nOr, if you’re me, ‘dither’ can be an affair of tracking the Benford Realness calculations of each option, and always choosing the direction that will most closely approximate real sampled data, then noise shaping the result to produce a bright airy hiss for the background noise, and an open, detailed sound picture far more revealing than normal ‘dither’ can be. And that’s Not Just Another Dither, which uses a completely different approach to selecting ‘up’ or ‘down’. And then there was last Monday, my first Airwindows tech-support livestream, and a little diagram I drew to explain the sampling theorem… and an idea.\r\n\r\nWhat if you just picked whichever option smoothed the signal out most?\r\n\r\nIntroducing Dither Me Timbers, the tonal opposite to Not Just Another Dither. Although it has dither in the name, and works like a dither, and occupies the same place in your DAW as a dither, it’s not a dither at all (though it does have a noise shaper). It’s a filter. It exists to take the tiny microdetails in the sampling theorem, and make them darker and deeper. The functionality is very simple: it runs one sample of latency (it’s an output stage, so that shouldn’t be too much of a problem in practice) and, for every sample, asks whether it’s larger or smaller than its surroundings. If it’s the top of a corner or a spike of treble, it simply picks whichever ’rounding’ will smooth out the treble the most. How much? It doesn’t care. It just always picks the least treble at any given moment, no matter what.\r\n\r\nThe noise shaping is gentler than that in Not Just Another Dither. Instead of establishing a bed of subtly hissing noise like NJAD, Dither Me Timbers uses its noise shaping to transform what is not even a dither, into a behavior. It doesn’t try to decorrelate the noise, or present a clean signal behind it. Instead, it does this: it works to make whatever noise is produced, as loud as the original sound would have been. This is all at superfaint levels, and interacts with the treble-darkening effect. It sounds like analog mechanical noise from some sort of playback system that’s part of the audio. As it drops way below the noise floor of what TPDF dither would have been (and I mean WAY below that noise floor) it replaces faint musical content with faint rustles and sputterings, not unlike a vinyl record’s artifacts. It’s entirely correlated with the audio, and closely matched in volume to what the audio would have been… far below what we’re used to experiencing as a digital noise floor. And it’s combined with the EQ behavior of Dither Me Timbers, producing a behavior where the audio goes first dark, then quiet, as it drops beneath perception.\r\n\r\nThis produces an effect you can’t get anywhere else, which contrasts with Not Just Another Dither completely. Instead of sparkling detail, you get depth like no other digital medium can produce. Ambient stuff, distant sounds, are twice as deep and twice as dark. If you’re going for natural organic tones, they’ll feel all the more solid, all the more real. There’s an ease to the presentation, a blackness and silence to the background, as if distant reflective surfaces became velvet curtains. Quiet musical notes take on body, lose sparkle, sit back in space as if they’re on a distant stage.\r\n\r\nThere’s also a version that does this to 16 bit, Dither Me Diskers. I don’t do that with many dither experiments: NJAD has its CD version, and now there’s finally a follow-up for those who’d like to make seriously warm, deep, organic sounding CDs. If you’re not pushing the frequency limits of human hearing with your content, it’s possible to get CDs to sound surprisingly good, and Dither Me Diskers takes that to another level. You won’t feel a lack of depth and distance from your CD with this. There’s hints of sound way way below what you’re using to thinking of as the grain of 16 bit digital audio, and you can’t feel the edges of it at all. Everything’s more dark and mellow.\r\n\r\nAnd lastly, some of you will hate it. This is a filter. It takes the most delicate subtleties of the digital waveform and darkens them up, on purpose (‘cos you gotta do something, when you’re quantizing). You know who you are: if you’re not panting for that depth perception and analog smoothness, if you’re not secretly into the resonance and power of the best old vinyl, this is not for you. Try NJAD, which will give you all the airy detail you could ask for.\r\n\r\nIf you want to sink into the music like it was soup, if you think digital would sound better through tubes or tape or anything to cut the dryness and shallowness of it… odds are you’re going to love Dither Me Timbers. It is as wrong as a pirate at a garden party: it’s not even a dither at all, but a filter and a bizarre noise shaper. It’s a trick, a stunt, a mockery of ‘correct dither behavior’. It’s an EQ, a tone-changer.\r\n\r\nAnd there’s nothing else like it… and it’s yours. Enjoy :)\r\n\r\nNote: there is a more sophisticated version of this behavior in Airwindows Dark. The difference is, Dither Me Timbers only looks for a tiny micro-environment, within three samples. Dark extrapolates outward to work out which option will best make the WHOLE sound darker, not just a tiny three-sample area.",
    Comments: "",
    Name: "Dither Me Timbers",
    Date: 1544313600000,
    Url: "https://www.airwindows.com/dithermetimbers/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a switchable selection of dithers in 16 and 24 bit, plus monitoring tools.\r\n\r\nThis one’s fairly simple to explain. It’s (nearly) every Airwindows dither plugin in one box, with a control to select between them.\r\n\r\nWell, there’s a bit more: Ditherbox comes with 16 bit versions built in (the individual plugins are based on 24 bit, with the exception of NotJustAnotherCD). So rather than messing around with BitShiftGain (which will still give you any weird bit depth you could wish for) you can output to CD-quality 16 bit directly from Ditherbox. That was kind of waiting for Ditherbox to come out, didn’t want to steal all of its thunder.\r\n\r\nOh, did I say thunder? Ditherbox also comes with monitoring tools: calibrated SlewOnly and SubsOnly playback, where it’s supposed to give you roughly the same levels and dynamics from full bandwidth, SlewOnly and SubsOnly. Might not be exactly the same, but if one of them is wildly different from the full bandwidth you might have a look at the mix.\r\n\r\nLastly, it has a new trick: Silhouette! The idea behind this one is simple: calibrated noise replaces your mix. If you can still hear beats and dynamic behavior, or best of all if your music is kind of recognizable, it’s a good sign! That means your mix is communicating information dynamically. If it’s just a wash, you might want to look at your overcompression or over-limiting, because especially now in the days of replay gain, it’s good to leave the ability to communicate with dynamics and not squish everything too much. It’ll also tell you things about how spikey your compression peaks are, and the dynamic texture of your drum impacts.\r\n\r\nThis plugin marks the open-sourcing of everything I’ve ever done dither-wise, including the Benford Realness-based Not Just Another Dither (named by the internet!). Seemed sensible, as they are all included in Ditherbox (well… actually the TPDF-based stuff like TapeDither, NodeDither, PaulDither, DoublePaul didn’t get included as they weren’t in the original Ditherbox. I’m kind of exhausted doing this one and VSTing it and opensourcing everything: there was a lot of fussy porting work and barely room to move the slider on the VST: forgive, plz?)\r\n\r\nAnyhow, with MOST of the Airwindows dither work represented, hopefully this is fun to fool with. I do still recommend Not Just Another Dither on general principles, as in practical terms it’s the best one. You can still put TapeDither on outputs going to a mix, I’m just saying, it all culminated in NJAD.\r\n\r\nAs a follow-up in 2022 (not 2018, when this came out), Ditherbox is somewhat out of date. The version of NJAD in it isn't the most current: Monitoring has a better one. Monitoring also has Peaks, which is superior to Silhouette at the task Silhouette is for. One of the reasons Ditherbox still exists is, if someone got into it and REALLY liked the version of NJAD in there, it's all very well making improvements but I should keep unaltered versions of things. And that's what Ditherbox is now: it's not a go-to in my opinion, but if someone was depending on it, it got through a series of additional ports (like to signed AU and VST for Mac M1 processors, native) without anything about it changing. This has value of its own.",
    Comments: "",
    Name: "Ditherbox",
    Date: 1535846400000,
    Url: "https://www.airwindows.com/ditherbox-vst/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "DitherDemo",
    Date: 1230768000000,
    Url: "https://www.airwindows.com/ditherdemo/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a demo of floating point truncation: can also dither to 32 bit float output.\r\n\r\nThis AirwindowsPedia entry contains the most current public domain source code for adding floating point dithering to your own work, either to a float or double precision buss (which would mean you'd have to be using something longer like long double for your internal processing).\r\n\r\nDitherFloat is NOT for putting in mixes to 'dither the plugins'. It is a demo, and the only use you could possibly do with it is to put it on a double precision buss and dither to save as 32 bit floating point instead of double. I don't think that's productive. Again, DitherFloat is NOT a plugin to use on things to make them more dithered. It's a proof of concept, like putting 'DeRez' onto dither plugins to hear how that works. You can literally hear the truncation in floating-point mantissas using this plugin, and what it sounds like when those are dithered. On to the original post when this came out…\r\n\r\nThis began as a challenge. A forum poster said you couldn’t dither floating point outputs, and posted a link to a study explaining why.\r\n\r\nFloating point (including the kind that fits between every plugin in a mix on MacOS or 32-bit bussed VST) has fixed point math of the kind one needs to dither, in a part of the number called the mantissa. (64-bit VST has it too, just more finely grained.) It’s not all that hard to work out how to apply dither to this part. You scale it up or down according to the part of the number called the exponent.\r\n\r\nThe trouble is (a) it’s hard enough getting people to dither to 16-bit CDs, and (b) the argument is that the amplitude of the dither would fluctuate madly, making it unhelpful and incorrect. This is kind of like how flat dither isn’t correct: with only one noise source what happens is, the noise floor fluctuates according to the waveform causing a kind of distortion. If you have a low sine wave you’ll hear the ripple effect of flat dither, and the argument is that dithering floating point is like that only more so (and so, nobody ever tried).\r\n\r\nDitherFloat demonstrates this, and it’s not true. You can TPDF dither (even PaulDither, like I’m using here) floating point. The noise doesn’t fluctuate according to the waveform represented in the mantissa. It fluctuates according to the value in the EXPONENT, because it has to, because the quantization noise also fluctuates wildly in volume. And if you get it right, you end up with no truncation distortion at all, just like using TPDF to fixed point.\r\n\r\nThe video explains more and shows it working. It’s practically impossible to hear ONE stage of 32 bit truncation (may be literally impossible, I think) but you can cheat and hear it as obviously as you like. You just add a huge offset to the number, convert it to float, and then subtract the offset again: and that’s what DitherFloat does. It’s a demo. It shows you there’s still truncation in floats, and it shows you the way TPDF dither completely removes the truncation distortion. It linearizes the signal so that no trace of the truncation is present (that’s how correct dither works).\r\n\r\nYou can’t add DitherFloat after existing plugins to fix them: even though you can use it (with zero offset) to export a 64 bit buss to 32 bit float and dither it, by itself DitherFloat can’t fix existing plugins. You would have to put the code for the dithering, into every single plugin that outputs 32 bit floats. Every MacOS plugin, every singlereplacing VST (every older VST implementation before they implemented 64 bit buss). For the Airwindows library that would involve personally revising every plugin I’ve released under the VST/Patreon years, many hundreds of plugins.\r\n\r\nSo I did. :D\r\n\r\n(as of 2022, all the 32 bit buss plugins I make still dither to the 32 bit floats. In 2021, I experimented and decided to make my internal busses double precision instead of long double, as I wasn't able to find a difference and thought it would save some CPU; at that point, Airwindows plugins running on the VST double processing buss began outputting directly without a dither stage, for a slight efficiency boost. They still have the DitherFloat code in case the random number needs to get used, but the application of the dither is meaningless when the buss is already double, so that bit is commented out.)\r\n\r\nBelow is the actual code, licensed as public domain, for both the 32 bit and the original 64 bit floating point dithers.\r\n\r\n\t\t//This is free and unencumbered software released into the public domain.\r\n\t\t//this is in the header file, defining a continuing variable\r\n\t\tuint32_t fpd; //this is an unsigned int used for the random generator\r\n\r\n\t\t//this is in reset, where we start off the variable as a default starting number\r\n\t\tfpd = 1.0; while (fpd < 16386) fpd = rand()*UINT32_MAX;\r\n\t\t\r\n\t\t//the random generator is xorshift32 which can't start off with zero.\r\n\t\t//if the reset is randomized, all the dithers are different randoms\r\n\t\t//then in the actual processing code:\r\n\t\t\r\n\t\tint expon; frexpf((float)inputSample, &expon);\r\n\t\tfpd ^= fpd << 13; fpd ^= fpd >> 17; fpd ^= fpd << 5;\r\n\t\tinputSample += ((double(fpd)-uint32_t(0x7fffffff)) * 5.5e-36l * pow(2,expon+62));\r\n\r\n\t\t//Anyone is free to copy, modify, publish, use, compile, sell, or\r\n\t\t//distribute this software, either in source code form or as a compiled\r\n\t\t//binary, for any purpose, commercial or non-commercial, and by any\r\n\t\t//means.\r\n\t\t//In jurisdictions that recognize copyright laws, the author or authors\r\n\t\t//of this software dedicate any and all copyright interest in the\r\n\t\t//software to the public domain. We make this dedication for the benefit\r\n\t\t//of the public at large and to the detriment of our heirs and\r\n\t\t//successors. We intend this dedication to be an overt act of\r\n\t\t//relinquishment in perpetuity of all present and future rights to this\r\n\t\t//software under copyright law.\r\n\t\t//THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\r\n\t\t//EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n\t\t//MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\r\n\t\t//IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR\r\n\t\t//OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,\r\n\t\t//ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\r\n\t\t//OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n64 bit version for hilarious overkill is almost identical but with small changes in frexp() and the constants. This is now a sort of mad community effort, so that becomes public domain too:\r\n\r\n\r\n\t\t//This is free and unencumbered software released into the public domain.\r\n\t\t//this is in the header file, defining a continuing variable\r\n\t\tuint32_t fpd; //this is an unsigned int used for the random generator\r\n\r\n\t\t//this is in reset, where we start off the variable as a default starting number\r\n\t\tfpd = 1.0; while (fpd < 16386) fpd = rand()*UINT32_MAX;\r\n\t\t\r\n\t\t//the random generator is xorshift32 which can't start off with zero.\r\n\t\t//if the reset is randomized, all the dithers are different randoms\r\n\t\t//then in the actual processing code:\r\n\t\t\r\n\t\tint expon; frexpf((double)inputSample, &expon);\r\n\t\tfpd ^= fpd << 13; fpd ^= fpd >> 17; fpd ^= fpd << 5;\r\n\t\tinputSample += ((double(fpd)-uint32_t(0x7fffffff)) * 1.1e-44l * pow(2,expon+62));\r\n\r\n\t\t//Anyone is free to copy, modify, publish, use, compile, sell, or\r\n\t\t//distribute this software, either in source code form or as a compiled\r\n\t\t//binary, for any purpose, commercial or non-commercial, and by any\r\n\t\t//means.\r\n\t\t//In jurisdictions that recognize copyright laws, the author or authors\r\n\t\t//of this software dedicate any and all copyright interest in the\r\n\t\t//software to the public domain. We make this dedication for the benefit\r\n\t\t//of the public at large and to the detriment of our heirs and\r\n\t\t//successors. We intend this dedication to be an overt act of\r\n\t\t//relinquishment in perpetuity of all present and future rights to this\r\n\t\t//software under copyright law.\r\n\t\t//THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\r\n\t\t//EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n\t\t//MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\r\n\t\t//IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR\r\n\t\t//OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,\r\n\t\t//ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\r\n\t\t//OTHER DEALINGS IN THE SOFTWARE.\r\n\r\nIt’s not complicated but it’s my own code and it’ll work: it’s even pretty easy to drop into other plugins. If anyone’s game to do that and shout out that they did, I’d love to hear about it.\r\n\r\nIf they don’t, they will just continue adding a little truncation with every single plugin, every single calculation, and now none of MY plugins do that :)",
    Comments: "",
    Name: "DitherFloat",
    Date: 1548547200000,
    Url: "https://www.airwindows.com/ditherfloat/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "DitherTo",
    Date: 1276905600000,
    Url: "https://www.airwindows.com/ditherto/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is StereoDoubler with independent delays and feedback.\r\n\r\nThis one was a request: I have a weakness for doing plugins for folks who worked on records I grew up listening to on vinyl. So often we recognize only the rock stars, but the guys behind the desks do so much to help the magic happen. And this plugin is there to bring the magic. It was a GREAT suggestion.\r\n\r\nDoublelay starts with Stereo Doubler, then adds delay taps to the pitch-shifted L and R independently, and then it also lets you feed back the results into the input again, in a secret combination that nobody knowing me will be surprised to know is the Golden Ratio. It's 0.618.... direct feedback, and the inverse as crossfeed. The direct feedback will continue pitch shifting up and up, and the inverse/crossfeed will continue shifting the pitch back again to where it started. The end result is an ability to further expand the spatiality and pitch-iality of the effect to taste, up to 1.0 where you'll get close to infinite feedback… unless you're using the pitch shifting, where it will trail off faintly into color-smeared audio trails.\r\n\r\nOr you can skip the feedback and use it to thicken vocals and things, or do an 'echojam' effect in stereo with just two taps where the echoes are also pitch shifts, or have one side not be a delay and the other side be a big delay: turns out there are a lot of things you can do, and since this is a very immediate (based on the very 'raw' sounding Glitch Shifter by way of Stereo Doubler) delay based effect, the added ambience you create will not fill up nearly as much space as a full-on reverb might do. Truly a great way to fill up some mix space with what you've already got in the tracks, and go on from there if you like. And I hope you do like Doublelay.",
    Comments: "",
    Name: "Doublelay",
    Date: 1661126400000,
    Url: "https://www.airwindows.com/doublelay/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is like PaulDither but more so.\r\n\r\nThis is for sort of a special purpose.\r\n\r\nI’ve got an outrageous custom dither (well, wordlength reducer: there’s no noise and no randomness in it) called Not Just Another Dither. For final output, it’s that I recommend.\r\n\r\nHowever, I’ve got a mastering engineer friend (Hi Bob!) who favors another dither of mine, PaulDither. The reason is, it’s traditional TPDF dither. It handles dithering duties perfectly (with a slight Airwindows-izing: the weight of the final noise floor is balanced to make one ‘bit’ function as zero, and to make the dither activate adjacent bits on either side for a better sound. This also gives a teeny least-significant-bit DC offset, if you assume ‘zero’ is between the two smallest bits, positive and negative)\r\n\r\nI wanted to give Bob (and anyone else selecting traditional TPDF) something fancier that still counted as purely normal dither. So, here’s DoublePaul.\r\n\r\nIt’s TPDF highpassed dither, just like PaulDither. But, I’m also using some adjacent samples to skew the noise profile even further into the highs. It’s just a redistribution of energy, and it leaves the key pair of full-intensity noise samples to stay as TPDF dither. I just doctored the way you hear the noise, to push it a little farther into the highs. I’ve also backed off the teeny DC offset, and shaped every filter tap by ear. If you liked PaulDither, try DoublePaul and see if you like taking the PaulDither concept just a teeny bit farther, with no penalty to how the TPDF works. It’s just like a little sinc interpolation, a thing that’s trying to hide the TPDF energy by pushing it farther into the extreme highs. If you don’t trust NotJustAnotherDither, but you’d like something even quieter than PaulDither, try this.",
    Comments: "",
    Name: "DoublePaul",
    Date: 1487462400000,
    Url: "https://www.airwindows.com/doublepaul/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "",
    Comments: "",
    Name: "Doubler",
    Date: 1262390400000,
    Url: "https://www.airwindows.com/doubler/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "the angry distortion!\r\n\r\nIf you know how to use Airwindows Density, you know how to use this. It’s exactly the same layout, except that it doesn’t go to negative values: this one’s just for slam.\r\n\r\nWhy bother with such a similar plugin? Because of the tone!\r\n\r\nDensity gets a thick, full, fluid tone because it’s got a super-smooth transfer function. In fact it’s the theoretical optimum distortion transfer function for having no grit or crunch: it ‘hides’ the distortion very well.\r\n\r\nDrive hides nothing. It’s all about grit and crunch, not smooth. Go ahead and try it and see. If your sole purpose for an overdrive plugin is to make stuff ‘big and fat and thick’ then you want Density. But if you’re reaching for a distortion because you have some sound, a bass, a snaredrum, and you just want to make it sound ANGRY: not so much fat or forward or gritty or edgy, but just plain straight up pissed off… then you may want to have Drive around.\r\n\r\nIt does have the highpass, the output trim, the dry/wet just like Density does. That means it can be adapted to different contexts. But the sound remains the same: angry overdrive, a real nasty bark. Neither too smooth, nor too edgy and trebly. Drive will work on pretty much anything you want to make really mad, and the ease of getting that tone color will make you the opposite of mad. :D\r\n\r\nNote: you can get this algorithm in the Distortion plugin, smoothed out with averaging filters.",
    Comments: "",
    Name: "Drive",
    Date: 1478044800000,
    Url: "https://www.airwindows.com/drive-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "Drive2",
    Date: 1286064000000,
    Url: "https://www.airwindows.com/drive2/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "drums",
    Url: "https://www.airwindows.com/drums/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a heavy-processing tape modeler. This entry contains personal details about what was happening in 2018 for me, and is included in full because there are things that have a place in AirwindowsPedia, as a sort of 'historical section'.\r\n\r\nSo this is not a sad plugin but it’ll be sort of a sad post and I may as well do it anyway: I’ll keep it brief and to the point, and it’s kind of relevant to the Airwindows plugin release schedule.\r\n\r\nFirst, the plugin: this is DrumSlam. It was originally meant to sound like Massey TapeHead. It’s sort of a multiband tape emulation/distortion, and it didn’t end up sounding like TapeHead but it does have a sound of its own: all the more since it’s a technique I don’t normally use (multiband stuff rarely makes sense to my ear). I see it as an effect plugin more than general purpose, but as always I’m not the boss of you and you can use it however you please. It’s open source, so you can also use the code or do variations on it: all you have to do is credit that you’re using Airwindows code, and you can even charge for your own DrumSlam-based plugin provided you make the credit clear: in fact, since it’s not the ‘advertising clause’ version, you get to cite Airwindows and suggest that it makes your plugin sound special: if you ask, I’ll help you make that be true. I just don’t take personal responsibility for the sonics of plugins that use ‘Airwindows Open Source’ in their promotion, because there are still ways you could screw it up cooge if you’re also open source, I’d be able to look at the code and give my opinion on whether it’s maintaining the integrity of the input data.\r\n\r\nSo that’s DrumSlam. Try it, slam it, do stuff with it, it’s simply another type of tape emulation done somewhat Airwindows style, and it’s got its own sound that you might like.\r\n\r\nAlso, this is my Patreon, if you find these plugins indispensable please join it at the rate of however many plugins a year you think you’d be buying from me if they were sold at around $50 each, perpetual license complete with source code. It’s kind of a bargain, and the opposite of DRM: in soviet Airwindows, your rights manage me! cooge\r\n\r\nNow, over to my status report. I think I’m going to be able to keep up my plugin releases at least through StereoFX next week and probably won’t even have to skip a week but it’s possible I won’t be able to focus, or I might derp some of the releases and get them wrong and have to fix them, like with Console5 last Xmas. Apology in advance, if so. The reason is the same as it was then. Last December 6th, my Mom died. She’d kept me from starving when I was starting up the Patreon, and I owe her everything. After that, January 23rd of this year, the cat many of you have seen in videos (my last cat since the other one got hit by a truck the year before) died. She was very old, and around 3 AM that morning she fell down and no vet office was open at 3 AM and I just cuddled her and was with her as she died, which was all I could do (I couldn’t have afforded veterinary care at the time anyhow, I was living on $858 a month from the Patreon). So it’s been a lot of loss around the turn of the year.\r\n\r\nSo, three days ago, Thursday July 5th, my Dad died. I’d got word he was in the hospital (he was VERY old and feeble) and I tore ass down to Pennsylvania to see him: he’d fallen and hurt himself and was unresponsive (like me, he lived alone and got a lot out of being in his home, his final years were good). This was the price of that freedom: he’d hurt himself at a time when nobody would check on him for at least half a day. Once in the hospital, he came to for long enough that my sister got to speak to him, and he was grateful to see her. But then he took another downturn, they resuscitated him, and had to do it so fiercely that it harmed him further. I did see him but he was mostly gone by then, was with my sister as the doctors broke the news that they couldn’t safely keep rescuscitating him, and we told them that in that case it was clear: keep caring for him, but there was nothing more they could really do. Roughly an hour later he passed on.\r\n\r\nIf I’m demanding of myself he’s part of the reason why, for fair and foul reasons. This was a guy I couldn’t really give gifts to: he was a brilliant scientist in his day, and there were no emotional things that didn’t go through that rational filter so if my gift wasn’t perfect he’d be openly unhappy with it. There was an exception: I’ve painted and cartooned and stuff like that, and he valued those things more than I do, and in his declining years I even drew some comic strips just for him. Maybe I’ll scan them now and put them up somewhere as a memorial of the only thing I could do that he uncritically loved. That sounds dark, but there was more to him than only that. When I was tiny he used to indulge a fierce and violent temper, and Mom got him to stop it… and he did, some of my siblings never saw that in all their lives. He was sad a lot of his life, but he was also the Dad who literally built our childhood television set from a Heathkit electronics kit, so I grew up playing Atari 2600 games on the TV my Dad had literally built from parts. To a nerd like me, that is awfully cool. He was a hard act to follow and a hard man to please, and though it was sometimes a rocky path I know that I was able to be supportive in his final years, and the last time I saw him alive and aware, I hugged him and I meant it… and he hugged back.\r\n\r\nI think I’ll be able to keep the Airwindows release schedule going without missing a week. I think he would respect me wanting to do that: it’s the sort of thing he would do. Also, there’s nobody much left to DIE anymore now that my parents and my cat have gone, so at this stage it’s time to just keep doing what I do, and that’s what would please me and would’ve pleased them.\r\n\r\nWell, not the cat. She would have demanded cuddles. But I was good for those, too.\r\n\r\nLove you guys, and I will try not to put out any awful buggy derps of plugins, but fair warning in case I do: it’s been sort of a difficult half-year. It ought to start getting better, I feel I must be through the worst of it and I’m still here and will be OK. <3",
    Comments: "",
    Name: "DrumSlam",
    Date: 1531008000000,
    Url: "https://www.airwindows.com/drumslam-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "Dual Mono Verbs",
    Date: 1231113600000,
    Url: "https://www.airwindows.com/dual-mono-verbs/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a version of DubSub where the bass reinforcement is purely mono.\r\n\r\nSo here’s DubSub (below) with mono bass. This isn’t the last you’ll hear of this tool as I have BassKit coming out (which is the more approachable, well-behaved version of DubCenter) but this is the one that will let you get the most extreme. If you were using DubSub to its fullest, this one lets you do the same only with the bass and sub outputs centered.\r\n\r\nThe reason you’d want to do that is, whether for sound reinforcement or vinyl mastering there’s little reason to have stereo bass. It just makes the woofers fight each other, below a certain frequency (which depends on how far apart your speakers are). This is why elliptical EQs exist.\r\n\r\nAnd the thing with DubCenter is, you don’t have to filter the original audio or mid/side it! All you have to do is use DubCenter to reinforce the bass, and it’ll automatically make that added content mono. This is even better than using (for instance) ToTape and its head bump mechanics to reinforce bass, because that (like a real tape deck) produces a stereo head bump. This produces the same fullness with the same algorithm, but it’s strictly mono so you get the effect of an elliptical EQ without having to run one! Only the super-deep stuff gets reinforced and the information and phase relationships of your original mix go untampered with.\r\n\r\nAgain, BassKit will do this in a super-convenient way with much of the tweeky functionality simplified or taken out (for that one, there is no chance of abusing the sub-octave to do weird stuff as it’s restricted to only convincing subs content) but DubCenter is the one like DubSub, where you can make it do crazy things. You’ll find it in your plugin menu next to DubSub, most likely. Have fun!",
    Comments: "",
    Name: "DubCenter",
    Date: 1540080000000,
    Url: "https://www.airwindows.com/dubcenter/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a fully featured bass doctor.\r\n\r\nBe careful what you wish for. I like making plugins with very few controls, but when you have to use ALL the controls…\r\n\r\nHere’s how it works. The top section, Treble Grind, is like a bass guitar presence circuit. You shouldn’t use that for hi-fi purposes, if you want clean pass-through use the Dry/Wet. Treble Grind works like a distortion, and has an Inverse/Out control allowing you to subtract it as well as add it. ‘zero’ is in the middle.\r\n\r\nCrossover determines what goes to the Treble Grind, and what goes to the bass sections. To make it track bass better, set the crossover low.\r\n\r\nBass Drive is how hard you’re pushing the main bass section. It’s essentially an adjustable Head Bump control like in ToTape. Bass Voicing controls the depth of the bass boost: setting it higher up sounds more like overdriving a bass amp. Bass Inv/Out is the same as in the Treble Grind section, an ‘attenuverter’ like in certain Eurorack modules: it lets you subtract the bass, not just add it.\r\n\r\nSub Drive, Sub Voicing, and Sub Inv/Out are much like the bass section, except they work on an octave-divided version of the bass section. This helps it get good octave-down sounds some of the time, but it’s not anything like a digital suboctave synthesizer: it’s working crudely like an analog octave divider, which means it can make horrible noises if it doesn’t have clean signal to work with. This is of course intentional :) if you want it to do a recognizable sub-note, feed it a carefully controlled signal off a single track. Or, you can set it very deep and not mix in all that much of it, and get an interesting effect sound. For cleaner deep bass, work with the main bass section, or voice both of them very deep in hopes of cleaning up the sub-bass section a little by refusing to let it have more complicated signals.",
    Comments: "",
    Name: "DubSub",
    Date: 1538870400000,
    Url: "https://www.airwindows.com/dubsub-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is unpredictable distorty noise, like dust wedged under your turntable needle.\r\n\r\nAnd then sometimes there’s a plugin that just makes you go ‘wut’…\r\n\r\nDustBunny was an accident. I was doing something and put out a plugin (possibly a freebie) and there was a bug and I was in a hurry and put it out without checking… and quickly learned something horrible was wrong. Initial reports were along the lines of ‘oops’ and ‘yikes’, and when I checked, sure enough, the plugin erupted in terrible scrunch, and I in turn erupted in apologies and scrambled to fix the problem (which wasn’t that hard).\r\n\r\nBut even before I’d got the fix out (and simple oversight problems, I sometimes fix within hours), more reports were coming in: hold on, don’t fix it, it’s cool!\r\n\r\nThat wasn’t what I had in mind, but the solution was obvious: DustBunny was born. This twisted little plugin just applies a weird accidental scrunch based on where the bunny control is set. Please don’t use it on the 2-buss, or in mastering :) but more seriously, this is born to sit inside some kind of weird plugin matrix device as part of a nefarious sound design idea. It would’ve been perfect in one of the parallel effect chains used on the latest DOOM soundtrack, mangling a sinewave. If you hit it with high levels it gets kind of jumpy, so you might want to give it more restrained levels. If you don’t like running a gain trim in front of it, run something more amusing like a delay or a flanger to pad your signal a touch.\r\n\r\nDustBunny is kind of like a joke, except for it’s real and does produce an unusual, distinctive effect (or 1000, as all the settings are kind of unique).",
    Comments: "",
    Name: "DustBunny",
    Date: 1503446400000,
    Url: "https://www.airwindows.com/dustbunny-vst/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a lot like Mojo, but for intensity instead of loudness.\r\n\r\nDyno is similar in some ways to Mojo, but Dyno has a completely different character. Instead of loudenating, it ‘intensenates’. It’s a little bit like Remap in that way, but it’s not the same as Remap. You won’t get a volume boost out of it really, nor will it let you slam it for fatter peaks.\r\n\r\nInstead, it brings fire and intensity to the audio and reshapes the waveform in a Mojo-like ‘evolution of Spiral’ way. Because it doesn’t take to slamming in the same way, it’s going to be a more subtle effect, but for those who got excited by Remap, this one deserves your attention.",
    Comments: "",
    Name: "Dyno",
    Date: 1564272000000,
    Url: "https://www.airwindows.com/dyno/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "Ed",
    Date: 1294272000000,
    Url: "https://www.airwindows.com/ed/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "ed-is-dim",
    Url: "https://www.airwindows.com/ed-is-dim/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a seven-stage distortion with Hypersonic filtering and tone shaping controls.\r\n\r\nWith all the talk I’ve done about Hypersonic (composite filtering making very steep Butterworth slopes from sets of biquads), one must ask: what if you just made a distortion out of it?\r\n\r\nThis is Edge. It’s seven stages of hard clipping with Hypersonic-style filtering between each one. It’s real bright and has silly high gain, and it’s going to become real useful.\r\n\r\nThat’s because it’s one piece in the DI Guitar system I’m devising: a set of plugins that combine my style of aliasing reduction (using biquads, so zero latency) with guitar-grade distortion and a reissue of a classic old plugin of mine that’s totally revitalized for the modern day, Cabs. (it can also be run into the Airwindows amp sims, of course)\r\n\r\nSuffice to say Edge is the high-gain distortion stage of such a system. It should run pretty efficiently, and it’s got a carefully designed set of controls. The gain of course is obvious.\r\n\r\nLowpass is basically your cutoff frequency: this isn’t designed to be swept (though you could if you’re OK with some crackles) but is a very efficient Hypersonic-style lowpass that you can set from 25k right down into the deep bass. Since it doubles as the ultrasonic filter, dialing back on the extreme highs will give you even better aliasing performance (run at elevated sample rates to use this properly) and also gives you an interesting tonality at the cutoff which isn’t exactly resonance, but it’s a bit like it. The way the phase shifts going into successive stages of gain boost and clipping produces a distinctive tone.\r\n\r\nHighpass is your secret weapon for when you use it as a guitar amp: get the rest of the system huge and beefy, and then dial in the lows using this input highpass, for maximum texture.\r\n\r\nOutput and Dry/Wet are for use when you’re just making it be a hard clipper. It’s never going to be exactly a hard clip because of all the stages and the way the EQ interacts with the sound, but between the highpass, lowpass and the gain on tap you’ll get many sounds out of this one. Unlike stuff like ‘Tube’ this is never intended to be smooth. It’s just edgy in a distinctive way that might come in handy.",
    Comments: "",
    Name: "Edge",
    Date: 1645315200000,
    Url: "https://www.airwindows.com/edge/",
    Category: "Saturation"
  },
  {
    Name: "EdIsDim",
    Description: "is mid/side conversion utility plugins.\r\n\r\nIt’s always nice to expand one’s horizons! You don’t have to run the latest Logic to be able to use any plugin in mid/side mode… though you might need to do a little fiddling with settings.\r\n\r\nEdIsDim comes in two plugs: first use MidSide to convert your stereo track into mid/side (on left and right channels). Then apply your processing (there’s a control with which you can balance the mid/side balance, which also means you can gain stage the M/S content into your plugin), then, go into EdIsDim (read it backwards) to convert back to stereo. The same control is present, and can reverse the gain staging you applied.\r\n\r\nSome good techniques include using it with Density to saturate the center and leave the stereo width lively, or getting a fresh take on a stereo reverb that’s much wider than usual. But the real purpose is opening up funky routing techniques in your DAW: send the L and R to separate busses, do all manner of things with plugins that don’t even have to be the same, or to line up (sample delay on just mid or side, anyone?) and merge them back to a stereo buss with EdIsDim on it. Or design weird synth patches that are heavy on the left with a lot of odd stereo behaviors, just to run into EdIsDim as an intentional part of the synth sound. Sky’s the limit :)"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a re-release of another old Character plugin.\r\n\r\nThis is Elation, which is NOT REALLY a sort of LA-2A like thing. That’s because it builds a distinct sound out of LA-2A convolution impulses, makes it already not an LA-2A, and then doesn’t properly compress :D it does something, but it doesn’t count as compressing. I’m not sure what I was up to here.\r\n\r\nBut it’s got the Character plugin ‘character slider’ that lets you greatly accentuate the tonal effect (this is another one that steals bass if that interests you) and a drive slider that lets you crunch things, and unlike typical plugins it has a dry/wet on the top for some reason! So, if you’re looking for a ‘analog-ifier’ based on dynamic convolution that can hype up a sound in an interesting way, and it’s important to you that you use something other people won’t have or aren’t using, this is your silver bullet: like the other Character plugins, it’s a weird secret weapon that won’t sound like other peoples’ plugin chains. If you can work with what this one has, then you can bring a bit of color that people won’t have constantly heard.",
    Comments: "",
    Name: "Elation",
    Date: 1589673600000,
    Url: "https://www.airwindows.com/elation-vst/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "ElectricBass",
    Date: 1313712000000,
    Url: "https://www.airwindows.com/electricbass/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a hi-hat tone generator that uses the original sound as a control voltage.\r\n\r\nI’ve always liked this one. ElectroHat uses primitive residue sequences to produce a ‘noise’ like effect that makes the hi-hat, but since it’s such a crude method of generating randomness, you get artifacts and peculiar electronic noises instead of nice pure noise. Peculiar electronic noises turn out to be a lot of fun as hi-hats!\r\n\r\nYou use this by feeding some sort of control voltage to it. It responds very, very quickly, so if there’s any amplitude modulation as part of your wave, you’ll hear it affecting the hat. You can use that on purpose, you can use a real DC control voltage to drive it, or you can simply make the envelope you want using a square wave tone for the underlying signal: it’ll rectify the squarewave to be only positive, and that’ll end up the same as a control voltage.",
    Comments: "",
    Name: "ElectroHat",
    Date: 1519516800000,
    Url: "https://www.airwindows.com/electrohat-vst/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "ElectroHat (revised!)",
    Date: 1424908800000,
    Url: "https://www.airwindows.com/electrohat-revised/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is electrifying fixed-frequency treble boosts.\r\n\r\nIn the continuing series of ‘weird algorithms other people can’t give you’, here’s Energy. What’s the matter with Energy that only Airwindows can/will do it? Pretty simple. It’s a bizarre algorithm which acts like half a super-high-Q boost and can’t be tuned in the normal way. It can only work on integer multiples of the sample rate. So the labels only relate to 44.1K, they’re colorfully named rather than specifying frequencies, and at different sample rates any frequency labels would be lies anyhow… and they can’t be tuned, and the Q can’t be altered. Literally all it does is slam huge amounts of super-aggressive treble on.\r\n\r\nBut what a treble it is! Energy accentuates the attack transient like no other high frequency EQ (especially linear phase, and ‘DSP cookbook’ biquad EQs). The principle of operation is totally different. It didn’t catch on because it’s a weird idea to start with, and it’s completely not adaptable to anything. It’s not even that great at cuts, though you can try it for cuts if you like. It’s really just about slamming a bunch of punchy brightness on at 22K, 15K, 11K, 9K and so on: or, Hiss Glitter Rat Fizz Scrape Chug Yowr Snarl, as the labelling goes.\r\n\r\nThe lower ones extend down into high-mids as you’d imagine (at high sample rates they’d work as high-boosts) but that’s another reason I can’t simply label them as frequency controls. These are nasty. They won’t give you clean tidy boosts, not even ‘analog style’ clean tidy boosts. They’re interacting with the sample rate in a nasty way and produce a bunch of extra overtones and skronk so it’s better to leave them as adjectives to avoid even the suggestion that they would give you polite EQ shaping.\r\n\r\nBut if you are looking for brutal, raw electrifying ENERGY I think it’s hard to do better than Energy. The only thing that’s new on this old school super secret weapon, besides denormalization and the noise shaping to the floating point buss and higher resolution internal processing, is the InvDryWet control, which was an obvious call. Since the different sliders can get into strange interactions, since you can play them off against each other, that means you could try to isolate high frequency stuff you don’t want and accentuate it as much as possible… and then, return to dry, and give it just a bit of inverted effect. That’s one way to tame nasty highs (such as from a bad condenser mic). I accept no responsibility if the bad mic, combined with Energy boosts, kills you with treble. That’s kind of Energy’s job :)",
    Comments: "",
    Name: "Energy",
    Date: 1529193600000,
    Url: "https://www.airwindows.com/energy-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is electrifying fixed-frequency treble boosts for high sample rate.\r\n\r\nEnergy2 is energy boosts. Mostly treble, but you can also bring out aggression in the high-mids. These are NOT done through usual means. They’re a weird little algorithm that’s tied to the sample rate, and the big deal with Energy2 as an update is that it’s using my undersampling (which I just recently improved) to function as intended at high sample rates: it’s also more CPU-efficient than the original, but otherwise it’s the same (the original Energy might still be preferable for some, for instance if you absolutely must work at 48k and find it works better for you than Energy2 at that rate).\r\n\r\nWhen I say energy boosts, what I mean is: this is not a normal EQ. You could not make the Energy2 sound happen by mimicking the frequency curve using a pile of biquad filters, or worse yet phase accurate EQ. It’s an entirely different algorithm, and this is what you get. Energy2 has enormous edge and focus around attack transients, not smearing them with pre-ring or high-Q traditional filtering, even though it produces very steep curves and isolates specific tones. Energy2 also has a definite color in how it adds frequencies: if you’re boosting upper mids with one of the lower sliders, you also get a bunch of highs along with it. Part of the sound. Probably shouldn’t struggle to remove those overtones too hard.\r\n\r\nYou can combine the sliders in weird ways to get very striking tone colors, but I think Energy2 is at its best when you focus on one color at a time, perhaps with a little of another color added or subtracted (less than zero means taking that tone color out: but remember, this is Energy2, it’s never completely tame or predictable). The breakthrough with Energy2 is that it’s designed to run at elevated sample rates, undersamples its boosts, but unlike the original Energy, it mixes that with a NON-undersampled Dry to get best of both worlds: the exact tone colors it ought to have, but against an unaltered, hi-res background. Since Energy’s generally able to get obnoxious levels of boost, the thing to do is get sounds where at least one slider is cranked out as far as it’ll go, and then use Inv/Dry/Wet to use only as much of that added energy as you need.\r\n\r\nYou get high and upper mid boosts, all the way up into the highest of air bands, that are more like they’re part of the original sound and not even added using EQ at all… but complete control over how much of that is added to the fully high-resolution sound at elevated sample rates. (and at CD rates, it works just like the original Energy, but with the CPU enhancement from not processing unused bands, plus the Inv/Dry/Wet is run at a higher word length than before, and uses modern Airwindows dithering to the floating point buss: that’s how old the original Energy was)\r\n\r\nIf I make a special Airwindows 96k mixing kit, like Starter Kit but more for experts adopting my mixing system rather than beginners, Energy2 almost defines what that would be like. It’s a very strong way to get a more Airwindows-y sound. (It’s also a nifty sort of anti-Soothe: nothing will pop out vibey overtones, intensity, and sonority like this plugin)\r\n\r\nHope ya like it. It’s one of the special ones. :)",
    Comments: "",
    Name: "Energy2",
    Date: 1625356800000,
    Url: "https://www.airwindows.com/energy2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a weird flangey little modulation effect.\r\n\r\nHere’s a further experiment along the lines of Chorus and ChorusEnsemble! This one is more in the ‘unique because it’s kind of lame’ category. I like being able to do this sort of thing, because in this 2017 plugin business, everything you do has to be the hippest trendiest most popular thing or you’re basically doomed to get squished like a bug.\r\n\r\nBut hey! I’m doing a Patreon, not a ‘business’ of selling ‘hit plugins’ that are ‘the best plugins’. And therefore, nothing’s stopping me from putting out something that’s not an emulation of some famous hardware manufacturer’s property (and putting them out of business, eventually). My stuff doesn’t have to be the target market for what people have learned to want the most over the years (often for good reason). Heck, my plugins don’t have to have a reason! And most importantly, my plugins don’t have to succeed. They can exist (and be updated, etc) even if only a few people out there like them… or even if unpopular people like them.\r\n\r\nKind of punk, or something (stay tuned for some major DIY Airwindows stuff coming down the pike along those lines).\r\n\r\nSo, here’s Ensemble. It’s a weird, unique little sound. It was meant to be a big pad thickener with great richness and depth. Well, you can throw on a bunch of bass, but it’s more like ‘cheesey string ensemble synthesizer from the 70s’, and that by accident, so it’s not even a specific (branded!) string ensemble synthesizer from the 70s. It’s kind of an annoying sound, I think.\r\n\r\nIt’s free, so if you think you might have use for that, have fun with it! I’m off to make something else :)",
    Comments: "",
    Name: "Ensemble",
    Date: 1508112000000,
    Url: "https://www.airwindows.com/ensemble-vst/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is just the EQ parts of CStrip.\r\n\r\nCStrip actually came out of this: a set of EQs specially coded to work together. It’s a lossless three-band (as in, the bands are made by different IIR filtrations being subtracted from each other, so if it’s flat it’s totally bit-identical output and also it has no pre-echo) with a special highpass and lowpass. Each of these things gets switched out of the circuit if not in use (much like CStrip). That makes EQ a very nice default EQ for broad-stroke filtering.\r\n\r\nThe slopes aren’t super high, but that just helps it sound more natural (for a more striking-sounding filter, try Capacitor which is a more aggressively sloped highpass and lowpass). I could have given it set frequencies, but it seems like that’s kind of handy. This plugin is given to you (in AU, and Mac/Win/Linux VST) by request, as I’ve had a user ask for it even though CStrip is already out. So, for a simpler and more approachable Airwindows EQ, here’s EQ :)\r\n\r\nThis work is supported by my Patreon, and I’m happy to say I’m back in the top 50 of the ‘Music’ section at ‘Graphtreon‘: I always like that, feels like I’m getting somewhere with all this. I also like something else, too: I’m definitely giving you folks ‘Aura’ this month. It’s thanks in large part to a mysterious creature known as Slipperman who got involved, and in his honor, next month you’re getting ‘Golem’. Remember, the bigger a success the Patreon is, the more I’m able to persuade people that my way of doing things is good. So if you want this sort of thing to catch on, throw money as that’s all people pay attention to these days…\r\n\r\nOther stuff I’m working on is Atmosphere, DeRez, and the latest Righteous, Righteous4. Also, if anybody wants to meet me, and also enjoy a rather special academic experience, I’m attending a scholarly lecture by a certain Doctor Bill Bruford in Albany NY this Tuesday, which I’m very excited for. I have no idea how well this’ll go over but I have a smaller version of the famous bent cymbal he discovered (the real one tragically broke after much use), and I mean to give it to him as a gift in honor of his creativity in the field of timbre. Anyway, wild horses wouldn’t keep me away from there, so if my car behaves itself you can meet both me and a REAL great person ;)\r\n\r\n(as a follow-up, by 2022 I'm hanging down just above 100 in the global Patreon music rankings, and I did in fact get to Albany and the lecture by Bill Bruford. I got in late, and confused him with my cymbal gift after the lecture (Bruford: 'but it's not the one!' which, true, it was not, and I got quite flustered. I hope he understood in some way that I just wanted to give him something, somehow. And no Airwindows people were there, which simplified things I guess)",
    Comments: "",
    Name: "EQ",
    Date: 1523145600000,
    Url: "https://www.airwindows.com/eq-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ESP",
    Date: 1296691200000,
    Url: "https://www.airwindows.com/esp/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Evergreens",
    Date: 1566604800000,
    Url: "https://www.airwindows.com/evergreens/"
  },
  {
    Use: "",
    Type: "evergreens",
    Description: "",
    Comments: "",
    Name: "Evergreens: Steely Dan’s ‘Do It Again’",
    Date: 1652140800000,
    Url: "https://www.airwindows.com/evergreens-steely-dans-do-it-again/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Everything Is All Fixed Forever",
    Date: 1506816000000,
    Url: "https://www.airwindows.com/everything-is-all-fixed-forever/"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is Left/Right, Mid/Side, and Master in one plugin.\r\n\r\nEveryTrim is like PurestGain only more so: it is very simply every basic stereo trim you can have (in loudness terms, anyhow!) You get left, right, mid/side, and a master level control. It works on stereo tracks only, as mid/side is meaningless without stereo.\r\n\r\nIt’s also efficiently coded, suppresses denormal numbers, and uses the same noise shaping to the floating point buss you get in PurestGain. If you need a nice basic gain trim that does all those things (and nothing fancy: Wider is much more sophisticated, and I’ve got an idea for a still more sophisticated stereo-widener plugin that is in the works) then EveryTrim will come in handy. Begone, dull pan-pots! EveryTrim will also be simpler than using EdIsDim and MidSide just to adjust mid/side balances: while you can do that with that pair of plugins, they’re really for doing processing between them using another plugin (any plugin, doesn’t have to be M/S). With EveryTrim, you can tweak mid and side levels directly, in a more obvious way.",
    Comments: "",
    Name: "EveryTrim",
    Date: 1509235200000,
    Url: "https://www.airwindows.com/everytrim/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a new kind of hard clip that adds two sharp corners into the wave.\r\n\r\nFacet came out of me trying to come up with a new and distinct kind of distortion for the combined-distortions plugin I’m going to do. Rather than just bring Drive, Density, Spiral, Mojo etc. together, I wanted to add something different.\r\n\r\nSo, Facet adds a ‘clip point’ but rather than a hard clip it just changes the ‘knee’ of the transfer function so your peaks can still go super high, way beyond 0 dB if you like.\r\n\r\nBut, they change ‘angle’ at a sharp point which becomes sort of a corner in the sound. Except for high settings it’s both high up in the loudness, and a very gentle ‘corner’: still sharp, but very little change.\r\n\r\nAnd down near zero, it’s damn near total hard clipping. At silence, it literally is a hard clip to silence.\r\n\r\nAw hell. Play with it, see what you think. i can’t explain this one well, at least not right now. The mad scientist labs have released another weird one. It will act like it’s a hard clip or a semi-dirty saturation, except the range of adjustment acts different, and it’ll throw an odd artifact on pure low-frequency tones… just play with it, see what you get. It will find its way into the combined plugin because it’s got a flavor all its own, but I can’t describe it today.",
    Comments: "",
    Name: "Facet",
    Date: 1573344000000,
    Url: "https://www.airwindows.com/facet/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "FarSpace",
    Date: 1286236800000,
    Url: "https://www.airwindows.com/farspace/"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "FarSpace2",
    Date: 1298332800000,
    Url: "https://www.airwindows.com/farspace2/"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "FarSpace3",
    Date: 1327622400000,
    Url: "https://www.airwindows.com/farspace3/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a way of supplementing extreme bass that’s not just EQ.\r\n\r\nFathomFive introduces a special Airwindows algorithm that acts like a combination between an EQ and a bass amp. This plugin can be used in sound design or on isolated tracks, but it’s also part of an Airwindows DAW workflow I outline in the video I’ve made. The idea is this: rather than blur and damage your sound by running through lots of ‘fake analog’ effects on your buss to impart deepness and analog-like tone, use the Airwindows plugins Console4 and FathomFive to get a big-sounding mix while letting most mix elements through with minimal processing. You can run the ‘bass bloom’ behavior on an aux, and feed it with only the elements you want, and then integrate it into the sound with Console4 which both works the way Console wants to be used, and addresses limitations that Console has when used all by itself.\r\n\r\nIt’s all in the rather long video, and of course you can simply download and use the plugin if you prefer making up your own rules. There are no rules, I’m only explaining one very specific use case where FathomFive works symbiotically with Console.\r\n\r\n(followup: this is a very old plugin. Newer ones that do this type of thing with increasing ease and friendliness are DubSub, DubCenter, and BassKit. FathomFive is wilder, and you probably want to keep an eye on whether it is spitting out excessive DC offsets, as the algorithm these plugins use for the bass is tricky to manage)",
    Comments: "",
    Name: "FathomFive",
    Date: 1472774400000,
    Url: "https://www.airwindows.com/fathom-five/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a bright, loud, tubey amp sim for leads and dirt guitar.\r\n\r\nFireAmp is sort of Marshally, compared to the other Airwindows amp sims. It is midrangey and doesn't give very heavy bass or chug, but it's got a characteristic high-mid tone and would work well for some kinds of guitars/tracks, or as layering to bring more of its quality to a larger mix.\r\n\r\nFireAmp’s the first in a set of old/new plugins I’m doing. They’re the opposite of your usual guitar plugin arsenal: no multi-effects, no squishy thick tone color, barely even settings. FireAmp is ONE tone, that aligns with some kinds of things I like to do with guitars. It sits in the mix like a classic rock track: you’re hearing it with a set of retro tones that blend with FireAmp (in fact, the bass is a Rickenbacker, and the neck pickup’s through another upcoming Airwindows amp sim but the bridge pickup is also through FireAmp).\r\n\r\nIf you want to get freaky with it and want a tone stack, you might try putting ZNotch in front of it, or MackEQ… your tone stack doesn’t HAVE to be part of the amp sim plugin. Just sayin’.\r\n\r\nIt runs zero latency so you can track through it. It’s loud, bright and sonorous, raw as hell, high impact, no gloss or glitz. Even if it’s not your pet sound you might find a use for FireAmp on layered guitars or other sounds… and unlike the original, it has undersampled FireCab built in for its matched tone, and it has a sophisticated dry/wet control that begins giving you raw amp AND raw signal to provide a range of more open tonalities through the high gain amp sim madness. This makes it an interesting choice for dirtying up non-guitar signals: the dry/wet will let you tailor that in interesting ways.\r\n\r\nI hope you like it. There’s more to come, all of them just as quirky and one-trick pony as FireAmp. Back in the day, I liked to alternate real miked guitar amp usage, with stuff like the Rockman, to get different textures. FireAmp is one such different texture, and you never can tell when it might be useful :)",
    Comments: "",
    Name: "FireAmp",
    Date: 1650844800000,
    Url: "https://www.airwindows.com/fireamp/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "s a newer set of reverb impulses for convolution reverbs. Contains a lot of really killer sound design and special effect impulses! This is zipped AIFF files, so it is usable on a PC if you can read AIFFs. If you’d like to install them in Logic as presets (Mac only, uses installer), thank Mini-Dan from Gearslutz for ",
    Comments: "",
    Name: "Fireworks Reverbs",
    Date: 1313625600000,
    Url: "https://www.airwindows.com/fireworks-reverbs/"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "",
    Comments: "",
    Name: "Flanger",
    Date: 1171238400000,
    Url: "https://www.airwindows.com/flanger/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "Flanger2",
    Date: 1298160000000,
    Url: "https://www.airwindows.com/flanger2/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "FlatBass",
    Date: 1204934400000,
    Url: "https://www.airwindows.com/flatbass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is fake bottom octave for fun and profit!\r\n\r\nSo this is one of those weird ‘considered harmful’ plugins… the ‘Don’t do this’ plugins. I don’t really advocate for this one as I don’t entirely approve: it’s kind of like some of the loudenators in that respect, and indeed it has similar characteristics.\r\n\r\nFloor does an odd thing that’s like trying to synthesize fake harmonics related to the real bass content, to make you think there’s a lower octave there when there isn’t. It might not be the most perfect implementation of this (I understand there’s a Waves plugin that does this type of processing and I think I must have modeled it on that) but it’s the Airwindows take on reverse-engineering that type of processing, while knowing nothing but the desired effect and the general category of what’s happening.\r\n\r\nThis means it’s now part of the open source toolkit and can find its way into other stuff: here’s hoping real bass continues to be a thing (honestly, so much of what I do with Airwindows serves to improve linearity in the tiny micro-modulations that help us hear extended bass as a satisfying, resonant thing) even with an expanded toolkit around these frequencies. A lot of my recent work around DubSub and BassKit has been about introducing extended bass frequencies in a desirable way. I could’ve tacked the Floor algorithm onto there, and I decided that wasn’t good to do.\r\n\r\nWhy would you want to do fake bass?\r\n\r\nBecause you can get more loudness out of it. (also, maybe you’re just doing something interesting with tonalities, or exploiting the algorithm to make a different sound…) Mostly, it’s just about making it seem like you can go louder with the same content. It’s not really the same, it’s altered, but it’s simulating/faking the effect of an extended bottom octave and restricting the ‘swing’ of those frequencies so they cover the smaller range taken up by a higher frequency, because they’re really NOT the extended frequencies anymore, just some rearranged energy trying to pretend it’s deep bass. (I’m not sure how Floor will work as a DC blocker for RawConsole5 fans: seems like it might have undesirable effects? How do you even fake DC energy?)",
    Comments: "",
    Name: "Floor",
    Date: 1542499200000,
    Url: "https://www.airwindows.com/floor-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "Flutter",
    Date: 1180915200000,
    Url: "https://www.airwindows.com/flutter/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "brings out clarity by distorting. Aggressive, subtle, flexible.\r\n\r\nFocus creates two audio paths, one of them a bandpass and the other, everything BUT the bandpass. Then, you distort what's in the bandpass, which will help the result avoid aliasing even if you're not at high sample rates. The reference to UnBox is because I wrote that one first, and then extended it into Focus. Here's the original post.\r\n\r\nWhat if you took UnBox, with its aliasing-resistant distortion, and revised it around a band pass? Not so much an EQ thing, more a ‘Fletcher Munson Loudness Curve’ thing, where you could zero in on just that most sensitive area, and add distortion to just that? And use the UnBox tech so you’d still have undistorted clear super-lows and highs, as much as you wanted? And set an output level so that if you DID end up driving the mids real hard, you could dial it back so that you got your focussing effect but without apparent mids boost? Or mids boost if you like, whichever. And a dry/wet on the end for added subtlety and flexibility. And then, how about if you could pick between Density, Drive, Spiral, Mojo and Dyno distortion algorithms?\r\n\r\nHere’s Focus. If you keep the Focus control real low, it’ll act like a broad-based overdrive, five different ways. Kill the Output level control, and you’ll hear what’s left over from the UnBox tech. Start to bring up Focus to about halfway, and you will rapidly start narrowing the distortion band and letting through lots more lows and highs, while also (if you turn Output back up) tightening and purifying what you distort in the mids. Focus even more, and you’ll get to where it’s an ultra-focussed mid laser that you can distort, that’ll cut through anything. if you want to start tuning it, dial Focus back: this is not about that, it’s exactly targetting the Fletcher-Munson loudness curves, think of it in terms of focussing the midrange and making it more intense. At low Focus settings, tuning it would be almost meaningless.\r\n\r\nThis is ‘dial an ultimate distortion, ITB’. Even more than the ‘swiss army knife’ one I’ll likely still make later. This becomes the recommended one. It replaces Density, Drive, all versions of Spiral, etc… because its principle of operation gives you essential Airwindows distortions, using UnBox tech to resist aliasing and allow for clean bass, and because the way it’s set up you can immediately go to whatever you’re trying to achieve. Big roaring fuzzy? Density with very low Focus, or possibly Mojo. Gritty? Drive. Cleaner overdrive? Spiral. Need to clean things up but still have that pungent, fierce energy from an amazing distortion? Start increasing Focus, carefully. Trying to do an insanely focussed searing-hot distortion with high Focus but things are too saturated? Reach for Dyno and its distinctive overtones. Pretty much anything you want, in one plugin, but with very approachable controls plus you can do things like kill Output Level to quickly check how much clean audio is getting through in the highs and lows.\r\n\r\nDon’t think of it like an EQ, think of it like an extension of your ears. Whether it’s on tracks, submixes, or the 2-buss, Focus can locate anything accurately in your listeners’ attention, because we all have the same sensitivities and loudness curves to our hearing (most likely). Use with caution (unless you don’t want to!) and enjoy a real power tool for mix clarity, with Focus.\r\n\r\n(followup: the reference to 'swiss army knife' distortion is to the plugin Distortion, which is also available now)",
    Comments: "",
    Name: "Focus",
    Date: 1575763200000,
    Url: "https://www.airwindows.com/focus/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a frequency multiplier/waveshaper with a soft disruption to the sound.\r\n\r\nFracture is straight up a West Coast wavefolder, in a plugin. My original description doesn't help explain that too much: it is a sine-based distortion that wraps around and lets you set a maximum 'fold' which becomes a hard clip. Boost into it with Drive to do more intense wavefolding, and increase Fracture to allow you to fold more times before it just clips. This also allows you to clip either at full crank, or at silence (for a different effect). Original post was simply this:\r\n\r\nHi! Merry Xmas to Xmas-ers. Here’s a truly freaky little wave-shaper. It’s of interest to distortion fanciers, those who make wubs and things, and anybody who might like the digital equivalent of an insane boutique stompbox that doesn’t sound like anything else.",
    Comments: "",
    Name: "Fracture",
    Date: 1482537600000,
    Url: "https://www.airwindows.com/fracture-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a minimalist, cleaner analog tape emulation.\r\n\r\nHere’s something more… refined.\r\n\r\nFromTape was originally conceived as a ‘bump-less’ ToTape. It appeared with the original ToTape, and then with ToTape3, as a stripped-down version without the head bump, intended as very much the same thing but less bass. In some ways that’s still true.\r\n\r\nBut, as ToTape grew to version 5, it developed many unusual traits. There was always that untameable head bump code, and its desire to throw DC everywhere (ToTape’s head bump literally doesn’t want to settle on 0, it wants to be either a positive or negative offset voltage by preference). There was the flutter. There was the built-in highpass, coded in a curious way to get a resonant quality around the corner frequency without any actual resonance applied. ToTape grew into a rich and strange effect, with many curious qualities and many fervent fans. And it’s out.\r\n\r\nAnd then there was FromTape.\r\n\r\nThis FromTape draws on what I’d learned from the Purest plugins. It’s like no previous FromTape: elements have been rearranged, deleted, rethought until it became just this: the ‘unusual’ highpass (which accumulates tiny alterations in a buffer and then applies them in a single add for purity reasons) and THEN the Softer control, accentuated, but ONLY the Softer code and not the ‘Airwindows saturation’ that’s a major part of ToTape and allows for the ‘tape drive’ and saturation effects. The highpass is called ‘Weight’ and wired backwards so as you increase it, more bass comes out.\r\n\r\nSo, this new FromTape does the very transparent treble softening, but has no real ‘distortion level’ because it has no distortion outside of Softer. It has the highpass (over a far broader range, and adjustable) but not the head bump the highpass was designed to handle. Instead of going after the other effects, the highpass goes first, and then the Softer works on the output of that.\r\n\r\nIt’s capable of clipping to a set level only if Soften is cranked totally, and then it’s not a good sound (still available, though, in case you want it). Anything else will let peaks through largely undiminished. The highpass cuts bass, but in such a way that clean unclipped bass pre-FromTape might well turn into over 0dB output after FromTape: it cuts the bass in such a way that it might end up 3dB louder. Go figure, use the output level control to buffer it. Rather than loudenating stuff by ‘slamming it with tape saturation’ it’s more likely to reshape the tonality of the sound so it sounds quieter for whatever peak level you’re reaching.\r\n\r\nIt sounds amazing. It’s also way more CPU-efficient than ToTape, and eats much less in terms of delay buffers and things. You could use it everywhere, certainly on channels where ToTape would be too heavy, but even on channels plus the 2-buss. You could use it in mastering if you wanted to soften digital edge while retaining total clarity, or if you wanted to take an overlimited mix and make the bass rounder and more open, giving a little crest factor back.\r\n\r\nI got lucky. FromTape sounds amazing, it really came together in a surprising way. You might like the added thickness and fullness of ToTape, or the bells and whistles, but if you want to call FromTape superior, you won’t be seeing an argument from me. Surprise! This might be your new best tape plugin, especially if you like subtlety and have ears like a bat.",
    Comments: "",
    Name: "FromTape",
    Date: 1500163200000,
    Url: "https://www.airwindows.com/fromtape/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a super-reverb designed specially for pads and space ambient.\r\n\r\nBeen working on this for a while on Monday coding-streams! Galactic is an extension of my Verbity reverb, designed for ultimate deep space ambient music. It’s a combination feedback and feedforward reverb designed to make wide stereo verb-spaces out of anything, even mono test tones if you like.\r\n\r\nIt takes in audio (dry/wet control available) and uses the Replace control to determine how much of the new sound coming in should replace the space that’s currently there. Detune shifts the pitch for both channels (in a quadrature pitch shift arrangement that means maximum widening for each sound) and Brightness controls both the brightness going into, and coming out of, the reverb. Replace, Brightness and Detune are designed to be playable on the fly to make your ambient spaces or evolve them. Bigness is the reverb buffers, so you can still alter that but it will make crashing noises when you do (that will then become more infinite spaces).\r\n\r\nI think this one is really fun! As you can see it fits with my experimental-music aesthetic (didn’t even have to add Srsly2 on the end of it to make it superwide… though of course I could, and so can you). If you’re not quite that abstract, you can still use it on pads for more normal things. Just set Replace to a lot higher, set the Brightness and Bigness appropriately, and use Detune to chorus out your new huge enormous synth pad, or whatever else needs to have an unreasonably huge and wide stereo field. I’m pretty sure this can become your go-to for epic fields of reverb, no matter what’s meant to be causing them.",
    Comments: "",
    Name: "Galactic",
    Date: 1616284800000,
    Url: "https://www.airwindows.com/galactic/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Gate",
    Date: 1172016000000,
    Url: "https://www.airwindows.com/gate/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a special gate that applies filters.\r\n\r\nGatelope was initially developed for Ola Sonmark, to solve the following problem: can you gate a tom mic in such a way that it rejects cymbal bleed, but lets the lows sustain longer, and then transitions into silence gracefully?\r\n\r\nIt just so happens that in developing that, I also wanted to do the opposite: reject low frequency rumble and sustain the highs more. I thought it might be useful for tightening up spot mics on kick drums. And the result… does both those things, and anywhere in between, and various other effects besides. It’s existed as a secret, Mac-only, AU-only weapon for long enough. I didn’t want to wait any longer, so enjoy Gatelope now (the Mac AU build contains an extra plugin, Gatelinked, which works like the VSTs: Gatelope in AU is ‘N to N’ and meant to be used on mono tracks, and the VSTs and Gatelinked are exactly the same, but linked stereo to prevent the stereo image from going to the side randomly)\r\n\r\nThe way to use Gatelope is, find the proper gating threshold with the top slider. Attack Speed might help depending on where you find that point. Then, Treble Sustain and Bass Sustain can be reduced to let the gate start gating. If you reduce Treble Sustain, it will be opening fully on an attack and then rolling off the treble as it closes. If you reduce Bass Sustain, it'll be rolling off bass as it closes. When these two roll-offs sweep past each other, your signal is gated and quiet: use the dry/wet to make the effect be at a lower ratio and let through some natural sound.",
    Comments: "",
    Name: "Gatelope",
    Date: 1543708800000,
    Url: "https://www.airwindows.com/gatelope-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "Gatelope2",
    Date: 1432857600000,
    Url: "https://www.airwindows.com/gatelope2/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a really gnarly, raw-sounding pitch shifter with a dose of insanity!\r\n\r\nAnd then some days it’s NOT BORING… :D\r\n\r\nThis is one of the craziest secret weapons I’ve ever done. In fact, I’ve got plans for refining this one and making it do subtler things that are of use in pop mixing… but right now, this is Glitch Shifter! It is an audio monster, and it’s all yours.\r\n\r\nYou can do equal-temperament pitch shifting, unquantized, or both. You can tell it to feed back, or keep it as a tightly tracked subtle dry/wet blend. But that’s just the start… that’s the top two sliders, the top one being Note (in semitones) and the bottom being trim (unquantized: if you’re on VST and can’t reset it to its default easily, be careful not to change it unless you want detuned effects). That gives you the base pitch shifting, like any pitch shifter plugin. Its tone comes from the algorithm: instead of smoothing the transitions, it always tries to find a spot where it can switch inside the position of its buffer in just a sample or two, seamlessly. That gives it a distinctive raw tone, less processed, but still essentially a pitch shifter plugin.\r\n\r\nExcept this is NOT like other pitch shifter plugins, because it’s got that Tightness control, and that takes Glitch Shifter into full glitch in two different ways. If you’re trying to do a ‘nice’ pitch shift you’ll be wanting to tune this to your underlying track, but if you want to create sonic mayhem here is how you do it.\r\n\r\nTurning up Tightness all the way shortens the buffer zone in which the plugin finds its transitions. It makes the pitch shifted sound track the underlying sound more tightly… or MUCH more tightly… or so tightly that it glitches out and turns into a harsh de-rezzing bitscrunch sound, because the buffer’s not nearly long enough to contain a seamless loop of the underlying sound. Back off the Tightness, to get back to a ‘nice’ pitch shift, or turn it up for tightly tracked, robotic, nasty artifacts. All the way up and the pitch shifting is totally defeated.\r\n\r\nTurning DOWN Tightness has yet another effect. Since the larger buffer occupies more time, it’s easier and easier for the pitch shifter to find spots to seamlessly transition, so you can quickly get smooth legato effects without grind, and the lower the Tightness the smoother the pitch shift effect. Except, it’s not that simple. As the buffer size expands ever outward, the pitch shifter loses track of where it is. It decouples, unhooks from the underlying sound, and begins to delay and sample-chop the audio randomly. Not really randomly: it’s finding the most seamless transitions. But it starts acting like a granular effect… except it is NOT a granular effect, because those fade their grains in and out (typically) and GlitchShifter works entirely by splicing audio WITHOUT fades to smooth things. So when you drop Tightness super low, you get an uncontrollable pitch-delay thing going on. And then, if you add feedback, you’ve got many layers of stacked pitch-delay going on, unpredictably…",
    Comments: "",
    Name: "GlitchShifter",
    Date: 1601164800000,
    Url: "https://www.airwindows.com/glitchshifter/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "lets you blend a stereo track of two mics on an amp.\r\n\r\nGolem takes in a stereo track, typically two mics on a guitar cab (a popular technique among metalheads), and mixes them to mono in the middle of the track.\r\n\r\nBut wait, there’s (very slightly) more!\r\n\r\nGolem lets you balance the respective inputs so you hear more of L or R, and most importantly, Golem lets you apply a delay to only the side that you want to delay. The other side is always no-latency, straight through, but the one you’re delaying gets its little sample delay. Either one, it automatically switches.\r\n\r\nAlmost done…\r\n\r\nThe way this control is implemented, means that small adjustments give you a tiny, tiny linear-interpolated delay. I think linear interpolating is best for guitars because it’ll scrub off the tiniest amount of ‘hiss and rattiness’ while giving the least processed sound. That said, interpolating between samples in the way this does, allows you to dial in the subtlest imaginable phase relationships between your mics, and THAT has profound effects on the subtleties of your miked guitar tone. You are tuning where the cancellations between mics are, on a very fine level, in order to do specific things in the sound, and you need easily controllable subsample delays at your fingertips. Enter Golem, your simple tool for exactly that.\r\n\r\nThere are some options for allowing a larger range of delay, or inverting one of the channels, but it’s basically just mixing two tracks and being able to micro-delay one of them. Some folks will be deeply unimpressed because you have to be a bit of a fanatic to get that worked up about delaying one of the guitar cab mics five-eighths of a sample in order to place a cancellation node JUST EXACTLY where you need it to be.\r\n\r\nBut you’re talking to someone who noise shapes a long double to the floating-point buss, so yay fanatics! You know who you are. This plugin is for you.",
    Comments: "",
    Name: "Golem",
    Date: 1527379200000,
    Url: "https://www.airwindows.com/golem-vst/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a heavier amp sim for many purposes.\r\n\r\nGrindAmp gives sort of a Mesa-y tone, and is good for chugging guitars with some beef to them.\r\n\r\nGrindAmp is a followup to FireAmp, and you’ll hear them back-to-back in the video. And where FireAmp is all about that midrange howl and rawness, GrindAmp is a different style: heavier! Thing is, you must understand how these work. They’re distortions voiced to work with guitars, into filtering and truncated, undersampled cab emulation that has dynamic processing. When I say truncated I mean it: there’s very little cabinet rumble or any over-hang beyond the immediate sound. Also, the dry/wet control both brings in dry AMP sound against the cab sim, and also dry guitar sound against the amp sim… at the same time.\r\n\r\nSo GrindAmp is every bit as much designed for a Rockman-type, extremely direct and dry tone, as it is for an amped, miked tone. It’s sort of a hybrid. Why would you ever do this? For the same reason Def Leppard used Rockmans on Hysteria: you can use this kind of tone to bring in a part without getting in the way of everything else. You can arrange with whole instruments, bringing in stuff to emphasize certain qualities. If you used FireAmp you’d be bringing in extremely raucous midrange, if you use GrindAmp you have a lot more low-end punch and the ability to push the gain a bit higher (though I think it’s at its best when you’re allowing it to be kinda percussive)\r\n\r\nNeither of these have chorusing and delay/reverb… but hey! I’ve been putting out plugins that do that, and I bet Chamber will do the slapback thing on a guitar very well, and there’s always PocketVerbs Spring: Airwindows plugins are deeply modular and you already have literally hundreds of them so if you wanted to go full Rockman with GrindAmp (or FireAmp: more to come) then nothing’s stopping you. And they’re free, so nothing is stopping you. And they’re open source, so if you really really REALLY wanted to build them into one plugin… amazingly, you can! Or you can let me make ’em for you :)",
    Comments: "",
    Name: "GrindAmp",
    Date: 1653955200000,
    Url: "https://www.airwindows.com/grindamp/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a full-wave rectifier plugin, like a Green Ringer guitar effect.\r\n\r\nHere’s another no-controls wonder… that ‘models’ an actual obscure guitar effect that also has no controls! And it makes horrible unmusical noises, just like the original obscure effect makes horrible unmusical noises! Whee!\r\n\r\nSeriously, though, here’s Gringer. It’s like an emulation of the old Dan Armstrong Green Ringer, kinda. No attempt was made to exactly circuit model anything, but it does the full-wave rectification thing that characterizes this effect, you can bypass it by bypassing the plugin, and it’s got a couple of biquad bandpasses (with VERY wide bandwidth) to mimic having analog circuitry and DC-blocking capacitors on input and output.\r\n\r\nStick it on your guitar solo and see what you get. Please don’t stick it on your mastering console. No good will come of that.",
    Comments: "",
    Name: "Gringer",
    Date: 1574553600000,
    Url: "https://www.airwindows.com/gringer/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is for scrubbing highs off mechanically like a stylus would.\r\n\r\nHere’s something interesting! I revisited some pieces of ToVinyl4, one of ’em being GrooveWear. In fiddling with it, I discovered that I could put in a dedicated wet/dry for just that one part, and if I did, I got perfect high-frequency rolloff at 50%. In other words, as an effect it was working as intended (bit of overshoot available, like the needle was loose in the groove), but I could also redesign it as a tone-softener.\r\n\r\nIt’s all based on variations of averaging. I’ve got Average to soften just only sample values (it has some interesting quirks but I swear by that algorithm for naturally rolling off highs in a way that doesn’t sound digital). GrooveWear goes one step beyond that, and averages slews (not sample values). That means it’s averaging the rate of change. Then, later, I did Aura, which is averaging the rate of change OF the rate of change… but that’s another story ;)\r\n\r\nMore importantly, I came up with a nice feature doing the revision. The GrooveWear contained in ToVinyl uses two stages of processing, since it can be a subtle effect. I worked out a convenient way to make the dry/wet control handle multiple stages so, as you increase it, you’re progressively adding stage after stage with the final stage going from dry to wet: it means you can start off with a very mathematically clean amount of effect, just one stage dry/wet, and then keep adding more. And in the spirit of that, I doubled the stages so now GrooveWear has four.\r\n\r\nSo, you can adjust the intensity control that specifies how much slew averaging the stages are doing (acts like a sort of frequency range control for the effect) or you can adjust the dry/wet to go from pristine to incredibly deep groove wear. It’s partly roll-off of the highs but it’s not JUST normal EQ, texturally it’s quite different because the effect doesn’t try to stop big transients like a square-wave’s sides, it tries to stop smaller-scale detail stuff while retaining the big harmonic content of waves. It’s averaging slew, not deleting it, so certain waveforms get through untouched… you’ll see.\r\n\r\n(Followup: this technique of stepping through wet/dry stages was also used for the Z series filters)",
    Comments: "",
    Name: "GrooveWear",
    Date: 1517097600000,
    Url: "https://www.airwindows.com/groovewear/",
    Category: "Lo-Fi"
  },
  {
    Name: "Guitar",
    Description: "Conditioner is like a Tube Screamer voicing without the squishiness and indistinctness.\r\n\r\nI designed this plugin when I saw what Slew was capable of. It uses a combination of Slew and Highpass in a sort of parallel matrix arrangement, with heavy use of my Highpass’s unusual tone shaping features (extreme lows get Tight tone shaping behavior, and a boosted mids circuit is set to Loose rolloff for the proper texture). Both aspects hit their own Slew at different levels and with different voicings, causing a distinct tone quality.\r\n\r\nThis is not a Tube Screamer plugin at all. It’s an alternate tone for doing similar things but with more sonority, focus and impact. It’s intended for Djent style sounds and people who can play much, much better and more aggressively than me :)\r\n\r\nThe reason Slew is relevant to a Tube Screamer effect is, the guitar pedal uses op-amps that can be limited in their ability to deliver slew and bass. Therefore, they don't only distort and make louder, they also restrict treble and bass in a nonlinear way, and that's the same thing my Slew effect does. So Guitar Conditioner is Airwindows techniques addressing the same purpose."
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Comments: "",
    Name: "Guitar Conditioner",
    Date: 1471910400000,
    Url: "https://www.airwindows.com/guitar-conditioner/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "guitar-full-wave-rectification",
    Url: "https://www.airwindows.com/guitar-full-wave-rectification/"
  },
  {
    Name: "Hard",
    Description: "Vacuum is tube style saturation effects.\r\n\r\nTime to revisit an Airwindows classic!\r\n\r\nThis is one of the plugins Airwindows ‘made its bones’ on, brought up to date and converted to VST for Mac, Windows and Linux (and made open source!)\r\n\r\nHard Vacuum refers to vacuum tubes, and as you’d expect it’s a saturation device but with some interesting twists. It’s got a warmth control that brings in second harmonic and nonlinearity like you might see in a class A tube design, but set up to be abused if you’d like to produce exaggerated effects (that aren’t really ‘warm’ anymore, but if you want to play nice, don’t push this control too far). It’s got a nice Airwindows sine-based saturation curve… and it’s got a control called Aura that will bring out sparkly highs and hot searing overtones you might not have heard from a plugin before.\r\n\r\nThe way that one works is thus: I saw scope traces of tube circuits that were showing slanty tops on squarewaves, like the power supplies weren’t keeping up. It became an obsession to make plugin saturation do that, and I came up with something that turned into Aura. Note that this is NOT ‘analog modeling’, not as people normally mean it: I’m rarely interested in running hapless audio through lots of math pretending to be electronic parts. I generally want a simple, unexpected algorithm that’ll do what I intend with minimal unnecessary math, because I find that overprocessing digital audio hurts the tone.\r\n\r\nAs such, Aura doesn’t model any specific tube. You could probably combine it with Desk4 and who knows what else, to make a really good emulation given decent reference material, but Aura is simply a way to doctor the tone in a way that’s not EQ. By that I mean, the effect might lift up highs but it’s not working in terms of frequency zones, it sees only the amplitude of any given moment and the angle by which it reached that moment. Think of it as an extra thing you can do to the sound. This one’s sat around being Mac AU only for ten years before getting brought up to date (with denormalization fixes, noise shaping to the floating point buss, etc) and ported to VST, so now most of you can join in the fun."
  },
  {
    Use: "",
    Type: "Nonlinear",
    Comments: "",
    Name: "Hard Vacuum",
    Date: 1520121600000,
    Url: "https://www.airwindows.com/hard-vacuum-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a mastering highpass to set by ear only.\r\n\r\nThis is specially by request from Gregg of Hermetech Mastering: it’s my try at a specific plugin he wanted. He wasn’t able to find a fantastic-sounding highpass with JUST a frequency control and slope, no bling, no other stuff, as small as possible.\r\n\r\nThis is of course right up my alley :)\r\n\r\nAll the more when he responded warmly to my idea of having both the cutoff and slope have NO LABELING to guide you: just 0-1 sliders. You have to listen. That’s the whole point, and I delighted in taking it that one stage further.\r\n\r\nTwo stages further, because I worked out how to make the slope control continuous. It uses up to six poles (staggered, an idea that Gregg and I independently came up with: it’s present in my ToVinyl2 and ToVinyl3) but as each pole is added it gets its own little dry/wet internally, so you can have two and a half or four and a third poles. Smooth continuous adjustment of how many poles (and how steep the slope), much like my bit-crusher has continuous sample rate crush and bit depth crush.\r\n\r\nThree stages since it uses Airwindows interleaved IIR filtering for the very first stage to start off at a slope even shallower than one pole of IIR: sort of ‘half a pole of filtering’ to start off.\r\n\r\nThe controls are set up to give useful results around the middle of their travel. I’m not sure exactly how many poles that is, or what frequency: use your ears, says me and Gregg (for whom I made this). I do know that depending on how you set it, the transparent cutting of extreme low frequencies WILL give rise to higher peaks, so either gain stage it or use limiting or clipping. This plugin is not a loudenator. It’s a tone shaper, for retaining every possible bit of tonality while reshaping the extreme lows to trim the lowest frequencies: it’s sound balancing, not ‘make louder-ing’.",
    Comments: "",
    Name: "Hermepass",
    Date: 1489622400000,
    Url: "https://www.airwindows.com/hermepass/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is Very Fine Adjustments, otherwise just like EveryTrim.\r\n\r\nIf you’ve seen EveryTrim, you know how this works: it’s the all-possible-trims trim. +- 12dB of left, right, mid, side, and master volume. By request, and a handy little tool for all manner of stereo tweaking. It’s very nearly as clear and accurate as PurestGain, which itself is very nearly as accurate as BitShiftGain (and most people will find any of these more than acceptable, because this is uber-pickiness land and none of you are likely to be able to tell these from your standard utility gain plugin from your DAW, ten out of ten. I just know I’ve implemented mine with extra rigorousness)\r\n\r\nThing is, the person who’d requested this is the same one who requested Hermepass… and in this case, I fumbled it a bit. On many DAWs, and all my Mac Audio Unit stuff, you can hold option to get tiny fine adjustments. But my user with the enlightening (and accessible) requests isn’t using a host that can do that… and needed to have much, much finer adjustments on tap.\r\n\r\nSo, now Hermepass has a companion, HermeTrim. This is exactly the same as EveryTrim, only it’s 1.5 dB plus and minus. It’s more a mastering tool: make tiny little tweaks to get the master just right. EveryTrim will sound just as good, but this one’s geared towards non-mixing purposes. Hope you like it.",
    Comments: "",
    Name: "HermeTrim",
    Date: 1511049600000,
    Url: "https://www.airwindows.com/hermetrim/",
    Category: "Subtlety"
  },
  {
    Name: "High",
    Description: "Impact is distorted grit and punch without fatness. This is also another little window into Airwindows history, as this is the point where I began putting out the for-pay plugins for free through Patreon. The post is presented in its entirety as a picture of where I was at on April 9, 2017. By now I have put out more than 300 plugins and I'm still going, but this was when I'd done 47 and all the most sought-after ones were still being held back as goals… here is the original post.\r\n\r\nSometimes it’s all in the name.\r\n\r\nHigh Impact has been one of the Airwindows secret weapons for a long time. It’s a pretty basic idea: know how Density distorts and makes audio huge and fat, and Drive distorts and doesn’t make stuff as fat? High Impact answers the question, ‘what if you could distort and not make things fatter AT ALL’.\r\n\r\nThis is not EQ I’m talking about, though it can come off like EQ depending on what you feed into it. High Impact combines a distortion and anti-distortion circuit to reshape the transfer function of the audio, as follows: crank it up, and quiet subtle samples aren’t turned up much. Then medium samples are turned up a LOT, and then the loudest samples are distorted and hit a wall past which they can’t go. The result is an obvious distort which doesn’t bloat things. It’s a ‘dial-a-rasp’, or ‘dial-a-slam’ for percussive noises, and though the concept is two different kinds of overdrive combined, it’s an Airwindows plugin so it’s not overprocessed, it’s super raw.\r\n\r\nThat suits this plugin super well, and that’s why the AU-only High Impact has been a secret weapon for many people for years—and now it’s out for Mac and PC VST.\r\n\r\nA word about the ‘secret weapon’ thing: I hate that. Do as I do, and communicate openly. Airwindows plugins are not preset things that you hide somewhere to add magic sauce to your mixes. They require intention, and there’s no one right way to use them: Airwindows plugins are like if a certain mic modeler you can rent that offers ‘silky expensive microphone models’ had just a blank ugly faceplate with just one knob, ‘silky’. And you could use it as a guitar stompbox if you wanted, not even a microphone anymore, and it was no longer connected to a ‘magic gear item’ so you’d have to ask, ‘HOW silky does this sound need to be, in my mix?’ because there was no one right answer.\r\n\r\nThat’s what Airwindows is like. For High Impact, read ‘raspy’ or ‘mean’ or ‘grindy’, whatever describes the sound for you. Now you’ve got an extra parameter: instead of just bass, treble, loud, soft (or even fat and thin) you’ve got ‘aggro’ on a knob. That can relate to any bit of audio you’re working with… and your ‘secret sauce’ is not the plugin, but your sense of taste (or tastelessness) in using and abusing it. So, don’t keep Airwindows plugins a secret weapon. I hate that. Tell people what you’re using, so I can get more supporters and keep doing all this, on a bigger and bigger scale.\r\n\r\nSpeaking of which, I have a Patreon milestone! As of a couple days ago, I hit $600 a month, and I’ve recently changed that to be the point where I start releasing the Kagi catalog! Now, people sometimes bail as the first of the month rolls around (and also I don’t get paid quite the full amount shown). So, it’s possible this milestone will go poof as we reach May, in which case we’re still waiting. BUT, if the dust settles and it’s still over $600 going into May, I will put out Iron Oxide 4 (the second most popular plugin I have EVER made) as free AU/VST!\r\n\r\n(oh my God, I look so young in that video o_O )\r\n\r\nIf I’m still over $600 when May begins, you get THAT plugin free. My hope is that, as I reach this stage, people get more of an idea of what’s possible out of my Patreon project. All this time, I’ve been putting out more than 47 plugins entirely from the ‘freebie pile’, and not touching the ones that kept me in business a decade. Now, we start to get into the serious ones, the ones worth $50 to a lot of people. I’ve even drawn up a timeline on the Patreon, showing when each plugin will come out if I stay above $600. (if I clear $1000 they go twice as fast and I’ll revise the timeline accordingly!)\r\n\r\nHere’s where things REALLY get interesting. Hang on to your DAWs, because we’re about to go full warp drive :)"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Comments: "",
    Name: "High Impact",
    Date: 1491696000000,
    Url: "https://www.airwindows.com/high-impact-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a hybrid between shiny dither and truncation! Unnatural science experiment.\r\n\r\nHere’s an Airwindows science experiment!\r\n\r\nThe idea here was to identify things about truncation that some people (maybe crazy people, but people nonetheless) like, and build them into a dedicated dither. This video includes extensive exploration of truncation, TPDF and flat dithers besides HighGlossDither, so there’s an educational value as well. As for audio value, the important thing to remember is that this one is designed to act like truncation in important ways… so it’s ‘broken’ and you shouldn’t use it for naturalistic things, and you probably shouldn’t use it unless you’ve ever chosen truncation instead of dither, on purpose, because you wanted the edgier, crunchier, different-textured sound of truncation for what you were doing.\r\n\r\nIf that’s ever you, this is an alternate way to get your sounds.\r\n\r\nThe deal with truncation is that it turns the fine details of your mix into a roaring, grunging mess of unnatural noise. The secret of it is, that stuff can act like some horrible sort of parallel compression. It’ll hang onto the tails of notes way longer than it should, and it’ll add intense bit-crusher-like effects to quiet sounds.\r\n\r\nHighGlossDither uses a special, more uniform-sounding quadratic residue sequence instead of real randomness to sorta ‘diffract’ sounds into crunchier versions of themselves, and applies it at a quieter level than true dither. The result is a hybrid between dither and truncation: rather than dropping quietly into a sea of noise, quiet sounds get hyped and distorted, but they still behave a lot more normally than truncated sounds do. You get the crazy tonal hype, but a better approximation of the proper relative volume levels of the sounds. And you get a sort of noise but it’s quieter than TPDF is, and also serves a purpose of interacting with the sounds.\r\n\r\nMost people shouldn’t like this. I’m introducing it first to get it out of the way… but who knows? Maybe you’re looking to bring out the next generation of Finnish forest psy trance, and the last thing you want is for the molecular structure of your music to sound natural. Well, HighGlossDither might be right up your alley! You don’t have to resort to truncation to have the finest details of your audio sounding weird and unreal. Take it up another level, with my blessing.\r\n\r\nOr maybe you’d prefer your audio sounding, you know, good. If so, stay tuned :)",
    Comments: "",
    Name: "HighGlossDither",
    Date: 1480809600000,
    Url: "https://www.airwindows.com/highglossdither/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a time warp, for retro midrangey sounds.\r\n\r\nThese (Lowpass and Highpass) are mixing EQs, not mastering ones (though I’m not the boss of you). They’re complementary: the one is the inverse of the other. However, because of their peculiarities that makes them behave quite differently. What they have in common is they’re interleaved IIR filters, something people don’t normally do. The experiment here has to do with my discovery that digital audio only exists in sets of samples (never just as the isolated sample: the waveform isn’t there, the sample value is only a signpost that the audio is to weave its way around)\r\n\r\nThey’ve also got a very unusual parameter, soft/hard or loose/tight, which controls how the IIR filters are fed audio. When you offset it, you get a situation where the cutoff is higher at louder volumes, or at quieter volumes. This is on a sample-by-sample basis so it’s a tone-character modification, subtle but interesting. Loose/tight is just the best way I could describe what’s happening there.\r\n\r\nLowpass gives you a treble rolloff (some have joked that I make dozens of treble rolloffs! Yes, but they all sound different) and what’s immediately obvious is, the stuff right up by Nyquist on the threshold of hearing is not rolled off with the rest of the treble. Also, if you only want to cut extreme treble, you can do it with just adjusting the soft/hard control away from the center position. At deeper cut settings, the soft/hard control gives you two different textures (both of which keep a hint of ‘air’ right up top). The dry/wet control allows you to blend your result. Lowpass gives you big sounds with various colorations and a sparkly gloss that comes from your underlying sound: it’s a big-ifying filter that might suit huge synth pads or orchestral tracks.\r\n\r\nHighpass, the inverse of this, gives totally different impressions. The same filter-offset behavior turns into ‘loose/tight’ and the extreme treble gets stepped on, rather than retained. This makes Highpass take on ‘classic’ tonalities, particularly with the offset on ‘loose’, which gives a tubey and softened texture. If you run it full-wet, you’ll get a radical ‘analogification’, wiping out all extreme lows and the highest highs, and sounding like some small vintage radio at high filter settings. It’s a small-ifying filter that’s also a time warp (with offset on ‘tight’, you have a transistor radio instead, still retro-sounding!) and all you have to do is dial in your boost area and then balance it with dry/wet to get intense texture shaping that normal EQs can’t come close to delivering.\r\n\r\nAgain, these are not mastering EQs unless you face really unusual mastering requirements. They’re mixing tools, and they really do act like different animals so they’re each contained in their own plug. They’ve been around for ages but the revision to VST form has brought them a new level of tonal sophistication plus the very useful dry/wet controls that take them out of ‘experiment-land’ (they have always been building blocks for plugins such as Guitar Conditioner) and makes them stand alone as useful mix tools.",
    Comments: "",
    Name: "Highpass",
    Date: 1170201600000,
    Url: "https://www.airwindows.com/highpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an unusual-sounding variable-slope highpass filter.\r\n\r\nSo, the way the interleaved IIR filters act in Highpass is like this: the harder you filter, the more the filter rolls off the very highest frequencies. That’s because it’s like the inverse of Lowpass2. It’s got the same four poles, the same type of tone doctoring (in this case, loose and tight for what bass remains) but the way to use it might be distinct.\r\n\r\nI think it works well for getting a subsonic roll-off (perhaps with the four poles of filtering, like a mini ToVinyl highpass) and then using the Loose option to let the bass move a little more. I found it more difficult to distinguish what the funny-named slider was doing, but it’s still intense on high settings. And it’s great for trapping in high percussion because of the clarity of the passband and the way it rolls off over 20K (or higher, if you’re at higher sample rates).\r\n\r\nAnd of course, like Lowpass2, this is here to fix the limitations of the original Highpass on those very same sample rates, going from no filtering to total filtering.",
    Comments: "",
    Name: "Highpass2",
    Date: 1553990400000,
    Url: "https://www.airwindows.com/highpass2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a synth-like resonant lowpass filter focussed on bass frequencies.\r\n\r\nHolt is a plugin suggested by one of my Q&A livestream regulars, that treads the waters of professional accountancy. The plugin, that is, not the regular. As far as I know.\r\n\r\nHow is this? Simple: Holt is a method you can use in Excel for predicting sales figures based on trends. It basically uses two variables each of which chase each other to try and cut through the noise of realworld data and produce useful predictive results. My friend from the livestream thought it might make a lowpass that was more fuzzy in tonality. It did not do that thing.\r\n\r\nInstead, I got something like a low-frequency version of Aura: a resonant lowpass like a synth filter with huge control over the extreme lows. I had to do weird things to get it to track fairly consistently over different resonance settings, because the Holt method doesn’t really have anything like that at all: turning it into a synth filter is strictly my deal. So is the multipole arrangement: this thing morphs seamlessly from no poles (dry) to four poles (24 dB per octave) with intense resonance or no resonance at all, based on how you set it.\r\n\r\nIt’s got an instance of Spiral built in to save you when you make it squawk, because otherwise it’ll blow up your bassbins and just laugh at you. This sucker is MEAN from the midrange on down. The interesting thing is, if you crank the frequency up it tames itself and reverts immediately to dry again. It ONLY does its madness on the lows, and high frequencies are completely tame and nice. You can use it as a sophisticated and well-behaved lowpass on the upper mids and highs, and it’s totally polite. It’s just when you drop the cutoff frequency down that it explodes in juicy bass.\r\n\r\nThere are even several ways to go between that and clean, untouched audio. You can raise the cutoff, or you can use the dry/wet control, OR you can use the poles control (at any resonance setting) to morph it from bassy madness to perfect clarity… because the poles control is four different dry/wet controls bundled into one. This also means that if you’re using less than one pole of filter, you’re not even running through the other stages: less processing, unless you want it.\r\n\r\nIt can act like a DJ ‘isolator’, it can act like a synth bass lowpass, it can damn near self-resonate, and all from just a couple variables (per pole) that interact strangely. It’s a neat example of extreme simplicity (like the Purest series) producing a striking result. Have fun and I hope you like it.",
    Comments: "",
    Name: "Holt",
    Date: 1549756800000,
    Url: "https://www.airwindows.com/holt/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is atmosphere and texture (through very short delays).\r\n\r\nOnce upon a time there was the blues.\r\n\r\nNo, let’s be more specific. Once upon a time (and even now!) there was ZZ Top. Brainchild of the Reverend Billy Gibbons, swathed in funk and mystery, serving up juicy grooves from the heart of Texas.\r\n\r\nThing is, Rev. Billy tells some tall tales and their engineer of the day, Terry Manning, he don’t talk ATALL.\r\n\r\nSo what is a person to do when they hear these albums and the guitars slide off that vinyl like grease off a hot griddle, and you know you can’t just put up a mic on anything amp-shaped and get near that magic? You know those are dirt guitars, but the whole texture’s different. Skulduggery is afoot. And the boys ain’t tellin’.\r\n\r\nWell, here’s what I did. It seemed to me that some of the mojo sounded like echoes and delays, but not just any old ones. You can take something as small as a dentist’s mirror, put it near the mic, and aim it until you’re reflecting another copy of your sound into the mic again: the delay is tiny but real, and the tone? Well, that’s based on how big the panel (or dentist’s mirror) is. If it’s tiny, you get only highs. If it’s a big ol’ panel, or a floor or wall, you get down into maybe the lowest bass. Any panel will do this. Billy and Terry might have been constructing lil’ forts around the amps, making a purely acoustic home for the blues. You can literally pick what range of sound you reflect, how long a delay it is (still so tiny it’s not heard as one!) and you don’t have to make it full-range: a softer reflector ignores highs, smaller panels ignore lows. If you want to juice up what your mic hears, this is one way to do it.\r\n\r\nIf you’re playing with super-short echoes, you’re reinforcing the lows. Unless it’s out of phase, flipped upside down in the DAW, in which case you’re cancelling them! And then, supposing you have one delay that’s in phase and one that’s out, and you calibrate them just right, and then you’re neither reinforcing or cancelling the lows, instead you’re just thickening the texture of whatever you’ve got… all the little detail doubled, tripled, dripping down the mix, but the body of the thing basically the same and no sustain, just a couple of delay taps in real close…\r\n\r\nI’m not Billy and Terry. Since I’m Chris, I’ll fess up: that’s exactly what I did, and you can have it in Hombre. It’s two calibrated delay taps, which you can tweak a little, and if you bring them in you’ll thicken and diffuse your tones without altering where the lows sit, or adding much in the way of extra sustain. It’ll be punchy and get out of the way like reverb won’t, but it’ll be fatter and juicier than the dry signal. This is my interpretation of the ZZ Top secret sauce, or at least one of ’em, implemented in software rather than acoustics.\r\n\r\nI’ll never know how close I came, because them Texas boys don’t tell tales out of school. But Hombre is my humble offering for a simple plugin that brings a little mojo to what would otherwise be a dry voice or guitar… and it won’t muddy things up, just grease ’em a little.",
    Comments: "",
    Name: "Hombre",
    Date: 1506211200000,
    Url: "https://www.airwindows.com/hombre-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an alternate form of highpass/lowpass filter.\r\n\r\nThis is the second time I’ve done a filter based on stuff the stock market folks have got up to, and both of ’em start with H. First there was Holt, and now this is Hull. It’s set up to work as either a lowpass or highpass filter: the Bright control is really a dry/wet. Bright hard left gives you darkening and the normal output of the filter, Bright hard right subtracts the output giving you a highpass.\r\n\r\nThis is another audio chainsaw/proof of concept. I feel it’ll be useful as part of other plugins, in a controlled setting, but you can play with it however you like. Be careful, as setting the Freq control very high (increasing the averaging the plugin runs on, and lowering the cutoff frequency) can produce LOTS of CPU munching. I’ve left it that way in case people find a need for it and can handle the CPU demands, but especially at high sample rates it’s a beast at super-high averaging windows.\r\n\r\nHull is a form of playing averaging filters against each other to produce an ‘accurate’ picture of underlying movement beneath noise. This is of course not true: it only appears to be giving optimal information, but it’s effectively synthesizing fake info to make the chart look more specific in its trajectories. It does a really good job of looking like it’s magically clearing away the randomness, but I don’t believe it really is, and you can hear it in the audio performance: it’s dirty, produces obvious artifacts and accentuates weird stuff.\r\n\r\nBut for a sound effects filter, this is great! So, you can use Hull for various purposes, knowing it has ‘its own sound’ and will really bring a tone to your filtering. It sounds like a grungy old school analog filter that’s maybe distorting and being overloaded by the power of the audio going through it. The lowpass and highpass forms have very distinct tones: lowpassing sounds resonant and sonorous, and reminds me of the oldest Emu samplers (I’m working on getting a Eurorack filter that uses the same chip, to further explore this since I don’t yet have an SP1200). Highpassing does the opposite: it sounds like high frequency boosts done using Hull have a particular airiness and lightness to them.\r\n\r\nTaking it way down to the bass and demolishing your CPU in the process, a couple interesting things happen. Lowpassing gives you kicks with a LOT of punch, which let through a bunch of midrange in a way that accentuates impact. (There may be a way to implement this with much lower CPU if it’s a fixed frequency filter: the buffer size isn’t a problem, but allowing the adjustment means implementing it naively and doing things the hard way). Highpassing way down in the bass gives an equally distinctive sound which would translate over smaller speakers very effectively.\r\n\r\nThis was a good day at work! I feel like modified versions of this principle will lead to some very cool-sounding EQs, even to stuff on the ’emulation’ side of things: this is because I like the sonority and intensity of these filters. They CAN also be CPU-efficient, though this implementation is not (except at high frequencies, where it is fine).",
    Comments: "",
    Name: "Hull",
    Date: 1627171200000,
    Url: "https://www.airwindows.com/hull/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a treble softening experiment gone strangely awry :)\r\n\r\nI may have mentioned that Console8 attempted a treble softening thing that went terribly wrong and acted like an aural exciter?\r\n\r\nThis is it :)\r\n\r\nNo controls, and in fact it fought my attempts to add any. If you use external controls, for instance the dry/wet you can get in Reaper, it will not behave nicely and will do weird things at intermediate settings. I have no idea what will happen if you try and oversample it: it, and you, may die, so you have been warned. This is the Airwindows experiment that went TOO weird to use as the treble softening in Console8, which is already pushing the limits of reasonableness in certain ways.\r\n\r\nCan’t even describe this, just drop it into your mix anywhere and see what it does. It’s like it tries to do a treble soften, but doesn’t get the concept entirely. In the video I made, you can see that stacking about six to eight of these up gets you into obvious distorted crackling territory. The original use in Console8 had three of these stacked, and I knew there was trouble when instead of softening the tone subtly and nicely, it was like a light turned on inside things. Don’t stack up too many of them if you want things to be more reasonable.\r\n\r\nI also can’t blend between this and the final Console8 treble softening. Nor am I interested in adding a switch so all Console8 (‘in’ plugs) have this, it’s just too eccentric, more like what Console7Cascade was, except Console8 now leans a little bit in the direction of what Console7Cascade was. That said, simply adding this to Console8 doesn’t replicate what the original experiment did, this is just that part of it stripped out and isolated in a sort of featureless plugin test-tube so you can play with the effect all by itself.",
    Comments: "",
    Name: "Hype",
    Date: 1656028800000,
    Url: "https://www.airwindows.com/hype/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is Ultrasonic, but steeper and higher cutoff.\r\n\r\nHypersonic is the same as Ultrasonic, except it’s running seven stages of filtering instead of five, and it cuts off a little higher: for these reasons, it’s the Airwindows ultrasonic filter that ought to not soften the super-highs even for golden ears and sparkling youths :) I don’t think the original Ultrasonic sounds bad and I use its type of filtering in my work a lot, but I also like depth in sound and the presentation of a soundstage that’s not too upfront and close. It makes sense that the slight softening of super-bright frequencies that original Ultrasonic gives you, wouldn’t work for everybody: not everyone wants ‘glue’ or ‘analog’ or ‘recording console’, sometimes you just want the purest digital you can get.\r\n\r\nI think there’s a fair chance this filter will work out for folks whose aesthetic leans toward the superultramegahyperbright, even if that ain’t me. It combines enough filter stages to act like a 14th-order Butterworth, and it cuts off just high enough beyond 20K that you should get everything up to insect-repellent audio, unsoftened.\r\n\r\nI’m also working on something else that may give rise to big changes (I know, it’s like 2022 is all the promised big changes, but this one might be extra interesting). Compare Ultrasonic to Hypersonic… CPU-wise. I am pretty sure that I’ve got Hypersonic outperforming Ultrasonic on every possible platform, even though it has two more filter stages than Ultrasonic. The question is, am I making a choice that is hurting the sound?\r\n\r\nA bit of background. There are a lot of devs who like using 32-bit floats for audio math. They’re fast, can be calculated in parallel… but everything you do with them, you erode away louder samples by constantly truncating your internal variables to roughly 25 bits. You’ll never hear that doing it once… but for every little calculation, which could be thousands or tens of thousands? I think that’s a hidden difference between digital audio and analog audio, and I think it matters.\r\n\r\nSo much so, that I run an internal buss in my plugins that is 1,099,511,627,776 times more high-resolution than that. It’s served me well, and I like the sound I get. But I’ve also run across folks who use a slightly different arrangement: they’re not dithering floating point like I am, but they ARE using a high-res buss. How high res? 536,870,912 times better than the more efficient floats, that’s how high res. Now, what I’ve been doing is one trillion ninety-nine billion five hundred eleven million six hundred twenty-seven thousand seven hundred seventy-six times more high-res than your average float. But who’s to say that we can’t get by with only five hundred million times better than your average float? :D\r\n\r\nAnd so, we have Hypersonic. It’s using more filters than Ultrasonic, but running faster, and it’s still five hundred million times more accurate than your average float-based audio software, and it still dithers to a 32-bit buss such as CoreAudio on the Mac. But hey, if you’re running Reaper or something else with a double precision buss, it doesn’t have to dither at all as it’s working natively at that resolution! So my challenge is this: does anybody, myself included, hear ANYTHING more truncate-ey or degraded about Hypersonic when compared to Ultrasonic, even though it’s running more stages of filtering? I challenge you, tell me if you think you can hear a drop in quality here. I’m all about the overkill, but I suspect I can get there on the native Reaper 64-bit buss: and of course everything AU or otherwise that does run a 32-bit buss gets dithered to that buss whether it’s Mac or PC or Linux, and I’m thinking I can start to bring some really serious performance gains to everything. I will of course keep an archive of all the Airwindows plugins as they existed before re-hacking them in this new way, so you will be able to have access to the previous plugins (of all kinds) that ran the ultra-super-hyper-overkill audio buss. Might be desirable for mastering folks, or those who are incredibly fussy about analog-style sounds. I’ve been doing a fine job of keeping the audio busses cranked wide open to ultimate resolution for years, and the whole Airwindows library is like that.\r\n\r\nBut if my suspicions are correct, we can have that as backup and then also have the whole Airwindows library running WAY faster.\r\n\r\nAnd then when we move on to the new format CLAP, and begin to bring out select plugins with GUI and interfaces and metering, they can also run their audio stuff at that nice happy medium between high efficiency and no-compromise audio buss.\r\n\r\n(followup: I did in fact end up re-hacking the entire Airwindows plugins collection on all platforms as double precision rather than long double. Though on some processors like the Mac M1 it weirdly turned out that the long doubles were fine and didn't cost me extra CPU, hence I didn't gain anything much from the change on my own systems)",
    Comments: "",
    Name: "Hypersonic",
    Date: 1644105600000,
    Url: "https://www.airwindows.com/hypersonic/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is like UltrasonX but with seven stages instead of five.\r\n\r\nThis one’s pretty straightforward. If you know UltrasonX, this is the same thing but for Hypersonic. These are ultrasonic filters for use at high sample rates such as 96k: for less processing than it would take to oversample a bunch of stuff you can run the whole mix at an elevated sample rate and put filtering between nonlinear stages: it works better to do a little filtering in many places, and it helps the mix from seeming overprocessed.\r\n\r\nHypersonX is steeper, because it’s seven stages instead of only five. It cuts off a little higher, so it should go right past 20k without hinting at rolling off or softening anything. But since it (like Hypersonic itself) is seven stages, that means you’ve got to find seven spots in your mix to stick the respective stages of the filter.\r\n\r\nLike UltrasonX (and like future Console versions I do that will use this technology), you have to have one each of every stage of HypersonX, from input to final 2-buss. That means you don’t have to repeat ’em across all channels: for instance, if you’re running stage A and B on the channels, and C, D and E on submixes, and F and G on the 2-buss, that’s way less filters than you’d have if you placed just one Hypersonic on the start of every single channel, AND it will work better because it’ll keep every little nonlinear stage in check. Otherwise, they can seize on small bits of aliasing and alias them further until they combine and become obvious. Single filtering at the input won’t protect you from this. Distributed filtering will.\r\n\r\nThis might not be for everybody. The thing is, if you’re running at high sample rates and you want to resist aliasing and have a warm, analog tone that still retains clarity, this might be for you… and similarly to other Airwindows inventions, the cumbersome nature of HypersonX could become your secret weapon. Who wants to carefully arrange to have one each of seven types of inaudible filtering across your signal path, from channel start to end of 2-buss? Possibly you, if the resulting tone speaks to your musical tastes. The barrier to entry is a setup that’s a pain in the butt and fussy rules for how it works (you can combine it with the original PurestConsole if you’d like to also have the cleanest possible Airwindows Console mix, that’s a whole other set of fussy rules!) but you might find the results a little spectacular.\r\n\r\nI hope so! The next thing for me is building this into the next version(s) of Console, and I believe it will help things a whole lot. But with HypersonX, you don’t have to wait. Use it on its own or combine it with any earlier version of Console (not Console7 or PurestConsole2, which have their own filtering, but Console 5 or 6 or PurestConsole or Atmosphere or PDConsole which didn’t have ultrasonic filtering built in) and begin constructing your own in-house mixing board, and get your personal sound.\r\n\r\n(followup: this became the ultrasonic filter tech for Console8)",
    Comments: "",
    Name: "HypersonX",
    Date: 1644710400000,
    Url: "https://www.airwindows.com/hypersonx/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "",
    Description: "is a MatrixVerb specifically designed to sustain and layer sounds forever.\r\n\r\nHere’s a follow-up to what I’ve been doing with Householder reverbs, and my recent plugins MatrixVerb (for flexibility) and Reverb (optimized for size variation only). The algorithm I’m using has one more specialty: infinity! The way it works, if you do nothing else except feed it back on itself, it will sustain infinitely: that’s its basic, natural state.\r\n\r\nAnd so I did. :)\r\n\r\nOf course that’s too simple: there’s a filter (not in the feedback path) that will let you sweep its frequencies in and out, from deep space to bright and unnatural textures. There’s a size control that will let you resize the space from gong-like tones to the depths of galaxies… and a damping control that does NOT make the reverberations die away. Instead, it just applies a subtle darkening, useful if you’re looking for darker spaces.\r\n\r\nMore importantly, Infinity is tailored to handle anything from subtle noises to the full blast of a mix: if you saturate it and keep adding sound, what’ll happen is that it’ll begin to squeeze out earlier infinity to make room for what’s coming in. That way, the maximum level will stay under control, but it’ll also tend to emphasize the most recent thing you did (as long as it’s loud). If you’re not adding loud things, you’ll continue to build up the texture as you go.\r\n\r\nIt’s also a dual mono effect. What that means is, you’re adding things to infinitely sustain at distinct places in the stereo image. What’s on the left stays on the left, likewise with the right, centered stuff will stay centered. This is different from both MatrixVerb and Reverb, both of which will ‘spread’ centered information as the reverb continues. Infinity doesn’t have the stereo pitch shifting that would cause that to happen, because it’s entirely dedicated to providing pads and spaces that can literally sustain forever without change. So, it can also sustain a sound-space across the stereo field that doesn’t change the stereo mix, either. You can keep things mostly panned to the center, or put in super-wide stuff that’s fully L or R, or both.\r\n\r\nMy hope is that this is an inspiring tool for those who like making ambient spaces. You can combine it with MatrixVerb to have a distinct, unvarying source of infinite sound which is then broadened and made richer by the added options of MatrixVerb in a way you couldn’t do from MatrixVerb alone. Or, you can just use it as its own little instrument. Hope you like it!",
    Comments: "",
    Name: "infinity",
    Url: "https://www.airwindows.com/infinity/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "",
    Description: "expands Infinity with more tone shaping and a much-requested kill-switch!\r\n\r\nHere’s a much-requested upgrade! Infinity has been working out surprisingly well for people (surprising me, anyway, I got so excited about the feedforward reverb topologies that I thought Infinity was far too old school) except there’s quite a few DAWs that keep the plugin ‘live’ permanently if you’ve got it loaded. That, I didn’t expect. And so, there’s folks who are still sitting there waiting for their Infinity to clear out so they can add some new sounds to it.\r\n\r\nAnd since it’s Infinity, they’ll be waiting a very very long time.\r\n\r\nUntil now!\r\n\r\nInfinity2 is carefully kept to allow exactly the same tones as before. No undersampling, no changes, just the addition of a Feedback control as well as the Damping control, so you can shut the thing off (or turn it to a traditional dual-mono reverb if you wish).\r\n\r\nBut of course that would be too easy: so, more controls! Damping now works on all the reverb paths so to get the previous amount, set it to 0.125 or so. Zero is still full brightness, and now turning it up to 1 gives you a more significant treble fall-off effect. It’s possible that this can interact with frequencies to cause feedback reinforcement, so keep an eye out for that.\r\n\r\nThe allpasses at the beginning (which spread and smooth incoming audio) can now be bypassed with another control, for brighter, more transient-rich input sounds.\r\n\r\nThe maximum verb size (tied to sample rate like the original) is still exactly the same, but Infinity2 now lets you crank the pitch up to a LOT higher for when you’re doing weird effects with the plugin. That seemed like a nice tweak: if you don’t like it, try to not move the slider that far to the left :)",
    Comments: "",
    Name: "infinity2",
    Url: "https://www.airwindows.com/infinity2/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "",
    Description: "is a very steep subsonic filter, built like Ultrasonic.\r\n\r\nIf you saw my recent post about Ultrasonic… this is the same, but at the opposite frequency extreme! It will nuke DC offsets and reshape thunderous rumblings into specifically ‘audible’ subsonic rumblings. That doesn’t mean it will always make the amplitude of subsonic bass go down: there may be times when it alters the waveform so it peaks higher. But it’s the same thing as Ultrasonic: tenth-order Butterworth highpass filter, executed as cleanly as possible (NOT with an internal Console system expanding the tone) using very high resolution math.\r\n\r\nNormal audio recordists and people working with analog sources will probably find this does nothing for them. But if you get frisky with DAWs and do weird things in the digital mix, you may just end up producing low frequencies that aren’t properly sonic anymore. Normally, you’ll be using various highpasses to tune your deep bass for the purposes of your mix, and this isn’t for that: it’s a more abstract concept of a filter.\r\n\r\nIf you’d like to neatly excise everything below 20hz and retain EVERYTHING remotely considered an audio frequency, especially if you’ve got DC offsets coming out of your other digital processing (I’ve tried to fix a lot of my plugins that do this, but there are other plugins out there which can produce it), then this might be handy. It’s also one of the Airwindows featureless add-and-forget plugins, and I’ve always liked making those: speeds your workflow. No window to open, just put it in the relevant place and you’re good to go.\r\n\r\nI will also note that this is very likely not what you want for a mastering highpass, because the steepness of the filter means a lot of crazy phase shift. I see it more as a special effects filter, something that can take a rumbly noise and give you a very tailored, impactful result with minimal content actually below 20hz. Sound design is where I'd use Infrasonic, and I'd check to see if I still liked it better than a normal subsonic highpass.",
    Comments: "",
    Name: "infrasonic",
    Url: "https://www.airwindows.com/infrasonic/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a subtle and sophisticated analogifier.\r\n\r\nInterstage is one half of an experiment. I pitted my ability to use my weird techniques (interleaved IIR, slew limiting, etc) against my new biquad filtering techniques, in the battle of the bandpasses. The biquads could give me total DC rejection and total rejection near Nyquist. My more distinctly Airwindows tricks could give me new sorts of nonlinearity and tone. Which would win?\r\n\r\nThis isn’t called ‘Biquadstage’, so that might be a bit of a giveaway.\r\n\r\nInterstage isn’t a loudenator. It doesn’t really clip (though it does go dark as you push the highs harder, in a way I’ve never done before). It doesn’t even preserve the output peaks of heavily limited material: it’ll reshape lows in such a way that the peaks might go up slightly as the deepest lows get rearranged, and it doesn’t really eliminate DC offset either. So what does it actually do?\r\n\r\n*deep breath*\r\n\r\nTwo level total of three pole IIR highpass which subtracts a pre-averaged sample and slew limits (all right, clips) against not the direct signal but the initial stage IIR lowpassed reference point used as part of the highpass. Oh, also the average it uses isn’t the previous input sample, but the slew limited highpassed output.\r\n\r\n*crickets*\r\n\r\nNo, I am NOT making that up. That’s literally what it does, you can see the code.\r\n\r\nWhat does it sound like? It sounds like running through an optimal analog stage. The lows are reshaped in a characteristic way for a capacitor-coupled circuit that still allows extended lows: this doesn’t suppress much if any extreme bass. It just massages it a bit. The highs run into active component electronic limits, but unlike other approaches (Channel for a bit of grit, Acceleration for ultra-clear) this is restricting treble slews based on the general amount of energy in the circuit. So it goes darker in a peculiarly analog-like way I’ve not done before, sounding still clear and trebly for most audio, but confining the craziest most digital-sounding treble swings into a zone that sounds like hardware. And this is without thousands of math operations of heavy processing: unlike overprocessed analog modeling, this one nails the ‘energy coming out of analog circuitry’ without blurring or thinning the audio at all. If you don’t need what it’s doing you’ll hear no change at all. Only when ‘excessively digital bass and treble’ show up to interfere, does Interstage kick in.",
    Comments: "",
    Name: "Interstage",
    Date: 1566086400000,
    Url: "https://www.airwindows.com/interstage/",
    Category: "Subtlety"
  },
  {
    Name: "Iron",
    Description: "Oxide Classic is the purer, simpler, early form of Iron Oxide before all the features.\r\n\r\nAs promised, here is the 2017-ized version of the pure, sweet, original Iron Oxide. No more grit or tape flutter or noise!\r\n\r\nIt’s funny how this works. If you’re a commercial developer, and you release a plugin that’s real popular, one thing that happens is people begin asking for more. More features, more variations, this and that and the other. The flutter in Iron Oxide 5 came about that way: it migrated over from ToTape (which is also coming to free VST).\r\n\r\nEvery new thing added is something lost. But since I’m no longer doing strictly commercial development (it’s steadily all becoming free, backed by my Patreon which allows all this to happen) I can do things like confuse the ‘market’ and release both the feature-full Iron Oxide 5, and the stripped-down Iron Oxide Classic. This one is just like the original: input trim, ips control, and output trim. Better yet, it has the pure unsullied tone of the very first Iron Oxide, only brought up to date so it noise shapes to the 32 bit buss etc.\r\n\r\nEven if you liked the grunge factor of the very adjustable Iron Oxide 5 (more controls may be added but bear in mind I have a commitment to release plugins like BussColors, not just keep revising Iron Oxide!) you might want to check this out. And if later versions of Iron Oxide wandered away from what works for you, for instance if you’re making electronic music and needed much cleaner handling of synthetic tones… this is your lucky day!\r\n\r\nHope you like Iron Oxide Classic. It is, truly, one of the Airwindows classics, now for free VST and brought up to date. :)"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "Iron Oxide",
    Date: 1285977600000,
    Url: "https://www.airwindows.com/iron-oxide/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Iron Oxide 2",
    Date: 1328659200000,
    Url: "https://www.airwindows.com/iron-oxide-2/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Iron Oxide 3",
    Date: 1342310400000,
    Url: "https://www.airwindows.com/iron-oxide-3/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "Iron Oxide 4",
    Date: 1376438400000,
    Url: "https://www.airwindows.com/iron-oxide-4/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Comments: "",
    Name: "Iron Oxide 5",
    Date: 1494115200000,
    Url: "https://www.airwindows.com/iron-oxide-5/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Comments: "",
    Name: "Iron Oxide Classic",
    Date: 1495929600000,
    Url: "https://www.airwindows.com/iron-oxide-classic/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "iron-oxide-classic-2",
    Url: "https://www.airwindows.com/iron-oxide-classic-2/"
  },
  {
    Category: "Tape",
    Name: "IronOxideClassic2",
    Description: "is my bandpassy tape sim, updated for high sample rate and aliasing control.\r\n\r\nIron Oxide was one of my first successful plugins. It’s an old school tape emulation, meaning that it’s kind of bandpassy and is about saturating and slamming and aggressive tone coloring. It was made to compete with a pricey (well, back then it was) commercial plugin where the company had treated some of my friends poorly: I charged off and made a ‘commercial tape emulation killer’ plugin, with very unorthodox techniques. This is before my ToTape plugins, before head bumps: just a fat saturated tape-slam plugin.\r\n\r\nThis grew to have all sorts of things: separate ips controls for low and high cutoffs, flutter, just lots of stuff. But the original one was an input, a tape speed control, and an output… and Iron Oxide Classic is me returning to those roots. It’s also handy, because as I bring in stuff like undersampling of delay buffer plugins, I can get the fundamentals right on a simpler build. That’s what this is. It’s Iron Oxide Classic, the simplest form, but brought up to the latest technical specs.\r\n\r\nThat means it’s using the undersampling to deliver the same tone whether you’re at 44.1k or 96k or 192k. Though it uses delay buffers and samples along a time window, in the new version that’s consistent among sample rates. That also means it’s substantially more CPU-friendly at high rates, so you might be able to run twice or four times as many of ’em. It’s also using anti-aliasing filtering (that kicks in at high rates and isn’t ‘in circuit’ at low rates) to clean up its behavior still further. The end result is that the new Iron Oxide Classic has a way more organic, natural tone than the previous one did. These things (and running projects at 2X or 4X) really help get the analog vibe out of ITB digital gear. Since Iron Oxide Classic 2 is able to adapt to this stuff gracefully, that also means it’ll handle rendering at 2x or 4X sample rate should your workflow require working at 1X and then rendering out the final audio at a higher rate. Mind you, I design stuff so you’ll be able to work directly at the higher rate, but this should have you covered whatever your workflow."
  },
  {
    Use: "",
    Type: "",
    Description: "is a steep highpass or lowpass filter, like you might find in a speaker crossover.\r\n\r\nIsolator is like some of my Biquad Filter plugins, except it’s tuned to a particular purpose. In DJing, one technique is to use a filter on the full mix for effect, and Isolator is geared towards two specific tricks in that vein: sweeping the filter down until the music is just a throb and then bringing it back, or sweeping the filter up to leave only highs and then dropping the bass back in.\r\n\r\nThis is done using a speaker-crossover style filter: Isolator is a fifth order Butterworth filter made out of three series biquad filters run inside an instance of Airwindows Console. It rolls off at 30 dB/octave (I think I had this as 36db/octave in the video, but that would be a sixth-order filter) and probably slightly steeper than that, because I’m up to my usual tricks and chose the fifth order Butterworth because it’s made out of Q factors that are a close approximation of the golden ratio. So, I’ve used that, making the filter JUST a bit steeper than normal :D also, the way the frequency control is mapped, means it gives you accurate control over the full Nyquist range of the filter AND still puts the midrange in the middle of the control, through changing the logarithm of the filter frequency. That means it always is able to go full-range no matter what sample rate you’re at: maxed out, is always ‘max sample rate’, it just sweeps farther up when run at higher sample rates once you’re at the far right of the control.\r\n\r\nThat’s the tech rundown. In practice, this is a lowpass/highpass filter. You can sweep it around, though it’s possible to freak it out if you throw a lot of filter-sweep activity at it in a zone where it’s handling a lot of energy. It wouldn’t be good to try and FM this control: biquads sound wonderfully smooth and rich but they won’t handle that treatment, especially run inside their own version of Console. You can use the treble and bass controls as a form of shelf, or output gain: note that I’ve set them up for instant response so you CAN FM them or do really aggressive, choppy things with them without upsetting the filter. That said, if you have a heavily bassy sound coming through them, you can get clicks since they will respond instantly: it’s that or have them chase the value, and you can’t do aggressive glitchy stuff if you chase the value, so I’ve got them responding directly. That does mean you can do stuff like have the lows coming through and then ‘flicker’ in the highs setting for a glitchy effect, at whatever speed you can automate the slider.\r\n\r\nI expect mostly this will be useful for the classic ‘now it’s all bass… and now the full mix gradually swells up’ effect, but there are many possible uses. You can use it to neatly lop off highs or lows with the steepest cutoff possible that isn’t QUITE resonant. You can cut the bass on tracks with great accuracy, and you can use it as a shelf of great accuracy: the bands are made by subtracting from the lowpassed version, so having both treble and bass full up means you have literally unaltered digital audio, apart from some ‘zero dB’ multiplications. That means very subtle cuts in highs OR lows might be using a sharp near-resonant filter sound, but the less cut you have the cleaner the output will be. It’s a mastering-grade surgical high/low shelf, much like professional DJ isolators must be constructed to carry the full mix with ideal sound quality.\r\n\r\nExcept I can beat those in one very Airwindows detail: if you are using it as a lowpass, and you’ve got high on zero and low on 1 and you open up the filter completely sweeping it up… no matter what sample rate you’re at, once you reach 1 (full crank) on the frequency control, it seamlessly bypasses itself while still calculating the filtered signal. So, unlike analog isolators, when you run THIS isolator on the full mix, at times you’re not using it, it is literally not in the signal path anymore. :D",
    Comments: "",
    Name: "isolator",
    Url: "https://www.airwindows.com/isolator/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is Isolator, but with control smoothing and a new resonance booster.\r\n\r\nIsolator2 is Isolator, my very steep lowpass or highpass or shelf filter, but now it’s got smoothed coefficients so you can automate it and make it move better. Also, it’s even steeper. Also, it now has the power to give you added resonance! So you can put an edge on your filter/isolator sweeps, for a really narrow high-resonance sound that’s very striking as a ‘synth filter’ tone.",
    Comments: "",
    Name: "Isolator2",
    Date: 1648339200000,
    Url: "https://www.airwindows.com/isolator2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Kick Drum Hacking",
    Date: 1485475200000,
    Url: "https://www.airwindows.com/kick-drum-hacking/"
  },
  {
    Use: "",
    Type: "",
    Description: "while",
    Comments: "",
    Name: "Kicks",
    Date: 1187827200000,
    Url: "https://www.airwindows.com/kicks/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Kit A",
    Date: 1432080000000,
    Url: "https://www.airwindows.com/kit-a/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Kit B",
    Date: 1432080000000,
    Url: "https://www.airwindows.com/kit-b/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an amp sim with a clear, penetrating, vocal tone.\r\n\r\nLeadAmp acts like one of the ‘normal’ ampsims, but leaning more towards the vocal, fluid, Vox-y side of things. It’s a distinctive voice and even though they’re all pretty simple and direct, it’s really obvious how LeadAmp isn’t the same flavor as FireAmp or GrindAmp: distinctly different vibe even though they are all cut from the Airwindows super-direct amp sim cloth.\r\n\r\nThe Airwindows amp sims are all fairly simple designs: highpass, cascading gain stages with ultrasonic filtering between them (often tuneable so you can suppress aliasing even at low sample rates, but they're meant for 96k use) and a cab simulator on the end that's dynamically convolved but also a truncated, brief section of tone color",
    Comments: "",
    Name: "LeadAmp",
    Date: 1660003200000,
    Url: "https://www.airwindows.com/leadamp/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "LeadVox",
    Date: 1238198400000,
    Url: "https://www.airwindows.com/leadvox/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a tiny amp sim, like a little bitty practice amp without that much gain.\r\n\r\nHere’s a cute little monster for you! LilAmp is an alternate take on my amp sims (resurrected from way back when, and brought up to speed to some extent). Unlike something like FireAmp or GrindAmp, this one’s much lower gain and acts like little practice amps, but the kind with a lot of loudness and sonority.\r\n\r\nYou use this when you want more of a clean, articulate effect, or when you’re trying to highlight the treble and midrange (for instance, for leads, or to turn a snare into a loud, confined whack). You can make it be more mellow, too, but it will always be ‘LilAmp’ and speak up in a certain way. Something I found it useful for, is rhythm guitar that’s kind of Stonesy and not all that saturated: you can get the right kind of midrange bark out of it.\r\n\r\nAll these amp sims (there are more coming, too!) incorporate the cab sim stuff I’d also done back in the day, and they all have a rather special dry/wet control where backing off the full-wet sound gives you two stages of dry/wet, one for the cab sim and one for the amp sim. So things clean up in a distinctive way that’s not like any other plugin, or anything you could get out of a real amp, for that matter. Treat LilAmp as a flexible way to get this type of sound, because it’s way more interested in doing that, than in trying to mimic any particular literal amp. Rather than taking a real amp and EQing and shaping it to your mix, you take LilAmp and morph it directly until it does what’s needed (this applies to the other Airwindows amp sim plugins, too).",
    Comments: "",
    Name: "LilAmp",
    Date: 1657497600000,
    Url: "https://www.airwindows.com/lilamp/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Livezilla",
    Date: 1415404800000,
    Url: "https://www.airwindows.com/livezilla/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Comments: "",
    Name: "Logical",
    Date: 1182297600000,
    Url: "https://www.airwindows.com/logical/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Logical2",
    Date: 1364428800000,
    Url: "https://www.airwindows.com/logical2/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Logical3",
    Date: 1392249600000,
    Url: "https://www.airwindows.com/logical3/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a classic 2-buss compressor.\r\n\r\nLogical’s a compressor. It was designed from the start to work on the 2-buss in the most demanding conditions: people are really picky about their 2-buss compressors, and you can’t mess around. The tone has to be spot-on and it’s got to be transparent and able to let the music through. Additionally, when we’re talking about ‘tone’ and something called ‘Logical’ you can see that it’s going to be in the SSL style: there’s a sparkliness which requires some extra coding attention.\r\n\r\nYou can approach compression duties from several directions with Logical. It has three distinct stages, and will entirely bypass stages it’s not using. It’ll go from 1/1 compression, up to 2/1 using just a single stage (for the utmost transparency): keep it below 2/1 ratio and use the threshold control to bring in the compression. This is a traditional 2-buss natural-sounding compression. From 2/1 to 4/1 ratio, you can get various behaviors and the two stages in use still sound very clean: the speed control will give you different kinds of ‘swing’ and spring-back out of the compression.\r\n\r\nThen as you pass 4/1 ratio and go off to a max of 16/1 (approximate, but that’s the basic idea) there’s a tone change, and as you get into crazy high ratios, Logical goes a little bonkers. This was NOT available in previous Logicals. The issue was, if you rely heavily on that final compression stage, things can get messy. You can push Logical until it’s nasty and so full of energy it’s forcing you to use the makeup gain to PAD the output, just to handle all the madness.\r\n\r\nThis time, and in honor of Logical going free VST format, it’s not set up for only good behavior. This time, it’s your responsibility to not blow up your outputs by thoughtlessly cranking the ratio. Consider it an audio chainsaw made of silk and glorious victories. Not every top-selling plugin got this much better when I revisited it. I’m very pleased with how Logical4 came out, and I hope to see it talked about a whole bunch. This one’s worth a lot of ‘did you hear?’.",
    Comments: "",
    Name: "Logical4",
    Date: 1505001600000,
    Url: "https://www.airwindows.com/logical4/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is distortion and demolition of air molecules, modeled.\r\n\r\nHere’s something rather special. What if you could distort like air molecules distort?\r\n\r\nI studied recordings of competitive tractor pulls, of Space Shuttle launches, various recordings that represented the way air can be mangled and break apart. The result is Loud… a step into a much louder world. It’s a distortion that can be slammed to unthinkable ‘heart of a supernova’ dB levels, but can also be subtly introduced to give the sonic coloration of a big LOUD noise in open air. Makes for a very interesting ‘glue’ at zero boost!\r\n\r\nHere’s how it’s done: rather than apply a consistent transfer function like a normal distortion, Loud knows whether you’re compressing the air, or letting it rebound. And if it’s snapping back, it can do it with the speed of lightning, but if it’s compressing, the air can be squished to practically solid, increasing heat. This extreme nonlinearity is why Loud sounds the way it does. It can sit on a whole mix to give it scope and authority, or it can be pushed harder on individual tracks like guitars and drums to amp up the ferocity.\r\n\r\nRemember, if you’ve got it totally fuzzing out, you are probably already beyond any sound level achievable by human means. The completely fried sound of cranked-up Loud is not meant to seem like acoustic phenomena as we know it. It turns up that loud because I grew up reading Douglas Adams’ “Hitchhiker’s Guide to the Galaxy”, and because in no other way can you accurately emulate a Disaster Area concert. :)",
    Comments: "",
    Name: "Loud",
    Date: 1492905600000,
    Url: "https://www.airwindows.com/loud-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "deepens the tone, leaves a gloss and textural modifications.\r\n\r\nThese (Lowpass and Highpass) are mixing EQs, not mastering ones (though I’m not the boss of you). They’re complementary: the one is the inverse of the other. However, because of their peculiarities that makes them behave quite differently. What they have in common is they’re interleaved IIR filters, something people don’t normally do. The experiment here has to do with my discovery that digital audio only exists in sets of samples (never just as the isolated sample: the waveform isn’t there, the sample value is only a signpost that the audio is to weave its way around)\r\n\r\nThey’ve also got a very unusual parameter, soft/hard or loose/tight, which controls how the IIR filters are fed audio. When you offset it, you get a situation where the cutoff is higher at louder volumes, or at quieter volumes. This is on a sample-by-sample basis so it’s a tone-character modification, subtle but interesting. Loose/tight is just the best way I could describe what’s happening there.\r\n\r\nLowpass gives you a treble rolloff (some have joked that I make dozens of treble rolloffs! Yes, but they all sound different) and what’s immediately obvious is, the stuff right up by Nyquist on the threshold of hearing is not rolled off with the rest of the treble. Also, if you only want to cut extreme treble, you can do it with just adjusting the soft/hard control away from the center position. At deeper cut settings, the soft/hard control gives you two different textures (both of which keep a hint of ‘air’ right up top). The dry/wet control allows you to blend your result. Lowpass gives you big sounds with various colorations and a sparkly gloss that comes from your underlying sound: it’s a big-ifying filter that might suit huge synth pads or orchestral tracks.\r\n\r\nHighpass, the inverse of this, gives totally different impressions. The same filter-offset behavior turns into ‘loose/tight’ and the extreme treble gets stepped on, rather than retained. This makes Highpass take on ‘classic’ tonalities, particularly with the offset on ‘loose’, which gives a tubey and softened texture. If you run it full-wet, you’ll get a radical ‘analogification’, wiping out all extreme lows and the highest highs, and sounding like some small vintage radio at high filter settings. It’s a small-ifying filter that’s also a time warp (with offset on ‘tight’, you have a transistor radio instead, still retro-sounding!) and all you have to do is dial in your boost area and then balance it with dry/wet to get intense texture shaping that normal EQs can’t come close to delivering.\r\n\r\nAgain, these are not mastering EQs unless you face really unusual mastering requirements. They’re mixing tools, and they really do act like different animals so they’re each contained in their own plug. They’ve been around for ages but the revision to VST form has brought them a new level of tonal sophistication plus the very useful dry/wet controls that take them out of ‘experiment-land’ (they have always been building blocks for plugins such as Guitar Conditioner) and makes them stand alone as useful mix tools.",
    Comments: "",
    Name: "Lowpass",
    Date: 1172102400000,
    Url: "https://www.airwindows.com/lowpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Lowpass, Highpass",
    Date: 1476662400000,
    Url: "https://www.airwindows.com/lowpass-highpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an unusual-sounding variable-slope lowpass filter.\r\n\r\nThis new version of Lowpass exists to fix a bug, but then I added stuff to it that makes it entirely a new animal!\r\n\r\nThe existing Lowpass tries to produce the same cutoff no matter what sample rate you use, but doing that meant high sample rates can never use a fully opened filter. Instead, you got roll-off no matter what. Lowpass2 no longer does that: the filter control goes from complete silence to wide open no matter what sample rate you’re at.\r\n\r\nBut there’s more: Lowpass2 still uses the interleaved IIR filters the original Lowpass pioneered (you’ll notice subtle bleed-through of information near the Nyquist frequency, beyond human hearing, but also the open and involving sound) but now it can use from zero to four poles of filter: so you get a stronger effect, and a sharper roll-off!\r\n\r\nAnd that’s important because with four poles of filter you REALLY hear what the Soft/Hard slider does. This interacts with the filter control (don’t expect the cutoff frequency to stay the same) but what it does is vary the cutoff based on what sample value the input is. So you can either roll off harder for the peaks of the sound… or let ’em through more. Since it’s an IIR filter the effect is gradual, but at four poles it’s really noticeable.\r\n\r\nThat gives you two distinct tone colors for your lowpassing, plus special effects: in the video I demonstrate how cranking the control to Hard on pink noise can make it sound like wind noise where you’re going incredibly fast. Lowpass2 is ideal for experimental tone shaping, and for sound design.",
    Comments: "",
    Name: "Lowpass2",
    Date: 1553385600000,
    Url: "https://www.airwindows.com/lowpass2/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "",
    Description: "is a utility that swaps Left with Right every few (1-10) minutes.\r\n\r\nI don’t know how useful this’ll be for you: a person asked me for it, and I was able to do it. This just does one thing.\r\n\r\nEvery few minutes (as in, one minute to ten minutes) it swaps the L and R channels. It sweeps them across in about a tenth of a second, to prevent any sort of pop or anything. When it’s in LR or RL mode, it is 100% direct pass-through of the audio data word, so this is as clean as stuff like LeftToMono: it’s one of those ones that just copies the data over, not even touching it. That said, this doesn’t belong in your mix: the idea is that if you’re mixing and you do stuff asymmetrically, it’s like visual arts: you might need to flip the canvas left-to-right to see if things are off balance. That’s all this plugin does. You set how many minutes will elapse before it flips or re-flips.",
    Comments: "",
    Name: "lrfliptimer",
    Url: "https://www.airwindows.com/lrfliptimer/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a re-release of another old Character plugin.\r\n\r\nLuxor is the Character plugin that’s based off Manley impulses. It does NOT sound like a Manley anything. Instead, it does a weird and maybe cool thing: you might treat it like an amp sim or something, see what you can get out of it. Cranking syn drums through it ought to be good. It is what it is, namely ‘a weird plugin not like anything else’ and I hope you like it.",
    Comments: "",
    Name: "Luxor",
    Date: 1583625600000,
    Url: "https://www.airwindows.com/luxor/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is the Mackie distortion but with treble and bass controls added.\r\n\r\nFolks who wanted Mackity, were looking to do some crazy things with it. We’re taking an old Mackie 1202, pre-VLZ (I have one and know how to abuse it for effect) and we’re mangling sounds with it. People wanted to take a kick drum, run it through one channel turned all the way up, patch that to another channel with crazy EQ and also turned up until ready to explode, and so on. Mackity was my best shot at just the input section of the 1202, with all the gain on tap but set up to work as close to ‘clean’ as these desks ever got: more so, in fact, as it doesn’t add hiss and chip noise. Mackity was really good at sounding exactly like that, for those who like patching out of the insert points and getting a reasonably hi-fi sound out of their old 90s mixer.\r\n\r\nThere are plenty of people who know without the shadow of a doubt, that the very idea is ridiculous: that, compared to your Neves and APIs etc, these tiny budget mixers are garbage.\r\n\r\nThey will HATE this plugin. This is the same thing only with the garbage EQs in the 1202, the original two-band version, in which you can also overdrive the op-amps inside the EQs for good measure. Nothing about this sounds nice. You might want to pad down the output if you try: it’s pretty horrifying.\r\n\r\nSome folks will go and immediately do that… and some of those, are very used to their original Mackie analog mixers, and know the exact tone they should get. And I can’t tell you whether those folks will be happy with MackEQ, because I have the real one (not an 8-buss, but a 1202) to compare with, and I did not get a perfect exact clone. I got something else. I think it might be useful: certainly it can get the correct TYPE of tone, but I don’t believe I have the true 100% 90s drum and bass madness exactly down. There’s a texture in there, especially when you start aggressively distorting highs, that just defies being captured in a plugin, much like you don’t really get a Marshall Plexi in the box.\r\n\r\nBut I captured SOMETHING in a plugin, and it’s in the ballpark. If you can accept a slight re-voicing of the thing, or if your use of it doesn’t involve torturing hi-hats and such in the first place, you might find MackEQ is useful to you. That’s my hope. I daresay I’ll find uses for it myself… including, use after certain secret projects I’m still working on. Seems I’ve devoted myself to the DnB flame. If only I could play the music, I’d really be on to something :)",
    Comments: "",
    Name: "MackEQ",
    Date: 1619913600000,
    Url: "https://www.airwindows.com/mackeq/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is an emulation of the input stage of a vintage Mackie 1202!\r\n\r\nMackie 1202 (pre-VLZ) input stage.\r\n\r\nFound and bought one, learned through using it just how different it was from anything I’d done before, resolved to capture the madness.\r\n\r\nThis is what you get when you run stuff into the inputs of the original Mackie 1202… and then, plug halfway into the insert points on the back of the unit. This time it’s not about modeling the two-band EQ, or any of that. This time it’s the refined essence of Mackie slam.\r\n\r\nI might not have it so perfect that it’ll cancel out with a phase inverted recording out of the real physical machine… though it’s close… but on my word as Chris from Airwindows, through my choices and techniques, Mackity gets the vibe pretty close to perfect. It won’t generate noise like it’s real cheap op-amps but it’ll give you the same spongy slam and gleaming brain-fry overload of the purely analog machine. This is partly because it’s not overprocessing to lock in all the little EQ-matching things: it’s basic simple algorithms mimicking a basic simple circuit and there’s an intensity that comes through which you don’t get by fussing over all the details. It sounds big and raw and warm and it takes in audio in a characteristic way… really really old Mackie tiny mixer, the kind that can’t really do nice things but turns electronic music into a wall of roaring shrapnel.\r\n\r\nIf you’re a classical recordist, or a fan of, you know, GOOD equipment, this means nothing to you. And that’s fine. Some weapons are best kept secret. But if you’re a DnB head or various other underground recordist type, I doubt I need to say more.\r\n\r\nSo I won’t. Have fun!",
    Comments: "",
    Name: "Mackity",
    Date: 1617494400000,
    Url: "https://www.airwindows.com/mackity/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "Magneto-Dynamic Infundibulator",
    Date: 1487894400000,
    Url: "https://www.airwindows.com/magneto-dynamic-infundibulator/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Making LUTs with Chris from Airwindows",
    Date: 1587859200000,
    Url: "https://www.airwindows.com/making-luts-with-chris-from-airwindows/"
  },
  {
    Use: "",
    Type: "",
    Description: "is a wildly adjustable, strangely colorful reverb for deep and flexible spaces.\r\n\r\nFirst, the Swiss Army Knife reverb! (a more cooperative one is to follow)\r\n\r\nThis is the result of some deep diving into Householder reverb algorithms (a way of taking four delay lines and turning them into infinite reverb). It’s different from anything I’ve done before, reverb-wise: extremely flexible, and incorporating some neat new tricks (for instance, the highs fall away at the same rate they would in a giant concrete cavern, allowing for REALLY huge-sounding spaces as well as convincing smaller spaces). It’s actually two parallel Householder reverbs in the place of one.\r\n\r\nBut what would happen if you had them feed back into each other, not just into themselves?\r\n\r\nTurns out two different things can happen. One is a twisting and distorting of the sonic space into a distinctly… SPRING-like tonality. If you push the flavor knob towards 1.0, you increasingly get that clangy spring reverb thing, either subtly or overbearingly.\r\n\r\nThe other is this: apparently the opposite of a spring is a plate. Because when the Householder tanks feed back into each other inverted, they cancel out those same things and produce a whonging booming dense solidness that I remember, very well, from building a REAL plate reverb out of a big sheet of steel hanging from springs. I should say that real one I built was not a GOOD plate reverb… but I remember what it was like, and I can bring back the feel of it with this strange beast and its inverted broken feedback thing. This is one of those Airwindows plugins that lets you cut off your own foot with giddy abandon: all the bad settings are totally available. But if you know how to tune it, you might get something quite magical.\r\n\r\nYou get damping (from ‘almost’ infinite reverb down to very very damped), an overall tone control to handle whether the verb is bright or not, the ‘flavor’ control that leans either platey or springy or neutral, a room size that will go unreasonably huge even at 96k, and dry/wet. Stay tuned for stuff that’s more ‘preset’ and always gives you useful/good settings: that’s coming too. But this one is the reverb of doom: the most wild range of settings and tonalities and spaces, and the neat thing is apart from the global tone control at top, it’s all about manipulating the heart of the algorithm in significant ways. None of the adjustments are arbitrary: for the range of useful tonality, this reverb is very simple to operate.",
    Comments: "",
    Name: "matrixverb",
    Url: "https://www.airwindows.com/matrixverb/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a wobbly chorusy weird diffuse effect.\r\n\r\nAs useful as utility plugins are, sometimes you just have to do something wobbly and weird. Here’s Melt!\r\n\r\nTo explain what it’s doing will be a little tricky. You can just download it and play with it, but if you want to know what’s under the hood, here goes.\r\n\r\nSuppose you have a delay buffer. You can read ‘echoes’ out of the delay buffer. If you like, you can move them around, which changes their pitch.\r\n\r\nWhat if you started reading at one point, and stopped at another? You’d get a delayed ‘moving average’, a series of samples combined. It would be duller, rolled-off.\r\n\r\nIf you took that section and moved IT, then you’d have a rolled-off, darker delay tap that changed pitch.\r\n\r\nNow, what if you took all the start points and all the end points, and made them all wobble and sway around independently, so that the shifting delay taps also changed in tone color and volume even while they pitch-shifted around?\r\n\r\nWell, that’s Melt. It’s pretty freaky, when cranked way up. You can run a long extended delay, causing it to resemble a strange retro ambience effect, or you can tighten it right up so that you have more of a chorusy thing. It probably should always have a bunch of pitch shift depth, otherwise it’s a mite boring. You can include dry, or just crank up the wobbly weirdness: should be nice on pads and things, or anything that has to be more dark and diffuse and unpredictable.",
    Comments: "",
    Name: "Melt",
    Date: 1488758400000,
    Url: "https://www.airwindows.com/melt/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a clean amp sim meant to work like a loud Twin or something of that nature.\r\n\r\nMidAmp is another amp sim, this one going for a high-powered clean combo sound. You know, a Twin kind of sound. It’s got a wide range of EQ and can be rolled off real far, and it can be extra bright and spiky if you want that. I demonstrate it in the video on a Tele part, then unexpectedly to dirty up a thumping bass (which it does really well) and lastly on some very aggressive drums to make them even crazier.",
    Comments: "",
    Name: "MidAmp",
    Date: 1658707200000,
    Url: "https://www.airwindows.com/midamp/",
    Category: "Amp Sims"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "MineSpace",
    Date: 1391126400000,
    Url: "https://www.airwindows.com/minespace/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a biggenator that also works as a loudenator.\r\n\r\nHappy accidents! What I was trying to do was add a blend control to Spiral, so I could make a Channel that let you go between the original, ‘fatter’ sound and the cleaner, more transparent but less fat Spiral sound.\r\n\r\nInstead, I got this (and another, complementary plugin to be revealed later). I coded up a refinement to the algorithm, where the ‘curve factor’ of Spiral got modified by powers of itself, or powers of powers of itself… up to the fourth power, which turned out to sort of have MAGICAL powers, or at least that’s how it seemed when I worked out what was happening to my test sine waves.\r\n\r\nMojo’s the result. It’s a neat little algorithm that doesn’t sound anything like Density, or Spiral. Instead, it sounds like concentrated HUGE. Even at no added boost, it makes the sound a lot fatter (much like what was asked: a more refined algorithm that still gets the fatness of Density). But then there’s more… when you start slamming it.\r\n\r\nTurns out this simple little algorithm, one single transfer function without extra parts or switches or added tricks, soaks up input gain like nothing I’ve seen.\r\n\r\nUnderstand, it’s not ‘clean’. It thickens and fattens the sound without any real EQ change, by where it puts the energy and how it rounds off peaks. It’s got a weirdly effective way of being able to round stuff off and then turn it into a mostly flat-topped output, like full-on digital clipping style loudness, but with neatly sculpted little curves going in and out of the flat stuff. It’s also such a nonintuitive algorithm that I wasn’t able to find an ideal spot to just straight clip it… so, like original Spiral, if you push beyond its limits it’ll start wavefolding on you (which can be an indication of too much slam). But the sweet spot is unusually wide and forgiving, and it sounds really loud while you explore that maximum limit.\r\n\r\nMojo is an accident, but it’s also an obvious ‘popular’ plugin. Check to see if you’re okay with the extreme fattening effect it has, since it does really have a sound and isn’t what you’d call clean, even in the absence of extra boost. But if you were already looking for some ‘mojo’ to be added, this Mojo might be just the type… and, like the original Density algorithm, this one is likely to show up in other plugins as an added saturation element, because it’s got a distinct flavor that will help certain plugins do their thing.",
    Comments: "",
    Name: "Mojo",
    Date: 1563667200000,
    Url: "https://www.airwindows.com/mojo/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is your one-stop shop for final 2-buss work!\r\n\r\nHere’s your final plugin on the buss. This is one of those weeks where a lot of work comes together into a final shape. In a single plugin, you’ve got a pile of usefulness that you won’t have seen in one place before.\r\n\r\nYou’ve got Not Just Another Dither (24 AND 16 bit). The 24 bit is also used to make your DAC sound better on the other monitoring options (even if you have 32 bit DACs, it’ll still bring a subliminal naturalness from the Benford Realness calculations). You’ve got PeaksOnly back again, but also SlewOnly and SubsOnly: switch between them and if anything is either out of control or missing in action through these extreme monitoring situations, you know what to do.\r\n\r\nYou’ve got utilities like Mono and Side, for a quick mono check. If you split ’em to stems and then sum them, you ought to get the original signal back again so that’s a handy tool you’ll already be used to. But you’ve also got three new things, Vinyl, Aurat and Phone. This is where the ‘ultra-broad bandpass’ stuff went! It was too vanilla to work as a ‘Interstage’ killer, but the Airwindows biquad bandpass turns out to be ideally suited to test monitoring, where you want the bandwidth very limited but without sounding unusual or vibey about it. Vinyl just barely rolls off the extremes in the manner of traditional lathe electronics, which routinely discard stuff that CDs include. Aurat is a narrower band, like the output of those little one-driver mix check speakers: you can get a decent sense of that voicing, as if your speakers were made that way, without a lot of fake modeling or convolution to muddy things up. And Phone, well… Same, but if it was a cellphone.\r\n\r\nUpdate - Aurat now has mono-summed versions that come out of either the left or right speaker, so you can get a true mono grot-box single speaker mix check even if you don’t have one\r\n-Phone’s now mono (no special single-speaker tricks, it’s more an afterthought but sure enough, you don’t normally get stereo cellphones)\r\n\r\nBut then you’ve got the crown jewel of Monitoring… Cans A and B. Airwindows Crossfeed for headphones! This isn’t an exact clone of anyone else’s product, this is MY take on what you need. It uses allpasses from PeaksOnly to blur and extend stereo content, first as a slightly delayed/smeared crossfeed, and then back again with a longer allpass to fill in some space. This does two things. It localizes stereo, but it also hints at the kind of information PeaksOnly gives you, so the Cans options both make listening easier, and mixing easier! Cans A is very subtle, much closer to the raw mix you’re working on, but with enough cues to orient you if you’re paying attention. Cans B is much more obvious, and is a good late-night check for if you’re getting fatigued: it’s a lot more blurry and ambient and narrowed, but it takes peak information that could get by you, and makes it obvious like a mini PeaksOnly. It feels like listening to the music off a stage, and presents everything you’ll need. And both of them use Console5 technology, Airwindows allpasses (as found in MV) and all gain operations inside them are done using BitShiftGain. So these monitoring options, whether subtle or plain, are set up to be the highest-fidelity monitoring options you’ll find.\r\n\r\nAlso, TWO new Cans algorithms, Cans C and Cans D.\r\n\r\nCans C is just ‘stronger, but basically still normal’, as requested. Cans D is something else again. It’s for really messing up the stereo, like when someone wanted to listen to old Beatles tracks and ‘fix’ the weird dual-mono mix (which I don’t normally approve of). But, since it uses SUCH a strong allpass stereo crossfeed, what you get has also got some characteristics of Peaks, without the exaggerations. So, if you can’t work with Peaks or find it disorienting, there’s a new ‘headphones energy redistributor’ in town and this one attacks exaggerated stereo too. Try it out and see what you think!",
    Comments: "",
    Name: "Monitoring",
    Date: 1567900800000,
    Url: "https://www.airwindows.com/monitoring/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "Monitoring (Redux)",
    Date: 1570924800000,
    Url: "https://www.airwindows.com/monitoring-redux/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is Monitoring, but with Dark as the wordlength reducer.\r\n\r\nHere’s a little update for users of Monitoring! Monitoring is the end-of-2-buss plugin that allows you to check your mix in lots of different ways. You can get 24 or 16 bit output out of it (as in, direct to CD format for saving as 16 bit), lots of reference sounds like SubsOnly, SlewOnly, PeaksOnly that will let you hear your mix in a very different way (if it’s way out of balance when you can only hear the deepest subs, or the brightest highs, you can re-adjust things.) PeaksOnly shows you a fake and unnatural sound that will enhance the inaudible peak energy and highlight anything that might be too loud because it’s heavy on peak energy. You’ve got four variations on Cans for headphone mixing (which gives you crossfeed in the form of allpassed, blurred audio a bit like what PeaksOnly does), you’ve got mono and side checks, narrowed-bandwidth checks like Aurat (including one-side mono versions to more closely resemble use of a real mono mix-check speaker) and even utilities like VoiceTrick, which gives you mono with one speaker out of phase: position a mic exactly between the speakers and you can lay vocal tracks without headphones if you need to (not perfect, but it should work).\r\n\r\nIn short, Monitoring, but with one little change. Everything is the same, but now Monitoring2 uses Airwindows Dark for the wordlength reducer. This is different from the original Not Just Another Dither, in that it will give you deeper blacks in your silences and darker, warmer tones than the original NJAD would do. Dark is not really a dither: it makes its choices (for wordlength reducing) based only on what will create less hiss, noise and highs in the final output. This won’t be right for everybody, and is subtle no matter who you are, but it might be just the thing if you have a retro aesthetic, are into the whole cassette-release scene, or just want to produce music that sounds as unlike the modern DAW scene as you can get.",
    Comments: "",
    Name: "Monitoring2",
    Date: 1642377600000,
    Url: "https://www.airwindows.com/monitoring2/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "gives you variations on mono, mid, and side in different channels.\r\n\r\nHere's MoNoam. It’s named sort of after the person who wanted something like it, and sort of after the concept ‘Mono’. Because all it does, is switch around some mid/side type things for your convenience.\r\n\r\nYou see, the new Monitoring is getting ‘Aurat’ settings that give you that but as mono coming from literally one speaker (you pick). Seemed like a good way to replicate what is literally a mono mix check speaker. But I got requests for that on straight mono audio… and on side, for that matter… and a lot of stuff I can’t put in Monitoring without it getting way complicated. The thing is, if I do a ‘massmarket’ generally useful plugin like Monitoring, part of that is me choosing to leave stuff out, and what’s left in takes on greater importance as stuff I think you should be doing. But there are always exceptions…\r\n\r\nSo, MoNoam (almost symmetrical, like a palindrome) gives you mono/mid and side (directly) in such a way that you could sum them to get the stereo back again. But it also gives you mono in either one or the other channel, to come out of only one speaker. And it gives you ‘mono-ized’ side: this will be fuller-sounding than the true side, because the true side is out of phase between channels. And you can put the mono-ized side in one or the other channel if you want. If you’re recombining things it’ll get weird, but if you just want to hear it then this is your chance. And maybe you might have tricky situations having to do with mid/side, or you’re doing odd things in Blue Cat Patchwork, or just making complicated signal routings, and need one of these options. They’re odd enough to require a lot of fiddling if you were doing them just in the DAW. Now they’re one simple plugin :)",
    Comments: "",
    Name: "MoNoam",
    Date: 1570320000000,
    Url: "https://www.airwindows.com/monoam/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Mudslide",
    Date: 1336003200000,
    Url: "https://www.airwindows.com/mudslide/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is an old weird gnarly sound wrecker :)\r\n\r\nSome plugins just want to watch the world burn :)\r\n\r\nI don’t have all that much to say about this one. I’ve been needing to post it: I’ve got folks who ask me for soundgoodizer/OTT type things and try to get a ‘slammed’, deeply unnatural, multiband kind of effect going… and all my life I’ve been learning how to get AWAY from that kind of sonic disassociation and audio gibberish towards stuff with a very different texture. So I’m not a natural match for that kind of thing, and yet I get asked for my take on plugins like that.\r\n\r\nSo, long ago, I made MultiBandDistortion. I figured if you were going to wreck your sound, let’s REALLY wreck it, and I did some very gnarly things in there that I now don’t entirely understand. I know that if you turn ‘stable’ down, you get a choppy effect not unlike the ZVex Fuzz Factory pedal, only not: the interaction between the bands can get sketchy. Again, I don’t remember how this worked and don’t expect to be revising it or making it more controllable or cleaner: that kind of misses the point. If you’re trying to get a slick version of this kind of thing you start by not using this kind of thing :)",
    Comments: "",
    Name: "MultiBandDistortion",
    Date: 1633824000000,
    Url: "https://www.airwindows.com/multibanddistortion/"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "is a dual-mono reverb based on BitShiftGain and the old Midiverbs.\r\n\r\nBack in the days of really old school digital reverbs, there were a couple weird and obscure ones that had a special mojo. I’ve got one: the original Alesis Midiverb. It’s quite low-fi and only has RCA jacks, but there’s a certain something about its sound.\r\n\r\nTurns out one of its secrets isn’t so secret: the first two versions of the Midiverb don’t have a multiply unit. That means you can’t do certain reverb things correctly. Reverbs use a kind of delay effect called an allpass filter, which involves multiplying by 0.618 (I’ve sometimes generalized this to ‘the golden ratio to N decimal places’, where N equals ‘a lot’). But the old Midiverb couldn’t do that… so it made an ‘allpass filter’ by multiplying its stuff by 0.5. A bit shift.\r\n\r\nAirwindows fans will know that there’s something special about a bit shift: especially in floating point, you can change volumes by 6dB pretty much losslessly. No, make that ‘totally losslessly’ since in floating point you’re only changing the exponent and could change it right back and lose absolutely nothing: the mantissa is never touched.\r\n\r\nWhat would happen if you took this old school way of doing allpasses, and made a modern reverb out of it, using full-quality floating point to do it? What if you followed up by making the regeneration also strictly ‘bit shift’, increments of 6dB or infinite regeneration, losslessly? What if you added a way to roll off highs by averaging output samples of the allpasses, and did THAT entirely using bit shifts as well? And allowed for a big number of allpasses (26, all different increasing prime lengths), and gave varying treble rolloff by independently controlling which of the allpasses got the average treatment?\r\n\r\nWelcome to the infinite land of MV. This is nothing like a normal reverb, but it’s got some great superpowers, not least of which is the ability to just sustain a ‘bloom’ forever. You can automate it by kicking the regeneration up to 1.0 any time you like.\r\n\r\nYou can dial in different degrees of highs roll-off using the bright control, or leave it at 100% shiny. Combining this with more restrained regenerations like 0.51 or 0.26 at medium-to-high sizes will give you very decent ‘impossibly huge reverbs’ of various characters. MV doesn’t do early reflections or plausible spaces, just the infinite wash, but that’s somewhat configurable.\r\n\r\nIt runs dual-mono, so you can dial down the size a bit (not too much or it’ll get nasty, you’re removing allpasses from the chain) and use it as an ambiance generator, and it’ll put all reverb tails ‘behind’ the sounds that make them: centered stuff stays centered, wide or stereo stuff goes super-wide. For this reason it’s very suited to use on auxes and submixes: you can add ‘space’ that’s very pure-sounding\r\n\r\nIt can do full, 1/2, 1/4, 1/8 and I think 1/16 level regenerations: set the feedback and it will use the bit shift amount nearest below the setting, so no matter what you do it will always retain its audio character. And the whole thing runs inside a PurestConsole instance except for the regeneration, which is extra… which means that if you build up a wall of infinite reverb, it can’t go into reverb runaway because distorted samples will wrap around and get quieter: you’ll have to trim down the output, but this makes infinite regeneration super-usable without applying any kind of compressor or limiter inside the loop. Since you can also do zero regeneration and it’s just a pile of allpasses, you can also do a ‘gated reverb’ effect if you like, which is good at airing up the mix but then getting out of the way.",
    Comments: "",
    Name: "MV",
    Date: 1550966400000,
    Url: "https://www.airwindows.com/mv/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is deterministic dither that uses Benford Realness calculations for each sample.\r\n\r\nLast and definitely not least in the dither-fest: Naturalize! This dither is often considered best by listeners. It works on every genre, at every sample rate. It adds no tonal color to the audio, and the noise it produces is quiet… but more than quiet, the noise of Naturalize has a fugitive quality where it seems to ‘hide’ behind the reverb tails, and once you start listening to the music it’s difficult to hear there’s any noise present. The sense of reality produced by the music is compelling enough that it doesn’t draw attention to the noise floor at all.\r\n\r\nHow can this be? I kept the secret for eight years but now that Airwindows is supported by a Patreon, I’m free to communicate how I did it, because my compensation is basically ‘the number of people out there who think I ought to keep working in this field’, and the more of those the better. I don’t have to keep Naturalize just to myself anymore, because it helps the Patreon when I’m generous. So, go ahead and download and use it for free (it’s running at 24 bit, use BitShiftGain to get 16 bit out of it) and here’s how Naturalize works.\r\n\r\nBenford’s Law is a statistical technique: basically, it says that in lists of natural data, if you get rid of all the leading zeroes, the first digit other than zero is most likely to be ‘one’. That’s no matter what scale the number is at: no matter how many zeroes you have to take away to get to the first number, it’s more likely to be ‘one’ than, say, ‘nine’.\r\n\r\nIn fact, it’s ‘one’ thirty percent of the time, and the other leading digits are progressively rarer. How much rarer? I’ll give you a piece of the Naturalize code and the numbers I’m using.\r\n\r\nbyn[0] = 1000;\r\nbyn[1] = 301;\r\nbyn[2] = 176;\r\nbyn[3] = 125;\r\nbyn[4] = 97;\r\nbyn[5] = 79;\r\nbyn[6] = 67;\r\nbyn[7] = 58;\r\nbyn[8] = 51;\r\nbyn[9] = 46;\r\n\r\nThis works on sample data that varies in logarithmic scale: fortunately, audio is already that way. Something like a reverb tail is perfect for Benford realness calculations! As the sound dies away, it SHOULD fall into just this sort of pattern: millions of sample numbers, scaling down to tiny near-zero values. It ought to be the perfect picture of Benford’s law.\r\n\r\nHere’s what Naturalize is. Every sample can be truncated in two directions: up or down, to the nearest value. So we do both, and then we run the Benford’s Law calculation on each, and we see which choice will get us closer to that perfect ‘realness’ distribution.\r\n\r\nThen we just choose that direction :) that’s it! Each sample, we always choose the direction that will bring us closer to Benford’s Law.\r\n\r\nThis works on a statistical basis, to produce a collection of sample values that hold to what you’d get if you directly sampled ‘reality’. It erodes unnatural qualities in the digital audio, and it’s pleasing to listen to. There’s no excess energy to worry about: it’s always within one least significant bit of the target audio. And I might be able to improve upon it (I initially remembered it as having no noise sources at all, but it’s using some noise to shake up the values a bit for better distributing) but as 2017 begins, doing this gives you the best sounding dither in the world. I’d be happy to see if I can make it even better: support my Patreon, after all I came up with this thing in the first place, stands to reason I can develop it even further. Maybe I’ll make it entirely deterministic, with no noise at all. I’m sure I tried that already, but sometimes persistence pays off.\r\n\r\n(followup: Naturalize is the first example of what then became NJAD and went through a couple of revisions: the most current and best version of NJAD/Naturalize is the NJAD that is in the plugin Monitoring.",
    Comments: "",
    Name: "NaturalizeDither",
    Date: 1482278400000,
    Url: "https://www.airwindows.com/naturalizedither/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is Dirty Loud!\r\n\r\nNC-17 was designed as the loudenator-killer. It uses the same technology as ADClip’s energy redistribution stuff, but on a soft-clipper, and instead of just feeding the energy back in, it uses it to modulate a Chebyshev filter: sort of complicated, but it’s definitely one of those Airwindows things. First to use such a soft clipper as the primary loudness maximizer, and secondly to use such a weird technology after it. Why a Chebyshev? To produce second harmonic. Why do that? To feed deep bass back in despite the loudenating. Okay, so the whole idea is pretty strange.\r\n\r\nWhat happens?\r\n\r\nFirstly, the whole tone changes, whether you’re pushing loudness or not. Check that first. You might immediately dislike the result, or if you seek ‘glue’ maybe you’ll like it, or use it to replace some other ‘glue’ effect. If you’re still with NC-17 after checking that, proceed to turn it up (or mix hotter into it). You’ll find no specific ‘break point’: instead, it just gets dirtier and dirtier the harder you push. The whole texture of loudness dynamics is altered, so you get the loudness cues of distortion but with a bass foundation mere distortion won’t permit, and a continuous spectrum between ‘more or less clean’ and ‘impossibly too loud’.\r\n\r\nThis one will also handle cleaner synthesizer tones, EDM, the kinds of sounds that reveal the artifacts of other loudenators ruthlessly. With NC-17, instead you get a slight ‘grungening’ but then it refuses to break up in the normal sense, just stretches to fit. (this one might be the one you want on drum submixes, too)",
    Comments: "",
    Name: "NC-17",
    Date: 1509840000000,
    Url: "https://www.airwindows.com/nc-17-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a re-release of my old Neve-style color adder, exacly as it was.\r\n\r\nNeverland is my old Neve emulation from 2007. It’s out of the Character collection, and I’m re-releasing these in 64 bit and VST because there are people asking me to do that. If I make it exactly like how it was, you can open old mixes and retain the settings you had, so the Character plugins are kept exactly the same (though they do get denormalization fixes, and the dithering to 32 bit floating point where applicible).",
    Comments: "",
    Name: "Neverland",
    Date: 1581206400000,
    Url: "https://www.airwindows.com/neverland/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is an Audio Tesla Coil plugin! Note: audio tesla coils don't sound nice.\r\n\r\nSorry/not sorry!\r\n\r\nNikola was, I think, an April Fool’s plugin back in the day. In porting it to VST and making it available for the first time on Windows and Linux, I thought up some improvements, so its Voltage control now combines two different effects: at low Voltage it’s brighter and airier with little roar and sustaining industrial scrunch. At high voltage it goes more midrangey and turns into a complete disaster area.\r\n\r\nAn audio Tesla Coil fires bolts of lightning at audio rate. This is based off real recordings of such a coil, but the thing is it’s like trying to record fireworks: if you use good mics you just get a ‘pop’ because mics don’t react the way our ears do. So, for the full effect, turn Voltage way up and run it into a lot of distortion and reverb.\r\n\r\nOr, you can use it to mangle individual tracks in a really industrial way: it’s a bit unpredictable what you’ll get, but the concept is of firing off impulse responses. But firing off lots of impulses gives you a convolution reverb: this is different, it retriggers the ‘zap’ at every zero crossing causing a different effect.\r\n\r\nIt’s a legacy plugin based on old experiments, so it doesn’t adapt to sample rates: in the video I’m running it at 96K which makes it sound different. If you’re at 192k it might be too pitch-shifted to be useful (though it’ll track the notes in the underlying track without issue). It’s useless to oversample this plugin, for this reason. If you can somehow undersample it that might be neat? Definitely one for the sound designers.",
    Comments: "",
    Name: "Nikola",
    Date: 1189900800000,
    Url: "https://www.airwindows.com/nikola/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "nikola-vst",
    Url: "https://www.airwindows.com/nikola-vst/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "njad-redux",
    Url: "https://www.airwindows.com/njad-redux/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is adjusta-TPDF-dither, like a dither flanger. Can do Paul and Tape settings.\r\n\r\nAnd just one more dither plugin before the eagerly anticipated Naturalize… (because who will care about these then?) …NodeDither, the testbed upon which PaulDither and TapeDither were developed!\r\n\r\nI still think it’s good to have those as separate plugins (for simplicity and purity of concept) but since the concept is ‘TPDF made up of a sample of noise, and then a delayed version either normal or inverted’, how can I not give out the tool I used to find things like TapeDither? This was coded to do something that wasn’t possible: put a big delay in so there’s a ‘cancellation node’ at around 1.5K, making the noise quieter there.\r\n\r\nTrouble was, all you get is comb filtering and no nice clear ‘quieter’ zone. That’s why I experimented and found that four samples delay (inverted) gives you TapeDither, a nice softer noise. One sample inverted gives you PaulDither (in other words, a very bright one-pole highpass). Two samples gives you a neat silky texture which is still very bright. Eight samples gives you a thing kinda like TapeDither but even darker and beginning to sound flangey… you might call it CassetteDither, or maybe ‘TapeDither for 96K’.\r\n\r\nCall it what you like, because NodeDither lets you use all those and anything else, up to really extreme delays that give heavy, heavy comb filtering (flangeyness). You can reinforce lows rather than cancelling them through out-of-phase, and dial in dark moody dither noises that fit better with your project. You can tune the flangey note of the dither to your track. All manner of silly things can be yours with NodeDither :)\r\n\r\nAnd yes, you can make your noisefloor a flanger. I’ve demonstrated in the video how to do this with automation. If people really REALLY need a flange dither, I can make one later, but Naturalize will not be delayed any longer and is due to come out this Wednesday. But hopefully the possibilities of NodeDither are worth having! Or, put it this way: if NodeDither is for you, you know who you are and you’ve probably already downloaded it and are playing with the controls and thinking of how it would affect your creations.\r\n\r\nBecause, bottom line: this is still technically correct TPDF dither. It’s just also an instrument, now. Have fun playing it :)",
    Comments: "",
    Name: "NodeDither",
    Date: 1482019200000,
    Url: "https://www.airwindows.com/nodedither/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is the Airwindows deep noise oscillator, as a sound reinforcer.\r\n\r\nNoise started out as a plugin called Voice Of The Starship. It’s an algorithm that generates brownian-motion noise which won’t ‘wander’ into excessive DC offset, but without a highpass filter needed! The original Voice Of The Starship can be made to do any sort of deep rumble, including purely subsonic rumble that still works as an audio stream.\r\n\r\nNoise is like Voice Of The Spaceship, except it also triggers on input sounds. It can pretty closely track rhythms coming in, and you can combine it with underlying stuff with Dry/Wet, and the Distance control applies to both Dry AND Wet, to blend and darken them together.",
    Comments: "",
    Name: "Noise",
    Date: 1516492800000,
    Url: "https://www.airwindows.com/noise-vst/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a flexible reverb plugin.\r\n\r\nNonlinear Space is special because it’s got filter controls and acoustic space simulation in the loops: the usual allpasses and comb filters are just a little different here, designed to produce a deeper sound that’ll blend into the mix better. It’s the peak (so far) of all my efforts with reverb, it has its own sound, and it’s free Mac/Windows/Linux AU/VST!\r\n\r\nIt’s also got a nonlinearity control, which besides the easter egg polymorph duties can do two things: one, it can make louder sounds sustain longer. This is a bit tricky to set up and you’ll want to feed it with consistent loudness, but you can get that ‘sort of 80s gated’ sound if you set it just right, especially if you’re driving it from just a snare track or something sparse like that. Two, it can make louder sounds sustain less, which is the opposite. Using it that way lets you set it up as a reverb bed which doesn’t die away, but you can replace the stuff in it by overlaying more sounds. It’s the opposite of the first nonlinearity but it might come in handy for ambient purposes.\r\n\r\nThe sample rate thing really just tells it what buffer lengths to use: shorter buffers make tighter spaces. It should give a roughly consistent sound if you use the buffer corresponding to your sample rate, but then you can also be at 44.1K and set it to 96K just to have a huge stadium soundscape. Half the fun here is using it inappropriately, so I wouldn’t dream of telling you how to use Nonlinear Space: I hope it’s easy to get normal sounds with, and for everything else, just have fun.",
    Comments: "",
    Name: "Nonlinear Space",
    Date: 1522540800000,
    Url: "https://www.airwindows.com/nonlinearspace-vst/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "Not Just Another Dither/CD",
    Date: 1485907200000,
    Url: "https://www.airwindows.com/not-just-another-dither/"
  },
  {
    Category: "Dithers",
    Name: "NotJustAnotherDither",
    Description: "is a next-gen wordlength reducers (24 and 16 bit, and DeRez).\r\n\r\nThe votes are in, and the Internet has spoken. We’ve got a name for the new noise shaping variant on Naturalize, after a January of wild suggestions. Seems most people simply wanted to emphasize that this was not your ordinary dither, not your daddy’s TPDF.\r\n\r\nThis is the plugin (two, in fact) that beats all the other ones, including the original Naturalize. In normal use, this ‘dither’ (in fact it’s not a dither at all: it’s the Benford realness stuff from Naturalize, run with a noise shaper, and all the added random noise taken OUT) will make any fixed-point output sound like infinite resolution. It’s AU, Mac and PC VST. It has a switch for 16/24 bit operation (defaults to 24) and a ‘DeRez’ control where you can get low-bit NJAD audio if you like, or if you want to audition its noise floor behavior.\r\n\r\nThe output levels are low, without a bunch of extra energy coming from the noise shaper: it’s pretty well behaved, though like any hyper-performance ‘dither’ this is really meant for output formats. I don’t think any harm can come from repeatedly using this in processing, but you can always use a normal TPDF if you want no change in tonal balance (plain TPDF dither only adds broadband noise: more opaque, but if it builds up it won’t accentuate anything: dithers with a lot of high frequency energy can end up exaggerating that.)\r\n\r\n(followup: I added a 16/24 bit switch, and DeRez. Also, the most current version of this is in Monitoring.)"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is an ultimate full-bandwidth clipper.\r\n\r\nOneCornerClip works like this: it’s like ADClip, except it spreads out the onset to clipping over possibly many samples. They converge upon the maximum possible output, which means the front edge of a clip takes on a continuous curve, moving its energy down into lower frequencies where the clippage is less bright and gritty, and more brutal and ballsy.\r\n\r\nThen, on departing the clip, the waveform just snaps instantly to the next unclipped value, with no attempt to soften: so your waveshaping ends up getting one corner (on departing the clip) and one rounded onset (entering the clip).\r\n\r\nWhat this means is, you can smash this with bass and it’ll remain bassy. Smash it with midrange and it’ll be middy. It shapes itself to the needs of your track, the distortion taking on the character of what you’re putting in. And that means, you can slam stuff absurdly hard through this while retaining character… and you can retain size and scale and depth.\r\n\r\nI didn’t really design it for 2-buss mastering duties though I’m sure it’ll find some use there. It’s more a technical experiment that came to life and ate Tokyo. I think it’ll do great for nasty industrial noise, for obliterating drum room tracks, just a whole bunch of uses: because this isn’t a special purpose effect. It’s a big fat dirty distortion, and that makes it more flexible than bright gritty distortions, in that it can wear your frequency balance like a mask. It IS still distortion, so you won’t be using it for clean things. But it’s also very good at soaking up brief clips without revealing itself, so it’s not an insane choice for subtler use. I keep it at 0.618 for general use: that gets a good range of tones.",
    Comments: "",
    Name: "OneCornerClip",
    Date: 1521331200000,
    Url: "https://www.airwindows.com/onecornerclip-vst/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Overheads",
    Date: 1232409600000,
    Url: "https://www.airwindows.com/overheads/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a Chebyshev filter, that adds harmonics.\r\n\r\nPafnuty is a Chebyshev filter. What are those? Well, it’s not much like your usual filter: you don’t use this to roll off highs or lows (though under some conditions you might be able to do any of those things). A Chebyshev filter is like a mathematical formula. It works like this: if you feed it a sine wave (at exactly 0dB, or barely-clipping) it can generate entirely new sine waves to add to your sine wave. Which ones? Harmonically related ones. You can have twice, three, four times the frequency, all the way up to thirteenth harmonic.\r\n\r\nPafnuty’s been rearranged in such a way that when you move the sliders to the right, the harmonics add. (The old version used simpler math but gave a slightly weirder arrangement: you’d have to do 1.0 third harmonic, -1.0 fifth, 1.0 seventh and so on for them to add up in phase.) There’s also an attenuverter (which is what you get with a dry-wet control when it also allows for inverse-dry-wet: something out of Eurorack-land, which also existed on the Delta Labs Effectron. Side note about the funky old Effectron: it’s a delta-sigma converter like SACDs but cruder, and I’d been wanting someone to make a DIY-able delay like that. It exists! The Princeton PT2399 chip, which is in lots of current synths and pedals such as the Dreadbox Erebus)\r\n\r\nBack to Pafnuty. What do you get when you run music into this sine-multiplying filter? If your audio has no frequencies that, multiplied, go higher than the sampling rate, you get perfect aliasing-free harmonic enhancement. The way the filter works, it absolutely doesn’t generate anything higher than the multipliers it works with. It’s a sort of color-adding harmonic enhancement where you can pick what kind of coloration you add (or subtract, since all the controls go both ways). If the frequencies do go higher than the sampling rate then they do alias, but the way Pafnuty resists adding extra harmonics helps it to resist aliasing and if you don’t add lots of higher harmonics you can go very high in frequency, cleanly.",
    Comments: "",
    Name: "Pafnuty",
    Date: 1549152000000,
    Url: "https://www.airwindows.com/pafnuty-vst/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Patreon 2: More Stuff More Often",
    Date: 1552694400000,
    Url: "https://www.airwindows.com/more-stuff-more-often/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a highpassed TPDF dither. (quieter, airier)\r\n\r\nAs long as we’re making TPDF dithers, here’s something worth noticing, and a shout-out to a great person.\r\n\r\nIn a public Facebook discussion on dither, Paul Frindle (Sony Oxford, and the DSM 2 ‘prismatic compressor’) suggested his own preferred solution, in general terms: “The one we use most is triangular single pole high pass dither. It not freq bent enough sound odd, but is slightly less audible that flat dither. It can also be easily made by taking one sample of dither away from the previous one – this gives you the triangular PDF and the filtering in one go :-) “\r\n\r\nThe great thing about this is, we don’t have to get his code to be able to do that. In fact, I’m not: I’m using a sample of dither, storing it to be the previous one, then taking it away from the next sample of dither (which is backwards from what he suggests). However, the effect is the same: TPDF single pole high pass dither.\r\n\r\nThe coolest thing about this is, it’s actually twice as CPU efficient as normal TPDF! You store a dither sample (random generation is a pretty CPU-hungry process when done properly, and it sounds better when you don’t half-ass it) and then you use it again for the highpass! So not only is it just as good as regular TPDF, it’s cheaper to use.\r\n\r\nThank Paul for that, not me. (though I do have some ideas about ways to tweak it: I think I can put a cancellation node right where the ear is most sensitive and make the noise ‘quieter’. Paul’s no doubt already tried this and didn’t like it as well, but hey, I’ll try it too and let you all try it, for free. Paul would know exactly what I’m proposing to do as soon as I mentioned a ‘node’, and it’s nearly as cheap to run as his highpassed dither, but not quite)\r\n\r\nSo what do you get? Well, this is still a TPDF dither, so you get mathematically correct dither that doesn’t fluctuate in volume. You don’t get ‘the Sony Oxford’ dither, because I don’t have Paul’s code. But you do get the Airwindows implementation of this general concept, and I probably have it sounding pretty good in my own right.\r\n\r\nThe tone is brighter because it’s highpassed. That makes it a quieter bed of noise, and there’s a sort of silky, not-harsh quality to it that’s nice. I think it does affect perceptions of brightness and the tonal quality of the mix, so it’s a choice, not ‘the automatic correct option’. It’ll give a ‘sound’, and focus your attention differently, towards detail and a subtle revoicing of the track. If you mix through it, your choices will be conditioned by this way of hearing (remember, use 24-bit dither like this when monitoring on a DAC that takes 24 bit input, and your 24 bit files will also match what you hear: putting dither only on mixdowns is silly and misleading)\r\n\r\nIf I was going to use just a TPDF dither, it would be this one every time, because it’s not just a TPDF dither, it’s silky and sweet and a bit quieter than the usual kind. And just as Paul told us freely what the basic concept was, so Airwindows PaulDither is free. Thanks, Paul :)\r\n\r\n(followup: I’ve put in a switch between 24 bit and 16 bit, and added the DeRez control)",
    Comments: "",
    Name: "PaulDither",
    Date: 1480464000000,
    Url: "https://www.airwindows.com/pauldither/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "pauldither-redux",
    Url: "https://www.airwindows.com/pauldither-redux/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a highpassed TPDF wide dither. (quieter, airier AND wider)\r\n\r\nReturn Of The Son Of Monster Dither :D\r\n\r\nSo if you tuned in last week for TPDFWide you probably thought that was all I had, in the dither tank, for now.\r\n\r\nBut guess what? Happy accidents occurred. I thought it might be fun to try this same principle not on TPDFDither, but on PaulDither.\r\n\r\nPaulDither is of course a simple highpassed dither. It does the Airwindows-style very tiny offset to make the dither noisefloor sit across one extra possible value, and now PaulWide is the same thing except it rerolls the randomness if it’s going to seem too much like mono. It’s still TPDF, it’s still just random one bit noise sources, it’s still technically correct as far as dithering accurately (some might freak out at the offset, but it’s on purpose and WAY too quiet to hurt you, as it’s less than one significant bit), but now it’s also widened while remaining purely TPDF in nature.\r\n\r\nSo this is your ‘hot-rod’ industry-standard dither. If you need TPDF and fancy at the same time, here you go. It is silky in texture just like Paul Frindle’s preferred dithers because it’s the highpass dither, it’s slightly richer in texture because it’s offset a teeny amount like Airwindows TPDF, and then it’s widened through discarding random values that lead to ‘mono-like’ results: except it turns out, when you apply that to a highpassed dither, you get MUCH MORE wideness than you do with the regular highpass.\r\n\r\nEnjoy the most boutique, decked-out, hot-rod ‘regular ordinary dither’ you’re ever likely to see. I’m not sure what else can be even done here without ceasing to be TPDF anymore.",
    Comments: "",
    Name: "PaulWide",
    Date: 1637452800000,
    Url: "https://www.airwindows.com/paulwide/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "Console5 and PurestDrive, sittin’ in a tree… (i.e. both at once, on channels and buss)\r\n\r\nWhat can I even say? This is pretty much just what you’d think it is. Console5 (PurestConsole version) with a PurestDrive stage in every channel and on the buss. There’s a dedicated control for each PurestDrive, and since it’s implemented as a single plugin it saves you having to go out to the 32-bit floating point buss (not applicable to the 64-bit buss VST, in that case it saves you having to go out to that buss)\r\n\r\nBehavior-wise, it’s a Console5 variant. You can swap in the channel or buss and exchange it for any other Console5 plugin of that type and it’ll work as intended. I should mention that I don’t really mean for these to be all mix-and-match, even though I know people will want to do that: in my opinion it’s best to find an optimal combination where the channels match and the buss is your preferred buss (maybe from the same Console variation, maybe not) and then tweaking for channel EQ etc is done using more normal tools. I’m allowing people to do the digital version of recording stuff with all different preamps in the belief that’s best, because I know it pleases some people a lot, but don’t think that you MUST make a big mix-n-match Console rig from all the different variations. It’ll be more cohesive if you use the same ones: the threads of the tapestry will match.\r\n\r\nAnd if you’re using PDConsole as your preferred version, you’re going to have a really soft, lush tapestry. It’s not a big blur-and-ooze offender, but all the same it will pull everything into a smoother, more seamless zone. If you’re craving analog warmth of the recording-console type, this is probably the version of Console5 that most closely resembles an analog console built of hardware electronic parts. Other Consoles seek to deliver holographic imaging or great depth (there’s one coming later which ignores sounding like hardware, and tries to sound like acoustic sounds mixing LOUD in free air, not even a mixing desk at all). But PDConsole blatantly goes for that lush, big-console sound, smoothing and rounding stuff off in a controlled, euphonic way (without getting muddy about it).\r\n\r\nI put out these experiments because I know that for some people out there, one will be by far the best. It won’t be the same one for everyone, but I like knowing that there will be some listeners who go ‘Yeah! This one is absolutely the one for me. I’m now all set, and my mixes sound even more like my intentions’.",
    Comments: "",
    Name: "PDConsole",
    Date: 1520726400000,
    Url: "https://www.airwindows.com/pdconsole/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Peak Limiter",
    Date: 1169164800000,
    Url: "https://www.airwindows.com/peak-limiter/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a transformative mix check tool.\r\n\r\nPeaksOnly is a mix check, like SubsOnly and SlewOnly before it, or Silhouette and other even stranger plugins. You pretty much need to not master through this one :D it totally wrecks the sound. BUT, it telegraphs information you might never have had, makes it more obvious than it’s ever been before.\r\n\r\nHere’s how it works. PeaksOnly runs a little pile of allpass filters, but rather than just make them nice-sounding, it expands and expands and expands them, each time phase-rotating things a little more. It turns transient attacks of any kind into a little colorful wash, a flag of energy that stays at roughly the same level, but gets smeared out across time in a way you’d never normally hear.\r\n\r\nWhy does this matter? Because you wouldn’t hear it. Especially if you’re trying to work on headphones, brief sharp transients can become almost totally invisible, especially if they’re being peak-limited or get blended in with other sounds. That stuff can make your mix come alive, but how do you balance it? And if you’re on headphones, forget it: some peaks are just too brief, and unless you have a strangely powerful sense of energy levels that are normally invisible, there will be no managing the stuff that you simply can’t hear, the spiky intense sparks of audio like you get from passionate performances or tricks like using compression to spike up attack transients.\r\n\r\nBut with PeaksOnly, everything stays at exactly the same frequency balance (a trick of allpasses, especially mine which are prime-number spaced) but the bursts of energy, no matter how brief, get transformed into recognizable signals. If you’re short on transient impact, you’ll notice it. If you’re over-squashing attacks, you’ll end up with audio porridge. But if you’ve got a powerful, kicking, lively mix… every detail of it will be laid bare, turned into a sort of pantomime that exposes every transient at every frequency. Whether it’s how loud to make that snare or hi-hat, or how much sub-kick you can get away with, it’s all exposed. PeaksOnly is particularly fond of taking excess subsonic peaks and distorting ’em: you’ll never pack too much into the subs again.\r\n\r\nIt also tries to keep you at a sane loudness level (suitable for sending to mastering, if you really think you need to loudenate). Strangely, if you feed ‘mastered’ loud stuff into PeaksOnly and tolerate the distortion, it still reveals everything: there’s a difference between good ‘too loud’ and bad ‘too loud’, and PeaksOnly exposes that too. Anything out of balance, even in loudness land, will stick out.",
    Comments: "",
    Name: "PeaksOnly",
    Date: 1567382400000,
    Url: "https://www.airwindows.com/peaksonly/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Percussion (for Console)",
    Date: 1415404800000,
    Url: "https://www.airwindows.com/percussion-for-console/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a phase rotator/allpass filter.\r\n\r\nHere’s a simple little utility plugin, Airwindows-ized. Except, it seems like this isn’t part of typical DAWs and plugin collections. Can’t see why, it’s a pretty basic tool.\r\n\r\nIn radio, there was the need for a phase rotator, to make waveforms more symmetrical for loudness maximizing. In reverbs, you get a thing called an allpass filter (a kind of feedback delay at a specific calibration) which diffuses the sound so it can be fed to delay banks and seem more spatial. Turns out these are the same basic thing! It’s also in phase shifters (mixing the phase-shifted part against dry, or inverse dry).\r\n\r\nWhat happens? When you use an allpass filter, what you get is all the frequencies exactly as loud as they were before, but the phases of the frequencies are all different. Specifically, lows get delayed relative to the highs producing an effect where tones are ‘smeared’ across a time stretch, even though the spectral contents are exactly the same. The frequency information’s unaltered (nothing’s out of tune or darkened/brightened) but there’s a blur, possibly a large blur. PhaseNudge is set up to produce delays from really short (normal for a phase rotator) to unusually long, in case you’d like to treat it as a kind of slapback/echo effect.\r\n\r\nThe calibration of PhaseNudge is finer than you usually find in an allpass: 0.618 is the customary number but when I see that I think ‘golden ratio’, so that’s what PhaseNudge is using, to very high accuracy. Also, PhaseNudge uses a variation on the operating principle of Console to expand and deepen the sound. Though typical allpasses use very short delays, I think PhaseNudge does its thing quite well across a broad range of delays. Anywhere you need a ‘defocus’ or ‘blur’ plugin, PhaseNudge should come in handy, whether it’s diffuse pads, overly pointy percussive elements, or even the effects loop of a lead guitar sound (phase shifters have been used for decades, to make the textures of leads more fluid before they hit the actual amp. You’ve heard this on ‘Eruption’ and may not have even known it, because it’s very subtle there)\r\n\r\nThis is a real fundamental building-block tool in digital audio, and if DAW makers will not include it as part of standard equipment, I will. ;)",
    Comments: "",
    Name: "PhaseNudge",
    Date: 1477785600000,
    Url: "https://www.airwindows.com/phasenudge-vst/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is TapeDelay2 but with pitch shift instead of flutter.\r\n\r\nSo I was at a a synthesizer meet-up talking with some folks and someone asked me if I could do a particular thing. I’d mentioned how my TapeDelay2, which I was about to post that very night, would let you wiggle around the speed control and you’d get crazy wobble JUST like if you were doing it on a tape deck, because of the way I ran the delay buffers. And the request was to make a plugin where the time would wobble but the pitch would not, perhaps using some pitch shifter algorithm.\r\n\r\nAnd… I did not make that thing! :D but I made this instead, and here you go!\r\n\r\nAll this is, is TapeDelay2 but instead of the flutter control, it’s got a fixed pitch shift. It’s being done in a more normal way than Glitch Shifter, but for all that it still enables some silly and extreme noises. Everything not flutter/pitch knob related, is exactly the same: all my development time went towards making the pitch shift interesting.\r\n\r\nIf you shift up, you can go towards very shrill crazy up-shifts that are right to the edge of blowing up the plugin. If you shift down, you can drop pitch down to literally nothing… and then keep going until you’re doing reverse buffer looping, which ends up (at a setting of 0) being the same pitch you started with, but backwards. Except it’s not playing the actual audio backwards, it’s cycling the algorithm backwards while the sound still plays ‘forwards’, so you get a ‘voice disguise’ effect. Sneak the setting just off the zero point, and it’s backwards low-speed, good for alien monster voices. If you include the regeneration while doing this you get a glorious mess. Also, the regeneration can be set to WAY more than just feedback, but it subtly restrains itself a bit so that you can hover around total feedback in a usable way. This combined with pitch shifting settings and the filter that comes with TapeDelay2 can give you a whole pile of strange, sorta-analogy noises without even putting more sounds in (it does require some sort of noise beyond digital black to start with, but once it’s going you’ll be able to play it like a weird instrument)\r\n\r\nAdd this to your Tape Delay arsenal. It’s not part of TapeDelay because it’s weird enough to be its own purpose (dedicated plugins for purposes is more or less my thing). Hope you like it :)",
    Comments: "",
    Name: "PitchDelay",
    Date: 1628380800000,
    Url: "https://www.airwindows.com/pitchdelay/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is my popular old special effects reverbs plugin!\r\n\r\nThis plugin is a bit of a big deal. It’s been hotly anticipated, and is one of the last two ‘old stock’ plugins (at least, out of my main list) to be brought up to date and ported to VST/Windows/Linux. The other one is Cabs, and I think Cabs isn’t really very good. I’ll put it out anyhow, but I’ve dragged my feet because it’s a pain to work on and it’s not great at ‘being a speaker cab plugin’, not truly special just weird.\r\n\r\nBut this is PocketVerbs, and PocketVerbs IS special. It’s a precursor to what I’m doing with MV, what I’ll do more of in the future… but the reason I dragged my feet on this one is, it’s cumbersome. There’s more code in it than the size of some novels, and I had to port that! It’s not even brilliant code… but it had to be done just as it was, to maintain the tone qualities PocketVerbs has. It’s huge because it has multiple reverbs to switch between, and the way I implemented that was not easy on me. I’ve honored that in the current version.\r\n\r\nYou get chambers, rooms, springs. You get a PaulStretch type effect. You get Zarathustra, which is like that but dark and distant and vast. You get a strange gating effect not present in any other plugin, just as it was: this lets you completely and totally reinvent drum sounds even on a stereo mix. It’s a dual-mono design so you get stereo localization out of the space-ified, gated, reinvented drum sounds. Or, you can try whatever other crazy tricks tickle your fancy.\r\n\r\nIt’s PocketVerbs. It’s here, it’s free, it’s yours. Go bonkers… and have fun.",
    Comments: "",
    Name: "PocketVerbs",
    Date: 1573948800000,
    Url: "https://www.airwindows.com/pocketverbs-vst/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a simpler pile of curve-style compressors with hard clipping.\r\n\r\nPodcast is the same technique as PodcastDeluxe, multiple compressors that are the precursor to curve and Recurve, but simplified: without the phase rotators, without the full-on attempt to do ‘radio broadcast’ style tricks.\r\n\r\nThis also means Podcast can have a dry/wet control, because there aren’t any phase rotations delaying things. In fact, Podcast runs no latency and can work very well as a ‘glue’ style buss compressor… so long as you don’t want ‘pumping and swelling’ effects, or sidechainy whooshes of level. That’s because Podcast is still in the curve school of compressors and quits changing levels if the input goes silent.\r\n\r\nIt also hard-clips the output, making it a kind of ‘safety compressor’: though it’s not clean like a limiter, it’ll strike a balance between dynamics processor and distortion device. You can use it on drums and things meant to be aggressively smashed, or turn it way down and use it as a clean buss comp.\r\n\r\nTreat this as another flavor of compressor from Airwindows, and see if it finds uses for you. The greater simplicity of Podcast (much like PodcastDeluxe, heavily updated from the original versions) makes it more adaptable to different purposes, while it remains simple and un-fiddly, delivering its effects with whatever intensity and blend you like. :)",
    Comments: "",
    Name: "Podcast",
    Date: 1560643200000,
    Url: "https://www.airwindows.com/podcast-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a pile of compressors (curve style) and phase rotators.\r\n\r\nPodcastDeluxe is the precursor to curve, along with its counterpart Podcast. Both of them have five curve-like compressors in series (slightly less refined), but PodcastDeluxe has five phase rotators and an ADClip-style output stage. The idea is that it would be radio station style processing. The reason it didn’t show up sooner is that it didn’t really work to my satisfaction. It’s still not perfect, but it’s different! I demonstrate it on house-type music, and on raw drums. It’s not really clean, not really dirty, not really squish-capable thanks to the curve-style compression (even five stages doesn’t give you ‘compression pumping’) but it’ll give a perhaps interesting, definitely processed-sounding effect.\r\n\r\nMaybe you’ll like it on a mix because you’re not fussy about distorting, maybe you’ll find some useful place for it elsewhere. I think it’s got a knack for high-impact drum busses without distorting them too obviously. At any rate, there’s nothing quite like it. Enjoy!",
    Comments: "",
    Name: "PodcastDeluxe",
    Date: 1559433600000,
    Url: "https://www.airwindows.com/podcastdeluxe/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is an explosive transient designer.\r\n\r\nPoint was introduced in 2007, just ahead of an amazing series of spatializers, analog modelers, and stompbox-style FX that consumed months of work. The curious thing is, Point didn’t. It’s one of those odd plugins that only required an idea: ‘what would happen if I did this?’, and an afternoon of coding. And ever after, it’s lived on as a mysterious and untameable plugin monster, secret weapon and mixer’s friend, always just as an obscure Audio Unit…\r\n\r\n…until now.\r\n\r\nYou get three controls: an input trim, the Point control, and a reaction speed. Point goes from -1.0 to 1.0 and ‘dry’ is 0.0. Reaction speed goes from 0.0 to 1.0 and there’s nothing to particularly suggest where anything should be set, so I’ll tell you now, and I’ll also tell you where NOT to set it if you know what’s good for you.\r\n\r\nFor squishing off the fronts of snaredrums to make them huge, use Point -1.0 and a reaction speed around 0.166.\r\n\r\nTo spotlight cymbal attacks while rounding the drums, use Point -1.0 and a reaction speed around 0.14.\r\n\r\nTo hype up kick drum attacks and suppress the sustain in a gatey sort of way, use a reaction speed of around 0.3 and carefully add positive Point until you have the effect you want.\r\n\r\nTo blow up the DAW and kill your ears, do that and crank Point to 1.0, then stop the transport, and then start it up again with Point still at 1.0…\r\n\r\nThat’s your warning. Point is kind of like a ZVex Fuzz Factory or some such mad hardware device: the range of settings DOES include ‘out of control’, and it’s such a simple ‘circuit’ that it does little to restrain things when you Go Too Far and operate it in a state that will explode. It won’t just do it out of nowhere, but don’t make it transition between ‘off’ and Point 1.0: even if you have the fader buried, it can still clobber you.\r\n\r\nThe reason I leave behaviors like that in there, in a plugin like Point, is that some people will want the full range of Point’s output, and will be following it with something to manage Point’s outbursts. If you’ve got it surrounded with plugins to tame it, I want you to be able to use Point settings near or at 1.0, and if you set it near that, you’ll immediately hear how intense it’s being so it won’t come as too much of a shock to discover it’s become an unstable isotope of transient destruction.\r\n\r\n:)",
    Comments: "",
    Name: "Point",
    Date: 1478390400000,
    Url: "https://www.airwindows.com/point-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a crazy overcompressor with a very exaggerated sound.\r\n\r\nWhy another compressor?\r\n\r\nYes, ‘because they all act and sound a little different’, but what’s the deal with this one in particular?\r\n\r\nPop was designed to be overstressed to get an effect like the Allen & Heath mini-limiter used on some 80s Genesis and Phil Collins songs: that huge attack, the way that little subtleties jump boldly out of the mix, the sheer squish and gnarl of it all. It wasn’t really about trying to model the specific gear so much as trying to get the effect, or more of the effect: I especially wanted the front end of sounds to burst through with enormous presence, but I also wanted to bring up little details out of the performance.\r\n\r\nPop’s a huge success at this. On some audio, I can get weird little reverb elements from the background to seem to hover up front even while loud stuff is being smashed. It’s designed to volume invert: the idea is if you’re hitting it with superloud things it can overcompensate and push the volume down extra far, letting you further exaggerate the effect.\r\n\r\nAs such, there are some sounds this just can’t do. If you try and get a huge thunderous smashed sound of it, it will just go super 80s and give you a loud attack and maybe even backwards decay, or some reinvention of the body of the sound. You have to set the level carefully to get the right sound happening, so it’s not terribly flexible: Pop is picky and you have to work it almost like it’s an instrument. It does run without latency, so in theory you could do like Phil did and track directly into it (or track into the DAW with it already present in the monitoring path) so you could modulate your singing intensity to work with it. That ought to work. Also remember a slapback echo, and to actually doubletrack!\r\n\r\nIf I can ever get the real preamp/compressor, I’ll study the heck out of it and do Pop 2. I’ll keep an eye out, as that would be really rewarding work and I could probably get closer to the real thing with that kind of reference :)",
    Comments: "",
    Name: "Pop",
    Date: 1537056000000,
    Url: "https://www.airwindows.com/pop-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Pop Filter",
    Date: 1477440000000,
    Url: "https://www.airwindows.com/pop-filter/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is for emulating power supply limitations in analog modeling.\r\n\r\nWe’re going to explore the early Desk plugins (as free VSTs), so here we’ll start off with one of the underlying principles! PowerSag models the problem of analog power supplies that can’t source enough current to drive the output of the circuit. The circuit doesn’t directly distort, but the more output it’s been making, the less is in reserve. This is part of the Desk line of plugins, but now it’s a distinct component to play with.\r\n\r\nYou get a Depth and Speed control. Dial in the effect by exaggerating Depth and then exploring with Speed: it’ll create a variety of compressey or distortey effects, but since they’re sucking energy out of the body of the sound, it’s a completely different type of distortion from saturation or clipping. Then, return Depth to zero and sneak small amounts of it back in, until the desired effect is reached. You’ll get a more tubey effect with extremely slow Speed, a big-console transistory effect with very quick Speed.\r\n\r\nThe neat thing about PowerSag is that, if you like grunge and distortion, it’s capable of adding some grind to the sound while pulling the channel back in the mix, where traditional distortion and saturation pushes sounds forward. When you balance that with normal overdrive, you can get a lot of energy and character happening without everything becoming too fatiguing and up-front. Balance is good, being able to trim the body of a sound is good: if you like sculpting mixes with distortion and saturation, this might be right up your alley :)",
    Comments: "",
    Name: "PowerSag",
    Date: 1483833600000,
    Url: "https://www.airwindows.com/powersag/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is my improved circuit-starve plugin, now with inverse effect!\r\n\r\nThis is PowerSag (my circuit-power-supply-starve plugin), but the internals are coded differently for more efficiency on modern CPUs, it gets twice as much maximum effect range (which will help if you’re using it at high sample rates) and it now has an inverse/wet control. That means that you can hear what’s being taken AWAY (which is typically a grungey, gatey effect) and fade into that if it helps you get more meat into some of your sounds.",
    Comments: "",
    Name: "PowerSag2",
    Date: 1575158400000,
    Url: "https://www.airwindows.com/powersag2/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a re-release of another old Character plugin.\r\n\r\nSo this is pretty straightforward: another Character re-issue, now free and open source and available in VST form. Woot!\r\n\r\nMight serve as a good color-adder, or fake guitar amp? Based on Precision 8 impulses, but it’s turned into very much its own thing: I think this became Holo in the Busscolors plugins. In the original form, here, you can crank up the color intensity a lot, or distort the hell out of it.",
    Comments: "",
    Name: "Precious",
    Date: 1587859200000,
    Url: "https://www.airwindows.com/precious/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "",
    Description: "is Airwindows Anti-Soothe, a strange tone intensifier and balancer.\r\n\r\nSometimes, it’s just… strange.\r\n\r\nPreponderant was created in an attempt to combine the old ResEQ concept with Soothe, in such a way that it’d give you three tightly controlled bands of emphasis (one thing Airwindows is all about is maximizing resonant sonority and intensity, not blindly removing it) and then also balance them on the fly so that all the bands would tend to be constantly active. This would bring up the high band, for instance, giving that ‘hyping of detail’ effect. In theory, it’d work.\r\n\r\nAnd maybe it does. But I don’t blame you if this one just drives you crazy and makes you mad. I had to scramble to get rid of an extra 24 dB of gain on tap for each band because when I started making the video, the plugin went insane and started blowing up: I thought I could let it throw in extra energy but I was sorely mistaken. One hasty bugfix later, we have… something? We have Preponderant. There is thankfully nothing else like it anywhere :D\r\n\r\nTurn up Resonance and Wet to hear what it’s focussing on. Use the Narrow, Medium and Wide controls to dial in frequency bands: each is twice as wide as the previous, so using Narrow will give you the tightest focus on a frequency range. Set ’em to areas in your sound (middle is the midrange). Preponderant is named because it can be tuned between areas of preponderant energy, and areas of power or areas of no energy, and it’ll compensate to give about the same output for each band you select, no matter how much energy is ‘supposed’ to be there. It’ll boost quietness, suppress intense resonant areas that are much louder than they should be, or you can simply tune to a different frequency range and avoid the resonant stuff.\r\n\r\nAlso, it’s not a compressor. In no sense is it turning down louder stuff, or up quieter stuff. If you put it on drums you’ll scream in horror (unless you know exactly what you’re doing and have other drums to fill in a more continuous sonic flow). It’s rapidly balancing the bands while keeping the dynamics just as they are. Might be good on spot mics, toms or kick or something. Horrible on room mics or overall mics. Good on heavy guitar stems as it’ll retain dynamics there. It will be immediately obvious whether Preponderant is working on a track or stem.\r\n\r\nYou HAVE to pick real audio for every band, or it will just make some up. Subsonics on a skinny guitar? It’ll turn down the other bands until it thinks they balance with whatever subsonics you selected. By the same token, ice-pick zone on the same guitar? It’ll make it balance with the other bands you chose.\r\n\r\nThis will sound terrible. So, turn down the resonance until the sound is less insanely resonant. It’ll still sound terrible. Turn the dry/wet right back to dry (which will probably sound real boxy and dull by comparison).\r\n\r\nThen, feed in a little of the Preponderant, just until you start to hear it accentuate the stuff that you chose.\r\n\r\nTHERE you go.\r\n\r\nPreponderant is one of those Airwindows audio chainsaws. The final version (without the 24 dB boosts) is intentionally made to just cut and restrict stuff, explicitly so if you don’t know what you’re doing you’ll hate it and not use it. This is intentional as you could hurt your mix, your ears, and your sensibilities.\r\n\r\nOn the other hand, if you know how to dial in areas of power and focus and find three things about a sound that are useful in the fray of a mix, I’m not sure I’ve ever made a plugin that will so aggressively give you what you ask it for. (and if that’s not enough, a few of you will want to use the original version. I’m not going to encourage this, and you must choose: that or the real, volume-cutting version. They install with the same name and the same ID so you can’t have both, and shouldn’t have the boosty version, ever. But if you want to blow up your mix, then YES, you may. The rest of you, and me, please work with the one that doesn’t boost?)",
    Comments: "",
    Name: "preponderant",
    Url: "https://www.airwindows.com/preponderant/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Pressure",
    Date: 1168128000000,
    Url: "https://www.airwindows.com/pressure/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Pressure2",
    Date: 1286064000000,
    Url: "https://www.airwindows.com/pressure2/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "",
    Comments: "",
    Name: "Pressure3",
    Date: 1418342400000,
    Url: "https://www.airwindows.com/pressure3/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a compressor adjustable between vari-mu and ‘new york’ peak-retaining behaviors.\r\n\r\nWhat can I even say? This is the golden ear favorite. Version 4 brings new functionality that has never existed in Pressure before: the stereo version (default for VST, and the Audio Unit that doesn’t specifically say ‘Mono’) uses a special linked mode based on diade bridges in hardware compressors. That’s not to say that it is ‘analog modeling’ because it isn’t. From the beginning, Pressure has been made out of a lucky algorithm with a particular organic, pleasing quality, and part of Pressure4 is knowing what to strip down, how to simplify that algorithm until it lets all the music through.\r\n\r\nBut then, when you explore the way Pressure4 squishes up depending on how hard you drive it, and then start listening to the textures of different speed control settings and what that does, and then begin exploring what the ‘µ-iness’ control does… and it turns out that each one of those things gives specific and controllable shapings of the sound, but in ways very difficult to put into words, yet you can learn what it does and make the plugin do what you intend even if it’s tough to articulate exactly what you’re going for…\r\n\r\nThis is why we turn to odd little tools like this. The whole character of Pressure4 can change with tiny adjustments of the controls. It can do about twelve wholly distinct things when set up right, but they’re all inherent in that one curiously simple, but chaotically strange, algorithm. And now the linked stereo form of Pressure does all that with a naturalness and fluidity never before seen with this plugin.",
    Comments: "",
    Name: "Pressure4",
    Date: 1473292800000,
    Url: "https://www.airwindows.com/pressure4/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "expands Pressure4 with after-boost and built-in ClipOnly2.\r\n\r\nThis plugin builds on 2017’s Pressure4 in numerous ways. I made it for my own use: I was mixing an album in Console7 that had to follow a previous album I’d mixed on an analog board, and I needed extensive 2-buss management and the ability to deliver a final output and control mix density across a lot of parameters measured by a meter I’ve invented (which isn’t available, it’s just for my personal use and doesn’t work properly in a releasable way). And now Pressure5 is out and you can have it!\r\n\r\nPressure is a compressor with some unusual controls: there’s a ‘mewiness’ control that manages the way the ratio engages. You can dial in the intensity with which it ‘dynamic inverts’ and super-squishes the audio. It’s got a very wide speed range that can go real fast for a dense, distorted sort of sound, and it’s now got an additional control that nobody else has: ‘PawClaw’. This manages the way ‘mewiness’ handles transients, the intent being to extra-squish the spiky transients on ‘Paw’ or to let them through more on ‘Claw’. It’s very subtle, but it’s there to tailor the way stuff hits the compression in an entirely unique way. I don’t think anything else has a ‘PawClaw’ control, but now you have one :)\r\n\r\nThe other part of Pressure5 is the output stage: Pressure5’s output control has the capacity to boost, into a built-in ClipOnly2. So it’s got that chunky, non-edgy hard clipping drive, that works at all sample rates, as part of the plugin. I intend Pressure5 to be used as a final buss comp/clip stage letting you dial in whatever you need, and then just taking the output and dithering it and being done. If you don’t want to go direct to final release, pad the output control so you’re not clipping anymore and ClipOnly2 will bypass itself like it’s not even there, serving as only a safety clipper.",
    Comments: "",
    Name: "Pressure5",
    Date: 1640390400000,
    Url: "https://www.airwindows.com/pressure5/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "progress-report",
    Url: "https://www.airwindows.com/progress-report/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "progress-report-some-more",
    Url: "https://www.airwindows.com/progress-report-some-more/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a brightness experiment.\r\n\r\nA while back, I got reminded of this plugin. Someone said, ‘you haven’t put this out, when are you going to?’ and I said ‘Oh, that’s right, I haven’t’.\r\n\r\nSo here you go. It’s a bit weird. Normally ‘Purest’ plugins are ultra-simple. This isn’t quite like that and I don’t remember why. It’s sort of like Air or Energy, an air-band boost or cut, but it’s also got a limiting factor where it’ll refuse to boost past a certain intensity of treble. In that way, it’s like Acceleration. Except it’s not exactly Acceleration, not exactly a slew clipper… heck, it’s not even like Air or Energy. It’s a little like a de-esser in Bizarro World? Working oppositely?\r\n\r\nAnyway, it’s yours if you want it. There are many odd ways to do EQ code. This is clearly one of them, and it seems to be not exactly like anything else I’ve done, and it sure does crank up the extreme air band if you want that. And it’s got that clamping factor to cap it (though similarly to Acceleration, it’ll give you trouble trying to hear what’s being done). I guess check it out, and if your ears are amazing WAY up in the ultra-treble, and you also like the sound of it, you’ll probably be able to hear the action of the limiter just fine.\r\n\r\nMe, I’m more interested in dark reverbs and deeper spaces and bass, so this was never my pet plugin: maybe it can be yours :)",
    Comments: "",
    Name: "PurestAir",
    Date: 1569715200000,
    Url: "https://www.airwindows.com/purestair-vst/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is the most free from coloration Console system. This is also a historical reference of how I was posting on New Year's, 2018, after the death of my Mom, so I've left the post in its entirety. As follows:\r\n\r\nSo. I think things may improve around here, as far as me reviewing the Console5 launch, and making sense of what the heck went on there. If I can, I’ll also give it the lushness of that original release while preventing the DC offset stuff… and there’s something to do with the AU/VST identities that needs examining. After this, ToVinyl is up for January, and I’ve got some useful variations on Console 5, and PurestDrive is February (I’m entertaining notions of a C5Drive that steals the technique from PurestDrive instead of doing the original C5 slew thing. It would be just ‘darker’, not encode/decode)\r\n\r\nThe reason I think I can get into all this (after probably being sick for a while) is I’ve got some closure. I’ve just returned from visiting family and attending my Mom’s funeral. It was very nice: I sat with my Dad, who built us the Heathkit television we played Atari 2600 on, and with the brother who helped me get the VST ports together, a year ago. I cooked my Dad a big hot curry, and I think he liked it. Got to be with my siblings, and there was some healing, and I’m pretty sure after I rest up I’ll be able to think again.\r\n\r\nGood thing some plugins are so simple you don’t even have to think! :) (in other words, if THESE are broken just shoot me ;) )\r\n\r\nPurestConsole is like the dynamics encode/decode out of Console5, without the slew mojo that’s so tricky to get right. It’s a good candidate for the first plugin(s) to be open sourced when I hit the $800/mo. open source goal, along with templates I work from, and my process so people can reproduce my work. In fact I can reveal the guts of the PurestConsole source, without the Airwindows denormalization code and noise shaping to floating point. Here’s the simplest purest form of Console.\r\n\r\nChannels: inputSample = sin(inputSample);\r\nBuss: inputSample = asin(inputSample);\r\n\r\nWithout all the mojo and tone changing, that is IT. Anyone building a DAW can include this (channels post fader! And do not allow the asin() to see values that’ll break it, you can get NaN out of math functions if you break them!).\r\n\r\nPurestConsole has special properties, besides ‘being in the Console5 family so you can swap them out freely with any Console5 variation and get correct results’. Since the amplitude encode/decode is most important to the effect, stripping it down to THIS simple has an interesting property I demonstrate in the video.\r\n\r\nIf you have only one channel feeding the buss, you get EXACTLY that channel without the slightest alteration. PurestConsole cancels out completely and doesn’t touch the sound AT ALL unless multiple channels are mixing. If any one source becomes the only feed to the buss, it goes to perfect bit-identical fidelity to the extent of what the math function can provide. No previous version of Console can say that because I was trying to use simpler math to save CPU, but PurestConsole (and all Console5) goes for the math functions which include the complementary sin() and asin() or ‘arcsine’. That’s what arcsine is for. :)\r\n\r\nYou can use PurestConsole in its capacity for ‘expanding’ verbs, delays, and EQs. If there’s no change, it’ll cancel out to bit-identical. Then if you’re doing stuff, it’ll kick in. EQ changes are most easily heard in high-Q filters, and it’ll make filters more effective at a given dB boost/cut. Note that you can easily clip PurestConsoleBuss with boosts and peaks, but that might sound OK to you so don’t fear it.\r\n\r\nI hope this simpler one is good right out of the gate, because I AM going to be sick for a while, but it might be something else to chew on, and if it is in fact so simple as to be flawless, you can work with this one right away :)",
    Comments: "",
    Name: "PurestConsole",
    Date: 1514764800000,
    Url: "https://www.airwindows.com/purestconsole/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is the anti-aliasing version of PurestConsole, with special brightness and clarity!\r\n\r\nMeet PurestConsole2.\r\n\r\nThis serves a special purpose in modern Airwindows Console mixes. I’ve got Console7, which gives you all the glue you could want, creates solidity and the sense of an analog mixing desk (all the more if you use Console7Cascade, which I’m avoiding for this track and this video). But Console7 does its aliasing prevention by rolling off right at 20k, which helps the sense of glue but steps on some of the super-sparkly treble you sometimes get in modern mixes. It’s set up to do it really gracefully, but some have noticed a diminishing of super-glittery highs.\r\n\r\nPurestConsole was always the ‘colorless, transparent’ take on any Console system, but with PurestConsole2 we’re stepping just a bit away from that, to serve as a complement to Console7. PurestConsole2 does the same ‘filter the super-highs to prevent aliasing’ thing that Console7 does. BUT, not quite the same. It starts higher (run it at 44 or 48k and it won’t even attempt to filter) to extend to 30k before filtering. But then it filters SHARPER… to roll off quicker. And in doing that, it gives you a presence peak beyond hearing. Not a huge one, but it’s there: it’s also on the end of the system, not (like Console7) going into the system. So PurestConsole2 gives you a sprinkling of treble glitter even while it rolls off the aliasing-prone frequencies more effectively.\r\n\r\nThe end result is the same kind of analog warmth… except it’s a cool, airy clarity that resolves absolutely EVERYTHING. If you’re shooting for super-clear this is the one you want. And since Console mixes can drive submixes which then use another Console system to sum the stems to the 2-buss… you can sneak it in on your harmony vocal beds, or orchestral stems, or you could use Console7 for everything and then sum only the stems to the 2-buss using PurestConsole2. Instead of mixing and matching within the summing busses, design your mix structure by figuring out where you want analog fatness and slam, and where you want clarity and resolution.",
    Comments: "",
    Name: "PurestConsole2",
    Date: 1614470400000,
    Url: "https://www.airwindows.com/purestconsole2/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is the magic saturation plugin of subtlety and French House tone.\r\n\r\nThe funny thing about PurestDrive is that I didn’t expect much from it at all.\r\n\r\nThis plugin (now coming to VST and open source) was simply an experiment. I’d been making complicated plugins with things like anti-aliasing, just a lot of calculation going on, and wasn’t sure I was getting what I wanted. It didn’t seem to be furthering the ‘Airwindows sound’. And I’d hit on an interesting tactic, noise shaping for the floating point buss. It seemed to me that you might be able to get a good sound by the opposite to complication: simplifying things, running the math at the highest possible resolution (in this case, long double precision, which is 80 bits on Intel and possibly 106 bits on PPC, which Airwindows still supports)\r\n\r\nThe saturation algorithm was going to be sin(), which is the smoothest saturation curve you can have. Then I thought it’d be good to get a little more sophisticated than that because I had quite a few plugins based on sin(), so I did this:\r\n\r\ninputSample = sin(inputSample);\r\napply = (fabs(previousSample + inputSample) / 2.0) * intensity;\r\ninputSample = (drySample * (1.0 – apply)) + (inputSample * apply);\r\n\r\nThat’s it. That’s what makes PurestDrive (apart from some code supporting it, which is up and documented on GitHub as part of making it open source).\r\n\r\nWhat it does is this: it keeps the previous dry sample around, and ‘apply’ will be the combination of that and the saturated one. This makes apply be large if we’re on a low frequency wave, and if we’re doing a really bright transient apply might be zero. Intensity is how we include the slider control (0 to 1) and can also make apply be lower. Then, we’re adding the sin() effect, but ONLY relating to apply: we saturate the body of the sound, but as things get brighter or lower volume, we’re dynamically doing a dry/wet control at audio frequencies, so PurestDrive only throws saturation on dense solid material: airy highs, subtleties, get through more easily. As a side-effect, if our input gets super hot we can end up subtracting a little dry from the saturated inputSample.\r\n\r\nWhat PurestDrive did… was take off and become hugely popular. I didn’t expect that, it was simply an experiment in tone purity and I didn’t think anyone would notice. I knew the little tweak with ‘apply’ sounded good, but I figured the whole thing was so subtle that it wasn’t going to set the world on fire. Yet, PurestDrive developed incredibly dedicated fans, using it all over their mixes, swearing by its tone.\r\n\r\nAnd now, it’s a free and open source plugin, AU and Mac and PC VST. Remember it’s designed to not be a big obvious coat of paint over everything: because it’s using the dry sample so intensely, it cleans up and stays out of the way. But because it’s modulating between saturation and dry at audio frequencies based on both the current and previous sample, there’s a lot of textural effect on the sound. I never got so much mileage out of so few lines of code. Hope you like it. :)",
    Comments: "",
    Name: "PurestDrive",
    Date: 1517702400000,
    Url: "https://www.airwindows.com/purestdrive-vst/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is optimized Airwindows echo with exactly four evenly spaced taps on tap.\r\n\r\nPurestEcho gives you four echoes, sample-averaged to deliver extremely precise timing, each with its own tap. That means you can use it as a delay line and set up discrete echoes which then stop completely: no feedback, only a series of trailing echoes which then get out of the way and don’t mud up your mix. Or you can use it for just a single slapback (use the last, for the longest delay time). Or, you can set up odd effects like increasing volume slapbacks, or use of only certain taps.\r\n\r\nOr, you can get a tone that’s part of the 90s: turn all the delay taps on full and then set the delay time really short. You’ll find there’s a tightly controlled pipe-like honk that emphasizes a musical tone… sort of a Dalek-like robot-like thing… and you can play this using the slider. Note: this slider is NOT smoothed, because it’s smashing the buffer anyway, but more importantly if you’re programming in a bassline using this effect you’d need it to abruptly switch frequencies. So think of it as something you’d play via control automation, not so much through live entry on the slider.\r\n\r\nBetween that and the ability to throw a big rich echo that fakes ‘feedback’ but then gets right out of the way, I think PurestEcho will find its way into peoples’ workflows. I hope you like it :)",
    Comments: "",
    Name: "PurestEcho",
    Date: 1497139200000,
    Url: "https://www.airwindows.com/purestecho/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is just like PurestGain, but for LONG fades.\r\n\r\nThis is a plugin for one person.\r\n\r\nOkay, it’s a plugin that EXISTS because one person asked the right thing at the right time. A mastering engineer emailed me and said, PurestGain is great, it’s just perfect, everything I need except… when I do fades with it, there’s a discontinuity when I go from 0.001 volume on the Slow Fade, to 0. It cuts out abruptly, and that’s a problem. Can you help?\r\n\r\nI can!\r\n\r\nThing is, PurestGain is designed so you can whack that control around aggressively. It doesn’t mute instantly, but you can kill a track real fast in a mix, gracefully, without zipper noise. PurestGain is correct for some users. If you needed to have a control on some kind of USB controller, like a NanoKontrol or something (say you’re doing an automation pass) you might well need to trim the overall gain with the top slider, and then assign the hardware controller to the bottom slider and automate. It’ll smooth out the incoming MIDI data and the result will be dynamic and aggressive, will feel like you’re yanking faders around on a real board. That’s the design intent for the ballistics of PurestGain.\r\n\r\nPurestFade is totally different. If you are at full crank and snap it instantly to zero, you’ll get an automated fade of about eight seconds or so. It gets subtler and subtler the quieter you go, until at the point of silence you literally can’t mess up the fade: it will always smooth out the last tiny bit.\r\n\r\nIf you drag it slower than ten seconds you can do any slowness of fade you want, smooth as you like. And, an interesting thing is that if you need a faster fade than the automatic one (of just going fully to zero in an instant and letting the plugin do it) what you can do is manually drag it down faster than that. It’ll chase your fade speed, which means if you’re doing an unnaturally fast fade it’ll be trying to smooth you out a bit but it will let you do that. I think it’s the ultimate smoothed fade.\r\n\r\nAnd, in mixing (since it’s still PurestGain at heart) I think you can decide which you prefer, and if you’ve got a style then you know which one is right for you. Probably won’t be both. If you need to do abrupt, dynamic things it’s PurestGain you’ll want… but if your fader moves are generally more subtle, invisible, then you’re probably going to always want PurestFade for everything. (The top control will still give you more rapid moves if you need them)\r\n\r\nWhich one is the right one for you? Most likely you already know which one you’ll be using, just from the descriptions.",
    Comments: "",
    Name: "PurestFade",
    Date: 1588464000000,
    Url: "https://www.airwindows.com/purestfade/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "is a high-res noise shaped gain, with smoothed fader.\r\n\r\nMarking the 200th plugin in Airwindows’ ‘AU’ category (not perfectly accurate, but yay anyhow) is PurestGain, in VST-enabled form!\r\n\r\nWhat’s to explain? It’s a gain utility. :D\r\n\r\nNo, seriously, that’s what it is. Here’s why some folks are a fan of this plugin anyway, even though every DAW has this as a utility plugin, plus the DAW faders built in.\r\n\r\nFirstly, gain is processing. When you apply even a simple gain change, it expands the word length of your digital audio out to arbitrary size. PurestGain comes from a set of plugins I did to experiment with the extremes of digital audio accuracy. You might think digital audio is automatically accurate, but that’s far from the truth. We hear degradation in the resolution domain as flatness, cardboardy-ness, and it’s cumulative. I don’t think anybody can hear the difference between PurestGain and a DAW utility gain plugin, when just a single plugin is in the signal path… but it’s cumulative.\r\n\r\nAlso, you can’t be sure that a gain plugin is truly minimalist. If a plugin takes in floating-point audio of great quietness, and multiplies it by 1.0… that’s a math operation that can force the result into the same floating-point ‘level of resolution’ as the 1.0. Floating-point is treacherous, and the damage done is still very subtle but again is cumulative.\r\n\r\nPurestGain takes the input audio and does the gain processing at ‘long double’ resolution. It then noise shapes the result back into the DAW audio buss, whether that’s a 32 bit buss for normal VST and AU, or a double-precision 64 bit VST buss, if available. The result is an ultra-high-precision gain plugin that refuses to lose any audio quality. It’s the plugin equivalent of using switched attenuators with precision resistors in a mastering console, rather than potentiometers.\r\n\r\nThere’s one more trick PurestGain has up its sleeve: a second control especially for fades. The trouble with DAW faders is that they must serve two masters: they’ve got to adjust smoothly and avoid zipper noise (crackling while you move the control, most clearly audible if you get a low-frequency sine wave going and then manipulate the control) but they’ve also got to snap instantly to a position if asked. The second slider in PurestGain runs in series with the dB gain control, but it functions very differently. One way to resist zipper noise is to have the gain smoothly ramp between volume settings, and that second control is designed for human-performed gain rides. Map the fader on a control surface to it, do your active mixing, and PurestGain will smooth every fader motion until it’s as fluid as any real-world analog console: try it with sinewaves and see how flawless the result can be.\r\n\r\nThat’s a surprising amount to say about a gain plugin, but that’s Airwindows for you :)",
    Comments: "",
    Name: "PurestGain",
    Date: 1479254400000,
    Url: "https://www.airwindows.com/purestgain-vst/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is an open-sounding compressor with bass bloom.\r\n\r\nPurestSquish is a compressor, with its own sound. In the video I compare it to Pressure4, Logical4, and SurgeTide, and also show how it can be used in conjunction with SurgeTide (a real ‘sleeper’ plugin not easily understood) to produce amazingly transparent dynamics control.\r\n\r\nI also spend some time torturing it with sine sweeps, showing how Pressure and Logical are more like ‘analog emulations’ and produce harmonics, while PurestSquish instead does a weird thing when you turn off and on signal generators. So if you’re looking for ways to say ‘this is broken forever!’ watch those parts of the video :)\r\n\r\nIf this doesn’t worry you, PurestSquish also has a bass bloom control that lets you pass subsonics or bass notes through uncompressed, to taste. If it does worry you, chalk it up to PurestSquish running simultaneous two-and-three-sample-interleaved compressors, much like Capacitor runs two-and-three-sample-interleaved filters, and use one of the other compressors I’ve put out, perhaps one of the three also featured in this video.",
    Comments: "",
    Name: "PurestSquish",
    Date: 1551571200000,
    Url: "https://www.airwindows.com/purestsquish-vst/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a subtle tone shaper and warmth adder.\r\n\r\nPurestWarm is a little bit like PurestDrive (anxiously awaited by quite a few people) but not quite as sophisticated… however, in its simplicity is part of its usefulness. It applies an Airwindows softest-possible-saturation effect (like what you can get out of Density, or Channel) but it’s polarized: you pick which side of the waveform the saturation applies to. For the other half of the waveform, it’ll pass through the exact bits that came in. So it’s half a plugin: I’m not sure there’s ever been anything quite like that, on one half of the wave a full Airwindows (noise shaped to floating point) ultra-quality saturation, and on the other half of the wave, ‘bypass’ and literal bit-identical pass-through. I made sure even the noise shaping wasn’t applying for the ‘bypass’ half.\r\n\r\nThe result is this: waveforms that need a little sweetening, can have that texture (not frequency or EQ, texture) subtly added to the track, in a way that utterly and totally maintains the integrity of the signal. In some ways this is ‘purer’ than any of the other Purest line, since by its nature it’s true bypass for literally half the time. It’s also one of the minimal ones, with just a switch: there’s no way to get the perfect integration of bypass and effected halves (they switch off like a push-pull power amp) otherwise, and it produces an obvious enough effect but one that’s harmonious and doesn’t get in the way. In some circumstances it hints at being like a ‘bass optimizer’ since it’ll push some second harmonic by its nature. You’ll probably find that for any given sound (especially an electric bass guitar) there’ll be one polarity that’s clearly better: I think for basses where the string swings near the pickup and produces extra voltage on that side of the wave, PurestWarm will saturate that side of the wave really well and it’ll give you an ideal bass tone with no extra fiddling or processing required.",
    Comments: "",
    Name: "PurestWarm",
    Date: 1511654400000,
    Url: "https://www.airwindows.com/purestwarm-vst/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "adds dual dry/wet controls for each side of the waveform.\r\n\r\nPurestWarm2 is PurestWarm, but better. I was asked for a version of PurestWarm with a dry/wet (which would make it even more subtle and gentle) and then I thought, why not TWO dry/wets, one for either side of the waveform? That way you could massage both the positive and negative sides of the wave (seen briefly in the video: I wiggle the cursor around to show which side’s being reined in by which slider) to taste, or both at once.\r\n\r\nAnd so that’s what PurestWarm2 is (plus, ultrasonic filtering added for use at high sample rates). It’s also using a performance tweak I hit on, defining the filter coefficients when the plugin’s instantiated, rather than once every sample buffer. Not a complicated thing, but for anyone who made use of PurestWarm, this should count as a nice upgrade. And it’s a direct request: since I was asked for PurestWarm but with a dry/wet, how could I not?",
    Comments: "",
    Name: "PurestWarm2",
    Date: 1650240000000,
    Url: "https://www.airwindows.com/purestwarm2/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is an old school compressor for high definition transients. Adds no fatness, just energy.\r\n\r\nPyewacket is a strange beast. It’s inspired by how much I love the 60s/70s recordings out of London’s Olympic Studios, which had and used Pye compressors on many of my favorite classic and prog-rock records. Once you recognize the sound, nothing else will do: the musical event is delineated with hallucinatory intensity.\r\n\r\nMind you, for ten or twenty THOUSAND dollars it had damn well better hallucinate musical events on command: these are not compressors normal people can have, not anymore.\r\n\r\nHowever, I’m ‘chris from airwindows’, so for me it’s not just a matter of mimicking the faceplate or even the specific behaviors of the device. I want something more original, that can get the essence of that electrifying sound. I might not play like a musical hero, but I want a compressor that can deliver that crackling voltage. And as I was listening to examples of a homebrew Pye replica, it suddenly hit me: I know how to make a compressor cut back just the body of the sound, leaving that energy and transient definition. I can also bring in the ‘brickwall filter’ behavior the Pyes have, as needed. And I have a whole life of devoted music listening off classic vinyl records to guide me. I can get the sound.\r\n\r\nIntroducing Pyewacket. Pyewacket is my compressor familiar. It may or may not have dark magic, but what it does have (demonstrated at the end of my video) is a response and tonality like no compressor you’ve heard. I can contrast it with Pressure4, and have done: where a more ’round and thick’ comp like Pressure4 brings stuff forward, Pyewacket’s soundstage sits back and the energy comes forward, from the highest treble to deep hard-kicking bass, producing a ‘retro’ sound where peak energy absolutely blows away the more thick, tubby RMS loudness. This is a compressor for a new era. We’ve been doing ‘loud and fat’ for decades now, and the loudness war is on its last legs, with automatic playback gain controls rendering it useless. You don’t have to be composing retro to use this. The only requirement is energy and information: whether as a 2-buss comp or to condition individual tracks, Pyewacket brings focus and intensity, and an incredibly clear and articulate attack transient where most compressors mangle and transform the attack beyond recognition.\r\n\r\nAnd if you try really hard, yes you can kinda-sorta make it do that ‘Hole In My Shoe’ gratituous pumping thing. Rest assured, though: you probably shouldn’t.\r\n\r\nOther people can’t do this plugin. You can’t market it in normal ways because it doesn’t do ‘BIG PHAT THICK PHWOAARRR’, you don’t switch it in and have all the music leap forward and become much bigger and in fact it might make things smaller, and an inexperienced kid with softsynths and Apple Loops might think something was amiss and be extremely uninspired. And anyone trying to tie it to the twenty thousand dollar unattainable hardware compressor would be compelled to model every little detail of the very complex and twitchy hardware unit, and that would cause that plugin to be overprocessed and it’d lose most of what made it special.\r\n\r\nBut Pyewacket is important, because it’s the sort of thing I can do when supported by Patreon. I don’t have to restrict myself to what’s going to sell to blind market forces. I can make it the essence of how Airwindows would do this sound, and I have done. As such, it is free in AU, Mac and PC VST form. If I’m poorer than you (go check on the Patreon and see, I get paid monthly) then it might be worth your while to chip in a buck a month (or more if you like).\r\n\r\nI really, really, really like this one, and maybe you will too :)",
    Comments: "",
    Name: "Pyewacket",
    Date: 1477180800000,
    Url: "https://www.airwindows.com/pyewacket/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "rawglitters-redux",
    Url: "https://www.airwindows.com/rawglitters-redux/"
  },
  {
    Category: "Dithers",
    Name: "RawTimbers",
    Description: "is just the quantization from Dither Me Timbers… and the opposite, as a brightener.\r\n\r\nSo, Dither Me Timbers isn’t really a dither. I keep saying that even though it’s got noise shaping and gets a sound that stands up to comparison with Not Just Another Dither: it’s different, but good.\r\n\r\nThis is ‘essence of Dither Me Timbers’, no noise shaping… and the inverse, just because I can.\r\n\r\nAll RawTimbers does, is choose between truncating to fixed point upwards or downwards, from any given point. Like Dither Me Timbers, it runs one sample of latency in order to do this choosing. Unlike Dither Me Timbers, it has an opposite plugin: RawGlitters. I see this stuff as ‘level-dependent EQ’ and always thought it seemed useful to dull and soften the quietest sounds and let loud noises seem brighter: it didn’t make sense to me to brighten the quietest sounds and let loud noises be duller (might be worth a rethink of this, but I’ve been sick this week and can only do so much: this is after all vanguard stuff and I need to get it right, or try harder to get it right)\r\n\r\nAnyhow, this is RawTimbers and RawGlitters. It does the exact same thing as Ditherbox ‘Truncation, 24 bit’ except it’s an EQ: RawTimbers softens the audio and rolls off highs (and actually generates more and different bright quantization noise, so it’s not like it makes the noise floor itself seem darker), and RawGlitters brightens the hell out of the audio and sort of merges it with the noise floor. Both drastically change the nature and quality of the truncation noise floor: they’re undithered, and each is super different from plain old truncation. I discovered making the video that if you hit RawGlitters first and run that into RawTimbers, you get a third sound that’s interesting and pretty good… and if you run RawTimbers into RawGlitters, it’s pretty terrible but I’m not your mom, go ahead if you want. :)\r\n\r\nIn listening to these, remember the intense EQ effect (as in, cut treble up to 90% relative to mids and bass) happens ONLY at a fixed loudness that is barely over the 24 bit noise floor. If you play around with BitShiftGain you can check it out more easily, as I did on the video. All the effects only touch the noise floor area. These don’t have noise shaping so they can’t change overs or add excess energy: they’re ‘safe’ in that they’re predictable behavior, though you might have an interesting time exploring what they do to the tone.\r\n\r\nThey can be used for 16 bit CD-making as seen in the video: BitShiftGain -8 bits, RawTimbers/Glitters, BitShiftGain +8 bits gives you exact CD dithering.\r\n\r\nThey can also be used for conclusive double blind testing: since this is strictly two opposite ways of quantizing audio to the same fixed point output, you can make matching files for use in ABX testers. Use BitShiftGain to dial in the output bit depth you want, save all the results at 24 bit if you like (the quantizations will be the same) and listen for the brightening and difference in atmosphere of RawGlitters. On an ABX tester you’ll be able to audition Timbers and Glitters all you like, and compare to X, which will be one of the two. You can use quiet sounds if you like, to help hear what’s happening: it’s totally legit to tailor audio that will reveal this stuff more easily, as it’s the threshold you’re interested in. I think it shows class to use volume levels where you could still stand the loudness of normal audio and not blow your speakers, even if the actual test audio is way quieter (cranking it up will help, and you don’t have to blow your eardrums up as part of the comparison process, just keep it sane enough that the loud bits wouldn’t be damaging)\r\n\r\nIf you do this and correctly predict X for whatever bit depth you’re attempting, you’ve conclusively shown that you can always hear stuff at that bit depth and nobody can contradict you. I’m pretty sure literally everybody will hear 12 bit even over YouTube on whatever casual listening stuff you’re using. I also think 14 bit is relatively trivial, and 16 bit is doable given the right example audio and some care and attention (this is a contentious claim, but I still think so). I don’t think anybody can actually do this with full-on 24 bit audio… but if you did, over whatever fantastic (and very treble-accurate, and very low-noise) mastering rig you used, it would be conclusive proof of it.\r\n\r\nAnd you still ought to dither, even to 24 bit, ‘cos it’s the principle of the thing. But this is something different to do, and it’s a legitimate choice. I suspect there’ll be a lot of electronic musicians who take a liking to RawGlitters just because it airs up the digital noise floor in an interesting way…"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "RawTimbers (and RawGlitters)",
    Date: 1545523200000,
    Url: "https://www.airwindows.com/rawtimbers/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "rawtimbers-redux",
    Url: "https://www.airwindows.com/rawtimbers-redux/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a special buss compressor with no threshold point.\r\n\r\nSometimes the most amazing things are the simplest.\r\n\r\nRecurve is ONE line of code (per channel) plus a bit of implementation. It’s a compressor, and this ‘preview’ look at it is a lot like when Spiral came out: this is Recurve as a ‘black box’, set up for maximum explosiveness and impressiveness. (I’ve got more elegant plugins in the works and this will become a core technique due to its effectiveness and simplicity of coding, so this is the introduction to what the algorithm does)\r\n\r\nRecurve works on principles similar to Spiral. It’s using a very high resolution sine calculation to affect the sound, and scales part of itself relative to the loudness of the sample it’s on. It also enjoys similar principles of ‘no sharp transitions, ever, for internal calculations’. In a clipper that means the rate of curvature doesn’t abruptly change, which is the principle behind Spiral. For Recurve, this is applied to the threshold of a compression and whether gain is being turned up or down.\r\n\r\nIf the signal is super-quiet, the gain doesn’t change. Recurve takes moments of space and ambience between loud sounds, and preserves their character. It doesn’t swoop up in volume: if you need sidechainy pumping, you have to use something else.\r\n\r\nIf the signal is medium, the gain gets turned up until it hits its max (with Recurve, it’ll exactly double the gain, which is BitShiftGain at its smallest increment. Exactly 6dB of very clean gain boosting things. This isn’t at a threshold: it’s at the most intense spot of a sine curve, so as a waveform passes through this zone it’ll increment the gain smoothly and without any transition points.\r\n\r\nIf the signal is loud enough, it pushes this curve back through zero to its most negative point, and the sine function delivers a -1, for the maximum gain-cut, which is also scaled by how loud the sample is. So Recurve can cut back an over-loud transient FAST. In fact everything it does is really fast because the lack of transition points and the gradual nature of this sine-triggering lets it react very efficiently without edginess. It also lets through sonority and projection but cuts dull and muted stuff, kind of like Pyewacket, but without Pyewacket’s inherent pointyness.\r\n\r\nSounds complicated? Just listen to stuff and switch it on. This is a preview in extra-dramatic form of an algorithm that’s going to find many uses in Airwindows plugins. It’s the compression equivalent of Spiral for saturation, and it could be adapted in many ways.\r\n\r\nThe way you get today is a buss-comp or limiter form, running in true (linked) stereo. Mix into it and Recurve will gracefully eat up whatever you send it, even if you push it real hard. There’s a built-in 6dB of very clean boost to show off what it can do, and there’s a clipper on the output in case you get carried away and want to slam it so hard that transient attacks might poke out. And because of Recurve’s curve-and-recurve gain adjustment style, you’ll get none of the usual compression pumping and breathing: it’s just plain different. I hope you like it. There will be more :)",
    Comments: "",
    Name: "Recurve",
    Date: 1555804800000,
    Url: "https://www.airwindows.com/recurve/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Regarding Patreon",
    Date: 1512777600000,
    Url: "https://www.airwindows.com/regarding-patreon/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "puts the guts back into overloudenated audio!\r\n\r\nIs your audio too flat?\r\n\r\nHere’s the thing. We have an endless series of saturations, console models, tape emulations, iron oxide slams, smooth compressors, naughty compressors, magneto-dynamic infundibulators… as music-mongers, it seems we spend all our time distorting, squishing and flattening.\r\n\r\nAnd this is normal, because if you don’t do some of that it’s easy to come up with a very empty, stark, vanilla recording. Most of the genres we know and love feature some form of distortion or dynamics compression, or more likely both.\r\n\r\nBut what about when we get carried away, and the result is about as impactful as Muzak? (which is fine in its place, but we crave a lot more)\r\n\r\nUntil recently it didn’t matter because louder was always ‘better’… but now, Replay Gain and a million automatic gain functions have rendered the loudness our enemy. If you squish just a little too much you can end up flat, boring AND turned down by the gain control. So what do we do to get more impact and mojo WITHOUT splatting our mixes against a digital wall?\r\n\r\nRemap is finally out to answer that. You might not need it: if you’ve got great self-control or always squish too little, it might not help you. But for an awful lot of people, Remap can be the ‘hail mary’ mix de-squisher, after the fact. And since it works the way it does, it can find uses of other sorts, for it’s a pretty simple algorithm.\r\n\r\nRemap does a fairly decent job of taking a full scale sine wave and transmogrifying it into a softened triangle wave, if you set it just right. It heightens the pointiness, the peak energy, the aura of things. If you don’t exaggerate it, it stays nice and clean. If you do exaggerate it, you get a fierce crunchy punchiness but that’s what the dry/wet control is for. It produces peaks above 0dB on fullscale content, so be warned: it’s basically putting the dynamics back. Especially with soft-clipped stuff, Remap can reshape your original wave back again… or provide expansion and power where none existed.\r\n\r\nPretty much anywhere your mix feels flat and congested, Remap can help (so long as your gain staging is toward the loud side). Turn it up until it’s too much then back it off. Below 0.5 will always be very subtle: above 0.5, things might get funky in a hurry. You might find a huge fierce bass drum manifesting itself, or guitars growing fangs and attitude, or vocals enunciating more clearly and passionately, belting harder. It depends on what’s already in your mix: used correctly, Remap can bring more of it out. There will be most likely ONE focus point for the Remap slider, for any given mix or sound within its range. Find that and then use output level and dry/wet to balance that super-real signal with however much of the source you want. This one REALLY likes dry/wet to give you natural results, the focal point might be a real gritty tonality. No gloss, just guts and kick and attitude.",
    Comments: "",
    Name: "Remap",
    Date: 1560038400000,
    Url: "https://www.airwindows.com/remap/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a bank of mostly midrange resonances.\r\n\r\nSometimes I’m just contrarian, and sometimes it’s for a reason.\r\n\r\nI keep getting asked to make a ‘Soothe’ plugin. I get that: it’s hyped, it lets you make stuff louder, my plugins are free and open source, why not etc etc. I understand why I’m getting asked to do that.\r\n\r\nHowever, I’m here to explain why this week’s Airwindows plugin is an OPPOSITE ‘Soothe’, and why you would want to do the opposite of Soothe (a sophisticated and very busy plugin that scans for resonant peaks and whacks just the frequencies that are resonating the hardest).\r\n\r\nResEQ is literally the farthest from that you can get. It’s a bit like the filter banks on an old Polymoog. You set up frequencies (as many as eight, in parallel) and hear ONLY what those tight resonances let through. It’ll kill other sounds as much as 90 or 100 dB down, nuke them completely beyond hearing. Far from evening out the tapestry of the sound and removing frequencies that poke out, it turns the WHOLE track into just beams of narrowly defined frequency.\r\n\r\nYou can do this with light, too. I think Polaroid experimented with this. You can reconstruct a full-color image from several bands of tightly resonant color, because of how the eye interprets them. The same is true for the ear. Given enough distinct bands of super-resonant audio you get a kind of facsimile of the original sound, and it begins to sound like an insane, ultra-resonant fullrange sound, just completely weirded out. (if you try to put this on a mix buss you have only yourself to blame)\r\n\r\nSo… WHY?!?\r\n\r\nBecause if you do that on a track in your mix, all the other tracks can speak clearly past the weird ResEQ one. It remains super-audible but completely gets out of the way. This is not really what you’d put on a front-and-center track, a lead vocal, an orchestra stem. Nope. You’d put this on the third set of guitar overdubs (the thickener!), on that background synth, on the horn buried in the back of the mix, on that extra drums overdub that’s a little wacky. ResEQ goes on the colorful elements, the stuff that should have BIG COLOR but not get in the way. How do you get some quirky element or extra thing to jump way out without getting in the way? Set up ResEQ on it, voice it so it’s covering the range you want. Tweak it until it has the right vibe (you can isolate or remove really narrow sound characteristics, truly transform a recording with it) and then sit it back or let it jump up front and slap peoples’ ears. Either way, that track will make its presence known, bigtime, whether it’s quiet or loud. It’s all about the mids, high or low: if you need super high or super low, you’ll be using something else. Mids are where mojo lives.\r\n\r\nIt’s got a dry/wet control, too. So you COULD use it sort of like a normal EQ. But why would you do that when you can reconstruct an ear-grabbing caricature of the sound, with tons of character and mojo, AND have that sound sit easily in the mix making space for everything else?",
    Comments: "",
    Name: "ResEQ",
    Date: 1557014400000,
    Url: "https://www.airwindows.com/reseq-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is simplified and tuned MatrixVerb, adjusting everything for each optimum verb size.\r\n\r\nIn some ways I think this is even better, but I know people like to fiddle with knobs, so MatrixVerb had to go first. And yet…\r\n\r\nReverb is my new go-to reverb. Why? Because it takes all the interactivity of MatrixVerb and boils it down to ONE slider, and a dry/wet. It does all the same things: centered sounds spread, there’s a subtle detune as if sound was passing through temperature differences in the room, high frequency stuff falls away accurate to the sound of real air in reference concrete cavern recordings: it IS MatrixVerb, in every detail. Except it’s adapting all of that, on the fly, to best suit whatever size of reverb space you seek. Think in terms of ‘bigness’ and just go: if things are too cavernous, get smaller, if they’re not reverberant enough get bigger. Reverb always does its best for whatever size of space you’re making. If you need to get crazier, MatrixVerb still exists. You’ll get results faster with Reverb… so much so, that I’ve replaced MV in the Airwindows Starter Kit with Reverb. That’s how much I like it: it’s the space-maker I would show newcomers first, the most approachable way to audio ambience.\r\n\r\n(followup: subsequent reverbs like Verbity, Galactic and Chamber employed a feedforward configuration and got a richer sound. Reverb and Matrixverb turn out to be the 'plugin-style' reverb options, which is not to say they can't be useful too)",
    Comments: "",
    Name: "Reverb",
    Date: 1610236800000,
    Url: "https://www.airwindows.com/reverb/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "RickenbackerBass",
    Date: 1659571200000,
    Url: "https://www.airwindows.com/rickenbackerbass/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "Righteous",
    Date: 1395878400000,
    Url: "https://www.airwindows.com/righteous/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "Righteous 2",
    Date: 1427155200000,
    Url: "https://www.airwindows.com/righteous2/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "",
    Comments: "",
    Name: "Righteous3",
    Date: 1433030400000,
    Url: "https://www.airwindows.com/righteous3/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a final output stage for targeting dynamic range.\r\n\r\nThis one’s pretty eagerly awaited by some… all the more since I’ve incorporated all the latest tech, such as the changes in denormalization and noise shaping to the floating point buss (it uses the ‘more warmth, ease and depth’ version when set to 32 bit) and even the Spiral algorithm in its overdrive section.\r\n\r\nBut you might not end up using that noise shaping, because Righteous4 has NotJustAnotherDither (and the CD version) built right into it, along with an optimized ADClip and code from an old strange experiment I did called ShortBuss. Yep! Righteous4 is your all-purpose final output stage, which handles final clipping, saturating and even the dither to let you output 24 or 16 bit fixed point in the purest, most optimized way. It doesn’t even return to the DAW buss between these stages: everything is ‘long double’, so you put in your mix audio (from conservative levels to peaks that would clip a normal output file: it’ll soak up the peaks) and you get out literally the data you burn to the CD or upload to Bandcamp etc. as hi-res HD audio.\r\n\r\nBut it’s a little more complicated than that. Bear with me. Righteous4 will clog up and audibly distort under some circumstances, and it’s for a reason that might interest you.\r\n\r\nMany music services these days (possibly all?) incorporate RMS loudness targets. They’ll turn up your stuff and limit it (maybe) which is awful but outside your control… but if you’re doing the loudness wars thing, they will turn you DOWN. And all your efforts to make loud masters will be wasted. Apple will cut stuff back to around -17 LUFS. YouTube goes for -13 LUFS. Spotify and Tidal do -14 LUFS. That’s loudness units short of full scale (similar to how many dB down from clipping your average (root-mean-square, or RMS) loudness is). Loudness war folks often push to -8 LUFS or even more, and that means YouTube will turn you down (and Apple will turn you WAY DOWN) to fit in with their playlists.\r\n\r\nHere’s the thing: you can have all the peak energy you want (caveat: Apple doesn’t want your bright treble peaking over -0.4 LUFS in any case, so don’t go too bonkers with brightness when aiming for Apple music services). Peak is not RMS. In fact, music sounds great with lots of peak energy pervading it: this is one of the reasons old vinyl records sounded so great! I’ve measured RMS loudness behavior like -27 LUFS off old hit records. The energy pouring out of those old grooves is due to the way peaks and compression were handled: it was a different kind of limiting, handled differently, back then. Peak energy makes the music sound better. Righteous4 handles peak energy by clipping it with ADClip, so you can throw more at it in safety. This is not the audible clipping I’m talking about (at least, not if you’re talking percussive peaks etc. which are pretty cleanly clipped, especially by ADClip)\r\n\r\nThe audible clipping happens when you push your LUFS levels beyond the target. As you mix and set levels, you simply have to listen for whether Righteous4 sounds big and open, or whether it’s getting a little intense, or whether it’s obviously being pushed too far and breaking up (especially on bass, and mix fullness).\r\n\r\nWhat’s happening is, the saturation from the Spiral algorithm is being fed into ShortBuss, which fills the energy back into the mix in the form of second harmonic. This is what gives Righteous4 its tone and extra warmth, and it’s a nice fullness and bloom UNLESS you’re slamming it (it’s calibrated using the slider, where you select your target). If you are too loud, you’ll hear it. Your peak energy will still be going up to the real clipping threshold, just as before, but your RMS energy will tell you how loud you should go.\r\n\r\nIt’s that simple. You don’t have to use it to hit LUFS targets, but since it’s got Spiral in there it also broadens the heck out of the ‘target range’ so you can pick whatever seems right to you, and it’ll guide you. If you find you need to push louder, you can set Righteous4 for a higher target, and that will clean it right up and let you push harder into the internal ADClip. If you’re looking for big dynamic range, you can set Righteous4’s target lower, or simply set it for Apple or YouTube loudnesses and then just don’t push into it very hard: this will give you dynamics, but the replay-gain services will be kinder to the result because it’s somewhat saturated and compressed, just in a very gentle way if you’re hitting it that gently. And of course the output’s optimized for whatever bit depth you’ve selected, so you can directly target CD or 24/96 or ’32 bit file to send to further mastering’ if you still need to mix into something more organic than a hard, brittle digital mix buss with all the charm of math :)",
    Comments: "",
    Name: "Righteous4",
    Date: 1527984000000,
    Url: "https://www.airwindows.com/righteous4/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Sable",
    Date: 1222992000000,
    Url: "https://www.airwindows.com/sable/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "the only sample delay with negative delay, allowing you to nudge things slightly ahead of the beat, as well as behind! It’s free from Airwindows, and also includes sub-sample interpolation so you can nudge things even more subtly.",
    Comments: "",
    Name: "SampleDelay",
    Date: 1172966400000,
    Url: "https://www.airwindows.com/sampledelay/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Scalpel",
    Date: 1184976000000,
    Url: "https://www.airwindows.com/scalpel/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is an asymmetrical waveshaper for peak manipulating.\r\n\r\nHere’s a really basic building block for ya. The key word here is asymmetrical.\r\n\r\nShape is a simple, often subtle, little plugin for either pulling out, or squishing in, parts of the waveform. It’s based on the same basic technology as Console: complementary sin() and asin() functions. But in Shape, you’re picking which you want to apply, and you’re offsetting things so you can hit one side of the waveform more than the other.\r\n\r\nWorks like this. The Shape control determines what you’re doing. In the middle (0.5) you’re not doing anything. Increase it to 1.0 and you are stretching out the peaks of the waveform. Turn it down to 0.0 and you’re squishing the peaks of the waveform: like a soft-saturation but no boost, just restricting the waveform and making it distorted. The control scales all this so if you’re not cranking it out, you have lots of headroom and very gentle effects.\r\n\r\nThe Offset control interacts with this by shifting things from one side to the other: 0.5 is no offset, 0.0 is negative and 1.0 is positive (in my sound editor in the video, this is the top half of the waveform as positive). The effect of this, especially if you’ve not cranked out the Shape control, is to make the Shape control do its thing to only one side of the wave. You shouldn’t automatically crank this one out either: you can, for nasty waveshaping tricks, but the power of Shape is in how transparently it can manage the positive and negative swings of your waveform.\r\n\r\nAlso, when we’re reshaping the waveform so asymmetrically, that’s built-in even harmonics: this is a recipe for warmth. It’s like a turbo version of my PurestWarm plugins but even smoother, or like a variation of my SingleEndedTriode plugin. Use it gracefully (not cranking out the controls all the way) and everything you do will be tonal adjustments of great purity and subtlety, which is why it can be a bit hard to hear its effect when the controls are very near the middle.\r\n\r\nSo the trick is to know what way you’re using it. If you’re doing sound design and you’re trying to get a sound to swing fully in both directions, you can either pick the part that you think is swinging too far (pos or neg), set the offset to favor that, and pull back that side by setting Shape lower than halfway (cutting BACK the side you’re focussing on), or you can pick the side that doesn’t go far enough, set the offset to favor it, and turn Shape UP to bring that side’s peaks up to match the other side.\r\n\r\nOr if you’re working on a bass and want it to be warmer, you can just choose between more Shape (more of a triangle-ey result out of a sine input) or less Shape (more of a squared result out of a sine input) and then lean the Offset one way or the other to get the warmth you want (not all the way, or it won’t be as smooth).\r\n\r\nOr, you can take your bass that you want to be purer, and try to identify whether it’s too triangle-ey or too square-ey, and then apply Shape to nudge it more in the direction of a pure sine-ey tone. It’s a waveshaper, so you can stack them up to get a VERY soft square or a soft-pointed triangle out of any sine-bass you start with, or put ’em back to the sine shape, or lean the offset one way or another, all very transparently.\r\n\r\nI don’t know how clear all this is, because you probably don’t have this function laid out in this way, and it’s too subtle for normal plugin makers to be able to sell you. Any commercial plugin where turning it up doesn’t equal ‘more’ plus you can’t always hear what it does, is in big trouble. But I’m Patreon-supported so I don’t have to follow those rules, so I can give you Shape even if most people don’t get a big charge out of it and throw their money :)\r\n\r\nAnd so I have. Enjoy Shape. My hope is that it serves its useful purpose for those who need to tweak exactly this, as transparently as possible. And if you didn’t need to… maybe you just didn’t know it was a thing. It is now! :)",
    Comments: "",
    Name: "Shape",
    Date: 1656892800000,
    Url: "https://www.airwindows.com/shape/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Shelves",
    Date: 1195430400000,
    Url: "https://www.airwindows.com/shelves/"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "ShortBuss",
    Date: 1285545600000,
    Url: "https://www.airwindows.com/shortbuss/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is like Sidepass, but a lowpass on the side channel. Treble-centerer.\r\n\r\nThere are some nice things about Patreon-era Airwindows. Not the money: that sucks, though I think I just about have basic survival taken care of as long as I don’t eat much and nothing happens to my car :)\r\n\r\nNo, the cool thing is this: I can put out tools that have NOTHING to do with a plugin marketplace. If even one person finds the plugin useful, I can put it out. SideDull is kind of like that. I was asked, ‘since Sidepass is great, can we have a lowpass version?’. And I went ‘huhh? why would anyone want to narrow just top end, or center mids and up while not touching lows?’\r\n\r\nThe answer is of course ‘why not?’ and ‘if you are sure you won’t be doing that, don’t install this plugin’ :)\r\n\r\nI don’t need to explain what SideDull does: it’s the same as Sidepass but in reverse, narrowing/mono-ing highs and down. I WOULD like to explain something about its role in a DAW user’s toolkit, though. I’m seeing this increasing churn in the plugin industry, a frenzy of new stuff and new requirements and DRM systems and dongles and such. It’s like a fulltime job to keep up with your recording system. My own pet fear is updating something only to find that I’ve hosed myself and everything’s now broken.\r\n\r\nThat’s why SideDull, and every other plugin, is built on a time-capsule 10.6.8 system and the VST’s built on a time-capsule isolated-from-the-internet virtual Windows 7. I’m using the simplest possible interfaces (some vendors, like Blue Cat, have taken pains to implement the generic interface super well, and can even skin it attractively) and not touching stuff that causes forced obsolescence, which I think is really bad news for us all.\r\n\r\nSo, the free AU/VST plugins (and the Kagi AUs before them) can be like your favorite screwdriver: you get to have the best and simplest audio tools that do NOT break. That also means that if you can only afford legacy computers (or just like being frugal and spending your money on Rickenbackers, as I long to do) you aren’t out in the cold… ever. I’m dedicating the rest of my life to putting tools in the hands of kids and dinosaurs alike, and following it up with my open source initiative. And the longer I do live, the more of it I get to do: but if I keel over tomorrow, all the plugs will still work and I will have had a good day and slept with a clear conscience :)",
    Comments: "",
    Name: "SideDull",
    Date: 1491264000000,
    Url: "https://www.airwindows.com/sidedull/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a simple utility plugin, a highpass on the side channel. Mono-maker.\r\n\r\nThis one was by request. It’s not very fancy, but I hope it’ll come in handy. If it is, spread the word!\r\n\r\nI’ve got a plugin called ToVinyl, which is rather fancy. It’s the Airwindows attempt at a vinyl mastering suite: elliptical EQ, highpass on the mid to help get levels, an acceleration limiter to tame sudden energy spikes without really cutting brightness otherwise, and even a groove wear modeler that was the precursor to Airwindows Aura. That’s one of the Kagi for-pay plugins, number 9 on the list when I reach $800 a month and begin doing those.\r\n\r\nBut, I got asked for something much simpler. A highpass filter on just the side channel, and one that would go up the full range from subs to highs, so at full crank it’d be purely mono.\r\n\r\nWell, I’ve altered that a teeny bit: Sidepass is aware of sample rates, so if you’re at a 0.1 setting at 44.1K, it ought to be doing the same thing at 0.1 at 96K. But apart from that, here’s a little utility for AU, Mac and PC VST that just highpasses the side, from DC to 22K. It’s an Airwindows filter, same as what’s in Density and Drive as a highpass, and it ought to do nicely.",
    Comments: "",
    Name: "Sidepass",
    Date: 1486512000000,
    Url: "https://www.airwindows.com/sidepass/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "replaces the sound with raw noise sculpted to match its dynamics.\r\n\r\nI thought I’d let people play with the precursor to Texturize, which so far has not made it into the Patreon era of Airwindows… meet Silhouette!\r\n\r\nSilhouette was created for playing finished music through and seeing if you could still make out a beat. It was an anti-loudness-war plugin, made long ago to illustrate that point. And it replaces the whole sound with a blast of noise which retains the dynamics of the underlying music… if there is any. Dynamics, that is.\r\n\r\nTexturize was this, tone-shaped to match the sound of the underlying music (mostly going a lot more bassy). And Texturize proved a lot of fun for people, some of whom asked, can we have that but brighter? So be careful what you wish for. Silhouette now comes with the same wet/dry control as Texturize, so you can use it as a subliminal noise generator. But it’s ALL bright, so you have to turn it down further in order for it to ‘hide’ behind the audio. And that means it can’t really do what Texturize does: it’ll stick out.\r\n\r\nBut in sticking out, the subliminals it will generate are VERY different from what Texturize does. I’d describe it as hype and energy and tension. Be careful not to turn it up too high: it’ll be incredibly obvious anytime you do. Some sounds, some mixes, will just never work with it.\r\n\r\nBut isn’t it fun sometimes to not care about that and just try out something wild to see what it does? Silhouette finds its use in that space. I hope you like it.",
    Comments: "",
    Name: "Silhouette",
    Date: 1647734400000,
    Url: "https://www.airwindows.com/silhouette-vst/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is unusual analog modeling effects.\r\n\r\nEverybody knows that analog modeling means distortion. (well… noise and distortion. And EQ, and overprocessing… but mostly distortion.)\r\n\r\nHowever, it’s always the same sorts of distortion: soft or hard clipping generating harmonics. Here, have three totally different kinds!\r\n\r\nSingle Ended Triode does three things, and you don’t have to do them all at once (in fact you probably don’t want to).\r\n\r\nThe actual Single Ended Triode control is a special gain-staged saturation that’s asymmetrical. It’s a little like PurestWarm, only not, because rather than put a soft saturation on one-half of the waveform, it offsets everything and goes into the saturation with a bias voltage. Then it subtracts a related voltage, and scales the whole thing up or down based on how much distortion you’re looking to get. (shown in the source code, of course)\r\n\r\nThat means you have a ‘second harmonic generating’ asymmetrical distortion, but with NO crossover point. Unlike PurestWarm, SET is a continuous waveshaper just like using a real triode tube single-ended, and while you can crank it up to get obvious effects, its real magic is in using just a tiny amount to warm and sweeten things. It’s perhaps not ideal for the 2-buss because you’d simply be removing some of your mix energy on one half of the wave, but if the sweetening is what you need it might be worth it, because it’s a super clean way to do that. It’s only the asymmetrical distortion, and the interesting thing about that is: know how Spiral smooths the transition between sides of the sin() waveshaping, and that made it sound better? With Single Ended Triode, it’s capable of doing that transition when cranked way up… but used subtly, the entire audio output sits within one sin() calculation, and you don’t see a transition in the first place. This is literally why high end SET stereo rigs perform well for musicality and fluidness of sound: they have obvious faults but they’re great at avoiding crossover issues between push/pull sides of the circuit because they don’t have two sides to the circuit. It’s single-ended, and so is this algorithm unless you’re wildly distorting the heck out of it.\r\n\r\nCrossover issues, you say?\r\n\r\nWhy yes. Meet Class AB (and Class B) Distortion.\r\n\r\nThis is the opposite. It adds nonlinearities as the signal passes through zero. It’s a STRONG tone coloring and certainly not for the 2-buss or nice mellow music: the Class B is downright nasty and you should be careful about using it if you have delicate tweeters, as it’ll create extremely harsh treble grit (though, interestingly, without Gibb effect converter clipping: that is when reconstruction of the wave makes treble go past what bass can do, when it clips the converter on highs. This is a kind that could blow your tweeters at super high volumes but does not clip the converter doing it)\r\n\r\nThe Class AB transitions through the middle of the wave in a more curvy way, causing the effect to lean towards the gritty upper-mids. Where might you find this kind of noise? Certainly not in any acoustic instrument. But… listen to certain old nasty tube Hammond organ sounds. Certain big guitar amps. Past a certain wattage, nearly every old tube amp is run push-pull (same with many transistor amps). They run hot, their calibrations drift… and one of the things that can happen to an amp is problems with that transition zone. Use Class B distortion and you’ll get very much the sound of purely transistor amps breaking down and going cold and gritty. Use Class AB (because with tubes, you’re probably going through output transformers and speakers that don’t have hi-fi tweeters) and you’ll get a bit of that gnarly rock-and-roll grit. There are expensive boutique stompboxes that can do this. Now you have it in a free, open-source plugin: open source devs, take note, because this one’s not often talked about or modeled. Most attention to amplifier crossover distortion has come from High End audiophile circles, and those guys have been getting mocked for decades. This stuff will not affect a frequency response plot. In certain systems of measurement you won’t even see it at all, and for years people have done naive measurement and claimed ‘it’s perfect, no further work needed!’ and the audiophiles were tearing their hair out, swearing that certain amps sounded like butt even if they measured ‘perfect’.\r\n\r\nLittle did they know that in 2018, musicians would be turning to those same horrible distortions for creative purposes, sweetening with Single Ended Triode, adding grit and attitude with Class AB distortion, and being able to put a layer of really brittle edgy brightness onto the occasional sound with Class B.\r\n\r\nPS: some of you are having a lot of fun modeling existing hardware using elaborate combinations of Airwindows plugins. Just saying, these three sources of really specific coloration are exactly what you need to do that. Be careful of Class B as a little goes a long way (in fact, I would pick either Class AB or Class B but not both: study the circuit topology and only use AB and B where push/pull circuits actually exist, and remember they’re designed not to cause this kind of problem. AB contains overlap that stops the transition point from being exactly in the middle. Apply wisely.)",
    Comments: "",
    Name: "Single Ended Triode",
    Date: 1529798400000,
    Url: "https://www.airwindows.com/single-ended-triode-vst/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "SlamminKit",
    Date: 1415404800000,
    Url: "https://www.airwindows.com/slamminkit/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a slew clipper, which darkens treble in an unusual way.\r\n\r\nSlew is the very first plugin I made for Airwindows (or at least the first one listed on this website).\r\n\r\nSlew is a simple plugin to let you do slew clipping. You can use it to morph and transform percussive sounds or hats, you can give a unique and interesting ‘grind’ to instruments or glue stuff together into a retro, old-school-sampler, grungey grind, or you can use it on things like reverb sends to really amp up the sense of distant loud sound in a room or space.",
    Comments: "",
    Name: "Slew",
    Date: 1470873600000,
    Url: "https://www.airwindows.com/slew-2/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "works like a de-esser or acceleration limiter: controls extreme highs.\r\n\r\nSometimes I just get lucky :)\r\n\r\nThis plugin is just the anti-aliasing technology I was experimenting with in 2010, applied to Slew, my simple slew clipper. I thought it was going to make the slightly grungy Slew smoother (Slew is a clipper, and can be expected to have clipper-like qualities). That anti-aliasing code was a bit odd. It’s possible I made a mistake somewhere.\r\n\r\nIf so, I’m keeping it, and now what I invented is out for VST also, and free to all.\r\n\r\nSlew2 doesn’t act anything like Slew. What it does, is it puts a particular behavior on the extreme highs. Set to an intermediate value, it’s an acceleration limiter. Cranked all the way up… well, check out the video. It behaves like one of the nodes in Average (also coming to VST) with a 100% cancellation, but the point of total cancellation is also the Nyquist frequency. Slew2 produces a very natural-sounding brickwall filter exactly at that frequency, with the response falling off faster and faster until it’s totally gone when you hit the Nyquist limit (digital sampling theory: at 44.1K (CD quality) it is 22.05K where the treble cuts off).\r\n\r\nPeople are using this for de-essers, and it’s pretty much ideal for any sound that must not be overwhelming in the super highs. The peculiar character of the rolloff means it’s suitable for almost anything because it won’t affect lower treble, and the fact that it’s really a clipper means you can use the slider to set a threshold where, the harder you push Slew2, the more it’ll refuse to let more brightness through. I’ve not tried using it as an acceleration limiter on a mastering lathe, but it could probably do that: which also means if you’re going for classic analog tone, you can just toss this on the 2-buss and use just enough to take excess brightness away. Slew2 is one of the ‘secret weapon’ plugins I was specifically asked to port to VST, and I’m happy to bring it to you all.",
    Comments: "",
    Name: "Slew2",
    Date: 1475625600000,
    Url: "https://www.airwindows.com/slew2-2/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a new approach to slew clipping meant for a more analog-like darkening effect.\r\n\r\nA Chris’s work is never done! Or at least it’s not, when it comes to refining basic tonal building blocks that apply to many plugins. It’s just recently that I updated Capacitor with an analog behavior found (quite strikingly) in certain real-world capacitors. I’m at it again.\r\n\r\nThis makes a third Slew plugin, and every one is strikingly different. Slew (original) darkens radically and makes a grungy, clipped tone (it’s in Channel, too, very subtly). Slew2, though there are some similarities in code, acts wildly different: it produces an intense rolloff that is only right up at the Nyquist frequency, and is an elegant anti-glare solution, but barely has a tone at all.\r\n\r\nSlew3 uses ideas from Acceleration and DeBess to produce a slew clipping that’s actually reading information beyond what the samples provide: it’s like it reconstructs the wave a bit and is most effective where you’d get intersample peaks. It’s NOT an EQ: it has very striking dynamic qualities. It’s not a pure ‘glare cutter’ like Slew2, either: there’s a limit to how much it will darken. But what it’s all about is producing an analog top-end on your digital content.\r\n\r\nThis is an experimental plugin. In development, some of my audio caused it to freak out, and it took extra time to get it to behave (I suppose I could also put out the freak-out version but for now let’s stay safe, OK?). It’s not quite linear or predictable (neither is real analog) and though I feel like it might have some very serious mojo to bring, I’m also interested in whether it dies given certain kinds of audio. I’m pretty sure I have it tamed to where it won’t do anything crazy, but is it really the silver bullet? I guess we’ll find out together.",
    Comments: "",
    Name: "Slew3",
    Date: 1598745600000,
    Url: "https://www.airwindows.com/slew3/",
    Category: "Clipping"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a mix check plugin that shows you only the extreme highs.\r\n\r\nBy request, here’s my mix monitoring tools, for VST and Audio Unit, Mac and PC! Please remember, these like Guitar Conditioner are control-less plugins so you don’t operate them by opening their windows: they’re either on or off, which probably is shown in your DAW mixer window already.\r\n\r\nSlewOnly gives you what it says on the tin: only the difference between samples, expressed as a sample. This produces a super-bright sound with zero latency and absolutely no pre-ring or post-ring. You can do two poles of this filtering: just add another SlewOnly. But, as is, this will give you an incredibly clear and transparent window on the ultra-highs, so you can dial in subtleties in the treble. Beware: don’t switch right back to the normal sound or it’ll sound incredibly dull. Rest your ears for a moment before resuming work.\r\n\r\nSubsOnly does the same thing for subsonic bass. It sounds a little like a house party from an adjacent house. You can tweak sub-bass elements and really hear how they’re balancing against each other, and if you’re packing too much into the subs you’ll hear that as well. Get things thumping properly through SubsOnly and it should translate well to all manner of bassbins and subwoofers.\r\n\r\nLastly, these are calibrated (in SlewOnly quite literally: pink noise will be about the same amplitude with or without it, though the tone will be way different) so that you can switch them in and out, and expect roughly the same loudnesses. It’s okay if SubsOnly is louder for fullbodied bass: with that, it’s not so much about level-matching, it’s about getting your sound (at whatever desired loudness) and then having the bass still make sense through SubsOnly. If you’re madly overloading it, there won’t be groove, just a lot of thunder and noise, at elevated levels. These go on at the end of your master buss, so you can hear what your 2-buss chain did to the sound. Especially if you try and go for ‘commercially loud’ volumes, sanity checking with these tools can be a real silver bullet.",
    Comments: "",
    Name: "SlewOnly",
    Date: 1314144000000,
    Url: "https://www.airwindows.com/slewonly/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "SlewOnly / SubsOnly",
    Date: 1472428800000,
    Url: "https://www.airwindows.com/slewonly-subsonly/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "SM57 Mod",
    Date: 1404864000000,
    Url: "https://www.airwindows.com/sm57-mod/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "can tame pointy sounds or make drums explode.\r\n\r\nHere’s one of the classic Airwindows secret weapons, up to date and VST and free (yes, Patreon blah blah, you know the drill). It can be subtle or incredibly aggressive, and it’s named Smooth.\r\n\r\nYou can use it on things like spikey acoustic guitars, overly edgy mics, anywhere the treble is just getting obnoxious: it’s as good as ToVinyl or Acceleration for that but is more of a clipper than a slew limiter. In that role it’s like buttering the highs up just a bit, and you can set it carefully to just snip off the stray edges super-transparently. Used right, Smooth is better than anything at dialing back individual instruments’ edginess without hurting the tone.\r\n\r\nYou can also crank on large amounts of Smooth on sources like drums, to produce a huge explosive effect that’s comparable to OneCornerClip: this’ll produce obvious distortions on tonal sources (which might be fine for all I know) but on drums and percussion it sort of blends with and thickens the drum sound. It’ll bring out mids and lows, and at extreme settings it’ll go into a ‘dynamic inversion’ thing that’s like hyper-distortion.\r\n\r\nYou get that, an output level, and dry/wet: with the range of possible adjustments, this ought to count as another ‘indispensable plugin’ for more than a few of you. Smooth is really approachable if you remember that, like my Acceleration limiter, it shouldn’t sound like you’re using anything if you use it subtly. You can always pull back Smooth until it sounds like it isn’t doing anything, even on the 2-buss if you like. Treat that and ‘smooth smash’ as separate uses and you should be good: in the one case you’re not supposed to hear it removing anything except by comparison, and in the other case you’re laughing and watching the world burn.\r\n\r\nAs one does, these days :)",
    Comments: "",
    Name: "Smooth",
    Date: 1555200000000,
    Url: "https://www.airwindows.com/smooth-vst/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "",
    Comments: "",
    Name: "Snares",
    Date: 1187827200000,
    Url: "https://www.airwindows.com/snares/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "snowball-madness",
    Url: "https://www.airwindows.com/snowball-madness/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a gate that can mute hiss and smooth sample tails.\r\n\r\nHi! Today’s Airwindows tool is for sample makers (though you could use in in a mix if you really wanted to, or abuse it for special effects). It’s called SoftGate.\r\n\r\nThe purpose of SoftGate is this: you can set it so it’ll take the noise floor of a recording that you want to turn to samples (or multisamples), and fade it into darkness. You can set it to do this quickly, or quite slowly. This will clean up the noise floor of your multisample instruments and let you sustain things for longer, whatever the source recording quality is: if it’s real noisy and all your samples fade into a bunch of ugly noise, tell SoftGate to fade more slowly (lower on the slider) and allow that to kick in as the sound fades away into what’s supposed to be silence.\r\n\r\nOr, if it’s a good effect but you don’t need to produce that much gating, use the bottom fader to bring in the raw signal again and balance that with the processed one, to get the right kind of fade.\r\n\r\nThe Audio Unit comes in SoftGate and SoftGateMono, because it’s inherently a linked stereo plugin (so stereo image doesn’t wander as it fades). You can use those on mono tracks in VST, but in AU you’re not supposed to run a stereo plugin on a mono source… so SoftGateMono exists to cover non-stereo tracks. If you use it on a stereo track it’ll gate Left and Right separately, so be warned. Also, SoftGateMono is technically ‘N to N’, like many of my AUs that aren’t stereo or stereo linked, so like many of my AUs you can also use it on quad, 5.1 or 7.1 tracks (did you know you could do that? Have fun, surround mixers).",
    Comments: "",
    Name: "SoftGate",
    Date: 1566691200000,
    Url: "https://www.airwindows.com/softgate-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "",
    Comments: "",
    Name: "Space",
    Date: 1383523200000,
    Url: "https://www.airwindows.com/space/"
  },
  {
    Use: "",
    Type: "Tape +",
    Description: "",
    Comments: "",
    Name: "Space Odyssey",
    Date: 1182729600000,
    Url: "https://www.airwindows.com/space-odyssey/"
  },
  {
    Use: "",
    Type: "Tape +",
    Description: "",
    Comments: "",
    Name: "SpacedOut",
    Date: 1206662400000,
    Url: "https://www.airwindows.com/spacedout/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "spatialize-dither-redux-and-one-more-thing",
    Url: "https://www.airwindows.com/spatialize-dither-redux-and-one-more-thing/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a high-performance clarity and accuracy dither.\r\n\r\nSpatialize is one of my high-performance boutique dithers. Though I think my Naturalize beats it, that’s a preference: I like digital sound to sound organic and real, and I like ambience and foggy distance and other things Naturalize is great at emphasizing.\r\n\r\nSpatialize is also good at reverb depths and softness, but what it excels at is focus.\r\n\r\nThis modified dither algorithm has opinions about what ought to be randomized. Any normal dither (especially a technically correct TPDF-based one, such as PaulDither, TapeDither or NodeDither that can encompass either) has no preferences about what samples it gets. It will apply noise regardless, with perfect impartiality.\r\n\r\nSpatialize (which I’ve also termed Contingent Dither, early in its development) isn’t like that. It says, ‘hey, this sample is exactly on a quantization value. No way am I going to mess that up, it’s staying right where it is!’. Or, it says ‘this sample is exactly between two quantization values. If I rapidly flip between adjacent values I can try to get the DAC to produce output between them. What could go wrong?’. Or, it says ‘this sample is none of the above, let’s bring in some randomness and apply dither like some normal plugin that isn’t crazy, would do’.\r\n\r\nOr all of the above, blended…\r\n\r\nThat’s how Spatialize works. These are pretty bold things to try to do, especially the attempt to balance between two quantization values: that’s not really a reasonable thing to try, even when blended with random noise. And it pays something of a price: while Spatialize is quiet in its noise generation even without resorting to noise shaping, its behavior down around the noise floor isn’t perfectly well-behaved.\r\n\r\nBut that’s a trade-off, because by sacrificing this good behavior, Spatialize gets to be very sure that when samples hit perfectly on quantization boundaries, they’ll be accurately represented. And the bit-flippiness of the exactly-between behavior gives rise to a really strong highpassy effect that heightens treble energy. The result is a dither with a holographic, intense sonic reality to it: and it IS reality, because it comes out of this determination to honor the true values of the samples wherever possible. Spatialize is always prepared to abandon ‘appropriate’ noise floor behavior if it can nail down the sonic envelope with more ruthless accuracy.\r\n\r\nSo, if you’re into the hyper-real, high-definition sound of extreme clarity and accuracy, Spatialize might be your preferred Airwindows boutique dither. And, since it does it all with no noise shaping, there’s still an ease and naturalness to the resulting sound. It’s probably my own favorite apart from Naturalize, and for some things I prefer it. And, it’s free, AU and VST. :)",
    Comments: "",
    Name: "SpatializeDither",
    Date: 1481414400000,
    Url: "https://www.airwindows.com/spatializedither/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Speed-King-Izing Axis Longboards",
    Date: 1492473600000,
    Url: "https://www.airwindows.com/speed-king-izing-axis-longboards/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is the new best smoothest distortion algorithm.\r\n\r\nWhat if… the building-block sine-based saturation routine I build so many things on, which I thought was the smoothest distortion you could have, is NOT the ideal distortion?\r\n\r\nI was watching a youtube video by Brady Haran, on his ‘Numberphile’ channel. It was about the golden ratio, and it showed the little drawing you’ve maybe seen, where you take a golden rectangle, and then make a square on it and put a circle segment (like when I use sine curves for my distortions), and then make a smaller square next to it and a circle section on that which connects, and so on ad infinitum. A ‘spiral’ like a seashell, a golden ratio spiral.\r\n\r\nAnd Brady says, ‘of course this isn’t actually a spiral’ and my mind: blown.\r\n\r\nBecause of course it isn’t. It’s circle pieces butted up against each other, and only looks like it’s connected because it’s pretty flat going through those points. But the rate of curvature changes really suddenly and drastically at those points… and does it the same way, at the zero crossing of ConsoleChannel, Density, PurestDrive, PurestWarm, Channel, and lots and lots of other plugins I’ve made. It’s part of the ‘fatter, smooth’ sound of some of my distortions. Seemingly really fat and analog-sounding, but there’s a discontinuity as you go through zero, which is why it makes the audio sound obviously different.\r\n\r\nPeople do like making the audio sound different, but people HATE the sound of discontinuities. An old version of Channel where I hacked in a ‘flat’ undistorted section, got me a huge blowback of dismay and outrage until I put it back to the simple sine-based one. People are incredibly sensitive to second order discontinuities, where the output number will be 0 but the direction things are changing will suddenly be the opposite. That’s what made the old ‘New Channel’ be such a failure: the center of the wave was flat no-distortion, and then without making a visible discontinuity it would suddenly change to ‘tighter sine-based saturation curve’, both on the negative and positive sides of the wave. It would look perfectly normal but people just hated the sound. Now I know why. And now it turns out the sine based one HAS a discontinuity, at the zero crossing, right where you’d get class AB and B distortion, and it never occurred to me.\r\n\r\nAnd I can fix it, and turn the code for that part into ONE line of reinvented original code, which will be open source because I’m Patreon-supported and don’t have to stop people using my good audio code (they only have to credit me when they use it: it will be very possible to tell when they do. They don’t have to pay anything since it’s an MIT license, and they don’t have to open their own source, just publically credit that they used my Spiral code).\r\n\r\nAnd of course I did: here, have Spiral, free. You can just install this and listen to it, if the video and the post are too long. This is the proof of concept which can be used in several useful ways. There are no controls, at all. You can gain stage into it and do stuff with it and sit it on the top of every track like it was PurestDrive or Channel, or use it as a 2-buss clipping stage, where it will clip to around -1.4dB with about -0.4 intersample peak maximum (so it is Mastered For iTunes friendly, used as a final clip). It also has a ‘freak out mode’ if you massively overdrive it, and you can do that with things like uncompressed drums, and it makes noises you’ve never heard before, or when used more gently it just sounds like the ultimate analogification.\r\n\r\nI really had no idea I could do a basic saturation algorithm (which still uses long double precision sines as part of it) that was that good. It’s a considerably bigger sonic improvement than the new noise shaping technique, because what it does is on a far higher level… though of course it also is using the new noise shaping, for good measure. All the latest everything, right here.\r\n\r\nBear in mind, the original sin()-based one in Console5, PurestConsole etc. is still optimal for Console5 encode/decode because it can be lossless and has significant effect at low levels. My tape emulation stuff uses the ‘fattening’ effect of that on purpose. I can’t just go through and replace everything because all the sounds will change. I have to re-voice everything that would take advantage of the new code, and I’ll do it, and it’ll take time and effort, and probably become new versions of things so you can still have the ‘sine fatness’ versions if you want them. I don’t like taking sounds away from people, and old tones shouldn’t be removed or made inaccessible.\r\n\r\nBut what if there’s a WAY better analog-sounding distortion effect based on the way that the ‘constructed’ golden ratio seashell/spiral made of circle sections in boxes that get smaller, is NOT correct because much like the simplest sine-based overdrive, it doesn’t start with zero distortion but with the same tiny distortion the whole time (which, in joining to the opposite pole, makes a discontinuity you can’t see much like the golden ratio ‘spiral’ has discontinuities you can’t see?) …and I fixed it?\r\n\r\nTry Spiral, and I will get to work incorporating this into my library of audio plugins that I make available using my Patreon.",
    Comments: "",
    Name: "Spiral",
    Date: 1526774400000,
    Url: "https://www.airwindows.com/spiral/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is Spiral with controls including Presence. Also, a historical post presented in full as it is just after my Dad's death. Post follows:\r\n\r\nI will need to take a week to sort of meditate and settle my mind, but it was important to me to still be giving stuff to my fans and patrons etc. so I was looking around for something fairly easy to do. For instance, take Spiral and give it the ‘Density/Drive’ treatment, including things like pre and post gain and a highpass and a dry/wet. Busywork but nothing particularly innovative.\r\n\r\nI think Dad would have been proud that I stumbled across something that was kind of innovative anyhow. Now I have Spiral2. It has those controls (that people really wanted: and if you set them to unity/neutral, they bypass so you can have EXACTLY the same as Spiral itself, if you like) but something else happened…\r\n\r\nIt occurred to me, if I was blending between dry signal and the sin() function saturated signal using the signal itself as the blend factor, I was just using a sample. Well, I also knew how to store a sample, and then the next time it’d be ‘lastSample’. And what would happen if I blended between dry and the saturated one… using the PREVIOUS sample?\r\n\r\nWith low frequency stuff, pretty much nothing. But what if there was high frequency stuff? What’d happen then?\r\n\r\nTurns out, it’s a little like ‘Pyewacket’, my compressor that compresses into a ‘negative Density’ effect that lets peaks through. With that, the front of the wave is unusually pure and punchy, and there’s better articulation of sounds. With Spiral2, it lets onset transients through, especially if they’re happening suddenly out of existing silence (and bear in mind it can be only one sample of silence for it to work). It’s not a super obvious effect… but if you use Spiral to chop off peaks, and add this new effect (which I could only call Presence) then you can get quite the opposite effect: at full Presence, it sounds like everything’s being distorted but the meters show how onset transients are still getting through.\r\n\r\nIf you set it halfway, it becomes very close to peaking at exactly 0 dB. If you set it to 0 you get the original Spiral (note that it still has the ‘continuing around the sin() curve’ effect so if you over-slam it, it’ll choke and go quieter).\r\n\r\nSo, I wanted to do something nice for my peeps since everybody has been so kind and supportive. Turns out my muse thought that was the sweetest intention ever, and really came through for me. Enjoy Spiral2: you’ll find that Presence is quite a striking effect. I think in extreme cases it’s TOO much air, but that’s why it’s on a slider, which is really just a crossfader between the two ‘circuits’, normal and with the one sample delay on the ‘sense’ circuit.\r\n\r\nSee ya soon, and I hope you like Spiral2. If you would have dropped $50 on this without a moment’s hesitation once you hear what it can do by trying it, please do that using the Patreon. I’m looking to keep expanding and be more ambitious, if that’s OK. It’s more fun being ambitious with a budget, and food and shelter and stuff :)",
    Comments: "",
    Name: "Spiral2",
    Date: 1532217600000,
    Url: "https://www.airwindows.com/spiral2/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a psychoacoustic stereo processor.\r\n\r\nPeople get really excited sometimes, so here’s a failure :)\r\n\r\nSrsly is meant to do what a Hughes SRS processor does. That’s an obscure stereo widener actually made by Howard “Spruce Goose” Hughes’ company. I tackled it because a musician I love, Chad Clark, needs one ‘cos his is broken and not in proper working order. Hence, the need for somebody to try and do a plugin version. So I tried, with some pictures out of Popular Mechanics and a single cruddy youtube video to be my guide (this thing is OBSCURE) and I have not succeeded. Whatever the real one sounds like, this ain’t it.\r\n\r\nBut it does a thing, and I’ve added a Q control to help get it to do useful things since I can’t tell what’s right or wrong for this stuff, and this is as far as I can carry it right now. The source is MIT licensed for anyone else who’d like to pick up where I left off, and quite a bit of basic information is shown in the curves of that Popular Mechanics article about the thing, and it is kinda neat: accentuate comb-filtery effects you get from the shapes of your own ears. It does do a thing, that’s not like any other stereo effect I know of. And I ought to be able to use some of the tech from this to do subtle stereo-field enhancements in future versions of Console, stuff like that. You can refine it down to basic concepts and apply those.\r\n\r\n(followup: this remains useful for more subtle stereo spatiality things)",
    Comments: "",
    Name: "Srsly",
    Date: 1578182400000,
    Url: "https://www.airwindows.com/srsly/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a revisit of Srsly, to make the stereo widening more extreme.\r\n\r\n“You call that a wide? Now THIS is a wide!”\r\n\r\nA little while ago, I put out a plugin that reverse engineered the famous Hughes SRS stereo widener, from pictures in an old Popular Mechanics article. By applying a set of narrow little EQ boosts and cuts to stereo, mid and side channels, you could make a sort of holographic effect. Srsly still exists, just as it was, for use tweaking out more natural stereo imagery.\r\n\r\nBut the rabbit hole goes a bit deeper than just that…\r\n\r\nSrsly was by request of my friend Chad whose Hughes SRS wasn’t working properly, and who wanted a plugin version that didn’t hum. I didn’t have one of my own, so it was largely guesswork. Thing is, somewhere in there I got my hands on one (thanks Patreon! Between that and getting a real Mackie 1202 to play with, it turns out it’s useful for me to get actual gear relevant to my plugin interests, especially when I’m not getting the plugin right at first)\r\n\r\nAnd before I used it myself, I didn’t really ‘get it’, but then I started putting it on reverb returns, and quickly got very fond of a certain ultra-wide reverb field.\r\n\r\nAnd then I got more heavily into mixing in the box (and not with my hardware stuff) after Console7 came out… and discovered that my ITB reverbs did NOT do that kind of wide, and tried out my original Srsly… and had the same problem Chad ran into. It just didn’t do what the hardware box did. But I wasn’t done… so I started running stuff into the real hardware box, and just fooling around with the specific audio I’d begun to use, and rapidly worked out what was happening. My original Srsly left out a lot. It was more ‘audiophile’, more subtle, would fit in with more accurate recordings, but the real deal hardware device could be pushed WAY farther.\r\n\r\n…in a way that I could interpret. And coding ensued…\r\n\r\nMeet Srsly2. I’ve intentionally not tried super hard to exactly duplicate what is, after all, an unobtainable original hardware box by Howard Hughes’ company. Variations of this are still being licensed for use in car stereos and things, and I intentionally make no claim that I’m duplicating someone else’s property.\r\n\r\nBut. But. BUT. What I was asked for, was to accomplish a particular effect, where the stereo wideness could be made crazy exaggerated. And I was able to interpret what a real hardware box (not original, though) was doing. And I continued to modify Srsly until, with Srsly2, you can now dial it in to do very similar crazy and unreasonable things… and that’s probably close enough for a free and open source plugin modeling an ancient hardware device that can’t really be found anymore. You’ll find the controls ought to work as you’d expect them to, and you may find as I did that leaving the Center control alone and cranking up the Space control just right, can get you into a wild and somewhat boosted and hyped zone that makes the most of your spectacular stereo content, in much the same way the original, obscure, Hughes box did.\r\n\r\nThat’s my hope, anyhow. Hope you like it! I know I’ll be using it on stuff.",
    Comments: "",
    Name: "Srsly2",
    Date: 1613865600000,
    Url: "https://www.airwindows.com/srsly2/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "Reverb +",
    Description: "is a weird digital ambience/echo plugin.\r\n\r\nFor all that we try to make plugins have natural, acoustic or electric, retro vibe qualities, sometimes there’s a thing which breaks the rules by creating a distinctive voice that has nothing to do with naturalness. I’ve got an old Alesis reverb like that: very primitive, but deep as anything. There have always been odd little boxes with a style all their own, like the Delta Labs Effectron, which is low-fi but uses delta-sigma modulation like an SACD (but much more crudely!)\r\n\r\nIn that spirit, here’s StarChild. The inspiration came from the old Ursa Major Space Station. That said, StarChild sounds nothing like a Space Station, but it does sound like it’s out of this world. Like Space Station, it produces series of echo taps which aren’t perfectly regular. Space Station has little rhythms that it does, while StarChild works on prime number sequences: that produces a sputtery sort of delay line in which it won’t reinforce any one frequency.\r\n\r\nWhat you get is a curious delay/ambience effect, in stereo (it’ll widen stuff that’s only in the middle). It can work kind of like a natural ambience that’s a room in a horrible shape, or you can crank out the duration and get weird stretched textures with a variety of granularity. It’s an odd little plugin: didn’t sell that well in its earlier incarnation, yet this revised newer form is hotly anticipated: a bunch of people really started wanting it when Kagi (my payment processor) went out of business and suddenly it couldn’t be sold.",
    Comments: "",
    Name: "StarChild",
    Date: 1502841600000,
    Url: "https://www.airwindows.com/starchild-vst/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a nice basic stereo chorus.\r\n\r\nHi! This plugin is actually the one that kicked off the work that gave you StereoEnsemble. I got a request: please give me StereoChorus, like you used to have back in the Kagi days, I need to use it as nothing else will do.\r\n\r\nIt’s a bit funny as I didn’t remember it being that special. I mean, it’s got some odd tricks in the interpolation, it scales according to chorus speed so all the settings feel about equally intense, but it didn’t seem to me like anything that amazing, so I hadn’t got round to porting it to VST and open-sourcing it.\r\n\r\nSo now I have. It’s still got some of the interesting choices I made back when I coded it: for instance, it’s actually running a fixed point buffer at a rather long word length. Maybe this has something to do with the sound my user wanted to have back? However, I’ve added a few things. It’s now got modern dithering to floating point (on 32 bit busses) and I’ve added undersampling… so that it can sound the way it was meant to, even at elevated sample rates, while using lower CPU to do it. All in all it’s not the most outrageous plugin, but you know I’ve got folks fond of specifically it, and so I’ve brought it to VST form and open-sourced it just as it was, and maybe you too will find something special in it.",
    Comments: "",
    Name: "StereoChorus",
    Date: 1651968000000,
    Url: "https://www.airwindows.com/stereochorus/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is like GlitchShifter optimized for pitch shift doubling and tripling.\r\n\r\nStereoDoubler is another retro plugin I’ve had for a while, that is now available as open source and VST2 and M1 Mac and Raspberry Pi and so on. It’s using the basic concept of Glitch Shifter, so I should explain what that is first.\r\n\r\nGlitch Shifter is my plugin for doing pitch shifting (and feedback on it, if you like) in a different way. Instead of smoothly interpolating over relatively small loops of sound to pitch shift, it works with potentially much larger loops, and searches for spots where it can seamlessly (or near-seamlessly) switch over without ever blending or blurring the sound. For that reason, it’s more up front and edgy, more personality, but it can also disconnect from the source audio in weird ways or glitch out like mad, hence the name.\r\n\r\nStereoDoubler’s like two of those, tamed. Well, mostly tamed. It takes the source audio, and gives you a pitched-up version in one channel, a pitched-down version in the other, and lets you bring in dry for a center channel if you want. Because it’s still Glitch Shifter, it’ll give you faint ticking noises if it’s struggling to make its loops work, but it’s a lot tighter and more normal than Glitch Shifter usually is, and it’s simultaneously shifting up and down so the two sides will each have their own distinct glitch ‘personality’ while being as upfront and direct as they possibly can.\r\n\r\nI hope you like it. Sometimes taking a wild experiment and reining it in a bit, is just the thing. StereoDoubler isn’t meant to work on every possible situation, it’s designed to be amazing when it’s in its element. Maybe your mix is its element :)",
    Comments: "",
    Name: "StereoDoubler",
    Date: 1652659200000,
    Url: "https://www.airwindows.com/stereodoubler-2/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a sort of hyperchorus blast from the past.\r\n\r\nStereoEnsemble is a blast from the past, updated with modern dithering to floating point and undersampling: bottom line is, this is a plugin that can take either a mono or a stereo input and give you a bunch of additional ensemble-y goodness, with particular attention to simulating stereo imaging through staggered delay pairs (making stuff be panned interestingly through adding echoes that have time offsets between left and right channels).",
    Comments: "",
    Name: "StereoEnsemble",
    Date: 1649548800000,
    Url: "https://www.airwindows.com/stereoensemble-vst/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is an aggressive stereo widener. Historical note: this post included in full as it's right after my Dad died, and includes my thanks to Airwindows folks for supporting me through that:\r\n\r\nHere’s the last plugin I had in the pipeline, ready to post: no reason not to take the effort to post it now. Thank you all for the well wishes: I’m really touched, you’re all so sweet I can hardly believe it’s the internet :) (but then, people might well say the same about me!)\r\n\r\nStereoFX is a classic Airwindows plugin brought up to date and VSTified: it does three things that can contour the stereo image. None of them are as well behaved as Wider, but they’re interestingly different.\r\n\r\nStereo Wide basically runs the code from High Impact on the side channel. It gives a really aggressive widening effect (which will cancel in mono of course) and can bring an edgy quality to the wideness of your stereo channel.\r\n\r\nMono Bass is simply a highpass on the side channel: adjust to taste, by ear. It’s a very simple highpass, not that steep.\r\n\r\nCenter Squish is a neat twist on ‘widening’. Instead of touching the side channel, it does a simple sine-based saturation or distortion (Density style, not Spiral style) on the mid channel only. If you engage it, it progressively steps on the output of the mid channel but leaves side untouched. That means you can squash a stereo track slightly, giving it a little distortion, and let it squirt out to the sides a bit. You can combine this with a touch of the Stereo Wide, which works on a different algorithm. So it’s some unique tone colorings and techniques to serve the purpose of stereo widening. I hope you like it.\r\n\r\nI got a new video light (well, a $30 lightbox to go on one of my existing LED lightbulbs) so I’m kind of excited to make more videos and stuff, and I’ve got a backlog of plugins to try, but understandably (see the DrumSlam post) I’m a little distracted. I want to bring my best for you guys but I also want to honor your kind wishes, so I will post StereoFX and then see if anything comes to mind that I can do, if not immediately for the end of July, then early August: I am also doing the occasional music livestreaming and find that I can express my feelings that way, even if it’s ‘skronk guitar over techno’. So I won’t try and force the plugins (they won’t run out, I promise) and soon I’ll be back in the swing of things. Oh, and the Patreon is doing OK, I won’t worry about that right now but that too is appreciated. If not for that, I wouldn’t have been able to go and support my sister when all this went down, because it made me able to drop everything and zip off to Pennsylvania: without the Patreon, I would struggle to have that much gas covered, and I wouldn’t have been free to go right then, and then I wouldn’t have seen my Dad alive for the last time. So I owe you guys things that can’t be expressed in software or money: thank you.",
    Comments: "",
    Name: "StereoFX",
    Date: 1531612800000,
    Url: "https://www.airwindows.com/stereofx-vst/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "StudioKit",
    Date: 1415404800000,
    Url: "https://www.airwindows.com/studiokit/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is all the 'non-dither' dithers, up to date and convenient.\r\n\r\nIf you were curious about the new work in quantization I’ve been doing… where I’ve put out a series of experimental plugins with names like Dither Me Timbers and RawGlitters and then said they weren’t dithers, or if you tried stuff like Dither Me Timbers and then found your limiter set to 0dB was now giving you overs, or if it just didn’t make sense at the time…\r\n\r\nThis is for you.\r\n\r\nStudioTan is the sum total of all I’ve been doing with ‘dither’ that isn’t dither, for the last two years. It’s got three algorithms, StudioTan, Dither Me Timbers, and Not Just Another Dither. Each one is brought up to date, optimized, voiced to do what it does best. The first two begin with the use of quantization to apply EQ at ‘noise floor’ levels and the third applies Benford Realness statistics at noise floor levels, and they all use noise shaping to refine that behavior and get a specific tonal result. Not one of these have been quite available before, even from previous versions of Dither Me Timbers or Not Just Another Dither: it’s the latest finetunings of the algorithms. None of them can produce signal outputs beyond -1 to 1 so they can’t produce overs (if you’re ‘mastering’ so hot you get intersample overs, firstly that’s not a great idea and secondly StudioTan can’t help you there). All three come with 24 and 16 bit options right there in the plugin, as experimenter time is over and this is the final form, requiring no more fussing with plugins.\r\n\r\nThe effect of each is more pronounced at 16 bit, and that’ll give you a sense of what is being subliminally imparted at the far subtler 24 bit level.\r\n\r\nStudioTan is like the posh, glossy, high class output. It sounds kind of like expensive studios and tape, brings up micro-detail but suppresses harshness. It’s slick and makes things sound more flawless and possibly more boring, but satisfying.\r\n\r\nDither Me Timbers is like the spatially enhanced, electrically charged output. It makes sonic events spark out of a darker, spacious background, and gives a little energy to transients and attacks. It makes things sound more human and attitude-laden, so it’s more dramatic and attention-getting. It’s got different noise shaping behavior and voicing but in basic character it’s the opposite of StudioTan, and can be approached from that direction.\r\n\r\nNot Just Another Dither is like the holographic, hi-fi output. It’s a bit darker than previous Not Just Another Dithers and its purpose is to have detail go down to a digital noise floor that’s a balance of all types of artifact (since you’re always going to have a noise floor of something, no matter what you do) without changing character in any way. Since this perceived character is so balanced (this time, not even airy hiss as a ‘identifiable’ floor change) the new Not Just Another Dither is the best choice to seem like infinite resolution without even a noise floor being there. Instead of making ‘a sound’ like the previous two, it’s the one that sounds completely open and unaffected.\r\n\r\nNone of these give sensible results with test tones: you can’t take a sine and enhance high frequency details, so you get purely garbage data. Don’t use Airwindows non-dither dithers for scientific processing or your rocket ships will blow up on the launch pad ;) these are literally tone controls in two cases and an obscure data handling technique for the third, and they are re-voiced for 2019 to best deliver their sonic mojo. You can do test tone stuff to satisfy yourself they aren’t placebo effect: they really do the noise-floor-EQing or Benford Realness stuff, and the source code is open. But for evaluating how they really work, the proof is in the listening.\r\n\r\nWhat they do cannot be done any other way, and they’re the final artistic polish on sonic creations done in or outside the DAW. Use them on mixes, or when mastering raw analog captures to lower word lengths for CD. They are ‘final dither’ in function if not strict definition, the way to crystallize high-res audio data into an output file that retains all the magic you intended, whatever flavor of magic that’s meant to be. The three categories of tone color ought to cover your bases there.\r\n\r\nI know this is all I’ll be using from now on :)\r\n\r\n(followup: it absolutely was not. I continued to use NJAD in Monitoring until I wrote Dark, have used that some including in Monitoring2 and then came up with a new dither based on Ten Nines into Dark, which is in the original output buss of Console8)",
    Comments: "",
    Name: "StudioTan",
    Date: 1547424000000,
    Url: "https://www.airwindows.com/studiotan/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a mix check plugin that shows you only the extreme lows.\r\n\r\nBy request, here’s my mix monitoring tools, for VST and Audio Unit, Mac and PC! Please remember, these like Guitar Conditioner are control-less plugins so you don’t operate them by opening their windows: they’re either on or off, which probably is shown in your DAW mixer window already.\r\n\r\nSlewOnly gives you what it says on the tin: only the difference between samples, expressed as a sample. This produces a super-bright sound with zero latency and absolutely no pre-ring or post-ring. You can do two poles of this filtering: just add another SlewOnly. But, as is, this will give you an incredibly clear and transparent window on the ultra-highs, so you can dial in subtleties in the treble. Beware: don’t switch right back to the normal sound or it’ll sound incredibly dull. Rest your ears for a moment before resuming work.\r\n\r\nSubsOnly does the same thing for subsonic bass. It sounds a little like a house party from an adjacent house. You can tweak sub-bass elements and really hear how they’re balancing against each other, and if you’re packing too much into the subs you’ll hear that as well. Get things thumping properly through SubsOnly and it should translate well to all manner of bassbins and subwoofers.\r\n\r\nLastly, these are calibrated (in SlewOnly quite literally: pink noise will be about the same amplitude with or without it, though the tone will be way different) so that you can switch them in and out, and expect roughly the same loudnesses. It’s okay if SubsOnly is louder for fullbodied bass: with that, it’s not so much about level-matching, it’s about getting your sound (at whatever desired loudness) and then having the bass still make sense through SubsOnly. If you’re madly overloading it, there won’t be groove, just a lot of thunder and noise, at elevated levels. These go on at the end of your master buss, so you can hear what your 2-buss chain did to the sound. Especially if you try and go for ‘commercially loud’ volumes, sanity checking with these tools can be a real silver bullet.",
    Comments: "",
    Name: "SubsOnly",
    Date: 1314489600000,
    Url: "https://www.airwindows.com/subsonly/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a compressor for accentuating beats and pulses.\r\n\r\nWhat is ‘ballistics’ when it comes to audio gear? It’s the way the gear handles dynamics coming in. It’s the swing of a VU meter that can tell you what your music feels like.\r\n\r\nOr, since this is Airwindows and we don’t do no steenkin’ meters, ballistics is the way dynamics hit this compressor to produce outrageous groove.\r\n\r\nThis is also a good reason to keep me around working on stuff… this plugin wouldn’t exist if not for an earlier free VST plug from me, called SurgeTide. That one controls dynamics by altering the rate of change of the rate of change OF the rate of change of the audio. What, you may ask, would happen if you did that? I’ll tell you: firstly, there is no smoother compressor. It’s utterly, totally fluid and artifact-less, organic to the Nth degree. But, it doesn’t sound like it’s doing anything until suddenly it kicks in and starts making the dynamics swing up wildly to boost every beat. Incredibly hard to control. You really can get a sense of ‘huge surges of the musical tide’ emphasizing the deepest rhythms, but it’s a bear to set up!\r\n\r\nAnd since I’m still out there working on stuff thanks to my Patreon, now there’s a whole new version, so different it counts as a separate compressor: Surge.\r\n\r\nHere’s the thing. Compressors are as unique as, say, guitar overdrives. You can search for the magic one, but there can be all different sorts of ‘right one’, with hugely different characters to ’em. I made Pyewacket as a free VST. It delivers a super-articulate attack transient and leans out the sound rather than simply turning it down, and gives a ‘British Classic Rock’ vibe without any silly adding of faux-analog mud: that one clamps down on the body of sounds while leaving tons of intensity and headroom to the tone. Its ‘ballistics’ are very simple and it’s more about delivering a certain kind of attack, and making stuff more even and consistent.\r\n\r\nSurge isn’t anything like that. It’s SurgeTide, but easier to control: just bring it up until it starts compressing enough, and don’t go too far to where it inverts the dynamics. You can hear it easily, unlike SurgeTide. But it still retains most of the uncanny fluid organic quality SurgeTide has, and most importantly, it has the ballistics. That means that if you put a pumping, rhythmic mix through it… it will accentuate the beats in a very aggressive way that’s not like anything you’ve heard before. The attacks pop way out, including the deepest bass pulses: this is yet another way to handle compressed bassy mixes and transform them into something punchier. And unlike SurgeTide, it’s very controllable.\r\n\r\nYou might want to push it hard enough that the dynamics jump way out. You might want to use it as ‘glue’ and hit it only very gently, and take advantage of that extreme fluid openness (a result of the way its control is so abstracted: again, it alters the rate of change of the rate of change OF the rate of change). The one thing it won’t do at all is limiter-like behavior, it’s way too funky for that! So anywhere you need to use a compressor that is just ultimately funky, bouncy, squishy… try Surge. It might be right up your alley.\r\n\r\nSummary: Surge is more obvious and responds easier, SurgeTide is cleaner and harder to control.",
    Comments: "",
    Name: "Surge",
    Date: 1490486400000,
    Url: "https://www.airwindows.com/surge/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a surge and flow dynamics plugin.\r\n\r\nThis is a sort of dynamics plugin.\r\n\r\nIt comes from an experiment, where I had to find a way to make a behavior useful: SurgeTide runs on three different compression time constants stacked onto each other like the waves in an FM synthesizer. You don’t usually see a compressor work with the rate of the rate of the rate of change, because for normal sounds and time constants, the result sounds bizarre and unmusical.\r\n\r\nBUT, it turns out if you set it up to run a very deep and slow change, like tidal forces on the mix, it can do really interesting things. You end up with a mix that seems totally uncompressed, because small variations just don’t alter the sound at all… but as the pressures of the music affect the compressor, it can ease off or boost volume.\r\n\r\nAnd because the behavior’s so odd, it can react to an easing of pressure by swinging up very quickly. This behavior can be timed, sort of. You can end up with an effect that’s a little like EDM compressor pumping for effect, except it swings up to accentuate the downbeat. And not just the downbeat: a huge surge of bass underneath the downbeat. You can practically pull any degree of thump out of a track, but it’s tricky to dial in because mostly you can’t hear it working. It’s like an invisible size boost for subs.\r\n\r\nThe way to get SurgeTide working is to adjust the Surge Node until it squishes away the sound on the beat, then find the right speed for Surge Rate to work, and then back off Surge Node until it’s no longer inverting the dynamics. (unless you really want to: I’m not the boss of you.) It works really well as a subtle accentuation of mix low-end movement, giving some of the effect of a buss compressor but in an unusual and much cleaner way. Also works to subtly act as a level control and restrain dense mix moments so they can hit something like loudenation with more consistency.\r\n\r\nIt doesn’t work in any useful way on isolated tracks, particularly not staccato drum tracks: just maybe it would do helpful things with say, a lead vocal or a synth pad. Just remember that SurgeTide is for powerful, whole-mix movements rather than the usual compressor things, and that it can have effects on the extreme low bass, and build up the swing and flow of a mix. It’ll work on some things and be useless on others. I hope you like it.",
    Comments: "",
    Name: "SurgeTide",
    Date: 1478649600000,
    Url: "https://www.airwindows.com/surgetide/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Swappable Mega Dark Hat",
    Date: 1493942400000,
    Url: "https://www.airwindows.com/swappable-mega-dark-hat/"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is Dial-an-attack, like sidechaining.\r\n\r\nEvery now and then you come up with something a little different. The fun of that is in identifying it.\r\n\r\nI’ve been listening to house music by Deadmau5, and I took an interest in the way the sidechaining worked. (That’s the way the music, or the reverb, or the pads, get ‘smooshed’ down by the kick drum and then swing back up in volume again.) The Mau5 is pretty good about talking about his techniques, which I appreciate (I’d love to do a coffee run with that guy someday) and he’s spent some time showing people how instead of actually sidechaining, he automates an LFO which he applies to track volume. It gets a great effect.\r\n\r\nI wondered whether it’d work to do a gate that intentionally opened real slow. Specifically, it seemed possible to treat ‘full volume’ as a ‘floor’ and have a ‘decay’ that falls up toward 1.0 rather than down to 0. It’d never quite get there, but it could have a similar envelope as the fall-off of natural reverb, just upside down.\r\n\r\nIf that sounds odd, don’t worry about it, just try Swell. It has a threshold like a gate, and the Swell control handles the attack speed once the gate opens. The dry/wet works as you’d expect. Sort of like Deadmau5’s LFO trick, it doesn’t have to be a real sidechain, and is independent of whatever kick you have going on. Unlike the LFO trick, it’s also not tied to tempo: Swell reacts to EVERY attack that comes along, provided the threshold’s set right.\r\n\r\nWhat this does is very interesting. I expect to see this turn up in an EDM channel strip at some point. Essentially, you can play with the controls in various ways and completely step on the attack of anything you want. This relates to GROOVE and the layering of stuff in a dance mix: any element, no matter what it is, can be turned into a pad and back again, just by squishing away its attack. You can do it live, you can take an element (snare, punchy chord) and manipulate how it hits inside the groove. Extreme values make stuff extra soft and quiet and squishy, and then if you drop the threshold or Swell, you can have the element jump right back out again, and the control is direct, not relative to a sidechained track or LFO setting. It’s a more organic approach, more hands-on, and I think it’ll fit into a lot of people’s mixes. There’s always a place for balancing the intensity of the attacks of your tracks, and that’s literally what Swell does.",
    Comments: "",
    Name: "Swell",
    Date: 1512864000000,
    Url: "https://www.airwindows.com/swell/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "SynKick",
    Date: 1211932800000,
    Url: "https://www.airwindows.com/synkick/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is simplified, all-purpose tape mojo: my personal jam.\r\n\r\nThis one’s for me. It’s very similar to last week’s ToTape, but with the following differences:\r\n\r\n-simpler name\r\n-overdrive uses Spiral, not the Mojo algorithm\r\n-simpler controls (not exactly ‘input gain’ but close)\r\n-changes to the Head Bump algorithm\r\n-no flutter\r\n\r\nThis is what I WANTED to do with ToTape6, and didn’t. In some ways, that’s good: if I’d axed flutter I would not have spent all day struggling with it and coming up with a better algorithm that more closely resembles real physical tape, something that could come in handy for future echo plugins etc. If I’d done the things I’ve done with Tape, to ToTape6, then ToTape6 wouldn’t be as adjustable as it is. There’s room for both, and I gave people the complicated many-knobs version because I know you too well ;) and I know what people like, and I’m there for you.\r\n\r\nBut I also have dreams of my own. So, the plugin (first ever from Airwindows) that carries just the generic name ‘Tape’ is Airwindows tape emulation MY way.\r\n\r\nI’ve heard a lot of tape in my time, being over 50 years old. I’ve dubbed and re-dubbed tapes a lot. So I dialed in (and re-programmed) Tape by loading up eight instances of it, in a row, and making it behave itself as well as could be expected while running audio through eight instances of Tape. It’s not meant to be clean if you do that: it’s meant to be eightfold trash, but the right kind of trash I’m familiar with when you’ve got that much generation loss and head bump buildup. I knew that if I could get that right, if I could get it to behave okay under that kind of duress, I could rely on it as a go-to output stage (going just before Monitoring) that would condition the sound in the right kind of way.\r\n\r\nAnd so it does.\r\n\r\nTape will be heard from again, but much as ToTape5 bore the standard for Airwindows tape emulation for years, Tape is my personal choice for ‘mix into’ DAW output stage and it’ll stand for a while, I think. If you need more phat or more flutter or more controls etc etc, use ToTape6, which is just as good in many ways. This is just my ‘director’s cut’ version, designed to my tastes, for if you trust my ears and my choices. Since it’s Airwindows, ToTape6 (and 5) still works and you can have both. This one is for those of you who pursue the simple creed: I have a (virtual) tape machine. I record to my tape machine. I am happy. :)\r\n\r\nThis plugin came out with an original version and then had a Redux update in which I added a control: a slider for the head bump, as people were finding the head bump excessive. Cranking it up all the way gave you the original behavior, but I defaulted it to 0.5.",
    Comments: "",
    Name: "Tape",
    Date: 1579996800000,
    Url: "https://www.airwindows.com/tape/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "Tape (Redux)",
    Date: 1587254400000,
    Url: "https://www.airwindows.com/tape-redux/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is an old school tape echo with pitch swerve effects.\r\n\r\nTape Delay is the reissue (in updated and VST-ified form) of one of my first plugins. This is a precursor to Iron Oxide: it uses a technique for tone shaping that’s like a simplified Iron Oxide. Instead of being a direct EQ, it’s a huge cluster of delay taps, and also a little bit like a convolution impulse combined with an averaging: you get an averaging of just prime-numbered sample delay times. This turns out to work quite well (a direct version of this tone shaper by itself is also coming out)\r\n\r\nThe delay part is what makes this a fun toy. It can do some outlandish things, and also has some gotchas. It chases the delay setting in such a way that you get wild pitch bends from manipulating the control, not just buffer-smashings and dropouts. But, you also get buffer smashings and dropouts, so I wouldn’t dignify this with calling it ’emulation’: it’s just a way of fooling with the delay time control, live. If you’re rough with the control, it’ll get quite choppy. Also, if you intend to use this without glitches, you’ve got to enable the plugin and give it maybe a quarter or half second to chase to its desired setting, or you’ll hear a pitch zoop as the plugin starts up. That’s because this one starts at zero delay on reset, so if there’s audio happening it’ll get caught in the initial zip of the delay time.\r\n\r\nIf you can work with that, or don’t mind the weirdness, then you can enjoy this blast from the past that used to be AU-only for years and years: there’s a lot of interesting stuff like that, for instance Glitch Shifter. This one can give you mad dubby effects, either decaying into heavy Memory Man-like darkness or doing a tape slapback or decaying into bright airyness. Because of the prime-number based tone shaping, regeneration doesn’t produce reinforced artifacts, just continues to emphasize the tone shift you dialed in. (the tone-only version of this that’s coming, could be used in Blue Cat’s Late Replies plugin to make that a Tape Delay-alike, but without the delay time weirdness.)\r\n\r\nAgain, be careful using this on audio regions that are tightly trimmed to the very beginning of the sound: this one needs a second to stabilize if you’re using it to sound like a normal delay. Or, you can just do whatever you like :)",
    Comments: "",
    Name: "TapeDelay",
    Date: 1544918400000,
    Url: "https://www.airwindows.com/tapedelay/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a new implementation of a flexible tape echo.\r\n\r\nTapeDelay2 gives you substantial changes over my original TapeDelay. It’s no longer trying to do the ‘Iron Oxide’ style tone shaping the original one did. In fact, it’s not even a delay in the same sense as its predecessor.\r\n\r\nInstead, it’s a brand new, undersampled, Airwindows-bandpassed monster ready to make a whole pile of very convincing sounds. As plugin delays go, this covers a big range of purposes.\r\n\r\nYou’ve got a nice long delay time that’s still available at higher sample rates, thanks to the undersampling techniques. The delay line (and the regeneration) makes use of Airwindows bandpasses, but only on the undersampled content: meaning that if you’ve got it set to very nearly full range (resonance of zero) it’ll give the same subtle highpassing and lowpassing no matter what sample rate you’re at (a normal bandpass would have to roll off closer to the sample rate’s Nyquist frequency, in other words it would let through too many highs to do a proper tape emulation). You can tighten the bandwidth by increasing resonance. You can adjust the region you’re highlighting. And you can still adjust the frequency control even when set to full wide, which gives you more of a tilt EQ. It really turned out to have a lot of flexibility, and there’s two separate bandpasses so that you can shape the overall tone and also focus in on the regenerations if you like. Vintage sounds in the classic Airwindows way, meaning ‘no overprocessing, just high fidelity clean and simple processing’. Also, the dry/wet operates like my recent reverbs: 50% means full dry AND full wet, so you can bring in subtle echoes without altering the gain of your underlying track. Use it like a kind of reverb, with whatever tone and resonance works for you!\r\n\r\nAnd lastly, just to top it off, Tape Flutter. This is a new implementation that I’ve never tried before. Instead of a simple vibrato, in TapeDelay2 the flutter keys off the amplitude of the underlying track, making it a lot more wavery and irregular. Subtle effects are easily achieved in most settings, and crank it up for more of a warbly dirty-tape quality. It should be irregular enough to sound like real tape wobble. It’s done by modulating the tape speed… because unlike any previous Airwindows tape effect, TapeDelay2 works by taking a full-length tape loop and literally speeding it up, rather than trying to change the length of the delay in any way. So both the warble, and any manipulations you make to the delay time, act like messing with the pitch of a physical tape machine with a set record and playback head… which turns out to be the best way to do this :)\r\n\r\nThis is one of the good ones. Hope ya like it!",
    Comments: "",
    Name: "TapeDelay2",
    Date: 1627776000000,
    Url: "https://www.airwindows.com/tapedelay2/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is TPDF dither with noise like reel-to-reel tape.\r\n\r\nI thought I had it all worked out. Put out a proper, well-coded TPDF dither, the highpassed variation on it I’ve called PaulDither, and move on to the fancy boutique stuff.\r\n\r\nBut there was this one experiment I had in mind. If you could do the highpass by delaying and then subtracting the random noise (and it gained you a bit of efficiency in the bargain), why not delay it more? It’d create comb filtering, a cancellation node. Why not keep delaying until the cancellation node dropped right down to around 1.5K?\r\n\r\nSurely this would give me a nice cancellation notch right where the ear is most sensitive, and heightened clarity. What could go wrong?\r\n\r\nNope! I made a prototype, called it ‘NodeDither’, began experimenting, and immediately found that I’d made… a flanger! The long delay settings were useless. It made obvious overtones just out of the dither noise, a blatant tone color cast that wouldn’t produce the desired effect. It didn’t even produce an obvious notch in the response where I wanted it. The only thing it did do, was continue to function as a working TPDF dither no matter what the setting was (more on this later).\r\n\r\nBut, something else turned up in the experiments, and that’s what brought you TapeDither.\r\n\r\nIf you use one sample of delay and inverting the noise, you get PaulDither: simple one-pole highpass. If you use two samples of delay, you get another sort of texture: kind of silky, but still digitally bright and intrusive. Using lots of delay, such as ten samples, starts to sound like the flanger, undesirable.\r\n\r\nBut, there’s something interesting about powers-of-two delay times. One, two, four, eight and so on, these delay times are slightly less ‘colored’ in tone than the others. I think it has to do with interactions with the sample rate: they seem to line up more neatly, making it slightly more easy not to hear the pitch of the ‘flangey’ quality.\r\n\r\nAnd four samples of delay (and then inverting the noise) produces something rather special: a noise profile that closely resembles what you hear off reel-to-reel tape.\r\n\r\nI can’t specify particular brands because (a) I hate when people do that to brand names not their own and (b) it’s a technical discovery, not some complicated way of forcing digital audio to mimic a particular brand. It’s no specific tape stock or tape machine. But what it is, is a voicing for TPDF dither that rolls off in an obvious way, around where tape noise rolls off. There’s another little bump past that, which many people won’t be able to hear, and then it begins to roll off again as it reaches the Nyquist frequency beyond where digital audio can’t go. Compare that to any normal flat, TPDF, or highpassed dither. Those keep putting out noise energy right up to the frequency limit.\r\n\r\nTapeDither is every bit a TPDF dither, technically correct and flawless as far as dither goes. But it also is a highpassed dither with a softer tonal voicing that resembles good tape machines, and that doesn’t affect the dither performance at all. It doesn’t attenuate the audio content at all. Only the background dither noise is turned into what you’d get off a tape deck, all while the audio is protected from truncation and digital artifacts.\r\n\r\nI would use this anywhere I was sending processed stems or tracks outboard to a multichannel DAC, for mixing in the analog domain or summing with an outboard summing box. Without hesitation. I’d use fancier boutique dithers on the 2-buss, though this will work there too… but if I was doing an analog mix from a multichannel converter, there is nothing I’d rather use than TapeDither. (maybe Naturalize. Maybe.)\r\n\r\nThat’s because it’s one thing to apply an interesting dither (like Spatialize, for instance, or some noise shaper) on the 2-buss and get a unique texture or presentation on the audio. But if you’re stacking up lots of tracks and all of them get the same treatment, it’s vital to use something that won’t develop an exaggerated tone signature when multiplied that way. For dither, TPDF gives you that behavior, and TapeDither is the TPDF that most closely mimics the reality of analog mixing back in the days of big reel-to-reel machines. The tone of its noise floor is already more pillowy, mellow and relaxing than most TPDF or highpassed TPDF, and then when you stack up lots of tracks of it, the texture’s better still.\r\n\r\nI’m still excited to bring out Naturalize, but I’m just as excited about what TapeDither means. It makes me want to build analog consoles and mix into them, just so I can put TapeDither on any output that’s not playing raw 24 bit data exactly as captured. Anything with processing or gain on it would get a dithered output, and it would be a matter of—faders up—hello, Seventies :)\r\n\r\nWell, I like audio from the Seventies. I suppose I’d better work out how to do some of the sonic quirks of Doubly while I’m at it! Not that a rock band would use Doubly…",
    Comments: "",
    Name: "TapeDither",
    Date: 1481673600000,
    Url: "https://www.airwindows.com/tapedither/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "tapedither-redux",
    Url: "https://www.airwindows.com/tapedither-redux/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is just a special treble-erode noise, a ‘slew noise’ plugin.\r\n\r\nSometimes it’s good to have just a little specialty plugin that does a useful thing. Hard to do that in the commercial plugin biz, where everything has to be the biggest hype to date: but hey! Thanks to Patreon I’m free of all that, and can follow my vision.\r\n\r\nIt helps that I put out a lot of plugins: it’d be weird to do this as my only plugin for the month. But, while I work on Desk4 and StarChild from the greatest-hits list, I thought I’d sprinkle a little TapeDust for you.\r\n\r\nThis is slightly different from the tape noise in Iron Oxide, though it’s the same general principle. It is a slew noise plugin. What that means is, the noise ONLY hits high frequencies or anywhere the signal’s moving rapidly (there’s a teeny bit of other noise added at high settings, but it’s mostly that).\r\n\r\nNote the ‘or anywhere the signal’s moving rapidly’. This isn’t a crossover. If you put in a sine wave that’s low and loud, you’ll get very obvious noise only as it crosses through zero, and that’ll sound odd. In general, cranking this up is weird. It’ll depend hugely on what kind of signal you’ve got… but that’s the beauty of it if you can master where to use this plugin.\r\n\r\nBasses? Probably no way. Full mix? Getouttahere, no chance outside very low settings. Guitar? Hmmm. Drums, loops? A pattern emerges.\r\n\r\nTapeDust can convert ugly sharp treble attacks on pointy percussive atonal sounds to pretty much any degree of dense, noisy, natural-sounding crunch. It’s a type of noise, so it also gives analog-style variance to repeated samples that might sound over-digital. And the less tonal, or the less ‘pure clear note’ the signal is, the more TapeDust you can get away with. Since it’s a slew noise, it hits the treble of your signal HARD, but since it’s a noise, it’s not filtering or softening the sound as much as it’s just eroding it, weathering it, making it more natural. Anywhere you’ve got bright highs on a nonpure sound, you can grind them off with TapeDust.\r\n\r\nOf course, if you’re cool with using super-low settings, you can do that anywhere: it’s just important to register that this very specialized and dedicated tool is super picky about what it likes to work on. It’s a beautiful example of taking your production skills deeper: use something that can sound horrible and wrong, and find places where it’s in its element. You can do outlandish textural things, taking something like a clean electro mix with deep clean bass, and sticking heavy TapeDust on just one element in the mix to contrast with the un-grungy elements. I hope you like TapeDust. It’s the kind of plugin I love to make.\r\n\r\n(note: there has been a bug in this plugin causing it to sound different than intended)",
    Comments: "",
    Name: "TapeDust",
    Date: 1500768000000,
    Url: "https://www.airwindows.com/tapedust/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is the tone control from TapeDelay.\r\n\r\nTapeFat is just the tone control from TapeDelay. It works like an averaging filter that you can use to either roll off highs (or eventually mids), or subtract the effect to create a highpass and take out the lows.\r\n\r\nThe reason this is interesting is, that tone control is completely bizarre. It’s an averaging filter, but on a pile of delay taps arranged according to prime numbers. Works more like an ambience control, but more densely packed. If you put an impulse through it you don’t get a smoothed-out lowpass so much as a bizarre micro-reverb. Since it’s using primes, it doesn’t reinforce any particular frequency. Since it’s an ambience, it doesn’t have any pre-echoes like linear phase EQs, and the artifacts it produces become a tone of their own (either in-phase, or inverted).\r\n\r\nYou can hear it on the video, which has a number of things updated, not least this: the new audio is directly captured analog sorta-house music out of my livestreams. This way you ought to be able to really hear the way my plugins retain analog qualities, because now the demo music is essentially AAD: not products of other DAW mixes or digital synthesis, but source material.",
    Comments: "",
    Name: "TapeFat",
    Date: 1546732800000,
    Url: "https://www.airwindows.com/tapefat-vst/",
    Category: "Filter"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a hidden-noise plugin for adding sonic texture to things.\r\n\r\nIt all started with snake oil… or should I say secret snake oil?\r\n\r\nThere’s talk lately of a plugin which has gotten a rather critical reception: a plugin said to put subliminal noise into the sound, to produce near-magical enhancements of tone and all good things. But you can’t hear it directly… you gotta vibe it, listen and embrace the magic, and then you’ll believe…\r\n\r\nPeople were, shall we say, critical of this approach :)\r\n\r\nSince I’m free to code what I like, thanks to Patreon and all (and thank you, all who’re pitching in there) I took an interest, and now you have Texturize. It is NOT literally this other plugin, or their patents, or the specific method by which they make the magic concealed noise that makes everything better.\r\n\r\nBut what it IS, is a riff on several previous plugins I’ve had for years and years, to produce a very similar function… but THIS one, you can tweak and you can also crank it up and listen to only the noise to hear what it’s like. Ruin the magic… but learn how the trick is worked. And it turns out it is really not snake oil at all… it’s just another thing to do with audio, and it does seem to work, and everyone making a plugin of this nature will have their own ‘take’ on it: if you like mine maybe you’ll try out the other folks’ plugin with more of that open mind, having proved that the concept is sound. Or just use mine, which is open source and free :)\r\n\r\nYou get three controls. Bright makes the effect key off high frequencies more aggressively, to the point of hyping up energy, and Punchy varies between a softer, fuller sound and a real spiky choppy effect. And then there’s Dry/Wet, the heart of the plugin, where settings of 0.5 or less are probably going to keep the noise entirely inaudible, as it’s meant to be. Not heard… but felt. And the sonic transformation’s really interesting, all the more if it’s not obvious. It reminds me of how tape flutter can bring texture to pure tones, chorusing against nearby reflections for a fatter sound, but here it’s just noise… but noise doctored to act like the music and hide behind it.\r\n\r\nAnd then of course you can crank it up until you plainly hear hints of the noise… or slam it until you only hear the noise. But to actually use the plugin properly, keep things at 0.5 and don’t push Bright or Punchy or especially Dry/Wet to where it’s gone too far: tweak it on that subliminal level, turning Wet down if you need to, and see what you get.\r\n\r\nI might well start using it. It really does seem to work. Go ahead and fool with it and strip all its secrets… and see whether you believe, too :)",
    Comments: "",
    Name: "Texturize",
    Date: 1647216000000,
    Url: "https://www.airwindows.com/texturize/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a compressor that retains or exaggerates subsonic bass when you push it.\r\n\r\nCompressors are tricky little beasts: they tend to eat low-end, they react differently at low intensities than when you slam ’em, and each sort of compressor has a ‘voice’ that defines how it acts.\r\n\r\nThere’s a crude way to deal with the low-end problem, which is to put in a crossover: either to split into multiband compression, or simply highpass the sense circuit so the compressor can’t compress extreme lows and just lets them through. I’ve been asked to do this and have actually tried it on PurestSquish, but I was never satisfied with the results. It seemed like just half-breaking the compressor and I felt there had to be a better way…\r\n\r\nThunder is that better way. Instead of passing through the bass, it transforms it in a way similar to FathomFive, and uses that live, active signal to modulate what the compressor sees, where in turn the compressor’s output is modulated by the intense lows. It’s a little complicated, so you can watch the video or simply download it and try it. Thunder is free (bear in mind that my only compensation is the Patreon I’ve created. To do this onward into the future, that Patreon must succeed)\r\n\r\nIf you’re auditioning Thunder, a word of warning. You’re going to have to monitor the extreme lows. This plugin can prepare music for the hugest sound systems or the finest audiophile playback, but if you can’t hear what it’s doing you may get in trouble with it. Decent headphones ought to suffice (not earbuds!). If you have subwoofers, this will test them. You can also use the mix-check plugin SubsOnly to test how you’re doing, that will spotlight the subs for you.\r\n\r\nThe range of adjustment starts with gentle ‘glue’ compression as the subsonics begin to open up the mix. Then, a bottom octave will appear anchoring everything. Push beyond that and you start to get into more compressed 2-buss, with the extreme lows taking on a punchier, thumpier character. Add more Thunder and the bass gets frisky and aggressive and dominates. Then, when you go even beyond that, we’re talking about ridiculous monstrous mega-bass, and more or less wrecking the sound of everything else (it’s useful to be able to go to weird broken settings in case you want to step back just a bit and have a really extreme effect). This is not a multiband compressor (there’s only one stereo comp in the plugin) but when driven really hard it can go even more bonkers than a multiband compressor.\r\n\r\nRemember, the low Thunder settings are useful too as a glue comp, for a buss compressor that’s extremely transparent and true to the tone of the mix! The middle settings are just as functional. All of these settings have their own usefulness. Choose wisely (or unwisely, if you prefer).",
    Comments: "",
    Name: "Thunder",
    Date: 1474416000000,
    Url: "https://www.airwindows.com/thunder/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "LeftoMono and RightoMono) copy one channel to both, losslessly.\r\n\r\nTime for another tiny utility plugin or two!\r\n\r\nLeftoMono or RightoMono exist for only one purpose: if your input is either left or right, it’s coming in on a stereo channel, and you have no use for the other side.\r\n\r\nNo, worse: you’re coming off some kind of camera or camcorder and the other side is not only ‘nothing’, it shows some noise or interference that’s actively bad. In those situations you are often given the option, ‘Convert to mono?’ but doing that will combine the real signal with the garbage, interference, not-really-clean-silence signal.\r\n\r\nAnd so, ToMono. They do exactly what the name suggests. There’s nothing to them, no controls or UI of any kind, you don’t need to open any interface or do anything. Instantiate the one you need and boom: you are now copying the input data words from the side you want, to the side you don’t. Pure cloned mono of the highest possible quality in a single plugin. And since it’s so simple it’ll work in places like OBS where maybe sometimes they don’t handle generic VSTs properly or generate controls: hey, none needed!\r\n\r\nThis is a super boring plugin… except when you need it most. Hope you like it. (I no longer need it as I’m running my lav into the real mixing board… but I used LeftoMono last week, before putting it out. It can’t save the camera from other issues like robot-voice over HDMI, but it rescued me from the ‘interference and bad silence’ extra stereo channel. :)",
    Comments: "",
    Name: "ToMono",
    Date: 1572739200000,
    Url: "https://www.airwindows.com/tomono/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a super-transparent ‘tilt EQ’ with very low Q.\r\n\r\nThis is a new plugin, not a port from an existing Audio Unit. It’s based on a variation on the Average concept. Turns out, it’s the tail end of the ‘averaged samples block’ that causes the cancellation node. ToneSlant implements a much bigger sample block (100 taps) but linearly fades the samples off between the first and last sample in the block.\r\n\r\nWhat that does, is produce an extremely transparent ’tilt EQ’ with a controllable corner point. And, it’s implemented in such a way that you can set it to null out (at extreme high boosts) and then bring in only the brightest highs (shown in the video). Quirky, maybe, but it broadens the ToneSlant toolkit. So, the main uses are:\r\n\r\n-Extremely low Q treble rolloff above a set point (with a fixed dB/oct)\r\n\r\n-That, plus you bring in the dry signal by not putting the Highs to an extreme (it’s like a positive/negative wet/dry/wet, but that doesn’t fit on the label, especially for VST)\r\n\r\n-Total cancellation with Taps at 1 and Highs at +1, and then you put Taps to just barely greater than 1 and you can have a very natural high-shelf controllable with the Highs control\r\n\r\nThese come out of the algorithm: the reason it performs so well sonically is both the extremely low Q and the simplicity of the algorithm. Not everything I make belongs in a mastering studio, but ToneSlant is peculiarly suited to that use: it’s like those specialty EQs that have very few parts and impart no color to the sound. You should be careful applying ToneSlant, because it ‘hides’ and tries not to be apparent as EQ. Use it as such, when you need perhaps a strong ’tilt’ but don’t want the result to sound equalized.",
    Comments: "",
    Name: "ToneSlant",
    Date: 1476403200000,
    Url: "https://www.airwindows.com/toneslant/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ToTape",
    Date: 1297641600000,
    Url: "https://www.airwindows.com/totape/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ToTape2",
    Date: 1328659200000,
    Url: "https://www.airwindows.com/totape2/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ToTape3",
    Date: 1349913600000,
    Url: "https://www.airwindows.com/totape3/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ToTape4",
    Date: 1378857600000,
    Url: "https://www.airwindows.com/totape4/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is Airwindows analog tape emulation.\r\n\r\nToTape5 is the best Airwindows analog tape emulation. It builds upon the previous four versions (which have been some of my best sellers) and incorporates everything learned from the Purest series of plugins, to produce a tape emulation that does what analog does. (Analog tape does really good things for mixes, and it’s very difficult to get it right without sinking into a morass of overprocessing and digital blandness)\r\n\r\nIt’s better than Iron Oxide, always was. Iron Oxide is for ‘slamming tape for effect’, for putting on individual tracks, not realism. ToTape is for realism and quality: for ‘mixing to tape’, in the box. I don’t think there is anything else that can stand as much scrutiny as ToTape will: it’s developed on mastering-grade gear and when used in its most optimized state, it’s not a toy. It should be more transparent and musical than most plugins (never mind ‘tape emulation’ plugins, which are generally not even as transparent and musical as a good digital EQ plugin).\r\n\r\nIt has six controls: four if you don’t count Output and Dry/Wet, which are pretty obvious.\r\n\r\nLouder defaults to 0.25 because the tape emulation soaks up some level. You can set it to 0 for added purity (it removes a gain trim stage if you do) and if you do that, you can plainly hear that the emulated tape ‘soaks up’ some of the audio, noticeably dropping the level while not seeming to alter the tone at all. There are no gain adjustments making that happen, it’s entirely tape saturation which is very transparent. (There is no compression, either.)\r\n\r\nSofter is the treble softening. Defaults to 0, which is still on but very hi-fi and subtle. You can turn it up to get a more ‘old’ tape machine tone, and like the other controls if you need to finetune the effect by ear, your adjustments will probably be around 0.1 to 0.2 if you mean to retain the full fidelity of the mix.\r\n\r\nFatter is the head bump. Defaults to 0, which is still on, but subtle. It can be cranked up to silly/stupid levels if you like. Again, if you want to emphasize the extra roundness and fullness of tape, you might be tweaking this to 0.1 or 0.2. If you don’t have fantastic subwoofers or monitoring that can handle deep bass, leave this at 0! Boosting it will introduce deep lows very cleanly and you might not hear them unless your monitoring is up to scratch. You will also have to turn down Output if you boost this a lot.\r\n\r\nFlutter is the tape flutter. Defaults to 0 which is OFF, see comment on ‘dry/wet’. The most amazingly awesome tape recorders did NOT have loads of flutter, but if you want a little ‘spaciness’ or ‘atmosphere’ you can put in small amounts of this, like 0.1 or so. Go by feel, if you can hear it fluttering it’s kind of too much. If you’re using this, please don’t use Dry/Wet to combine the result with dry: you’ll create a flangey effect and it’ll be more obvious than it should be. By design, Flutter is made so you can increase it until it’s too much, so please remember that realistic levels are more like 0.1: too subtle to immediately hear. Go by feel, or pretend you have a really terrific tape machine and leave it off entirely, set Flutter to 0. (For instance, anyone who’s mastering and intentionally adds flutter ought to think hard about whether that’s really helping.)",
    Comments: "",
    Name: "ToTape5",
    Date: 1498953600000,
    Url: "https://www.airwindows.com/totape5/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is Airwindows tape emulation for 2020!\r\n\r\nHere’s ToTape6. There are still things I want (simplification) but this is all the things you wanted :)\r\n\r\nToTape6 brings in tech from UnBox, from Mojo, from BiquadOneHalf… it’s quite literally the culmination of all the stuff I’ve been doing over the last year (or indeed three years). I think it’ll register immediately as a killer tape emulation, perhaps THE killer tape emulation to beat for all that it’s an abstraction and not meant to be any specific tape machine. No GUI, no brandnames: just the tone, and the ability to soak up intense audio gracefully. And of course those delicious tape-machine lows, courtesy of the new head bump.\r\n\r\nUnlike ToTape5, the new ToTape6 is extremely well behaved in the sub-octaves. By that I mean it has them, tons of them, it’s got that ToTape/BassKit ability to uncork profoundly deep subs, but thanks to the interleaved biquad filters it cuts them right off and doesn’t let DC through. It’s got a special kind of servo damping built in because I found when you stacked them up four deep, the tape machines started subtly motorboating around 20 hz, so I fixed it. Even in its fixed state, be cautious about pushing the head bump beyond its default halfway setting as it’ll produce a LOT of serious lows, with an interesting compressed quality you won’t hear outside of ToTape and the real thing.\r\n\r\nDue to the influences of UnBox and Mojo, the new ToTape6 puts forth a lot of sonority when you hit it: warm harmonics stand out and project, due to the boosting happening in an overall midrange band that covers most of the audio range. The Soften control is subtly improved as well: if you’re looking to tape to warm up digital overtones and edges, ToTape6 does that effortlessly.\r\n\r\nFlutter is so profoundly improved that ToTape6 defaults to having it on, at 0.5. That causes the plugin to run a small, varying latency (bear this in mind). It’s also a step into a weirder realm: I was being asked to do a ‘trashed tape’ plugin. This might not be ALL of that, but the new Flutter algorithm is both clean up to extreme settings, and more capable of bonkers warble and wacky over-flutter. Check that out at the far reaches of the Flutter control. At settings below 0.5 the flutter is more usable in serious contexts, and as always if you set Flutter to zero you bypass the whole thing and get zero latency and a lack of interpolation between samples, giving you clearer highs to use Soften on. For serious mastering purposes I still recommend not using flutter, plus there are some electronic genres where it’d be disruptive.\r\n\r\nThe dry/wet control has a trick in store: it only works in the normal way if you’re NOT using flutter. If you’re full-wet you can flutter as you please, but as you bring dry in, you’ll get a striking flanging effect that’s different depending on where your flutter setting is (flutter changing can cause sonic artifacts, but you can still do it for effect). The AU is ‘N to N’ meaning it will randomize stereo or even 5.1 surround: the VST runs true 2-channel stereo so it will more accurately resemble a stereo tape flange. Either way, it’s more of a stunt than an important effect, but it does mean you can be running subtle tape flutter effects and then seamlessly fade into an obvious full-mix flange, and then back to the solid, loud tape effect. This will work differently each time you do it, so be sure to print your results: flutter is a random process.\r\n\r\nOh, one more thing: ToTape6 has the guts of ADClip built into it as a safety clipper. So you can use it as a final loudenator, at which it ought to be about as good as they get: if the tape slam isn’t getting you there, you can push the output volume past 0 dB to intentionally clip harder, or pull it back to make sure ToTape is the only distortion stage. If you’re seeing extended periods of -0.09 dB you’re seeing ADClip working.",
    Comments: "",
    Name: "ToTape6",
    Date: 1579478400000,
    Url: "https://www.airwindows.com/totape6/",
    Category: "Tape"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "ToVinyl",
    Date: 1312502400000,
    Url: "https://www.airwindows.com/tovinyl/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "",
    Comments: "",
    Name: "ToVinyl2",
    Date: 1386806400000,
    Url: "https://www.airwindows.com/tovinyl2/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "ToVinyl3",
    Date: 1402358400000,
    Url: "https://www.airwindows.com/tovinyl3/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a vinyl-mastering simulator bringing several vinyl-type colors.\r\n\r\nToVinyl has several uses. You can use it to reshape the bass in your track, making it more mono or tightening up the center. It’s a special multipole IIR filter that acts almost like a ‘mega-bass’ plugin: it doesn’t just take away, it rearranges (so don’t expect it to act like a normal digital cut, you might see increased peak energy down low.)\r\n\r\nThen, there’s the acceleration limiter. This algorithm is unlike any other Airwindows treble-reducer: it zeroes in on just the sorts of transients that’d burn up a cutting head, and zaps them ruthlessly. (if you own a cutting head you’re responsible for checking this, but some of you folks are still using Spitfish, and I’m pretty sure this will way outperform Spitfish.) The effect is treble softening without any obvious treble reduction, and it’ll make stuff sound like classic vinyl grooves very effectively.\r\n\r\nBut that’s nothing compared to the next control, Groove Wear. This one analyzes the virtual groove, and then sets up an imaginary stylus going down that groove, and gives it a tiny bit of inertia. It’s more slew mojo (and not tied to any particular frequency, it doesn’t even know what a frequency is) and the effect (should you choose to use it) is a very characteristic darkening and slight trashening of the most extreme highs. You can shut it off entirely, or turn it up, and you can combine it with the acceleration limiter to get pretty much any ‘vinyl LP high end’ you want. Some settings even bring a touch of moving-coil sparkle: it’s not all darken, in fact Groove Wear is very much its own thing distortion-wise.\r\n\r\nCombine it all together and you’ve got ToVinyl4, the up-to-date version of a classic Airwindows for-pay plugin.",
    Comments: "",
    Name: "ToVinyl4",
    Date: 1515283200000,
    Url: "https://www.airwindows.com/tovinyl4/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Toybox",
    Date: 1254355200000,
    Url: "https://www.airwindows.com/toybox/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is TPDF dither. With 16/24 bit output and a DeRez control.\r\n\r\nTPDF is the industry standard technically correct boring dither. It does nothing strange or interesting, makes no effort to optimize the sound in any way (generally if you make it better for something it’s worse for something else: even Naturalize only has a limited amount of output bits to work with.)\r\n\r\nTPDF uses two sources of noise to make what’s called a Triangular Probability Density Function, which gives it its name. If you had only one noise source, you’d get what’s called flat dither (I’m not offering that, but it’s in Ditherbox, along with truncation.) When you only have one noise source (at the correct volume, which is one bit wide) you get dithering and sounds correctly transition into silence instead of going insane with grating gnarlyness (which is what happens with truncation, anywhere and everywhere it happens) but with only the one noise source you get an effect where the noise level flutters and shifts depending on what the audio’s doing. I demonstrate this in the video, it’s quite noticeable.\r\n\r\nWith the two noise sources, TPDF transitions sounds into silence, and still keeps a totally unvarying noise profile. In a very real way, this is more analog-like. All analog circuits get some noise, and all analog circuits let sounds drop beneath that noise exactly like TPDF dither does.\r\n\r\nThat’s not to say it’s the only choice you can have for dithering: I’ll be offering up different ways to dither for weeks, each with their own interesting sound signature. I’m just saying, for what it is, TPDF dither works extremely well. If you don’t have good reasons to use something fancier, or you want something guaranteed to work on everything in any situation, TPDF dither’s the one for you. Airwindows TPDF dither is a nice high-resolution well-coded implementation, one that does the truncating for you so you can compare it (for instance, with BitShiftGain like in the video) but it’s also exactly the same as any other properly done TPDF dither out there. There’s no fancy tricks, it’s just the boring but useful TPDF dither.\r\n\r\nI guess there are a few Airwindowsy things about it but they’re not sound quality related. If you’re using the AU on Macs, it’s ‘N to N’ meaning it works on quad and 5.1 channels automatically, and is more efficient on mono channels. And just like all the Airwindows dithers that are coming out, it is 24 bit only and has no controls. That means if you want 16 bit you could get the AU Ditherbox, wait for it to be ported to VST, or use two copies of BitShiftGain that I just released. (I’m discouraging emphasis on 16 bit because I think it’s obsolete and should be deprecated.) This also means if you’re using TPDFDither as intended, it’s a ‘non-fiddly’ plugin that won’t distract you. There’s no window, no GUI, no reason ever to open it in the DAW: if you’ve placed it in the correct spot you can see it there (clearly marked TPDFDither) and that’s all you need to know.\r\n\r\nMaking plugins that simple and self-effacing is a very ‘Patreon-supported‘ thing to do. When you have to sell plugins to stay alive as a company, you’ve got to keep them in your users’ faces and distract people to make them think about you, lest you be forgotten. This competes with the creative urge and gets in the way. Making plugins that are ruthlessly minimalistic to the point of being almost not there, is the opposite. Your music has to be the focus, so the plugin has to have the goods sonically but also be non-fiddly, because it’s sort of ugly and boring and not fun to play with.\r\n\r\nI continue to delight in the latter. Let your music be the focus. Hope you enjoy TPDF Dither, and expect a lot more plugins of this nature, as fast as I can reasonably release them :)\r\n\r\nThis got a Redux edition, meaning some added controls. Not only 16/24 bit TPDF with a DeRez control (and a clamp for how loud it gets so it doesn’t blow up your ears at super low bit depths), it’s also the Airwindows TPDF algorithm. Which is to say it’s not exactly like everyone else’s TPDF algorithm, even though it adds exactly two noise sources each one bit in loudness.\r\n\r\nThat’s because when I made it, I added one and then subtracted the other and thought that gave me zero. But of course, it doesn’t… it gives me TPDF (triangular probability density function, or ‘the correct kind of dither when done by-the-book’ which decorrelates two moments of quantization noise blah blah blah technical :) )\r\n\r\nBut it also gives exactly half a bit, on average, of DC offset. This is enough to make measurements weird. It’s not enough to do any harm to anything (less than a least significant bit: it’s literally in the noise floor). But it is enough to have the noise floor sit across THREE bit values instead of only two. And that is enough to make it sound nice. (it’s possible there are other values, like 0.382… that would sound better still, but I’ve not done that experiment yet, and it’d be more complicated to implement… guess I know what I’ll be doing NEXT week)",
    Comments: "",
    Name: "TPDF Dither",
    Date: 1480204800000,
    Url: "https://www.airwindows.com/tpdf-dither/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "tpdf-dither-redux",
    Url: "https://www.airwindows.com/tpdf-dither-redux/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is still TPDF dither but better and wider. With 16/24 bit output and a DeRez control.\r\n\r\nTPDF is Triangular Probability Density Function. It’s about using two random sources of EXACTLY the right amplitude (one Least Significant Bit each) to render anything else, including the noise floor, free of quantization distortion so you can hear deeply INTO the noise floor and have it sound musical. Dither is important, and TPDF is the industry standard.\r\n\r\nMe being Chris from Airwindows, I always manage to find a way to tweak things just a bit, and in my TPDF dither the randomness contrives to be added to the audio in such a way that it ‘leans’ a bit to one side of the waveform, while still being purely random noise sources of exactly the right amplitude. This causes the ultimate noise floor to be distributed over slightly more values than you’d get if it was perfectly lined up, at the expense of a teeny-tiny DC offset down about 12 db under the noise floor.\r\n\r\nTurns out there’s more that can be done. If you have purely random sources, then your stereo channels will sometimes end up at the same random values. This is similar to the dither being in mono, which is known to narrow soundstage and hurt the sensation of wideness. But what if you could avoid that?\r\n\r\nTPDFWide is purely random-source Triangular Probability Density Function dither, but once it’s rolled up its random numbers, it checks to see if the two channels came out the same (or close to the same). If they are… it rerolls a channel. If they still are… it rerolls the other channel. If they still are, it rerolls the first channel again, and then gives up so as not to hurt itself. In every case these are still random numbers: we’re just rejecting ones where they’re too mono.\r\n\r\nAnd that gives us a ‘regulation’ TPDF dither that sounds better AND wider than generic, ordinary TPDF dithers. Firstly it covers just a slightly larger range at the noise floor, without actually being any louder. And secondly, it resists ‘mono dither’ which causes it to sound wider and more spatial than ordinary TPDF dithers. And yet it’s still a TPDF dither, at heart. If you would like something a little special, but don’t like my more unusual wordlength reduction techniques like NJAD or Spatialize or Dark or Beam etc. then you might enjoy TPDFWide. It has a ‘DeRez’ control that lets you go to low-bit realms and hear what the noise floor really sounds like, and it’s got 24 and 16 bit modes when you have DeRez set to 0 (which you should, for normal operation). You can use it as a 24 bit dither for monitoring and file-making, and as a 16 bit dither when you need to export to 16 bit. I hope you like it :)",
    Comments: "",
    Name: "TPDFWide",
    Date: 1636848000000,
    Url: "https://www.airwindows.com/tpdfwide/",
    Category: "Dithers"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is more of a transistory, rock desk analog modeling.\r\n\r\nContinue the look into classic Airwindows analog modeling with TransDesk!\r\n\r\nThere’s a famous analog console known for rock mixes. It might not have the preamplifiers to hang with the APIs and Neves of the world, but it’s been a watchword for mixdowns, both for the sound and for the extreme flexibility it offers (automation, effective EQ, compression). I’m not going to name it, but I was tuning TransDesk to get into a similar area: in particular, I wanted to get a comparable aggressiveness into the highs. This isn’t a plugin for making things soft and sweet, it’s for rocking out.\r\n\r\nThat said, there are many paths to this ocean of sonic mayhem, and what distinguishes TransDesk is that it gets its sound with very little processing. You don’t lose much mojo just to get that coat of sonic paint. In some ways the immediacy of this approach is closer to the analog truth. In other ways, it’s less a would-be clone of a classic big console, more a way to get some of that energy. (Technically, I’m doing it by trying to match the overload characteristics, including power supply idiosyncrasies that affect the way energy can be drawn for the highs.)\r\n\r\nThe result is another Desk-style plugin, with a completely different sound. It’s not calibrated to work with Console (that’s the for-pay version of Desk that consolidated these and calibrated them all) and it doesn’t have special requirements for where it should go. Place it where you want that style of tone coloring: like Desk, you can use it on auxes and submixes (including ones ‘inside’ Console) to better emulate running through a lot of circuitry.",
    Comments: "",
    Name: "TransDesk",
    Date: 1484697600000,
    Url: "https://www.airwindows.com/transdesk/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is fluctuating saturation curves for a tubey tremolo.\r\n\r\nSo, you’ve probably got a tremolo built in to your DAW.\r\n\r\nBut, if you’ve heard tremolo effects off classic records, it’s a whole different animal. DAW tremolos are neat little volume animations, capable of many cool effects (try making ’em squarewaves synced to the tempo for a nifty sequencey effect). But they don’t have that organic pulsating thing that takes a sound and gives it a whole new character.\r\n\r\nSo I made this!\r\n\r\nThis Tremolo uses saturation and antisaturation curves like you’d find in Density, and does the tremolo with that. It’s the same trick I use on the compressor ‘Pyewacket’. The result is, the loud parts develop a density and thickness mere volume won’t give you, and the lean parts hang on to a skeletal form of the transient attacks so your music comes through. This is not just ‘analog color’ like a coat of paint, Tremolo works quite differently from your DAW tremolo. It doesn’t sync to tempo, but that’s partly because I don’t know what to read (in AU and VST) that’d give me that information: could be added in future if the secrets are forthcoming, but there’s no sense withholding Tremolo just because of that!",
    Comments: "",
    Name: "Tremolo",
    Date: 1485648000000,
    Url: "https://www.airwindows.com/tremolo-vst/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "",
    Description: "is a squarewave tremolo effect that only switches on zero crossings.\r\n\r\nSurprise! More sound design, texture-making, mix-blendering fun from Airwindows.\r\n\r\nI meant to put out BassAmp today, but it’s not ready: needs more work. But I had this weird little critter handy, and so it’s skipping ahead whether you like it or not!\r\n\r\nAnd that depends on what you get up to, signal processing wise. TremoSquare comes out of one of my livestreams, where I coded a plugin from scratch one Monday so people could watch the process. (I do that now.) It’s a squarewave tremolo, but it only transitions from silent to full volume on the zero crossings.\r\n\r\nWhat that does, is firstly give the aggressive tremolo a nice warm coloration that doesn’t click or crackle, even on bassy sounds. But secondly, if you ramp up the frequency super high, it stops registering as a frequency because the crossings take precedence and interfere with the frequency of the transitions. So, you get a distinct sort of ‘de-rezzing’ effect that’s literally nothing but a tremolo, except it’s sculpted to be smoother and more graceful. It doesn’t tempo sync: think of it more like that effect on Bowie’s ‘Diamond Dogs’ album of singing through a fan that’s on. It’s got a dry/wet control so it can be faded in for effect, and the frequency range of the tremolo is extremely huge.\r\n\r\nHope you like it! I meant to do an entirely different plugin, but I just had this lying around…",
    Comments: "",
    Name: "tremosquare",
    Url: "https://www.airwindows.com/tremosquare/",
    Category: "Dynamics"
  },
  {
    Use: "",
    Type: "",
    Description: "is a stereo tripler with extra wideness and GlitchShifter processing.\r\n\r\nHere’s a fun little toy that might make it into the toolkits of some otherwise non-Airwindows types :)\r\n\r\nTripleSpread is based off the code of GlitchShifter, but it’s designed around one task, and that is the ‘split a track into three, pan one hard left and pitch it down a few cents, pan another hard right and pitch it up a few cents’. That’s what it does. It’s a tripler. Alternately, if you put it on a LR pair of instruments, it’ll double each of those instruments and stay very stereo. Or if you put it on an LCR submix, it can sound like about twelve instruments. That’s the specialty of TripleSpread: making a big wide stereo effect.\r\n\r\nExcept that it adds a new twist: as you bring up dry/wet, introducing the effect and progressively overpowering ‘dry’ (where the mono signal might be) it also fades out the mid content of the added stereo stuff. So you get a hyper-wide. Specifically, you get a hyper-wide that seamlessly fades between your clean, direct sound (however many sources you have in it) and the expanded, widened sound (adding pitch-shifted elements that are wider than the stereo field). These can be subtly pitch shifted, or nearly a semitone out if you crank it.\r\n\r\nAnd if that’s not enough, it’s still Glitch Shifter based, so you can increase the tightness control until it glitches out or reverts to dry… or you can turn it way down, until the pitch shifted tripled voices hardly relate to the original sound at all. That might be cool for ambient pads, wide stereo synthetic things or what have you: it’ll add an unpredictable echoey effect that’s also pitch shifted. Tighten it up, and you control that vagueness as much as you like. Tighten it more, and you can tie it to whatever rhythmic element you like: it’s certainly capable of widening LCR guitars while keeping the ‘guitar orchestra’ effect relatively tight, or you can get silly and try it on percussive sounds as long as you’re OK with it either glitching, or blurring the timing.\r\n\r\nSo, the key distinction between this and StereoDoubler is that TripleSpread pushes the width of the added widening voices rather than just putting them hard left and hard right. You do that by pushing the dry/wet harder.",
    Comments: "",
    Name: "triplespread",
    Url: "https://www.airwindows.com/triplespread/",
    Category: "Stereo"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a tube style SoundBetterIzer using a new algorithm for analog modeling!\r\n\r\nntroducing… Airwindows TUBE.\r\n\r\nThis is your new go-to soundbetterizer! It will make anything you put it on HUGE, and is a new algorithm that’s going to inform everything I do going forward, as well as building on everything I’ve learned to date!\r\n\r\nJust try it. Either keep it restrained, or boost it a little, or CRANK it all the way, and then TURN IT ON. No matter what your audio is, this should blow your mind :D\r\n\r\nGo try! If you want the full soundbetterizer experience go now and use it! It will never let you down! :D :D ;D\r\n\r\n:)\r\n\r\nOkay, good. Who’s still here? For those of you who’re still reading, and those who like to know how things work, let me nerd out a little and explain (a) why all that is true, and (b) exactly how it’s done. Tube is a combination of things. It’s the fruit of some work I’m doing on dialing in distortion types, based on stuff I made for Mackity etc. and it lets you dial in the same clip style I used for Mackity, but scale it up and down, make it simpler or more and more complex and linear. The maximum linearity it can do is when it’s set to zero: then it’s a soft-clip with a nice clean center region. The minimum linearity it can do is at full crank, and then it’s inputSample – inputSample*fabs(inputSample), scaled just right… and then gain-adjusted right back up again.\r\n\r\nAnd that’s the whole secret. It’s a distortion… a very simple distortion with the fewest possible calculations, even simpler than using sin() to distort… and at full crank it distorts a LOT and then applies makeup gain. Most of what you’re hearing is marketing volume. Not only that, since it’s a distortion, there’s a carefully calculated pre-boost in there too, and it’s set up so that at full crank, it takes the RMS loudness of a triangle wave (not unlike music content) and boosts it EXACTLY to where it’s now the RMS loudness of a sine wave. Everything else is just applying these things with the Airwindows house sound… in fact it’s a new high-water mark for the Airwindows house sound, nothing short of BitShiftGain is quite as good as far as ‘minimal processing to get the result, and insane overkill for word length and linearity’.\r\n\r\nIt goes even beyond that. Unlike my normal ‘mimic the sound of hardware’ plugins, which use (more complicated) biquad filters to get exact voicings of tone, Tube is designed to be dropped in literally anywhere. So, instead of the usual approach, I’ve got a radical approach to aliasing suppression: since it’s already so soft, at 88.2k and up we just do a single averaging of adjacent samples before the clipping, and then a single averaging after the clipping. Period. That’s all. This is shall we say not as effective as brickwall filters and Ultrasonic… but it’s applying a linearizing effect, twice, that applies to all the audible frequencies and does basically nothing else. It’s not the ideal thing for handling problem aliasing cases, but for your tubey midrange lushness there is NO other possible approach that performs as well. And, again, the most aggressively minimal approach you could have. That’s key to how I get plugins to sound right.\r\n\r\nSo, there you have it… and you do, I hope you enjoy Tube. I’ll be using the algorithms a lot, and using it to dial in more sophisticated plugins. And some folks will lose their minds and believe the magic… and some will get cross I didn’t set it up for proper A/Bing, which kind of defeats the purpose for the first crew… and in the final analysis, what TUBE gives you is this: some of the most extremely Airwindows tone you could possibly have, free and easy to drop into any track, mix, or mastering that you just want… bigger.",
    Comments: "",
    Name: "TUBE",
    Date: 1631404800000,
    Url: "https://www.airwindows.com/tube/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "extends Tube, with more sophisticated processing and input trim.\r\n\r\nHi again! :D\r\n\r\nI took such a beating over TUUUBBEEEE!!!11!! that I’m following up immediately with another version. Not as a replacement, but just pursuing a LOT of the things people were talking about… while retaining some of the bloody-mindedness that makes people so mad at me.\r\n\r\nFolks who actually know what they’re talking about had me digging up copies of the RCA Receiving Tube Manual, to study how the electron field’s impedance can fluctuate changing the behavior of preceding stages, and how this is affected by unavoidable time delays as the electrons transit from cathode to plate through grid. (If I have that backwards, please turn your DAW upside down to compensate). There’s good reason to expect second harmonics both on the low end and as higher harmonics: all that’s in there. I did my best to find algorithms that’d sharpen corners going one direction and loosen them going the other. It’s been quite a ride. It did motivate me to code an update to Monitoring that you’ll be seeing pretty soon: adding the ‘Tube used as a safety clipper) tiny pad for appropriate output levels, and switching the new Monitoring to use Dark as its wordlength reducer. You’re hearing all that in the video too.\r\n\r\nMost of all: this is the version of Tube that’s pretty close to level matched if you have the input trim at 0.5. You can pad it more if you like. Tube2 still lets you make the audio REALLY BIG, because that’s what it’s for: I needed a safety clipper stage before I needed anything else, and it’s still designed to accurately top out at 0dB exactly, and anything you hit it with from well below to quite a bit above should all sound right.\r\n\r\nIf you need more gain than you can get from cranking the input pad until it’s wide open, THAT is when you should break out Tube (1) and use it as a feeder for Tube (2). I don’t think there’s much to be gained from running Tube2 into Tube2, though I’m not your Mom and you can do as you like. I’m just saying the whole thing’s designed around finishing up in Tube2, with whatever degree of ‘Tube’ you see fit, and similar behaviors of the control: regardless of what your levels are doing, more TUBE means softer and more saturated distortion, plus all the new behaviors making stuff interesting. When you back off the TUBE control, you’re going for more linearity in every sense, and you should be able to dial in the right vibe without trouble.\r\n\r\nI have no idea whether this is gonna get me a fresh new wave of, uh, criticism :) I’m not even sure whether that would be good or whether it’s more likely to be SO good for people that they rush off and use it as intended, don’t find time to get mad, and then the whole thing dies a media death. It is said that scandal drives page views… but my own drives are rather simpler.\r\n\r\nI just want to make stuff that sounds good, along the lines I’ve been developing over more than ten years working on getting digital audio to not sound like DAW hell.\r\n\r\nThis is an upgrade. Hope you like it :)",
    Comments: "",
    Name: "Tube2",
    Date: 1632009600000,
    Url: "https://www.airwindows.com/tube2/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "is a tube recording console type tone coloring.\r\n\r\nMore classic Airwindows analog modeling with TubeDesk!\r\n\r\nTubes aren’t necessarily ‘mellow’. They’re also known for clarity, realism. TubeDesk isn’t a mud-ifier, but it might bring you some effects reminiscent of vintage recordings.\r\n\r\nLike the other Desk plugins, it’s got a kind of saturation going on, a distinct flavor to how it distorts. However, unlike TransDesk, its power supply is very different. TubeDesk is so old school it acts like there’s a vintage tube rectifier, imparting an obvious rectifier sag. This conditions the sound, affecting how dynamics work through the plugin.\r\n\r\nYou have a distinct ‘analog modeling’ tone then, which is no specific console, no arbitrary color: just sort of retro vibe, generalized. It’s not calibrated to work with Console (that’s the for-pay version of Desk that consolidated these and calibrated them all) and it doesn’t have special requirements for where it should go. Place it where you want that style of tone coloring: like Desk, you can use it on auxes and submixes (including ones ‘inside’ Console) to better emulate running through a lot of circuitry.",
    Comments: "",
    Name: "TubeDesk",
    Date: 1485302400000,
    Url: "https://www.airwindows.com/tubedesk/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "Consoles +",
    Description: "",
    Comments: "",
    Name: "TubeSag",
    Date: 1286841600000,
    Url: "https://www.airwindows.com/tubesag/"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "is a Console-like encode/decode pair, but much more extreme.\r\n\r\nSometimes you do a plugin that’s not all that sensible.\r\n\r\nThose can be special, though, because those are the ones people can’t get anywhere else.\r\n\r\nThere’s a process called uLaw compansion. It’s not really compression and expansion, though: it’s like a kind of distortion that can be reversed. It’s used for telephone transmission, and showed up in some of the earliest digital audio processors: back in the day, you had so few bits that you had to make them count.\r\n\r\nuLaw comes in two parts. The encoding applies a hideous distortion, making all the quietest sounds unreasonably loud and squishing the dynamic range up into the extreme near-clipping zone. The decoding neatly inverts this process and puts it all back. uLaw (the Airwindows plugin) does the high-resolution calculation of this process, so you can get exactly the compansion to a high degree of accuracy.\r\n\r\nWhat you do then, is you put a bitcrusher like DeRez in between the two uLaw plugins, and it suddenly sounds a lot cleaner with less roaring bit noise, because you’ve remapped where the quantization points are. It’s in the video, and easy to do with DeRez.\r\n\r\nAnd then… you can do all manner of other strange things, because you can put any plugin between uLawEncode and uLawDecode. Not just a bitcrusher. But, anything you put there is going to turn into a monster in a rather pronounced way. For instance, if you put an EQ in there, it will go crazy and any changes you make become loud, distorted parodies of what you meant. If you put a delay or ambience, it’ll get warped very harshly. If you put pitch shifts, flanges, who-knows-what in there, you get shockingly horrible versions back out.\r\n\r\nSo, you can stick to the bitcrushers (mine or any other one you like: it’s a discrete pair for sandwiching any other plugin or plugins!) or you can treat it as a terrifying new building block that wasn’t directly available (far as I know) before. The plugins have gain and wet/dry controls which normally ought to be all set at 1.0, where they default. I can’t tell you how to use these controls to tame the behavior because it’ll vary with whichever plugin you try, and the controls don’t really belong and won’t necessarily give sensible results. You’re on your own.\r\n\r\nAlso, you can’t frame a mix using uLaw the way you could using Console: the effect is far too ugly and intense. But there’s one common point: like PurestConsole, if you have just one track playing, it ought to come through pristine and perfect, no matter which single track it is. Then if any other track so much as whispers its presence, you’ll have heinous distortion of an unusual kind. I would say ‘Autechre’ but they’ve probably already done this before in Max/MSP. :)\r\n\r\nI make these things because I have a Patreon that frees me from starving, and also frees me from having to release popular and sensible plugins that are nice and approachable. Mind you, some of my plugins can be approachable, and I like making those too… I have progress on the mono-bass version of DubSub, and I’m happy with BassKit, the streamlined and polished mono-bass-enhancer that lets you beef up tapey or bassbin-y fatness in mono or add literal subsonic thunderousness with the octave divider… but thanks to the freedom of the Patreon I can make things that are truly themselves, with no nod to popularity whatsoever.\r\n\r\nuLaw is like that. You probably don’t have it because it’s ugly and strange and needs to be designed into a more sensible configuration, typically with a bitcrusher and nothing else, because nearly anything else you do with it produces horrible noises.\r\n\r\nI’m genuinely happy to bring you this audio chainsaw. You never can tell what will be handy, either as the pair, or individually: logarithmic processing may well find creative uses. Have fun!",
    Comments: "",
    Name: "uLaw",
    Date: 1539475200000,
    Url: "https://www.airwindows.com/ulaw/",
    Category: "Consoles"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a very clean, plain, high quality supersonic filter, for using inside digital mixes.\r\n\r\nNow here’s a handy little utility plugin… sort of the ultimate Airwindows plugin, not only does it not have an interface, it doesn’t have a sound! :D\r\n\r\nHere’s why you should care… especially if you work at high sample rates.\r\n\r\nAliasing in digital mixes is annoying. You typically don’t hear it directly, but it coarsens and flattens the mix, throwing all sorts of funny harmonics in there at random frequencies, like subtly ring modulating everything (the aliased harmonics go off on frequencies not related to the original notes, and clash). It’s often very subtle, but it turns up everywhere you have nonlinearities. If you distort stuff in digital mixes, you run straight into aliasing problems. Same if you compress, or do anything nonlinear… and even if you make a mix as pristine and minimal as possible, if you’re mixing in the Airwindows Console system that uses nonlinearities too.\r\n\r\nYou can run at higher sample rates and that gives you more room, you can use soft saturations (like what’s in Console) and that makes the harmonics appear in order so only the highest frequencies will fold back and alias, but it’s in a computer: you’ll always run into the limits of juggling numbers and calling it music, and you’ll experience aliasing through nearly anything you do.\r\n\r\nBut what if you just took those problem frequencies away?\r\n\r\nUltrasonic is very simple. It has no controls. It’s a really steep lowpass filter at 20K (five poles, and it works out to 10th order Butterworth filtering). Unlike some ‘audible’ Airwindows filters that are supposed to sound interesting, Ultrasonic doesn’t use internal Console processing: that would be a nonlinearity, and defeat the purpose. Instead, it’s a super high resolution very boring and plain supersonic filter, calculating stuff at long double resolution, dithering its result to whatever floating point buss your DAW uses, and otherwise having no sound of its own.\r\n\r\nDrop it into your (preferably 96k or 192k) digital mix and it will clean up anything nonlinear that goes after it. This includes Console! Just because Console ‘decodes’ doesn’t mean it can’t be hurt by aliasing of its nonlinearities: it just distorts so gently that it’s not automatically worse, but any aliasing that turns up in ConsoleChannel doesn’t get taken away by ConsoleBuss. Digital only gets worse, not better, and the trick is to make it get worse as slowly as possible while you work with it.\r\n\r\nWhen you use Ultrasonic, for instance on every channel in a Console mix, you trade a degree of rawness and immediacy for an ease and smoothness that is immediately apparent if your stuff is running into nonlinearities anywhere. In many ways it makes the digital mix sound more analog. The tradeoff is, it’s still five poles of biquad filtering, and it will make stuff sound a bit slick, a bit more ‘processed’. You can kinda hear that you’re doing the extra processing, but the texture change is really appealing: stuff sits back (less super-treble will always sound more like the audio ‘sits back’ and is more polite) and bright shiny stuff sounds purer and sweeter. This is all the more true if you’re processing heavily.\r\n\r\nIt’s very easy to use: just put the plugin before anything that might alias. By itself it should have no sound (though if you have true 96k or 192k audio, it of course is obliterating your real supersonic content). There are no controls and nothing to do, it isn’t itself nonlinear so it shouldn’t interact with anything, you don’t have to gain stage it or pay any attention to it at all. Very plain, simple, hopefully pretty low-CPU for all that it’s five poles of filtering at stinkin-high calculation accuracy.\r\n\r\nPut it on everything that you want to smooth out and un-digitalize. Sometimes there’s nothing quite like beating the problem into the ground with a sledgehammer. For frequencies over 20K and the aliasing that loves them, this is that sledgehammer. (It is also biquad filtering, so it runs with zero latency and you can track through it)",
    Comments: "",
    Name: "Ultrasonic",
    Date: 1606003200000,
    Url: "https://www.airwindows.com/ultrasonic/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "",
    Comments: "",
    Name: "Ultrasonic Lite (and Medium)",
    Date: 1632614400000,
    Url: "https://www.airwindows.com/ultrasonic-lite-and-medium/"
  },
  {
    Name: "UltrasonicLite",
    Description: "is just one stage of supersonic filter, for using inside digital mixes."
  },
  {
    Name: "UltrasonicMed",
    Description: "is two stages of supersonic filter, for using inside digital mixes.\r\n\r\nHi! This is just what it says on the tin. Airwindows Ultrasonic is the stacked-up, five-biquad filter that rolls off everything above 20k, so in theory it has no sound of its own. It’s there to work in high sample rate mixes, between plugins that have nonlinearities and don’t have their own filtering (some of mine do, like Console7) and it will clean up the top-end of a digital mix.\r\n\r\nBut, the original Ultrasonic has SO many stages of filtering that it starts to become audible, softening the highs, and if you used lots of them you’d eat your CPU and would be over-processing.\r\n\r\nSo, enter Ultrasonic Lite (and Ultrasonic Medium).\r\n\r\nThese are the same sort of thing, except Ultrasonic Lite has only one stage of filtering, and Ultrasonic Medium has two. They also start a teeny bit higher, on the assumption that if you’re reaching for a Lite version of the filter, you’re looking to not hammer your highs too much. Ultrasonic Medium also subtly staggers the placement of its filters so it has a two-stage roll-off that is hopefully more natural sounding than just doubling up Ultrasonic Lite on its own.\r\n\r\nUse these just like you would use Ultrasonic, if there are places in your digital mix where you think you’d benefit from suppressing ultrasonic frequencies. These are not brickwalls: the idea here is that you can sprinkle these throughout your mix, anywhere you like, both before and after things that are nonlinear and distorty. For the strongest possible effect, use the original Ultrasonic… but in places where you don’t need that much help with the ultra-highs, try Medium or Lite and apply a cleaner, subtler filter that lets more of the air through.\r\n\r\nIf you’ve got something that’s causing an aliasing that will give problems further down the mix chain, and you put Ultrasonic Lite in front of it and the aliasing that would’ve bounced back down to 40k is turned down before it even aliases, making that unwanted 40k quieter… and then there’s another Ultrasonic Lite afterwards and that directly turns down the unwanted, aliasing 40k… then you’ve got a gentle, distributed aliasing suppression across your whole mix, that will really control the tendency of aliasing to just build up and go critical on ya :)\r\n\r\n(followup: turns out using many instances of this WILL tend to roll off your highs, where using the full version won't. This is because the full version's doing more processing, but creating a steeper filter. This insight led to UltrasonX, and later versions of Console)"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a method for rolling your own Console-type systems with total control over your ultrasonic filtering.\r\n\r\nA little while back, I made a simpler ‘Ultrasonic’ filter, with the intention of making a lighter-weight utility that could be used where Ultrasonic might go. The idea was, Ultrasonic (which is already available) was too heavy: it uses five stages of biquad filtering and I thought doing the same thing with just one or two stages would be better.\r\n\r\nTurns out you can do that, but if you stack them up you start losing the super-highs. The one or two-stage versions weren’t steep enough: didn’t bring out the super highs close enough to the ultrasonic zone. But, the five stage version is still just too much processing to put all over the mix. What do?\r\n\r\nUltrasonX solves this problem (that maybe nobody but me had :) ).\r\n\r\nThis is a plugin that does any one of the five stages in Ultrasonic, one at a time. It’s got settings for A, B, C, D and E stages. Each of these are a carefully calibrated resonance value, that add up to nice and flat and clear all the way up to the supersonic region.\r\n\r\nConsole7Cascade does something like this, internally, and gets a particular tone because its ‘more resonant A stage filter) is before distortion, and the softer unresonant filters that compensate for this are after the distortions.\r\n\r\nBut here’s the thing: if you want to make a Console topology where the channels aren’t overly brightening, but you’re feeding a submix buss that is more crunchy and shouldn’t be hit too hard, you can do that too. This is likely going to end up my problem but now you can experiment!\r\n\r\nTo do that, construct a Console system, using an earlier Console or PurestConsole (the original) and see to it that there are exactly five instances of UltrasonX in each signal path. Maybe two on each channel, two on the submix, one on the 2-buss! Or, one on each channel before hitting the PurestConsoleChannel, one on the 2-buss before the PurestConsoleBuss, and then three more sprinkled between your 2-buss processing. And any of these can be the ‘pre-brightening’ or ‘complementary darkening’ ones, meaning you could have the brightness boost after summing for a bit of air in between your instruments, or early on for softening saturation and adding glue.\r\n\r\nOr, you could use it anywhere, or on one single channel (that didn’t have ultrasonic filtering) as long as you’ve got room to fit five individual filter plugins. Bottom line is, if your audio goes through ABCDE and comes out the other end, it should be correct. The rest is up to you :)",
    Comments: "",
    Name: "UltrasonX",
    Date: 1641686400000,
    Url: "https://www.airwindows.com/ultrasonx/",
    Category: "Subtlety"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is a distortion where only the harmonics that don't alias are allowed to distort.\r\n\r\nWhile I’m putting out my library of plugins according to plan, sometimes I need to take a detour into new stuff. UnBox is one example.\r\n\r\nThe idea’s as follows: if you distort stuff digitally, it aliases. This can be seen as harmonics seemingly bouncing off the highest frequency, and going back down again. The idea is that if you have digital saturation or distortion without massive oversampling, you’ll always have aliasing and everything is ruined forever.\r\n\r\nThat’s not quite true. It depends on the frequency, and the form of distortion… and many of my plugins have gentle enough distortion curves that they throw a limited number of harmonics. If you are only generating harmonics within the range of digital audio’s frequencies, you’re fine and there will be no problem until you feed the system a frequency that’s too high. You’re not automatically feeding superhigh frequencies all the time if you’re working with natural recordings: not all sounds contain that kind of high frequency content.\r\n\r\nIf you DO have that sort of high frequency content, what then? It occurred to me I could take the difference between dry and distorted, store it in an averaging filter, and average it. This would suppress high frequency content in only the distortion artifacts. (I then learned that I needed to average the signal being fed to the distortion part, which is Spiral again: it got a little complicated)\r\n\r\nAnd I could even highpass the distortion part… and all this is applying only to the distortion part. It’s all handled as a single subtract from the raw signal coming in.\r\n\r\nWhat that means is this: UnBox is a distortion that cuts down the level of the signal, but ONLY the mids. Depending on how it’s set, it will let through more and more of the ‘dry’ highs, unaffected. It’ll also let through a hint of bass for definition. Underneath this layer of clarity, the distorted part can be made pretty distorted, but it’ll stay free of aliasing even up into the high frequencies, because those frequencies aren’t actually getting applied to the distortion, and the distortion output’s also being smoothed after the fact. So you’ve got a texture-thickener, an energy-adder, that retains a very analog quality because all of the overtones stay clear of aliasing WITHOUT oversampling. The raw sound is still a direct pass-through and that’s where the clarity comes from.",
    Comments: "",
    Name: "UnBox",
    Date: 1536451200000,
    Url: "https://www.airwindows.com/unbox/",
    Category: "Saturation"
  },
  {
    Use: "",
    Type: "Compressors +",
    Description: "is a more organic variation on Pressure (a compressor)\r\n\r\nI’ve got something nice: everybody likes yet another compressor, right? I’ve got ButterComp, Swell, Logical4, the one in CStrip, Surge, SurgeTide, Pyewacket, Thunder, and of course Pressure4. All those are free (and I’m working on getting them open source as well, but first I want to get the actual plugins out).\r\n\r\nSo clearly what we need is YET ANOTHER free compressor as we plainly don’t have nearly enough. We must run all the compressors, in a row, until everything is so compressed we can’t even stand ourselves! :D\r\n\r\nNo… there’s a non-joke reason. And that reason is, all those sound very different. They won’t all work for everyone: for instance, Pyewacket is all about retaining the attack transients of things and just stepping on the tails of envelopes. Swell is about stomping out those very attack transients until they’re all gone. Surge is about very smooth gain shifts that are totally transparent and more like an automatic gain control. SurgeTide is the same but more so, it’s almost completely unmanageable. Logical4 is about acting like a hardware stereo 2-buss compressor, and so on.\r\n\r\nVariMu comes from Pressure, originally. What it does differently is trigger using different math: it uses the square of the input signal, not just the signal alone, and it also handles brief transients differently. This makes it sound very different from Pressure, so if you like Pressure you should try it… and if you didn’t like Pressure, you should also try it, because it sounds different.\r\n\r\nThat’s really the essence of all these Airwindows compressors (perhaps more than any other class of plugin). They’re all different algorithms, often pretty weird ones, and sound very different from each other. So you have to pick which ones fit with your type of music… but also, you don’t have to pick, because they’re all available to you for experimenting with, and if I come up with something weird and non-useful (SurgeTide comes to mind) then thanks to the Patreon I can put it out anyway, without worrying that it would kill the buzz and have people wondering if Airwindows has lost it. Even if it’s useful to just one person, I can release anything, no matter how weird.\r\n\r\nBut this time, I don’t think I’ll be making excuses like that. VariMu has a good sound to it. I hope you like it :)",
    Comments: "",
    Name: "VariMu",
    Date: 1534032000000,
    Url: "https://www.airwindows.com/varimu-vst/",
    Category: "Dynamics"
  },
  {
    Category: "Filter",
    Name: "various Biquad variations"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is my new best reverb, which uses feedforward reverb topology.\r\n\r\nLate nights of reverb hacking (ok, Monday mornings?) give rise to a new best reverb. At least, best for me. Perhaps it’ll count as ‘best’ in general, we shall see, that is rather a matter of taste but it’s my new favorite and is inspiring me a lot.\r\n\r\nMeet Verbity.\r\n\r\nThis came from experiments in feedforward reverb topology, something Casey from Bricasti likes to recommend. Well, I can see why! Verbity uses the same Householder reverb matrices as the previous Reverb and MatrixVerb, but instead of each bank feeding back on itself, each bank feeds another bank and only the very last one of three, feeds back to the start again. I’m going to call this innovative not because it’s such a novel concept, but because it’s innovative to me, as I’d never figured that stuff out before. There are interesting things having to do with how you arrange the delay times across the three banks, and I’ve got some concepts from MV going for less sustainy spaces that should help spatial plausibility, and I’ve made some choices around the wetness and filter controls that are a little unusual.\r\n\r\nBottom line is, listen to this thing! I’m real happy with the tone of it. I feel it sort of kills all my previous reverbs, which is awkward when I named one of them ‘Reverb’, but my namespace issues won’t affect your reverb tones. Just listen! Casey’s a wise man, and was certainly right about the usefulness of feedforward networks. I haven’t got any of his code or any other hints from him… but all the same, that one detail made a huge difference.\r\n\r\nThe Darkness control has one quirk to be aware of: you can adjust it all the way to total darkness, 1.0 which translates to complete lowpass filter. Be aware that if you do that, you can trap DC energy inside the filter, so if you’re going for extreme filtration try to adjust so that the value is nearly 1.0 without actually being it. For most purposes that should work: I just don’t like to restrict the controls. For any normal use you won’t have Darkness nearly that high anyhow.\r\n\r\nThe Wetness control is not exactly a traditional Dry/Wet, so I’m using Wetness as the name. What it does is, as you increase it you add Wet up to 0.5 setting without turning down Dry AT ALL. Verbity can be used on stems and busses in a Console mix to put excellent custom reverb spaces on things, and set up this way you’re not constantly shifting your dry-signal level when adjusting, you’re just adjusting the verb level in there. If you go beyond 0.5, you start attenuating Dry while leaving Wet at full crank, and for sends you’ll want Wetness to be 1.0 just as it would be with a Dry/Wet.\r\n\r\nThis is a dual mono verb, so for now you don’t gain anything adding Srsly2 unless you have actual stereo content going in. Centered stuff is going to stay centered. You might not notice right off since it’s so deep, so I’m telling you. This is consistent with my other reverbs, except that MatrixVerb and Reverb are able to add stereo pitch bending which will spread center content. Verbity is your basic Airwindows Bricasti-style reverb, which also means it doesn’t have pitch shifting: Casey doesn’t like it, and this is an exploration into the things Casey’s talked about publically, to see if his wisdom leads to better reverbs.\r\n\r\nSigns point to yes :)",
    Comments: "",
    Name: "Verbity",
    Date: 1615075200000,
    Url: "https://www.airwindows.com/verbity/",
    Category: "Ambience"
  },
  {
    Use: "",
    Type: "Nonlinear",
    Description: "lets you vibrato, chorus, flange, and make odd FM noises.\r\n\r\nThe heart of Vibrato is the Airwindows moving-delay-tap interpolation code also found in Chorus and Flanger, but here there’s some extra functionality plus ways to partially simulate those other plugins: while you can make the full-wet sound do a nice vibrato (automate to taste), there are other fun things to do. You can use the dry/wet to get a chorusing effect, or with less depth, a flange: or set it to ‘inverse’ to get the same but with a through-zero flange that’ll cancel almost totally to silence. This can also be used as an interesting sort of highpass (or of course, using normal wet, as a sort of lowpassy effect). That’s all with the main vibrato control, which has an extremely wide speed range.\r\n\r\nOr, if that’s not enough, you can bring in the FM vibrato. This has the same type of speed control, and a depth control of its own, but instead of affecting the audio directly, it affects the speed of the main vibrato. You can use this at low speeds to provide an interesting modulation to the main vibrato, flange or chorus, or crank it up to produce distinctive overtones. And again, automate it to do even more interesting things.\r\n\r\nVibrato is a nice little utility plugin, and I think it deserves a place as a go-to ‘time modulation’ plugin for people who have a solid understanding of how these effects work. It’s not hugely complex, or specialized, and it’s just complicated enough to be sophisticated. Want a lush chorus? Vibrato. Warbly effect? Vibrato. Thin things out in a way that sounds airy and interesting? Vibrato, inverse-zone, near 0.5 for maximum effect. Funny overtones and resonances? Vibrato, full-wet, up in the audio range. Even more metallic? Bring in some FM.",
    Comments: "",
    Name: "Vibrato",
    Date: 1565481600000,
    Url: "https://www.airwindows.com/vibrato-vst/",
    Category: "Lo-Fi"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "vinyl-dither-redux",
    Url: "https://www.airwindows.com/vinyl-dither-redux/"
  },
  {
    Use: "",
    Type: "Dither",
    Description: "is a high-performance dither that converts digital noise to ‘groove noise’.\r\n\r\nTo explain this dither, I’ve got to talk about SACD (DSD) a little.\r\n\r\nThere’s a super-hi-fi digital format known as DSD (direct stream digital). It uses a sample rate in the megahertz, but not as many bits (as few as one, even!) and is tricky to work with. It’s a bit like having Class D amplifiers: those also use an incredibly high frequency switching system, and produce a clear, fluid sound that totally lacks some audio flaws.\r\n\r\nDSD is like that. There are some things it does incredibly well, and other things it gets wrong. Notably, it’s incredibly good at delivering accuracy on deep bass notes, but it’s all over the place on supersonic frequencies and can produce a ‘splat’ of high-frequency overreaction if you drive it too hard there. The performance of DSD increases as frequency lowers. All its ugly is reserved for the super-highs, but nothing comes close in the midrange, low mids, bass and so on. That’s fundamental to how the format works: accuracy becomes a statistical pitch-related thing and the deeper you go, the more of a lock DSD has on the sonic truth.\r\n\r\nWhat if it was possible to emulate this behavior in a dither? First, you’d need to use a really intense noise shaper, not just dither noise. Then, you’d have to make it have the same frequency-related thing where lows get increased accuracy. And lastly, you’d pay the same price: it’d drive the error of the system into the highs and do a lot of unpredictable, ugly things there.\r\n\r\nMeet VinylDither! It’s the extension of an old dither I had called Ten Nines, which does exactly this. With Ten Nines I was able to get a noise floor under -200db on 16 bit audio (if I remember correctly)… but only at frequencies ten hertz and below! It also spit out loudish crackling noises at high frequencies. The experiment worked, but not everybody loved it.\r\n\r\nHowever, if you weren’t paying close attention, the noise behavior was kind of like record surface noise, and that gave me ideas.\r\n\r\nVinylDither is the result of pursuing those ideas. It’s a dither/noise shaper which completely removes the ‘steady white noise’ noise floor of normal dithered digital, and replaces it with a more crackly, surface-noise kind of sound. That’s produced from storing up error energy that would mess up your midrange and bass, and releasing it in bursts and sparks. VinylDither is the first of three dithers I’m releasing that are professional quality, boutique dithers and sonically better than TPDF. If it’s really important to you for your noise floor to be featureless and sound like white noise down there, you won’t want this. However, if you’re an analogophile and like vinyl records, you’ll instantly recognize the ‘vibe’ of this one. It does an incredibly good job at giving ‘vinyl’ clues down at the threshold of hearing but this is not a ‘sound effect’ being added, it’s the natural digital error being rearranged to get that effect.\r\n\r\nSo, if you want ‘vinyl’ effects added to your mix so it sounds like a retro vinyl record coming off the computer, this is the single subtlest way you can do that, plus you could combine it with other things (like the Audio Unit ‘ToVinyl’ which does elliptical EQ and has an amazing groove wear emulation built in) and get a completely different vibe. Wrecking your sounds with heavy overprocessing isn’t necessary! You can just pick specific things to give a more subtle vinyl feel, and VinylDither is the perfect dither choice for it. Yes, it’s got more depth and warmth and vibe than plain old TPDF (or truncation), but I think the interesting part is examining the faults of VinylDither (crackling noises, not smooth noise) and understanding how they can be turned into advantages (crackling noises OK, do not correct! As it says on my vinyl copy of Live At Leeds cooge )",
    Comments: "",
    Name: "VinylDither",
    Date: 1481068800000,
    Url: "https://www.airwindows.com/vinyldither/",
    Category: "Dithers"
  },
  {
    Name: "Voice",
    Description: "Of The Starship is a deep noise tone source.\r\n\r\nThis is the core of Noise, in maybe a more approachable form. The algorithm works like this: you do a random noise wander, where the audio output drifts around randomly with random amounts being added and subtracted from it. This is known as a random walk, and even if the amounts are equally positive and negative, the result will do two things: it'll give you more of a bassy rumble, and the loudest part of this bass will be a DC component. In other words, you can't use this directly for audio, because it won't make frequencies.\r\n\r\nVoice Of The Starship uses a flipping variable to alternately add and subtract the randomness, which is what makes the amounts equally positive and negative, but it does one more thing: it runs another variable so that, periodically, it'll take a moment to check whether the output is above or below zero… and at that moment it will ALWAYS use the randomness to move toward zero.\r\n\r\nThis is enough to fix the DC problem, without adding a filter. (mind you, VOTS does also have lowpass filtering to help with the dark tonalities.) When you adjust Voice Of The Starship to have a less bassy noise, what you're doing is making it revert to zero more often, still with the simple randomness it's using.\r\n\r\nThis lets you go from regular noise to deep dark noise to purely subsonic rumble. I also used this algorithm for background ambience in my game Counterpart. Now it’s open source under the MIT license, so other game projects can have algorithmic noise (better and more flexible than wave files)"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Comments: "",
    Name: "Voice Of The Starship",
    Date: 1518912000000,
    Url: "https://www.airwindows.com/voice-of-the-starship-vst/",
    Category: "Noise"
  },
  {
    Use: "",
    Type: "Zero Latency",
    Description: "lets you record vocals while monitoring over speakers.\r\n\r\nRecord your vocals without headphones with This One Weird Trick! :D\r\n\r\n…\r\n\r\nNo, really, that’s actually the idea. I have to explain the trick or the plugin will make no sense at all, but if you know what to do you can record vocals with monitor speakers or open-ear headphones and get great results. Here we go.\r\n\r\nVoiceTrick isn’t meant to be heard by end listeners and doesn’t do anything useful for the sound. Instead, it exploits some quirks of microphones and the human ear to make it so you can put up a mic, blast your backing tracks, and record (mostly) just the vocals and not so much the backing tracks coming out of the speakers. It’s fiddly to do if you want really impressive results, but there are lots of benefits: most of all, allowing singers to hear themselves as if they were singing a capella, because they literally get to ditch the headphones if they like.\r\n\r\nWhat it does (it’s a stereo plugin, for the monitor mix) is make the mix into mono, filter it (if you like) and then flip phase on one side.\r\n\r\nWhat YOU do is, place your vocal mic EXACTLY between the two speakers, perfect mirror image, pointed away from the speakers and towards the vocalist. The closer you can get to a perfect mirror image the better your results will be: if the bounce off the back wall is still a perfect mirror image, that’ll cancel too. Eventually you’ll get into a room reverb off the speakers, but that’s probably OK, and if you need that room reverb to be darker, that’s what the EQ is for. It’s the lowpass from Airwindows Capacitor. You’ll have NO vocal in the monitors at all, it’s all acoustic volume from the singer. If you take some time and effort to set up the perfect cancellation (Peter Gabriel would take days to do this) you might want to use a heavy sturdy stand that really locks the mic in one position. If you’ve got that perfect, you can sing into the mic and crank it WAY up in the mix without issues, or compress it. If the mic is off-center, you’ll hear a flangey hint of the backing tracks.\r\n\r\nAnother thing you can do is use open-ear headphones the same way. With those, it’s even more likely that the earpieces will move relative to the mic (which still should be exactly centered) and you’ll hear more of the flangey quality. That’s literally what’s happening: it’s like a through-zero flange at the mic position. Your ears will hear more than the mic does, because they reconstruct the sound field in stereo and the mic can only hear what’s exactly at its point of sound collection. If the earpieces move, they won’t be as loud as speakers but they’re much closer to the microphone. On the other hand, they’re closer to each other, so they’ll always cancel a lot of bass and low midrange no matter how off-axis they get. If the flangey stuff is bothersome, use the EQ to roll off the extreme highs until you can live with the results. Pretty simple.\r\n\r\nThis is all the more important in the age of DAWs, because if you’re monitoring through a DAW (especially if you’re tracking through plugins or into a big dense mix) you might be dealing with a lot of latency. Latency in vocal monitoring can completely obliterate your ability to sing or even talk, and the better a singer or performer you are, the worse it will hurt you. VoiceTrick lets you go back to a capella, where there’s no latency or even headphones to interfere with your performance.\r\n\r\nThis One Weird (Voice)Trick is free. It’s real simple, it’s a convenience plugin. Please don’t master through it or everyone will be sad :) if you’d like to support my ability to do this and more, please jump on my Patreon as that is why you still have me here doing this a couple years later. I’ll scale this operation up as much as I can: that depends on you, and I suppose internet virality. In the complete absence of internet virality, I’m happy to say I’m still here and able to give you the proverbial One Weird Trick for vocal tracking. Hope it makes your life better. :)\r\n\r\nVoiceTrick is in current versions of Monitoring as one of the monitoring options.",
    Comments: "",
    Name: "VoiceTrick",
    Date: 1557619200000,
    Url: "https://www.airwindows.com/voicetrick/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is the definitive Airwindows style plugin. It’s a wah pedal. Really—try it! It’s a one-slider freebie that works and acts like a wah pedal. I used this plugin to test out some ideas for smoothing control input, so working the frequency will give a more fluid effect than typical plugins.",
    Comments: "",
    Name: "Wah",
    Date: 1207008000000,
    Url: "https://www.airwindows.com/wah/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "welcome-to-the-completed-site-rebuild",
    Url: "https://www.airwindows.com/welcome-to-the-completed-site-rebuild/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Why I’m Kind Of Stuck Running Youtube Advertising",
    Date: 1484784000000,
    Url: "https://www.airwindows.com/youtube/"
  },
  {
    Use: "",
    Type: "GetSampleRate",
    Description: "is Airwindows stereo space shaping.\r\n\r\nHere’s a nice little building block. It’s stereo-only for obvious reasons (in AU, you won’t see it available on mono tracks): it’s a stereo space adjuster.\r\n\r\nIt works like this: you’ve got mid and side channels, but taken up several notches. Instead of being adjusted by level controls, the sliders use the Density algorithm. That means if you’re boosting, they get fattened up, and if you cut, they retain some of the edge and definition. This technique from Density has a way of moving audio’s position in space: boost comes forward, and cut moves backward. It turns out that’s perfect for manipulating the shape of a stereo space.\r\n\r\nBut that’s not all: as a final space-manipulating technique, Wider applies an itty-bitty time delay and interpolation (it can be as small as sub-sample) to whichever is the least forward, mid or side. That causes a delicate roll-off and sits the relevant part just a tiny bit back, spatially… and then the audio’s recombined into stereo again. It’s a bold thing to try, but it’s done very subtly so you wouldn’t know it was happening except I’ve just told you, so my secret is out :)\r\n\r\nThe result is this: you can kinda-sorta use Wider to produce extreme stereo effects (look for StereoFX, coming soon, as a better way to get aggressive with space) but it really comes into its own when used to redesign stereo soundfields. With tiny, small adjustments, you can get hugely effective results that sound totally natural. This is the mastering-grade one, where you can transform the source in a convincing and musical way, and not lose anything in the process. The effectiveness and transparency, especially when used for tiny corrections, will make this a go-to plugin for real stereo work.",
    Comments: "",
    Name: "Wider",
    Date: 1525564800000,
    Url: "https://www.airwindows.com/wider-vst/",
    Category: "Stereo"
  },
  {
    Category: "Filter",
    Name: "X Filters"
  },
  {
    Use: "",
    Type: "",
    Description: "is a distorted digital EQ, inspired by retro sampler DSP.\r\n\r\nHi! This is the bandpass version of the X series Airwindows filters. If you know what a bandpass is you can probably figure out what’s going on here. More detail in the other filter types: the X filters mean experimental, and they're also written before I was interpolating coefficients, so these filters may produce zipper noise when adjusting them on the fly. However, that also means they are more CPU-efficient: it's a tradeoff.",
    Comments: "",
    Name: "xbandpass",
    Url: "https://www.airwindows.com/xbandpass/"
  },
  {
    Use: "",
    Type: "",
    Description: "is a distorted digital EQ, inspired by retro sampler DSP.\r\n\r\nContinuing the weird filter pursuits while I work on the M1 compiled VSTs! This is another distorted filter, except that if you distort the insides of a biquad highpass it makes NASTY zapping noises.\r\n\r\nSo… yay?\r\n\r\nThose who like that sort of thing might like this. It’s pretty good at making really mean aggressive highpasses, except that you can’t clean up the results by dropping the frequency down into the bass and subs: it will just clip easier, which will cause more horrible zap noises. So I guess, only try this if you like that sort of thing. They can’t all be zingers, though this one is quite literally a zapper :)",
    Comments: "",
    Name: "xhighpass",
    Url: "https://www.airwindows.com/xhighpass/"
  },
  {
    Use: "",
    Type: "",
    Description: "",
    Comments: "",
    Name: "Xiaomi Yi Tuning With autoexec.ash",
    Date: 1486339200000,
    Url: "https://www.airwindows.com/xiaomi-yi-tuning-with-autoexec-ash/"
  },
  {
    Use: "",
    Type: "",
    Description: "is a distorted digital EQ, inspired by retro sampler DSP.\r\n\r\nWelcome to the Airwindows journey into vintage sampler land! This might prove to be a long journey, but every journey starts with a first step.\r\n\r\nMaybe the first step was Mackity and MackEQ: hardware mixer emulations. (that’s not necessarily done, either: it’s the 1202, beloved to French House music, that I did, but the DnB-hounds liked the 8-buss.) But the follow-up is just the sort of thing I might want to look into: certain of the E-mu Z-plane filters. Apparently not even the really fancy stuff… but the way that the simple lowpasses and highpasses would distort when you abused them. And it seems nobody’s that interested in exploring that, because these are not analog filters or particularly sought-after, except by those in the know.\r\n\r\nAnd we know some stuff about them, because the information is out there… but a lot of devs don’t think of them as interesting. They’re biquads, with hard clipping inside the EQ code, and implemented in certain ways for efficiency: and if you can have properly made stock DAW filters, why would you want lower-bit calculation or clipping or stuff like that?\r\n\r\nXLowpass… is NOT the end destination. There will be more like it but the X series of Airwindows filters (handy to look up in the plugin list) are NOT the carefully tailored E-mu emulation (or at least tone-alike, to the best of my ability?) XLowpass is getting familiar with the CONCEPT, an internally distorted multi-stage biquad and how I can manipulate it to get sounds out of it. It’s not meant to itself sound like an E-mu e6400 (that being the sampler I have, so far), but it’s a plugin that can dial in a whole range of the craziness people had to go to a lot of trouble to do in the real sampler (internal distorting and so on). And you can run it into Mackity and see whether you’re within striking distance of some of the more gnarly DnB tones that belonged to the 90s, seemingly lost to time.\r\n\r\nAnd when the Y series comes out, things will be even more off the hook, because Y stands for “WHY would you DO that?!?” and it means I do the same thing, except with wavefolding on the internal distortion. So those should get GNARLY.\r\n\r\nAnd then when I get to work on the eventual ZLowpass etc, and stack them up against real Z-plane hardware (note, however, I will not be cloning the algorithms, I am just going to try and get the tone the same), then I’ll have some practice under my belt.",
    Comments: "",
    Name: "xlowpass",
    Url: "https://www.airwindows.com/xlowpass/"
  },
  {
    Use: "",
    Type: "",
    Description: "is a distorted digital EQ, not as glitchy as the others.\r\n\r\nThis is a little different from some of the X series filters. I was asked whether I could do a notch filter like the other stuff I’d been doing: all these filters with Nuke controls that do crazy things when you distort them.\r\n\r\nThis is not quite like that.\r\n\r\nXNotch is the same topology: biquad filters, with distortion stages in there. But instead of distorting inside the filter for crazy behavior and weird noises, this one distorts BETWEEN stages of filtering and that makes it act much more normal. So… why would I include it in the weird-zone with stuff like XHighpass?\r\n\r\nBecause the combination of those things and the dry/wet control makes it INCREDIBLY useful.\r\n\r\nWhat you do is, for a sound source (for instance a kick drum mic), you dial in a notch where you want it. As you add input drive, or increase Nuke, the saturation will get more and more intense, but only apply to the stuff outside the notch. You can thicken up percussive sounds very well this way, or take drum overheads and focus on the treble sparkle by notching out midrange, or sweep it around for a phasey effect (this plugin is unusually well-behaved for automation, for some reason the notch biquad takes modulation better than usual) and then bring in dry to balance the intensity of the effect.\r\n\r\nBut if you’re using it to thicken up sounds, you can continue to push the saturation or Nuke while you’re doing that, which means you’re contouring both the tone and the compression of just the stuff you’re trying to enhance, and balancing it against a dry signal that’s effectively uncompressed/unsaturated. The real reason I knew I had to put this out just as it was, is because it became easy to just dial this stuff in, with very few controls, and no fuss.\r\n\r\nIt doesn’t do crazy things (unless you count allowing for heavy distortion) but the thing it does, is a thing I’ve been needing. I think it might replace Console7Cascade for some of my drum tracks, just because it can saturate and also notch, which will give me a way broader spectrum of available, useful tones.\r\n\r\nAnd now you’ve got that, too :)",
    Comments: "",
    Name: "xnotch",
    Url: "https://www.airwindows.com/xnotch/"
  },
  {
    Use: "",
    Type: "",
    Description: "is distorted staggered bandpasses, for extreme soundmangling.\r\n\r\nXNotch too normal for you? HERE YA GO :D\r\n\r\nXRegion is made out of bandpasses, like XBandpass, and if you keep the First and Last controls set the same it does act like an increasingly manic bandpass.\r\n\r\nBut, if they’re set differently and the Nuke control is up (engaging more poles of filtering) here’s what happens: first we go into the First bandpass, distorting before we filter (turns out if we make these filters glitch out the result is just too predictable) and then we go through each successive bandpass (up to five) each of which goes a step farther towards the frequency setting that’s in Last. We’re covering a region, we’re spreading the response out.\r\n\r\nBut we’re also distorting, each time.\r\n\r\nSo, if First is a higher frequency than Last, we get progressively lower pitched bandpasses and a sort of thick, roaring, dense tone. But if Last is a higher pitch than First… we’re starting with a bassy distort, and then filtering out the SOUND and keeping only the DISTORTIONS. Oh, and the farther apart you spread the controls the more gain it uses.\r\n\r\nSo basically this is raw industrial mayhem. It’s so bonkers you can use it inside uLaw and the result won’t even be crazier. In theory you can use this to get a really intense bandpass effect, for instance distorting a snare or something, and carefully control the gain and ‘Nuke’ (less of that means less bandpasses, and it won’t go all the way towards ‘Last’ anymore). But you can also just go nuts with it for some filter-sweepy, very distorted effects that won’t be like anything you’ve heard. I suspect the ‘nice’ uses of this will be much more limited, though in theory it should be as good at those as XBandpass is (to get a nice smooth distort, don’t spread First and Last too wide, or set them too high or too low, and balance the result with Dry/Wet)\r\n\r\nThere are a lot of people who won’t need this… at ALL. For those who do… hope you like it :)\r\n\r\nAs an aside, XRegion can do a really killer overdriven bass amp kind of a tone.",
    Comments: "",
    Name: "xregion",
    Url: "https://www.airwindows.com/xregion/",
    Category: "Amp Sims"
  },
  {
    Category: "Filter",
    Name: "Y Filters"
  },
  {
    Use: "",
    Type: "",
    Description: "is soft and smooth to nasty, edgy texture-varying filtering.\r\n\r\nYBandpass has various uses. One I was trying out in the video, was setting it up as a ‘walkie-talkie’ sort of tone on my voice, and then turning up ResEdge to really trash the hell out of the audio in a characteristic way that’s not easily found anywhere else. In some ways I think bandpassing is the ideal way to use ResEdge (but we’ll see: haven’t tried it on a Notch filter yet)\r\n\r\nOne day I’ll tell you all about all the things that have been going on behind the scenes here. For now, accept my next Y series filter, and I hope you enjoy it. I feel like the Z2 series (I’m leaving the original Z filters as they are because there’s uses for that too and they’re lower CPU, but will be doing V2 versions with the good coefficient interpolation for folks who craved absence of zipper noise) will be what folks are really excited about, but I do think these Y filters will have their place. They all give you the same characteristics with ResEdge, plus they all give you that slightly warm, unusual texture when you put ResEdge to 0 (a setting of 0.1 is what will give you closest to a traditional biquad, while still not quite being one)",
    Comments: "",
    Name: "YBandpass",
    Date: 1636243200000,
    Url: "https://www.airwindows.com/ybandpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is soft and smooth to nasty, edgy texture-varying filtering.\r\n\r\nSee YLowpass, except it’s a highpass :) but there are several ‘one more things’, most notably an upgrade to what I’ve been using for denormalization. I ran into issues with YLowpass munching too much CPU. The fixes I came up with, worked so well, that I’ve applied them to Console7, Console7Cascade, Chamber, Galactic, and several plugins that haven’t come out yet :) As a result, my previous video using YLowpass crept up to 70% CPU at times, and this video using the exact same setup and plugins idles around 35%. I call that a good day (OK, week) of work.",
    Comments: "",
    Name: "YHighpass",
    Date: 1635033600000,
    Url: "https://www.airwindows.com/yhighpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is soft and smooth to nasty, edgy texture-varying filtering.\r\n\r\nIntroducing the Y filters! Where the X filters were eXperimental and the Z filters are emulations meant to sound like hardware, YLowpass is further researches before going back into the Z filters for refinements. I’m using these to perfect the designs, and YLowpass is an important step in doing that.\r\n\r\nIt’s got interpolated coefficients on everything, reducing zipper noise. And double ultrasonic filtering. But it’s got a lot more than that: YLowpass introduces a new way to internally distort filters, and a new control… Resonant Edge! The ‘normal’ position for this is around 0.1 on the control. If you make it less, you get a slightly asymmetrical distortion that lets you get really warm analog filter sounds, even when they’re resonant. I stacked a couple of these up in the video to get Alpha Juno saturated filter sounds, that being one of my favorite analog synths, and I demonstrate it directly against the real authentic Alpha Juno run into the computer using API pres for input gain, an unmistakably analog tone. YLowpass holds up pretty well under that scrutiny. And then, I bring in a drum breakbeat, and start showing off how crazy YLowpass can get. The Resonant Edge lets you go to very aggressive, glitchy sounds that are a lot more like circuit bending than bit-banging.\r\n\r\nI’ll be doing further Y series, and as I go I’ll be trying to refine the set every step of the way. For instance, in Bespoke I was getting some CPU issues (eagle-eyed viewers can see the CPU meter) since the Y filters will be rather heavy on the CPU. I’ve got some ideas for addressing this through adding an analog noise floor factor that could become part of Airwindows plugins as a general thing: experimentation will tell me the answers.",
    Comments: "",
    Name: "YLowpass",
    Date: 1634428800000,
    Url: "https://www.airwindows.com/ylowpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is soft and smooth to nasty, edgy texture-varying filtering.\r\n\r\nLet’s get through the December doldrums with a new plugin and some new sounds… because Y Not? (-ch)\r\n\r\nYNotch is the final incarnation of the Y series plugins, done to give me more experience with smoothing plugin controls. It’s got a smoothed biquad filter with more than a little extra: the Y filters all have a ResEdge control. This defaults to 0.1 (like the gain control) but it can be lowered to 0 for a softer, somewhat more organic tone… or, turned up and up and up until the filter begins to distort and act weird in very unusual ways.\r\n\r\nThis is NOT like a sampler model. It’s a whole other algorithm, putting weird edges on the way the filter resonates when the Resonance is turned up. You can basically dial in the sharpness of the edge, like with the other Y filters. But unlike the other Y filters, the Resonance control goes a little further. Not in sharpness, but in dullness… you can drop resonance down to where it’s basically an ultra-shallow slope cut, put the frequency to either extreme, and use the very first hints of the Resonance control to dial in an extreme low or high cut.\r\n\r\nAnd then either soften or sharpen the hell out of the edge, to get tones that don’t really exist anywhere else. Demoed with a Moog Sub Phatty using a M32 as a spare oscillator with a different portamento speed, filter wide open so the YNotch can do all the filtering and produce a mad hybrid bass grind sound.",
    Comments: "",
    Name: "YNotch",
    Date: 1638662400000,
    Url: "https://www.airwindows.com/ynotch/"
  },
  {
    Category: "Filter",
    Name: "Z2 and Z Filters"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a bandpass made to sound and act like the Emu e6400 Ultra bandpass.\r\n\r\nOn we go! If you’re following this project, well, this is the Bandpass version. This and ZHighpass have been adjusted to allow for more output gain (so you can work with less distorted things and balance them better with dry signal, using the left half of the Poles control to do it).",
    Comments: "",
    Name: "ZBandpass",
    Date: 1629590400000,
    Url: "https://www.airwindows.com/zbandpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "acts more like the Emu e6400 Ultra bandpass in motion, with coefficient interpolation.\r\n\r\nZBandpass2 is the followup that adds coefficient interpolation to my Z-Plane Filter emulation. Which of course is not to say that I had the code, or took apart the machine and cloned the schematic: no, these plugins are about running a reference sound into the real live Emu e6400 Ultra sampler, and smashing the crud out of it to get the most out of the filters and their distinct color and behavior, and then trying to mimic that in a plugin purely by ear.\r\n\r\nThe original Airwindows Z filters run more efficiently because they’re not asked to do as much: they have the same tone but aren’t trying to smooth zipper noise and interpolate, so if you need fixed filter settings don’t overlook those. However, half the fun of a real live sampler is to get funky with it, and so ZBandpass2 follows ZLowpass2 in adding the smoothing to everything, so you can automate whatever you like. Remember it’s set up to have lots of distortion and gain on tap, keep the input and output real low if you’re not just trying to melt the thing down (0.1 will give you basically unity gain, and the output will let you pad things a whole lot if you need to)",
    Comments: "",
    Name: "ZBandpass2",
    Date: 1639872000000,
    Url: "https://www.airwindows.com/zbandpass2/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a highpass made to sound and act like the Emu e6400 Ultra highpass.\r\n\r\nAnd here… we… go!\r\n\r\nI picked the highpass to attempt first off the e6400 because it’s way harder. In recordings of the real unit, if you overdrive the samples you can hear how the machine flips out when you sweep the highpass up real high. Part of this is from the output stages of the device having characteristics not unlike Mackity: you get a strange overshoot, and that’s from the hardware.\r\n\r\nThese are not exactly ’emulations’ in the sense of stealing all the code out of the 6400 and then modeling the entire circuit and basically jacking the whole thing. That’s not what I do, and that stuff always ends up sounding very plastic to my ear (way too much overprocessing to try and get the fiddly details the same: you end up with a clone, but soulless)\r\n\r\nInstead, ZHighpass is first in a series of Z-plugins, building on what I learned with the X series, and designed to act and respond the same as the real deal, but in the box. I got as close as I could with my own techniques, using some details (like where the filters hard-clip, and the likely Q factors) to zero in further. My hope is not as much that I’ve perfectly duplicated every detail of the hardware device… but that I made a plugin with enough of the soul of that device, that you can get equally musical results out of it. You should be able to USE ZHighpass much the way you’d use the real sampler and its genuine Z-Plane filters, to get filter swoops and voicings that deliver as much of the aggressive mojo you’d enjoy from the real thing.\r\n\r\nExcept that you can take it a little bit farther, and adjust it in ways not available on the real-deal sampler, to your taste. ‘Cos we’re not here just to clone what DnB maestros did in the Nineties. We’re playing with this particular sampler and mimicking some of its tricks because it turns out that was an amazing-sounding instrument, that gave you stuff typical DAW EQs don’t even come close to offering. And now, with ZHighpass, you can easily turn your DAW into that kind of instrument, on as many tracks as you like, anytime and anywhere you like.\r\n\r\nAnd the cooling fan’s (probably) way quieter. And it’s easier to patch. Props to the real e6400 Ultra, though. You’ll be hearing more from that, in upcoming weeks.",
    Comments: "",
    Name: "ZHighpass",
    Date: 1628985600000,
    Url: "https://www.airwindows.com/zhighpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "acts more like the Emu e6400 Ultra highpass in motion, with coefficient interpolation.\r\n\r\nBy request, here’s the followup to ZHighpass!\r\n\r\nZHighpass2 is the followup that adds coefficient interpolation to my Z-Plane Filter emulation. Which of course is not to say that I had the code, or took apart the machine and cloned the schematic: no, these plugins are about running a reference sound into the real live Emu e6400 Ultra sampler, and smashing the crud out of it to get the most out of the filters and their distinct color and behavior, and then trying to mimic that in a plugin purely by ear.\r\n\r\nThe original Airwindows Z filters run more efficiently because they’re not asked to do as much: they have the same tone but aren’t trying to smooth zipper noise and interpolate, so if you need fixed filter settings don’t overlook those. However, half the fun of a real live sampler is to get funky with it, and so ZHighpass2 follows ZLowpass2 in adding the smoothing to everything, so you can automate whatever you like. Remember it’s set up to have lots of distortion and gain on tap, keep the input and output real low if you’re not just trying to melt the thing down (0.1 will give you basically unity gain, and the output will let you pad things a whole lot if you need to)\r\n\r\nNote also that I found an uninitialized variable in the previous ZLowpass2: the smoothing of the Wet control wasn’t being started out correctly. It didn’t seem to do anything but all the same I’ve fixed it: redownload it if you’re concerned, or use the updated version that’s in the big plugin collections below.",
    Comments: "",
    Name: "ZHighpass2",
    Date: 1639267200000,
    Url: "https://www.airwindows.com/zhighpass2/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a lowpass made to sound and act like the Emu e6400 Ultra lowpass.\r\n\r\nOnward! Today we have ZLowpass. I think this one might be the closest to the hardware yet! It works like my previous Z series filters, except it’s the lowpass this time.\r\n\r\nYou might notice my video looks a bit different: that’s because my Blackmagic ATEM Mini finally and permanently blew up. I’m pretty sure I know why: there were times I ran it for long periods, I’ve often run many inputs into it or had it working hard doing things like chromakeying/lumakeying stuff at higher resolution and downscaling the result to HD, or running my laptop’s HDMI feed into it and having it upscale THAT to the higher native resolution, overlay the main camera and then downscale again to HD. On top of that, I’ve had it sitting on top of my Lavry DAC, and we’ve had some heat waves this summer.\r\n\r\nSo, it melted. For a while it just had its input to the computer die (I found a Razer capture card to be more reliable) and then in some livestreams it’s been flaking out, and tonight it blew up for good and couldn’t even run a single camera. Anyone out there, be careful with these things. They’re just $300 or so, but you cannot push them too hard in warm conditions or they will melt. Or maybe the fan blew up. I know I can’t return it under warranty because, being me, I took it apart to see if I could make the cooling work better. Too little too late. Be warned and don’t run these little buggers hard, or do lots of up and downscaling, while sitting them on a warm thing. No more ATEM Mini.\r\n\r\nUntil I get another, that is, and this time will NOT touch a thing about it, will fill in any warranty card it has, and will probably get a little laptop cooler pad or something. Whatever it takes, because my setup ended up pretty sweet if it wasn’t for the thing melting under the strain. (Replacement of the ATEM will NOT be out of what I’m saving up for getting a bigger and more classic sampler. Never fear, that journey will progress unhindered.)\r\n\r\nAnyway, here’s ZLowpass :D\r\n\r\n(followup: I did in fact replace the ATEM Mini, put it on a heatsink with a blue heatsink pad between, and used it extensively, and the replacement didn't melt. I ended up putting it aside and shooting video directly on the camera, so I could use 4k resolutions. The replacement ATEM with the heatsink should still be good.)",
    Comments: "",
    Name: "ZLowpass",
    Date: 1630195200000,
    Url: "https://www.airwindows.com/zlowpass/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "acts more like the Emu e6400 Ultra lowpass in motion, with coefficient interpolation.\r\n\r\nNeed I even say more?\r\n\r\nMy Z series filters were hotly sought after by a specific crew of localized Airwindows fans :D but they paid for their relatively high CPU efficiency with a dose of zipper noise, and that’s not really a ‘close emulation of the classic Emu e6400 Z-Plane filters’. At the time I hadn’t worked out the tech involved.\r\n\r\nA bunch of plugins and a set of Y series filters (which have their own interesting qualities, in their own right) later… and the Y plugins were the ones I chose to learn the ways of filter coefficient interpolation, and all of it implemented with the Airwindows sound… we have… ZLowpass2!\r\n\r\nOh, and I think some changes I had to make to alter the biquad distortion factors, actually got me CLOSER to the classic-sampler sound.\r\n\r\nSo this is a sampler filter, designed to give you a seamless blend through several options the real unit offered. It also gives you a HUGE amount of gain on tap, because the DnB folks liked to internally clip stuff in the sampler and then hit the filter with it. Even with the first ZLowpass, I got some special quirks of the sampler represented in the sound. This one’s even better, particularly if you’re sweeping the controls around to ‘play’ the sampler EQ. If you want a more glitchy effect for some neuro-sparkle, or if you just want more CPU free, ZLowpass (original) is still there for you. I think if I got ZLowpass2 sounding better for static, unchanging settings, it’s not by a lot: it’s mostly in motion that this one is meant to shine.\r\n\r\nHope you like it! I’ll be working through some of the not-posted yet plugins and will not be addressing the other Z2 filters just yet. I want to hear whether this one’s doing its job for you all, as this is probably the keeper (if you automate the controls, and why wouldn’t you).\r\n\r\nThank you for bearing with me! There will be more to come. My Patreon keeps me able to do this work :)",
    Comments: "",
    Name: "ZLowpass2",
    Date: 1638057600000,
    Url: "https://www.airwindows.com/zlowpass2/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "is a notch filter made to sound and act like the Emu e6400 Phaser.\r\n\r\nAnd finally, the fourth filter type (I’m doing basic filters, not trying to compete with real Z-Plane releases), ZNotch!\r\n\r\nThis is made to sound like the Emu Phaser, which has notchlike qualities. At heart it’s an extension of the Airwindows Z series, not anything specifically Emu Z-Plane: I didn’t find a notch specifically in the Emu e6400 Ultra, but I thought the Phaser options were very notchlike, so I went for a take on those. You’ll get constant highs, the ability to notch out quite deep into the bass, and that overdrive that’s on tap in all the Airwindows Z plugins, plus the ability to do all that and then add that color, subtly, to the dry signal (do this by getting your distorted and notched tone just right, setting Poles to zero, turning the output up all the way and then bringing in just enough of the color that you can hear what it’s doing. Adjust to taste)\r\n\r\nThis concludes the DnB-inspired sampler emulation EQs. Hopefully this bank of four Z-plugins will be handy to reach for, in the box, to get those vivid tones and grinds… I suspect I’ll find ’em useful in the place of more ‘normal’ EQs simply because the character of the distortion will be so handy. You don’t have to distort them, but since they take a little overdrive so nicely they’ll serve a purpose in all kinds of slight overdrive, or character adding, situations. And since they’re the Z series, you’ll know where to find them even if you’ve installed ALL the Airwindows plugins (and you can do that… if you dare!)",
    Comments: "",
    Name: "ZNotch",
    Date: 1630800000000,
    Url: "https://www.airwindows.com/znotch/"
  },
  {
    Use: "",
    Type: "EQ",
    Description: "acts more like the Emu e6400 Ultra phaser in motion, with coefficient interpolation.\r\n\r\nThis completes the reboot of my original Z-style filters! These are all based on study of a real hardware Emu e6400 sampler. (If my Patreon does well, I’ll be able to study more interesting hardware gear like I did this one). ZNotch is based on the ‘phaser’ settings, and ZNotch2 brings the coefficient interpolation people longed to have in this filter.\r\n\r\nBear in mind, ZNotch also has its place. It’s meant to sound exactly the same (I may possibly have improved the tone a tiny bit with ZNotch2, not sure of that) but the original ZNotch does NOT have coefficient smoothing. That means it started out less than the real hardware filter, ‘not as good yet’, BUT if you’re not modulating the controls, you can get the same tone with a lot less CPU by choosing the Z filter that is not the 2 version. The originals will use less CPU because they’re not recalculating so much every sample, and that means you should probably have both installed if you like this type of filter. I demonstrate ZNotch2 on an electronic kick drum to great effect, and there’s nothing I’m doing there which I couldn’t do with the original ZNotch at lower CPU cost.\r\n\r\nThat said, this one will move more fluidly, and the ‘Phaser’ sound is very special in motion! I hope you like it. We’re starting 2022 with the full DnB arsenal available ITB: Mackity, MackEQ, and the Z-style filters! I hope people have a lot of fun with this.\r\n\r\nThis concludes the AirwindowsPedia. Expect this file to be expanded as new plugins come in. Might end up needing one of these for the Free Studio sample instruments, eventually…\r\n\r\n-chris",
    Comments: "",
    Name: "ZNotch2",
    Date: 1641081600000,
    Url: "https://www.airwindows.com/znotch2/"
  }
];