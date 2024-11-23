<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h4>
        <slot name="heading"></slot>
      </h4>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 4rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 4rem;
}

i {
  display: flex;
  place-items: center;
  place-content: start;
  width: 48px;
  height: 48px;

  color: var(--color-text);
}

h4 {
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: 0px;
    position: absolute;
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}
</style>
