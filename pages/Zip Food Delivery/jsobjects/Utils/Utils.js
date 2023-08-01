export default {
	  generateRandomID: () =>  (
		'_'+ Math.random().toString(36).substr(2,9)
		),
	  addOrder: async function () {
    const orderId = this.generateRandomID();
    await add_order.run({ id: orderId });
    await add_product.run({ id: orderId });
    await fetch_orders.run();
		await resetWidget( 'add_modal');
    return closeModal( 'add_modal' );
  }
}