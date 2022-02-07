<template>
  <div id="nav-menu">
    <ul>
      <li>
        <span class="awe"><i class="fa fa-home" aria-hidden="true"></i> </span>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <span class="awe"><i class="fa fa-users" aria-hidden="true"></i> </span>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <span class="awe"><i class="fa fa-cogs" aria-hidden="true"></i> </span>
        <router-link to="/service">Service</router-link>
      </li>
      <li>
        <span class="awe"><i class="fa fa-user" aria-hidden="true"></i> </span>
        <router-link to="/admin">Admin</router-link>
      </li>
    </ul>
  </div>
</template>