'use strict';

var _getDomain = require('../get-domain');

var _getDomain2 = _interopRequireDefault(_getDomain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('get domain', function () {
    it('should return the domain of a given email', function () {
        var email = 'example@gmail.com';
        expect((0, _getDomain2.default)(email)).toEqual('gmail.com');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXR5L19fdGVzdHNfXy9nZXQtZG9tYWluLnNwZWMuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImVtYWlsIiwiZXhwZWN0IiwidG9FcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUFBLFNBQVMsWUFBVCxFQUF1QixZQUFNO0FBQ3pCQyxPQUFHLDJDQUFILEVBQWdELFlBQU07QUFDbEQsWUFBTUMsUUFBUSxtQkFBZDtBQUNBQyxlQUFPLHlCQUFVRCxLQUFWLENBQVAsRUFBeUJFLE9BQXpCLENBQWlDLFdBQWpDO0FBQ0gsS0FIRDtBQUlILENBTEQiLCJmaWxlIjoiZ2V0LWRvbWFpbi5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERvbWFpbiBmcm9tICcuLi9nZXQtZG9tYWluJztcblxuZGVzY3JpYmUoJ2dldCBkb21haW4nLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdGhlIGRvbWFpbiBvZiBhIGdpdmVuIGVtYWlsJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbCA9ICdleGFtcGxlQGdtYWlsLmNvbSc7XG4gICAgICAgIGV4cGVjdChnZXREb21haW4oZW1haWwpKS50b0VxdWFsKCdnbWFpbC5jb20nKTtcbiAgICB9KTtcbn0pO1xuIl19