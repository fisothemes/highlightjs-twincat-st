# Example TwinCAT ST Syntax Highlighting

This book is a showcase of Structured Text (ST) syntax for your mdBook using Highlight.js

## Sample TwinCAT ST Code

Below are several examples of the syntax highlighting in action:

### 1. Defining an Interface
```iec-st
// Define an Interface for Motor Control
INTERFACE I_Motor
    METHOD Start : BOOL END_METHOD
    METHOD Stop : BOOL END_METHOD
    METHOD SetSpeed
    VAR_INPUT 
        fSpeed : LREAL;
    END_VAR
    END_METHOD
END_INTERFACE
```

### 1. Defining a Function Block
```iec-st
// Function Block implementing IMotor Interface
{attribute 'no_explicit_call' := 'do not call this POU directly'} 
FUNCTION_BLOCK FB_MotorController EXTENDS FB_Object IMPLEMENTS IMotor
VAR
    _bIsRunning     : BOOL;
    _fCurrentSpeed  : LREAL;
END_VAR
    // Implementing the Start Method
    METHOD Start : BOOL
        THIS^._bIsRunning   := TRUE;
        Start               := THIS^._bIsRunning;
        (* Rest of code if needed... *)
    END_METHOD

    // Implementing the Stop Method
    METHOD Stop : BOOL
        THIS^._bIsRunning       := FALSE;
        THIS^._fCurrentSpeed    := 0.0;
        Stop                    := NOT THIS^._bIsRunning;
    END_METHOD

    // Implementing the SetSpeed Method
    METHOD SetSpeed
    VAR_INPUT
        fSpeed : LREAL;
    END_VAR
        THIS^._fCurrentSpeed := SEL(THIS^._bIsRunning, 0.0, fSpeed);
    END_METHOD
END_FUNCTION_BLOCK
```

### 1. Defining a Function
```iec-st
// Function to calculate the average given numbers
FUNCTION F_CalculateAverageSpeed : LREAL
VAR_IN_OUT CONSTANT
    arSpeeds        : ARRAY[*] OF LREAL;
END_VAR
VAR
    fNumberOfSpeeds : LREAL;
    i               : __XINT;
END_VAR
    fNumberOfSpeeds := TO_LREAL(
        ABS(UPPER_BOUND(arSpeeds, 1) - LOWER_BOUND(arSpeeds, 1))
    );

    FOR i := LOWER_BOUND(arSpeeds, 1) TO UPPER_BOUND(arSpeeds, 1) DO
        F_CalculateAverageSpeed := F_CalculateAverageSpeed + arSpeeds[i];
    END_FOR

    F_CalculateAverageSpeed := F_CalculateAverageSpeed / fNumberOfSpeeds;
END_FUNCTION
```

### 1. Definings a Program
```iec-st
// Main Program
PROGRAM MAIN
VAR
    bStart          : BOOL;
    bStop           : BOOL := TRUE;
    fbMotor         : FB_MotorController;
    fAverageSpeed   : REAL;
    arSpeeds        : ARRAY[0..1] OF LREAL := [150.5, 180.2];
END_VAR

// Start the motor
IF bStart THEN 
    bStop := NOT fbMotor.Start();
    fbMotor.SetSpeed(arSpeeds[0]);
END_IF

// Stop the motor
IF bStop THEN
    bStart := NOT fbMotor.Stop();
END_IF

// Calculate average speed
fAverageSpeed := F_CalculateAverageSpeed(arSpeeds);

END_PROGRAM
```