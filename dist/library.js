"use strict";
exports.__esModule = true;
var catalog_1 = require("./catalog");
var employes_1 = require("./employes");
var users_1 = require("./users");
var Library = /** @class */ (function () {
    function Library(options) {
        this.name = options.name;
        this.address = options.address;
        this.operationHours = options.operationHours;
        this.catalog = new catalog_1.Catalog();
        this.employes = new employes_1.Employes();
        this.users = new users_1.Users();
    }
    Library.prototype.isOpen = function () {
        var currentTime = new Date();
        return currentTime > this.operationHours.open && currentTime < this.operationHours.close;
    };
    /** @internal */
    Library.prototype.mySecretMethod = function () {
    };
    return Library;
}());
exports.Library = Library;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW9DO0FBQ3BDLHVDQUFzQztBQUN0QyxpQ0FBZ0M7QUFXaEM7SUFTSSxpQkFBWSxPQUF1QjtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3RixDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLGdDQUFjLEdBQWQ7SUFFQSxDQUFDO0lBR0wsY0FBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksMEJBQU8ifQ==