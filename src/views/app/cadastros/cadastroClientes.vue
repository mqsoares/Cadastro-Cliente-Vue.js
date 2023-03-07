<template>
  <div class="main-content">
    <breadcumb :page="'Clientes e Fornecedores'" :folder="'Cadastros'" />
    <b-form>
      <!-- #### Dados do Cliente #### -->
      <b-card title="Dados do Cliente" class="col-md-12 mb-30 p-0">
        <b-row>
          <b-col md="auto">
            <div class="m-auto" style="width: 100px">
              <div class="d-block mb-4">
                <div class="border rounded mb-2" style="height: 100px">
                  <img src="#" />
                </div>
                <div class="btn-group d-flex">
                  <button
                    class="btn secondary btn-outline-info p-0"
                    style="width: 50%"
                    id="add-edit-img"
                    v-b-modal.add-edit-img
                  >
                    <i class="text-16 i-Pen-3"></i>
                  </button>
                  <b-modal
                    centered
                    id="add-edit-img"
                    title="Adicionando imagem"
                    ok-only
                    size="lg"
                  >
                    <div
                      id="cabecalhoTab"
                      class="rounded-top bg-gray-300 text-center"
                    >
                      <b-form-file class="mt-3 ml-2" plain> </b-form-file>
                    </div>

                    <table class="table mb-0">
                      <tbody>
                        <tr>
                          <td>**TRATAR TAMANHO DA IMAGEM</td>
                        </tr>
                      </tbody>
                    </table>

                    <p>
                      * O tamanho na imagem deve ser inferior a 100kb, em JPG,
                      GIF ou PNG e que seu maior lado não ultrapasse 100 pixels.
                    </p>
                  </b-modal>
                  <button
                    disabled
                    class="btn secondary btn-outline-danger p-0"
                    style="width: 50%; pointer-events: none"
                  >
                    <i class="text-16 i-Folder-Trash"></i>
                  </button>
                </div>
                <b-popover
                  target="add-edit-img"
                  triggers="hover focus"
                  content="Adicionar/Editar imagem"
                  variant="dark"
                ></b-popover>
              </div>
            </div>
          </b-col>
          <b-col>
            <b-row>
              <b-form-group
                class="col-md-6 col-xl-3 mb-4"
                label="CNPJ / CPF"
                label-for="cnpjCpf"
              >
                <b-form-input
                  v-model="form.cnpjCpf"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="col-md-6 col-xl-5 mb-4"
                label="Nome / Razão Social*"
                label-for="NomeRazao"
              >
                <b-form-input
                  v-model="form.NomeRazao"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="col-md-6 col-xl-4 mb-4"
                label="Nome Fantasia"
                label-for="nomeFantasia"
              >
                <b-form-input
                  v-model="form.nomeFantasia"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </b-row>
            <b-row>
              <b-form-group
                class="col-md-6 col-xl-4 mb-4"
                label="Tipo de Contribuinte"
                label-for="tipoContribuinte"
              >
                <b-form-select
                  v-model="tipoContribuinte"
                  :options="optionsContribuinte"
                  id="tipoContrib"
                >
                </b-form-select>
                <b-popover
                  target="tipoContrib"
                  triggers="hover focus"
                  content="Não Contribuinte: Não possue Inscrição Estadual
                          Contribuinte: Possue Inscrição Estadual
                          Contribuinte Isento: Inscrição Isenta"
                  variant="dark"
                ></b-popover>
              </b-form-group>

              <b-form-group
                class="col-md-6 col-xl-4 mb-4"
                label="IE / RG"
                label-for="ieRg"
              >
                <b-form-input
                  v-model="form.ieRg"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-col class="col-md-6 col-xl-4 mb-4">
                <b-form-group label="Tipo" label-for="TipoCadastro">
                  <b-button-group class="d-flex">
                    <b-button
                      size="sm"
                      variant="primary"
                      class="col-xl-6 btn-outline-primary"
                      :class="[showTipoCliente ? 'active' : '']"
                      @click="toggleTipoCliente"
                    >
                      Cliente</b-button
                    >
                    <b-button
                      size="sm"
                      variant="primary"
                      class="col-xl-6 btn-outline-primary"
                      :class="[!showTipoCliente ? 'active' : '']"
                      @click="toggleTipoCliente"
                    >
                      Fornecedor</b-button
                    >
                  </b-button-group>
                </b-form-group>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="d-flex">
          <b-form-group
            label="Cliente desde"
            label-for="dataCadCliente"
            class="col-md-3 mb-4"
          >
            <b-form-input type="date"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Data de Aniversário"
            label-for="dataAniversario"
            class="col-md-3 mb-4"
          >
            <b-form-input type="date"></b-form-input>
          </b-form-group>
          <b-col>
            <b-form-group label="Status do Cliente" label-for="statusCli">
              <b-button
                class="col-3 mb-3 success"
                :variant="statusCliente ? 'success' : 'danger'"
                @click="statusCliente = !statusCliente"
                >{{ statusCliente ? "Ativo" : "Inativo" }}</b-button
              >
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="d-md-flex" style="gap: 10px">
            <b-form-group>
              <b-form-checkbox> Cliente Estrangeiro </b-form-checkbox>
            </b-form-group>
            <div>
              <strong
                ><a href="#"><i class="i-Add"></i> Adicionar anexo</a></strong
              >
            </div>
          </b-col>
        </b-row>
      </b-card>

      <!-- #### Endereço #### -->
      <b-row>
        <b-col class="col-sm-12 col-md-12 col-lg-6">
          <b-card title="Endereço" class="mb-30">
            <b-row>
              <b-form-group
                class="col-sm-4 mb-4"
                label="CEP*"
                label-for="cepCli"
              >
                <the-mask
                  v-model="form.cepCli"
                  class="form-control"
                  :mask="['#####-###']"
                  id="cep"
                  required
                />
                <b-popover
                  target="cep"
                  triggers="hover focus"
                  content="Ao preencher o CEP, o endereço completo será preenchido automaticamente."
                  variant="dark"
                ></b-popover>
              </b-form-group>

              <b-form-group
                class="col-sm-8 mb-4"
                label="Cidade*"
                label-for="cidadeCli"
              >
                <b-form-input
                  v-model="form.cidadeCli"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="col-sm-9 mb-4"
                label="Logradouro*"
                label-for="logradouroCli"
              >
                <b-form-input
                  v-model="form.logradouroCli"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="col-sm-3 mb-4"
                label="Número*"
                label-for="numeroCli"
              >
                <b-form-input
                  v-model="form.numeroCli"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="col-sm-6"
                label="Bairro*"
                label-for="bairroCli"
              >
                <b-form-input
                  v-model="form.bairroCli"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="col-sm-6"
                label="Complemento*"
                label-for="complementoCli"
              >
                <b-form-input
                  v-model="form.complementoCli"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </b-row>
          </b-card>

          <!-- #### Dados Fiscais #### -->
          <b-card title="Dados Fiscais" class="mb-30">
            <b-row>
              <b-form-group
                class="col-md-6 mb-4"
                label="Regime Tributário"
                label-for="regTributario"
              >
                <b-form-select
                  v-model="regTributario"
                  :options="optionsRegTributario"
                >
                </b-form-select>
              </b-form-group>

              <b-form-group
                class="col-md-6 mb-4"
                label="Inscrição Municipal"
                label-for="insMunicipal"
              >
                <b-form-input type="text"> </b-form-input>
              </b-form-group>

              <b-form-group
                class="col-md-6 mb-4"
                label="Tipo Intermediador"
                label-for="tipIntermediador"
              >
                <b-form-select
                  v-model="tipIntermediador"
                  :options="optionsTipIntermediador"
                >
                </b-form-select>
              </b-form-group>

              <b-form-group
                class="col-md-6 mb-4"
                label="Identificador Intermediador"
                label-for="ideIntermediador"
              >
                <b-form-input type="text" id="codIntermediador"> </b-form-input>
                <b-popover
                  target="codIntermediador"
                  triggers="hover focus"
                  content="Digíte o código intermediador caso existir."
                  variant="dark"
                ></b-popover>
              </b-form-group>

              <b-form-group
                class="col-md-6 mb-4"
                label="Suframa"
                label-for="suframa"
              >
                <b-form-input type="text" id="suframa"> </b-form-input>
                <b-popover
                  target="suframa"
                  triggers="hover focus"
                  content="Obrigatório preenchimento do Suframa para indústrias dentro da zona franca de Manaus."
                  variant="dark"
                ></b-popover>
              </b-form-group>

              <b-form-group
                class="col-md-6 mb-4"
                label="Identificação Estrangeiro"
                label-for="ideEstrangeiro"
              >
                <b-form-input type="text"> </b-form-input>
              </b-form-group>

              <b-form-group
                class="col-md-12"
                label="Observação Fiscal (NF-e)"
                label-for="obsFiscal"
                id="obsFiscal"
              >
                <b-form-textarea type="text" rows="4"> </b-form-textarea>
                <b-popover
                  target="obsFiscal"
                  triggers="hover focus"
                  content="Escreva uma observação padrão para esse cliente e ela será importada automáticamente para NF-e emitidas para ele. "
                  variant="dark"
                ></b-popover>
              </b-form-group>
            </b-row>
          </b-card>

          <!-- #### Mais Informações #### -->
          <b-card title="Mais Informações" class="mb-30">
            <b-row>
              <b-form-group
                class="col-md-12"
                label="Observação interna"
                label-for="obsInterna"
              >
                <b-form-textarea type="text" rows="4"> </b-form-textarea>
              </b-form-group>
            </b-row>
          </b-card>
        </b-col>

        <!-- #### Contatos #### -->
        <b-col class="col-md-12 col-lg-6">
          <b-card title="Contatos" class="mb-30">
            <b-form>
              <b-row>
                <b-col class="md-12 d-flex justify-content-end">
                  <b-button
                    class="mb-4"
                    variant="primary"
                    v-b-modal.novoContato
                    @click="onContactListBtn"
                    >Novo Contato</b-button
                  >

                  <!-- #### MODAL INSERIR NOVO CONTATO #### -->
                  <b-modal
                    id="novoContato"
                    centered
                    title="Novo Contato"
                    hide-footer
                    ref="contato-modal"
                  >
                    <b-form @submit="onContactListSubmit" @reset="onReset">
                      <b-form-group label="Nome*" label-for="input-nome">
                        <b-form-input
                          id="input-nome"
                          v-model="contactListForm.name"
                          type="text"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group label="Email*" label-for="input-email">
                        <b-form-input
                          id="input-email"
                          v-model="contactListForm.email"
                          type="email"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group label="Celular" label-for="input-celular">
                        <b-form-input
                          id="input-celular"
                          type="text"
                          v-model="contactListForm.phone"
                          required
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group>
                        <b-form-checkbox> Contato Favorito </b-form-checkbox>
                      </b-form-group>

                      <b-form-group>
                        <b-button type="submit" variant="success"
                          >Salvar</b-button
                        >
                      </b-form-group>
                    </b-form>
                  </b-modal>
                </b-col>
              </b-row>

              <!-- #### TABELA CONTATO #### -->
              <vue-good-table
                :columns="colTabContact"
                :rows="rowsTabContact"
                :sort-options="{
                  enabled: false,
                }"
              >
                <div slot="emptystate">Nenhum registro foi encontrado</div>
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field == 'name'">
                    <b-link
                      v-b-modal.editContato
                      @click="editContactlist(props.row)"
                      >{{ props.row.name }}
                    </b-link>
                    <i class="i-Reverbnation text-warning font-weight-bold"></i>
                  </span>
                  <span v-else-if="props.column.field == 'action'">
                    <div class="text-center">
                      <b-link @click="deleteContactList(props.index)">
                        <i
                          class="i-Close-Window text-danger font-weight-bold"
                        ></i>
                      </b-link>
                    </div>
                  </span>
                </template>
              </vue-good-table>

              <!-- #### MODAL EDITAR CONTATO ####  -->
              <b-modal
                id="editContato"
                centered
                title="Editar Contato"
                hide-footer
              >
                <b-form @submit.stop.prevent="onUpdateContactList">
                  <b-form-group label="Nome*" label-for="input-nome">
                    <b-form-input
                      id="input-nome"
                      v-model="editContactListForm.name"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Email*" label-for="input-email">
                    <b-form-input
                      id="input-email"
                      v-model="editContactListForm.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Celular" label-for="input-celular">
                    <b-form-input
                      id="input-celular"
                      type="text"
                      v-model="editContactListForm.phone"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <b-form-checkbox> Contato Favorito </b-form-checkbox>
                  </b-form-group>

                  <b-form-group>
                    <b-button
                      type="submit"
                      variant="success"
                      @click="onUpdateContactList"
                      >Update</b-button
                    >
                  </b-form-group>
                </b-form>
              </b-modal>
            </b-form>
          </b-card>

          <!-- #### Financeiro #### -->
          <b-card title="Financeiro">
            <b-row>
              <b-form-group
                class="col-md-4 mb-4"
                label="Score de Crédito"
                label-for="scrCredito"
              >
                <b-form-input
                  class="mb-0"
                  type="text"
                  v-model="scoreCred"
                  maxlength="4"
                >
                </b-form-input>

                <b-form-input
                  id="scrCredito"
                  v-model="scoreCred"
                  type="range"
                  tabindex="1"
                  max="1000"
                ></b-form-input>
              </b-form-group>

              <b-form-group class="col-md-4 mb-4" label="Data da Consulta">
                <b-form-input type="date"> </b-form-input>
              </b-form-group>

              <b-form-group class="col-md-4 mb-4" label="Limite de Crédito">
                <b-form-input type="text" value="0,00" class="text-right">
                </b-form-input>
              </b-form-group>

              <b-form-group class="col-md-6 mb-4" label="Referência Bancária">
                <b-form-input type="text" class="text-right"> </b-form-input>
              </b-form-group>

              <b-form-group class="col-md-6 mb-4" label="Referência Comercial">
                <b-form-input type="text" class="text-right"> </b-form-input>
              </b-form-group>

              <b-form-group class="col-md-4 mb-4" label="Banco">
                <b-form-input type="text" class="text-right"> </b-form-input>
              </b-form-group>
              <b-form-group class="col-md-4 mb-4" label="Agência">
                <b-form-input type="text" class="text-right"> </b-form-input>
              </b-form-group>
              <b-form-group class="col-md-4 mb-4" label="Conta">
                <b-form-input type="text" class="text-right"> </b-form-input>
              </b-form-group>

              <b-form class="col-md-12">
                <b-row>
                  <b-col class="md-12 d-flex justify-content-end">
                    <b-button
                      class="mb-4"
                      variant="primary"
                      v-b-modal.inserirPix
                      >Inserir</b-button
                    >

                    <!-- #### MODAL INSERIR CHAVE PIX #### -->
                    <b-modal
                      id="inserirPix"
                      centered
                      title="Inserir Pix"
                      hide-footer
                      ref="pix-modal"
                    >
                      <b-form @submit="onPixListSubmit" @reset="onResetPix">
                        <b-form-group label="Banco*" label-for="input-banco">
                          <b-form-input
                            id="input-banco"
                            v-model="pixListForm.banc"
                            type="text"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group label="Tipo*" label-for="input-typeKey">
                          <b-form-input
                            id="input-typeKey"
                            v-model="pixListForm.typeKey"
                            type="text"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group label="Chave" label-for="input-key">
                          <b-form-input
                            id="input-key"
                            type="text"
                            v-model="pixListForm.key"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group>
                          <b-button type="submit" variant="success"
                            >Salvar</b-button
                          >
                        </b-form-group>
                      </b-form>
                    </b-modal>
                  </b-col>
                </b-row>

                <!-- #### TABELA PIX #### -->
                <b-form-group>
                  <div
                    id="cabecalhoTab"
                    class="rounded-top text-white bg-primary text-center"
                  >
                    Chaves PIX
                  </div>
                  <!-- <b-table hover :items="cadPix"></b-table> -->
                  <vue-good-table
                    :columns="colTabPix"
                    :rows="rowsTabPix"
                    :sort-options="{
                      enabled: false,
                    }"
                  >
                    <div slot="emptystate">Nenhum registro foi encontrado</div>
                    <template slot="table-row" slot-scope="props">
                      <span v-if="props.column.field == 'action'">
                        <div class="text-center">
                          <b-link @click="deletePixList(props.index)">
                            <i
                              class="i-Close-Window text-danger font-weight-bold"
                            ></i>
                          </b-link>
                        </div>
                      </span>
                    </template>
                  </vue-good-table>
                </b-form-group>
              </b-form>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-form-group class="col-md-12 d-flex justify-content-end mt-4">
          <b-button variant="info" class="mr-3">Voltar</b-button>
          <b-button variant="info" class="mr-3">Novo</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </b-form-group>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Cadastro de Cliente e Fornecedor",
  },
  data() {
    return {
      showTipoCliente: true,
      statusCliente: true,
      scoreCred: "0",
      rowsTabContact: [],
      rowsTabPix: [],
      editContactListForm: [],

      contactListForm: [
        {
          id: "",
          name: "",
          email: "",
          phone: "",
        },
      ],

      pixListForm: [
        {
          id: "",
          banc: "",
          typeKey: "",
          key: "",
        },
      ],

      colTabContact: [
        {
          label: "Nome",
          field: "name",
          thClass: "text-primary",
        },
        {
          label: "Email",
          field: "email",
          thClass: "text-primary",
        },
        {
          label: "Celular",
          field: "phone",
          type: "number",
          thClass: "text-primary",
        },
        {
          label: "",
          field: "action",
          thClass: "text-primary",
        },
      ],

      colTabPix: [
        {
          label: "Banco",
          field: "banc",
          thClass: "text-primary",
        },
        {
          label: "Tipo",
          field: "typeKey",
          thClass: "text-primary",
        },
        {
          label: "Chave",
          field: "key",
          thClass: "text-primary",
        },
        {
          label: "",
          field: "action",
          thClass: "text-primary",
        },
      ],

      tipoContribuinte: "nc",
      optionsContribuinte: [
        { value: "nc", text: " Não Contribuinte" },
        { value: "c", text: "Contribuinte" },
        { value: "ci", text: "Contribuinte Isento" },
      ],

      regTributario: "sn",
      optionsRegTributario: [
        { value: "sn", text: "Simples nacional" },
        { value: "ln", text: "Lucro nacional" },
        { value: "lp", text: "Lucro Presumido" },
      ],

      tipIntermediador: "",
      optionsTipIntermediador: [
        { value: "", text: "" },
        { value: "si", text: "Operação sem intermediador" },
        { value: "pt", text: "Operação em site ou plataforma de terceiros" },
      ],

      date: "",

      form: {
        cnpjCpf: "",
        NomeRazao: "",
        NomeFantasia: "",
        tipoContribuinte: "",
        ieRg: "",
        dateCad: "",
        dateAniv: "",
      },
    };
  },
  methods: {
    toggleTipoCliente() {
      this.showTipoCliente = !this.showTipoCliente;
    },

    // TABELA CONTATO ################################################

    onContactListBtn() {
      this.isUpdateBtn = false;
      this.isSaveBtn = true;
    },
    onContactListSubmit(evt) {
      evt.preventDefault();

      this.rowsTabContact.push({
        id: this.rowsTabContact.length + 1,
        name: this.contactListForm.name,
        email: this.contactListForm.email,
        phone: this.contactListForm.phone,
      });
      this.onReset();
    },

    onReset(evt) {
      (this.contactListForm.name = ""),
        (this.contactListForm.email = ""),
        (this.contactListForm.phone = "");
    },

    editContactlist(data) {
      this.isUpdateBtn = true;
      this.isSaveBtn = false;
      this.editContactListForm = data;
    },

    onUpdateContactList(evt) {
      evt.preventDefault();
      let modifiedList = this.rowsTabContact.map((row) => {
        if (row.id == this.editContactListForm.id) {
          return this.editContactListForm;
        } else {
          return row;
        }
      });
      this.rowsTabContact = modifiedList;
    },

    deleteContactList(data) {
      // console.log(data);
      this.$delete(this.rowsTabContact, data);
    },

    // TABELA PIX ################################################

    onPixListBtn() {
      this.isUpdateBtn = false;
      this.isSaveBtn = true;
    },
    onPixListSubmit(evt) {
      evt.preventDefault();

      this.rowsTabPix.push({
        id: this.rowsTabPix.length + 1,
        banc: this.pixListForm.banc,
        typeKey: this.pixListForm.typeKey,
        key: this.pixListForm.key,
      });
      this.onResetPix();
    },

    onResetPix(evt) {
      (this.pixListForm.name = ""),
        (this.pixListForm.email = ""),
        (this.pixListForm.phone = "");
    },

    deletePixList(data) {
      this.$delete(this.rowsTabPix, data);
    },
  },
};
</script>
<style scoped>
input,
select,
button {
  height: 40px;
}
input,
select,
textarea {
  background-color: transparent;
}

.card-title {
  padding-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  font-weight: bold;
}

#scrCredito {
  height: 10px;
}

#cabecalhoTab {
  padding: 15px 0;
  font-size: 14px;
}
</style>