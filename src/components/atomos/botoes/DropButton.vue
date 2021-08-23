<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Categoria
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <slot />
    </div>
  </div>
</template>
