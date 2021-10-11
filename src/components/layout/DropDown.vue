<template>
    <div class="dropdown">
        <a class="link" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <slot></slot>
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
           <slot name="lists"></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        name : 'DropDown Slot'
        
    }
</script>

<style lang="scss" scoped>
.link{
    text-decoration: none;
    background: none;
    margin: 0px 23px;
    color: #555;
    font-weight: 500;
    transition: 0.5s;
    border: none;

      &:hover{
        color: black;
      }
}
</style>