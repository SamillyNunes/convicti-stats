<template>
  <div class="table w-full border-collapse border-spacing-y-2">
    <div
      class="hidden md:table-header-group font-normal text-xs text-gray-200 opacity-40 text-left border-t border-b border-t-black/10 border-b-black/10"
    >
      <div class="table-row">
        <slot name="headers"></slot>
      </div>
    </div>
    <div class="table-row-group text-[0.65rem] text-black relative">
      <div class="table-row h-2"></div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
