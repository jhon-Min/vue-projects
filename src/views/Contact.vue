<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-12 col-md-8 col-lg-5">
        <div class="card shadow">
          <div class="card-body">
            <h3>Contact Page</h3>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              iure commodi! Expedita neque molestias tenetur ullam ratione
              magnam quos animi, eum doloremque. Voluptatibus error numquam
              harum ea ab quam corporis.
            </p>
            <p>
              <a
                class="btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Link with href
              </a>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact Page",
};
</script>

<style lang="scss" scoped>
</style>