# Message Display

This script allows the Bitty Blue "Message Display" feature to be used. It includes the Bluetooth UART service and displays "C" when a Bluetooth connection has been established and "D" when it is closed. The two buttons are programmed to send a short text string to Bitty Blue for display in the Message Display screen when pressed. Change to suit your needs. 


To use this script:

1. Go to the MakeCode web site at https://makecode.microbit.org
2. Create a new project with a name of your choice
3. In Advanced, select Extensions and then select the Bluetooth extension. Agree to remove the Radio extension when prompted.
4. Go into the project settings (cog icon, top right) and disable pairing. Re-enable it later if you have a need for security.
5. Switch to the JavaScript editor.
6. Copy and paste the script from the bitty_blue_message_display.js file into your MakeCode JavaScript window.
7. Download the code as a hex file. Copy it onto your micro:bit over USB.
8. Start Bitty Blue. Scan to detect your micro:bit and select it to connect to it. A "C" should appear on the micro:bit display.
9. Select the Message Display icon.
10. Press button A on your micro:bit. Watch your message appear. Now press button B.
