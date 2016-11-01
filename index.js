var products = [
    {
    pricing: { salePrice: 1649.01 },
    gallery: { mainPhoto: "http://johnpapa.net/files/downloads/images/Taylor/314ce.jpg"},
    model: {
        name: "314ce",
        brand: "Taylor"
    }},
    {
    pricing: { salePrice: 4775.00 },
    gallery: { mainPhoto: "http://johnpapa.net/files/downloads/images/Taylor/314ce.jpg" },
    model: {
        name: "814ce",
        brand: "Taylor"
    }},
    {
    modelId: 4,
    pricing: { salePrice: 5899.00 },
    gallery: { mainPhoto: "http://johnpapa.net/files/downloads/images/Taylor/314ce.jpg" },
    model: {
        name: "914ce",
        brand: "Taylor"
    }}];



// No template
var i = 1;
$(products).each(function() {
    var product = this;
    $("#output1").append("<div>"
                         + i++
                         + ": "
                         + product.model.brand
                         + " "
                         + product.model.name
                         + "</div>"
                         + "<div> $"
                         + product.pricing.salePrice 
                         + "</div>"
                         + "<img src='"
                         + product.gallery.mainPhoto
                         + "' style='height:80px;'/>");
});

//With a JsRender template
$('#output2').html( $('#myTmpl').render(products) );
