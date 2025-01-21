@echo off

:: Root directory
mkdir src

:: Configuration files
mkdir src\config
type NUL > src\config\database.ts
type NUL > src\config\index.ts

:: User module
mkdir src\user
type NUL > src\user\user.controller.ts
type NUL > src\user\user.model.ts
type NUL > src\user\user.route.ts
type NUL > src\user\user.service.ts
type NUL > src\user\user.validation.ts
type NUL > src\user\user.middleware.ts

:: Room module
mkdir src\room
type NUL > src\room\room.controller.ts
type NUL > src\room\room.model.ts
type NUL > src\room\room.route.ts
type NUL > src\room\room.service.ts
type NUL > src\room\room.validation.ts
type NUL > src\room\room.middleware.ts

:: Slot module
mkdir src\slot
type NUL > src\slot\slot.controller.ts
type NUL > src\slot\slot.model.ts
type NUL > src\slot\slot.route.ts
type NUL > src\slot\slot.service.ts
type NUL > src\slot\slot.validation.ts
type NUL > src\slot\slot.middleware.ts

:: Booking module
mkdir src\booking
type NUL > src\booking\booking.controller.ts
type NUL > src\booking\booking.model.ts
type NUL > src\booking\booking.route.ts
type NUL > src\booking\booking.service.ts
type NUL > src\booking\booking.validation.ts
type NUL > src\booking\booking.middleware.ts

:: Middlewares
mkdir src\middlewares
type NUL > src\middlewares\auth.middleware.ts
type NUL > src\middlewares\validate.middleware.ts
type NUL > src\middlewares\error.middleware.ts

:: Utilities
mkdir src\utils

:: App and server
type NUL > src\app.ts
type NUL > src\server.ts

echo Directory structure created successfully!
pause
