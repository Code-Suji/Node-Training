var EcomList = [{ name: 'Electronic', product: [] }];
var ECom = /** @class */ (function () {
    function ECom(product) {
        var _this = this;
        this.addProd = function () {
            var obj = { id: _this.product.id, name: _this.product.name, category: _this.product.category };
            console.log(obj);
            var flag = 0;
            EcomList.forEach(function (x) {
                if (x.name == _this.product.category) {
                    x.product.push(obj);
                    flag = 1;
                }
            });
            if (flag == 0) {
                EcomList.push({ name: _this.product.category, product: [obj] });
            }
        };
        this.product = product;
    }
    return ECom;
}());
var NewEcom = new ECom({ id: 10, name: "Head Phone", category: "Phones" });
NewEcom.addProd();
console.log(EcomList);
