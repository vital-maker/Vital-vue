<template>
  <VTFluid>
    <VTContainer>
      <VTRow>
        <VTLink to="/home" value="basic"></VTLink>
        <VTLink to="/home" color="primary" value="primary"></VTLink>
        <VTLink to="/home" color="info">info</VTLink>
        <VTLink to="/home" color="warning">warning</VTLink>
        <VTLink to="/home" color="danger" value="danger"></VTLink>
        <VTLink to="/home" color="secondary" value="secondary"></VTLink>
        <VTLink to="/home" color="light" value="light"></VTLink>
        <VTLink to="/home" color="dark" value="dark"></VTLink>
        <VTLink to="/home" color="outline-primary" value="primary"></VTLink>
        <VTLink to="/home" color="outline-info" value="info"></VTLink>
        <VTLink to="/home" color="outline-warning" value="warning"></VTLink>
        <VTLink to="/home" color="outline-danger" value="danger"></VTLink>
        <VTLink to="/home" color="outline-secondary" value="secondary"></VTLink>
        <VTLink to="/home" color="outline-light" value="light"></VTLink>
        <VTLink to="/home" color="outline-dark" value="dark"></VTLink>
      </VTRow>
      <VTRow justify="around" style="height: 200px">
        <VTCol :xs="12" sm="6" md="6" lg="6" xl="12" class="bg-dark text-white">
          One of three columns
        </VTCol>
        <VTCol col class="bg-info text-white">
          One of three columns
        </VTCol>
        <VTCol col class="bg-success text-white">
          One of three columns
        </VTCol>
      </VTRow>
      <VTRow class="justify-content-xl-center">
        <VTCol class="bg-success text-white">
          One of three columns
        </VTCol>
        <VTCol class="bg-info text-white">
          One of three columns
        </VTCol>
        <VTCol class="bg-dark text-white">
          One of three columns
        </VTCol>
        <VTCol class="bg-dark text-white">
          One of three columns
        </VTCol>
        <VTCol class="bg-dark text-white">
          One of three columns
        </VTCol>
      </VTRow>
      <VTRow>
        <div class="col-sm">
          <VTButton class="bg-danger" value="primary">basic</VTButton>
        </div>
        <div class="col">
          <VTButton color="info">info</VTButton>
        </div>
        <div class="col">
          <VTButton color="warning">warning</VTButton>
        </div>
        <div class="col">
          <VTButton color="danger" value="danger"></VTButton>
        </div>
        <div class="col">
          <VTButton color="secondary" value="secondary"></VTButton>
        </div>
        <div class="col">
          <VTButton color="light" value="light"></VTButton>
        </div>
        <div class="col">
          <VTButton color="dark" value="dark"></VTButton>
        </div>
        <div class="col">
          <VTButton color="outline-primary" value="primary"></VTButton>
        </div>
        <div class="col">
          <VTButton color="outline-info" value="info"></VTButton>
        </div>
        <div class="col">
          <VTButton color="outline-warning" value="warning"></VTButton>
        </div>
        <div class="col">
          <VTButton color="outline-danger" value="danger"></VTButton>
        </div>
        <div class="col">
          <VTButton color="outline-secondary" value="secondary"></VTButton>
        </div>
        <div class="col">
          <VTButton color="outline-light" value="light"></VTButton>
        </div>
        <div class="col">
          <VTButton color="outline-dark" value="dark"></VTButton>
        </div>
      </VTRow>
      <VTRow>
        <div class="col"><VTButton size="sm" color="warning" value="small"></VTButton></div>
        <div class="col"><VTButton size="lg" color="success" value="large"></VTButton></div>
      </VTRow>
      <VTRow>
        <div class="col"><VTButton rounded color="dark" value="rounded"></VTButton></div>
        <div class="col"><VTButton squared color="danger" value="squared"></VTButton></div>
      </VTRow>
      <VTRow>
        <div class="col"><VTButton block color="info" value="block"></VTButton></div>
      </VTRow>
    </VTContainer>
    <VTContainer>
      <VTAlert alert="info" :dismiss="true">
        cat is updated successfully click
        <VTLink to="/home" @click="alerts" badge="info">here</VTLink>
      </VTAlert>
      <VTLink to="/home"/>
      <VTSpan badge="danger">Mohamed</VTSpan>
      <VTButton color="info" size="lg">
        Noty
        <VTSpan badge="light">9</VTSpan>
      </VTButton>
      <VTButton size="sm"></VTButton>
      <VTRow>
        <VTButtonGroup size="lg">
          <VTButton color="primary"/>
          <div class="input-group-prepend">
            <div class="input-group-text" id="btnGroupAddon2">@</div>
          </div>
          <VTButton value="mohamed"/>
          <VTButtonDropDown>
            <template v-slot:VTToggle>
              <VTButtonToggle value="ahmed" color="info" block/>
            </template>
            <template v-slot:VTDropDownItem>
              <VTLink dropdown>item1</VTLink>
              <VTLink dropdown>item1</VTLink>
            </template>
          </VTButtonDropDown>
          <VTButton/>
        </VTButtonGroup>
      </VTRow>
    </VTContainer>
  </VTFluid>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    alerts: function () {
      alert('mohamed')
    }
  }
}
</script>

<style lang="scss">

</style>
