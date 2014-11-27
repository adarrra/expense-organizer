jQuery(document).ready(function	() {

	var Purchase = {
		description: "some stuff",
		price: 0,
		quantity: 1,
		totalCost: function () {
			return this.price * this.quantity
		}
	};

	$('#purchases-form').submit(function(e){
		e.preventDefault();
		$('.havnt-purchases').hide();

		var firstPurchase = Object.create(Purchase);
		firstPurchase.description = $("input#description").val();
		firstPurchase.price = parseInt($("input#price").val());
		firstPurchase.quantity = parseInt($("input#quantity").val());

		$("table").show().append('<tr>' +
		'<td class="description"></td>' +
		'<td class="price"></td>' +
		'<td class="quantity"></td>>' +
		'<td class="total"></td>>' +
		'</tr>');

		$(".description").last().text(firstPurchase.description);
		$(".price").last().text(firstPurchase.price);
		$(".quantity").last().text(firstPurchase.quantity);
		$(".total").last().text(firstPurchase.totalCost());


		$("input#description").val(""); //очистим инпуты, но почему нельзя исп.empty?
		firstPurchase.price = parseInt($("input#price").val(""));
		firstPurchase.quantity = parseInt($("input#quantity").val(""));


	});





});
