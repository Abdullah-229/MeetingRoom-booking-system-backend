@echo off

:: Function to create the section with the required files
setlocal EnableDelayedExpansion

set sections=report payment feedback auth
set files=interface.ts model.ts validation.ts controller.ts service.ts

for %%s in (%sections%) do (
    mkdir src\features\%%s
    for %%f in (%files%) do (
        type nul > src\features\%%s\%%s.%%f
    )
)

echo Directory structure and files created successfully!
pause
