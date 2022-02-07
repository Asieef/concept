d<template>
  <div id="remote">
    <div id="proot" v-if="products != null">
      <div class="pcard" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.thumbnail" alt="Denim Jeans" style="width: 100%" />
          <br />
          <h4>{{ product.brands }}</h4>
          <br />
          <p class="price">{{ product.api?.retailprice }} Tk.</p>
          <br />
          <p>{{ product.name }}</p>
          <br />
          <p><button>Add to Cart</button></p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("https://admindash.comcitybd.com/api/brand/Value-top")
        .then((response) => {
          console.log(response.data.data);
          this.products = response.data.data;
        });
    },
  },
};
</script>
    
