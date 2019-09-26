<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
         <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/about" class="nav-link">About</router-link>
      </li>
      </ul>

      <ul class="navbar-nav ml-auto">
      <li>
        <form class="form-inline my-2 my-lg-0" method="POST" action="/login/">
        <input class="form-control mr-sm-2" type="text" name="username" placeholder="Username">
        <input class="form-control mr-sm-2" type="password" name="password" placeholder="Password">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </form>
      </li>
      </ul>
    </div>
  </nav>
</template>
