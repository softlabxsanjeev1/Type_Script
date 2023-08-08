"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Read_only_User"] = 2] = "Read_only_User";
})(Role || (Role = {}));
console.warn(Role);
console.warn(Role.Read_only_User);
