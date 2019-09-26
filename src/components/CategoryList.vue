<template>
  <aside class="col-sm-3">
    <div class="card card-filter">
    <article class="card-group-item">
      <header class="card-header">
        <a class="" aria-expanded="true" href="#" data-toggle="collapse" data-target="#collapse22">
          <i class="icon-action fa fa-chevron-down"></i>
          <h6 class="title">By Category</h6>
        </a>
        </header>
          <div style="" class="filter-content collapse show" id="collapse22">
          <div class="card-body">
            <ul class="list-unstyled list-lg">
              <li v-for="category in categories" v-bind:key="category.name">
                <a
                  href="javascript:"
                  @click.prevent="categoryClick(category)"
                >
                  {{ category.name }}
                  <span class="float-right badge badge-light round" v-if="category.products">
                    {{ category.products.length }}
                  </span>
                </a>
              </li>
              </ul>
          </div> <!-- card-body.// -->
        </div> <!-- collapse .// -->
      </article> <!-- card-group-item.// -->
    </div>
  </aside>
</template>

<script>
export default {
  name: 'CategoryList',
  data: function () {
    return {
      'category': null,
      'categories': []
    }
  },
  methods: {
    categoryClick: function (category) {
      this.category = category
      this.axios
        .get('http://127.0.0.1:8000/api/categories/' + category.id + '/')
        .then(function (response) {
          category.products = response.data.products
        })
    }
  },
  mounted: function () {
    var self = this
    this.axios
      .get('http://127.0.0.1:8000/api/categories/')
      .then(function (response) {
        self.categories = response.data
      })
  }
}
</script>
