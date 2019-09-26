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
import { mapState } from 'vuex'

export default {
  name: 'CategoryList',
  data: function () {
    return {}
  },
  computed: mapState(['categories']),
  methods: {
    categoryClick: function (category) {

    }
  },
  created: function () {
    this.$store.dispatch('getCategories')
  }
}
</script>
