<template>
  <div class="main-content">
    <breadcumb :page="'Cliente'" :folder="'Cadastros'" />

    <b-form>
      <b-card class="col-md-12 mb-30">
        <b-button type="submit" @click="submitDados" variant="primary"
          >Salvar</b-button
        >
      </b-card>

      <!-- #### Dados do Cliente #### -->
      <b-card title="Dados do Cliente" class="col-md-12 mb-30">
        <!-- #### Toggle PF ou PJ #### -->
        <div class="mb-3">
          <span class="d-block"> Pessoa Física ou Jurídica? </span>
          <span class="d-flex">
            <label class="mr-3 radio radio-primary">
              <input
                type="radio"
                name="radio"
                value="fisica"
                v-model="fisicaOuJuridica"
                @click="toggleFisicaOuJuridica"
              />
              <span>Física</span>
              <span class="checkmark"></span>
            </label>

            <label class="radio radio-primary">
              <input
                type="radio"
                name="radio"
                value="juridica"
                v-model="fisicaOuJuridica"
                @click="toggleFisicaOuJuridica"
              />
              <span>Jurídica</span>
              <span class="checkmark"></span>
            </label>
          </span>
        </div>

        <b-row v-if="this.fisicaOuJuridica === 'fisica'">
          <b-form-group class="col-md-6 mb-3" label="Nome">
            <b-form-input
              type="text"
              placeholder="Nome"
              v-model="nome"
              class="nome"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Apelido">
            <b-form-input type="text" placeholder="Apelido"></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="CPF">
            <b-form-input
              type="text"
              placeholder="999.999.999-99"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="RG">
            <b-form-input type="text" placeholder="Informe o RG"></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Sexo">
            <b-form-select :options="selectSexo"> </b-form-select>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Telefone">
            <b-form-input
              type="text"
              placeholder="(99) 9999-9999"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Celular">
            <b-form-input
              type="text"
              placeholder="(99) 99999-9999"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Data Nascimento">
            <b-form-input type="date"></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Email">
            <b-form-input
              type="text"
              placeholder="Informe seu e-mail"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Site">
            <b-form-input
              type="text"
              placeholder="Informe seu site se houver"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Observação">
            <b-form-input type="text"></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Limite de Crédito">
            <b-form-input type="text"></b-form-input>
          </b-form-group>
        </b-row>

        <b-row v-else>
          <b-form-group class="col-md-6 mb-3" label="Razão Social">
            <b-form-input
              type="text"
              placeholder="Razão Social"
              v-model="razao"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Fantasia">
            <b-form-input type="text" placeholder="Fantasia"></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="CNPJ">
            <b-form-input
              type="text"
              placeholder="999.999.999-99"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Inscrição Estadual">
            <b-form-input
              type="text"
              placeholder="Inscrição Estadual"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Inscrição Municipal">
            <b-form-input
              type="text"
              placeholder="Inscrição Municipal"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Telefone">
            <b-form-input
              type="text"
              placeholder="(99) 9999-9999"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Celular">
            <b-form-input
              type="text"
              placeholder="(99) 99999-9999"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-4 mb-3" label="Criação">
            <b-form-input type="date"></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Email">
            <b-form-input
              type="text"
              placeholder="Informe seu e-mail"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Site">
            <b-form-input
              type="text"
              placeholder="Informe seu site se houver"
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Observação">
            <b-form-input type="text"></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Limite de Crédito">
            <b-form-input type="text"></b-form-input>
          </b-form-group>
        </b-row>
      </b-card>
    </b-form>

    <!-- #### Endereço #### -->
    <b-card title="Endereço" class="col-md-12 mb-30">
      <b-form>
        <b-row>
          <b-form-group class="col-md-3 mb-3" label="CEP" label-for="cep">
            <b-form-input
              @keyup="getCep"
              v-model="cep"
              id="cep"
              placeholder="Informe o CEP"
              maxlength="9"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group class="col-md-6 mb-3" label="Rua" label-for="ruaCli">
            <b-form-input
              :value="rua"
              type="text"
              placeholder="Informe o nome da sua rua"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-md-3 mb-3"
            label="Número"
            label-for="numeroCli"
          >
            <b-form-input
              type="text"
              placeholder="Informe o número"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-md-3 mb-3"
            label="Complemento"
            label-for="complementoCli"
          >
            <b-form-input
              type="text"
              placeholder="Informe o complemento, se houver"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-md-4 mb-3"
            label="Bairro"
            label-for="bairroCli"
          >
            <b-form-input
              type="text"
              :value="bairro"
              placeholder="Informe seu bairro"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-md-3 mb-3"
            label="Cidade"
            label-for="cidadeCli"
          >
            <b-form-input
              type="text"
              :value="cidade"
              placeholder="Informe a cidade"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            class="col-md-2 mb-3"
            label="Estado"
            label-for="estadoCli"
          >
            <b-form-input
              type="text"
              :value="uf"
              placeholder="UF"
              required
            ></b-form-input>
          </b-form-group>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Cadastro de Cliente",
  },
  data() {
    return {
      nome: "",
      razao: "",
      fisicaOuJuridica: "fisica",
      selectSexo: [
        { text: "Masculino" },
        { text: "Feminino" },
        { text: "Outro" },
      ],
      cep: null,
      rua: null,
      bairro: null,
      cidade: null,
      uf: null,
    };
  },
  methods: {
    toggleFisicaOuJuridica() {
      if (
        this.fisicaOuJuridica === "juridica" ||
        this.fisicaOuJuridica === "fisica"
      ) {
        (this.nome = ""),
          (this.razao = ""),
          (this.cep = null),
          (this.rua = null),
          (this.bairro = null),
          (this.cidade = null),
          (this.uf = null);
      }
    },

    submitDados(e) {
      // e.preventDefault();
      if (this.fisicaOuJuridica === "fisica" && this.nome !== "") {
        e.preventDefault();
        console.log(this.nome);
      }

      if (this.fisicaOuJuridica === "juridica" && this.razao !== "") {
        e.preventDefault();
        console.log(this.razao);
      }
    },

    async getCep() {
      const cep = this.cep;
      let cepFormat = cep.replace("-", "");
      // console.log(cepFormat.length);

      if (cepFormat.length === 8) {
        const req = await fetch(`https://viacep.com.br/ws/${cepFormat}/json/`);
        const data = await req.json();
        // console.log(data);
        this.cep = data.cep;
        this.rua = data.logradouro;
        this.bairro = data.bairro;
        this.cidade = data.localidade;
        this.uf = data.uf;
      }
    },
  },
};
</script>
<style scoped>
input,
select,
button {
  border: none;
}

select {
  background-color: #f3f4f6;
}

.card-title {
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  font-weight: bold;
}

/* .error-validacao {
  box-shadow: none;
  border: 3px solid red;
} */
</style>