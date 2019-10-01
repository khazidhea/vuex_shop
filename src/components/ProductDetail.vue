<template>
  <article class="card card-product">
    <div class="card-body">
      <div class="row">
        <aside class="col-sm-3">
          <div class="img-wrap"><img></div>
        </aside> <!-- col.// -->
        <article class="col-sm-6">
          <h4 class="title">{{ product.name }}</h4>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
          <dl class="dlist-align">
            <dt>Color</dt>
            <dd>Black and white</dd>
          </dl>  <!-- item-property-hor .// -->
          <dl class="dlist-align">
            <dt>Material</dt>
            <dd>Syntetic, wooden</dd>
          </dl>  <!-- item-property-hor .// -->
          <dl class="dlist-align">
            <dt>Delivery</dt>
            <dd>Russia, USA, and Europe</dd>
          </dl>  <!-- item-property-hor .// -->
        </article> <!-- col.// -->
        <aside class="col-sm-3 border-left">
          <div class="action-wrap">
            <div class="price-wrap h4">
              <span class="price">${{ product.price }}</span>
            </div> <!-- info-price-detail // -->
            <p class="text-success">Free shipping</p>
            <br>
            <p>
              <button class="btn btn-primary" @click="buy">Buy now</button>
            </p>
          </div> <!-- action-wrap.// -->
        </aside> <!-- col.// -->
      </div> <!-- row.// -->
    </div> <!-- card-body .// -->
  </article>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ['product'],
  methods: {
    buy: function () {
      let order = {
        items: [
          {
            product: this.product.id,
            quantity: 1
          }
        ],
        customer: 1
      }
      this.$store.dispatch('createOrder', order)
    }
  }
}
</script>
