Introduction
This Cold Boot Simulator demonstrates the concept of data remanence in RAM, a vulnerability that can be exploited in cold boot attacks. It visually simulates how data remains in memory even after power is turned off, which could potentially be accessed in an attack scenario.

Requirements
This simulator is built with React (a popular JavaScript library for building user interfaces).
Framer Motion is used for animations and smooth transitions.
Make sure you have Node.js and npm installed to run this project locally.

Installation
Clone this repository:

```bash
git clone https://github.com/FrenzyVJN/cold-boot-simulator.git
```
Navigate into the project folder:
```bash
cd cold-boot-simulator
```
Install the required dependencies:
```bash
npm install
```
Run the application:
```bash
npm run dev
```
This will start the development server and open the simulator in your web browser.

Features
Memory Grid: A grid showing the status of each bit in memory (either 0 or 1).
Power Toggle: A button to turn the power on or off, affecting how the data decays over time.
Elapsed Time: Displays how long the power has been off and how this correlates with data decay.
Write Secret Data: A button that inserts a sequence of 1s (secret data) into the memory when the power is on.
How To Use
Power On/Off: Click the "Power Off" button to simulate a loss of power. The memory will start to decay over time, with bits turning into 0s. Click "Power On" to reset the system and stop the decay.

Write Secret Data: When the power is on, you can click the "Write Secret Data" button to insert a secret pattern (a series of 1s) into the middle of the memory grid.

Time Tracker: The simulator tracks how long the system has been powered off, which is shown in seconds. This time correlates with how much data has decayed.

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are always welcome!

