# syeApp

/** App setup for Android **/

/*** 1. Installing necessary programs ***/
Install nodejs to use npm to install react and its dependencies ( https://nodejs.org/en/ )
Install Android studio to get SDK and platform tools


/*** 2. Android Studio setup ***/
During install, go to custom/advanced options and be sure Android emulator is checked.
Once installed, go to settings -> SDK manager

In SDK manager...

Under SDK Platforms tab,
-Check Android 6.0 (Marshmallow) API 23
Hit "Show Package Details" on the bottom right
Under Android 6.0 (Marshmallow)
-Make sure Android SDK Platform 23, Sources for Android 23,
Intel x86 Atom System Image, Intel x86 Atom_64 System Image,
and both Google APIs Intel x86 Atom System Images are checked.

Under SDK Tools tab...
- Be sure Android Emulator, Android SDK Platform-Tools, and Android SDK Tools
are checked.
-Check Intel x86 Emulator Accelerator (HAXM installer)
-Check NDK
Hit "Show Package Details" on the bottom right
Under "Android SDK Build-tools"
-Check 23.0.1, 23.0.2, 23.0.3

/*** 3. Android System Variables ***/
-Add ANDROID_HOME environment variable to "C:/users/___/Appdata/local/Android/sdk"
-Add ANDROID_SDK_HOME environment variable to "C:/users/___/Appdata/local/Android/sdk"

/*** 4. Launching android emulator ***/
-Make a new project
-In the upper right corner, select AVD manager
-Create a new AVD, select API 23 x86_64 OS to run on it
-Leave other options as default
-Launch the device

/*** 5. npm setup / running react native ***/
-Open nodejs command line
-run "npm install -g react-native-cli yarn"
-Navigate to git project directory and run "react-native start" to open packager
    -Keep this window open in the background, check on it if the emulator crashes
-Open another nodejs command line, navigate to the same directory, and run
"react-native run-android".