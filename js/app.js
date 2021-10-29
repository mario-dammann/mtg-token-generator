const App = {
    data() {
        return {
            drawer: {
              visible: false,
              accordion: [
                {
                  collapsed: true,
                  header: `How does this app work?`,
                  body: `You create tokens via the provided form and add them to the sheet. If you're satisfied, you use the "print" button to save your tokens as a .pdf file or print them directly.`
                },
                {
                  collapsed: true,
                  header: `What settings should I use in the print dialog?`,
                  body: `<p>The following options should be used in the print dialog:</p>
                      <ul>
                        <li>Set target to your printer or pdf service</li>
                        <li>Set layout to "Portrait"</li>
                        <li>Deactivate "Headers and footers"</li>
                        <li>Activate "Background images"</li>
                        <li>Set scaling to custom (100%) or no scaling</li>
                        <li>Set margins to "standard"</li>
                      </ul>`
                },
                {
                  collapsed: true,
                  header: `Can I use any images for my tokens?`,
                  body: `The resolution of the images should be high to garanty a crisp print and you should have the rights to use the chosen image. Otherwise there are no limitations.`
                },
                {
                  collapsed: true,
                  header: `Which material should I print on?`,
                  body: `Ideally tokens should be printed on thick paper or cardboard.`
                },
                {
                  collapsed: true,
                  header: `Do you save any of the data I entered?`,
                  body: `No data is being saved/uploaded. Everything happens in your own browser.`
                },
                {
                  collapsed: true,
                  header: `Who are you and how can I learn more about your work?`,
                  body: `My name is Mario Dammann. I'm an UI/UX Designer from Bonn (Germany). You can learn more about me and my work by visiting my <a href="https://www.mariodammann.de" target="_blank">website</a>.`
                },
              ],
            },
            currentView: 'intro',
            currentToken: null,
            form: {
                state: {
                    design: 'minimal',
                    name: 'Spider',
                    image : './images/example-image.png',
                    color: {
                      icon: 'BG',
                      hexA: '#e5e1df',
                      hexB: '#cde9d7',
                    },
                    type: 'Token Creature',
                    subtype: 'Spider',
                    power: '2',
                    toughness: '2',
                    text: `Reach, Deathtouch`,
                },
                colors: {
                    base: [
                      {
                        icon: 'W',
                        hexA: '#fffdea',
                        hexB: '#fffdea',
                      },
                      {
                        icon: 'U',
                        hexA: '#d5f0fd',
                        hexB: '#d5f0fd',
                      },
                      {
                        icon: 'B',
                        hexA: '#e5e1df',
                        hexB: '#e5e1df',
                      },
                      {
                        icon: 'R',
                        hexA: '#fcd5c7',
                        hexB: '#fcd5c7',
                      },
                      {
                        icon: 'G',
                        hexA: '#cde9d7',
                        hexB: '#cde9d7',
                      },
                      {
                        icon: 'C',
                        hexA: '#e6e1e0',
                        hexB: '#e6e1e0',
                      },
                      {
                        icon: 'M',
                        hexA: '#e7d4ac',
                        hexB: '#e7d4ac',
                      }
                    ],
                    duo: [
                      {
                        icon: 'WU',
                        hexA: '#fffdea',
                        hexB: '#d5f0fd',
                      },
                      {
                        icon: 'WB',
                        hexA: '#fffdea',
                        hexB: '#e5e1df',
                      },
                      {
                        icon: 'UB',
                        hexA: '#d5f0fd',
                        hexB: '#e5e1df',
                      },
                      {
                        icon: 'UR',
                        hexA: '#d5f0fd',
                        hexB: '#fcd5c7',
                      },
                      {
                        icon: 'BR',
                        hexA: '#e5e1df',
                        hexB: '#fcd5c7',
                      },
                      {
                        icon: 'BG',
                        hexA: '#e5e1df',
                        hexB: '#cde9d7',
                      },
                      {
                        icon: 'RG',
                        hexA: '#fcd5c7',
                        hexB: '#cde9d7',
                      },
                      {
                        icon: 'RW',
                        hexA: '#fcd5c7',
                        hexB: '#fffdea',
                      },
                      {
                        icon: 'GW',
                        hexA: '#cde9d7',
                        hexB: '#fffdea',
                      },
                      {
                        icon: 'GU',
                        hexA: '#cde9d7',
                        hexB: '#d5f0fd',
                      }
                    ],
                },
                icons: ['T', 'Q', 'W', 'U', 'B', 'R', 'G', 'C', 'M', 'WU', 'WB', 'UB', 'UR', 'BR', 'BG', 'RG', 'RW', 'GW', 'GU', 'X', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '2W', '2U', '2B', '2R', '2G', 'WP', 'UP', 'BP', 'RP', 'GP', 'S']
            },
            tokens: [
                {},
            ]
        }
    },
    methods: {
      print() {
        window.print();
      },
      navigateTo(view) {
        this.currentView = view;
      },
      toggleDrawer() {
        this.drawer.visible = this.drawer.visible = !this.drawer.visible;
      },
      toggleAccordionItem(index) {
        this.drawer.accordion[index].collapsed = !this.drawer.accordion[index].collapsed;
      },
      createToken(tokenIndex) {
        this.navigateTo('form');
        this.currentToken = tokenIndex;
      },
      removeToken(tokenIndex) {
        this.tokens.splice(
          tokenIndex,
          1
        );
      },
      useCachedImage() {
        this.form.state.image = URL.createObjectURL(event.target.files[0])
      },
      addToken(tokenIndex) {
        let formCopy = JSON.parse(JSON.stringify(this.form.state));

        this.tokens.splice(
          tokenIndex,
          1,
          formCopy
        );

        this.tokens.push({});

        this.navigateTo('sheet');
      },
    }
};

const app = Vue.createApp(App);

app.component('fab-nav', {
    props: {
      view: String,
    },
    emits: ['faq', 'print', 'back'],
    template: `
        <nav class="fab-nav d-print-none">
          <button type="button"
                  class="btn btn-primary fab-nav__item fab-nav__item--faq"
                  @click="$emit('faq')"
                  title="FAQs"
                  aria-label="FAQs">
          </button>
          <button type="button"
                  class="btn btn-primary fab-nav__item fab-nav__item--print"
                  @click="$emit('print')"
                  @keyup.enter="$emit('print')"
                  v-if="view == 'sheet'"
                  title="Print"
                  aria-label="Print">
          </button>
          <button type="button"
                  class="btn btn-primary fab-nav__item fab-nav__item--back"
                  v-if="view == 'form'"
                  @click="$emit('back')"
                  @keyup.enter="$emit('back')"
                  title="Back"
                  aria-label="Back">
          </button>
        </nav>
    `
}),

app.component('faq-drawer', {
    props: {
      accordion: Array
    },
    emits: ['close', 'toggle'],
    template: `
        <div class="offcanvas offcanvas-start show" tabindex="-1" aria-labelledby="offcanvas-faq">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvas-faq">FAQs</h5>
                <button @click="$emit('close')" type="button" class="btn-close text-reset" title="Close" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
                <div>
                    <div class="accordion accordion-flush">
                        <div class="accordion-item" v-for="(item, index) in accordion">
                            <h2 class="accordion-header" :id="'accordion-item-' + index">
                                <button class="accordion-button" :class="{ collapsed: item.collapsed}" @click="$emit('toggle', index)" type="button" :aria-expanded="!item.collapsed" :aria-controls="'accordion-item-' + index">
                                    {{ item.header }}
                                </button>
                            </h2>
                            <div class="accordion-collapse" :class="{ collapse: item.collapsed}" :aria-labelledby="'accordion-item-' + index">
                                <div class="accordion-body" v-html="item.body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-backdrop fade show" @click="$emit('close')"></div>
    `
}),

app.component('token', {
    props: {
      preview: Boolean,
      empty: Boolean,
      design: String,
      name: String,
      image: String,
      color: String,
      type: String,
      subtype: String,
      power: String,
      toughness: String,
      text: String
    },
    emits: ['remove', 'create'],
    computed: {
      renderedText() {
        let transformedString = this.text.replace(/\{(.+?)\}/g, function(m, icon) {
            return '<i class="icon" style="background-image: url(icons/' + icon + '.png)"></i>';
        });

        return transformedString;
      }
    },
    template: `
        <template v-if="!empty">
            <button type="button" :title="!preview ? 'Remove token' : ''" :aria-label="!preview ? 'Remove token' : ''" @click="!preview && $emit('remove')" class="token" :class="'token--design-' + design" :class="!preview ? 'token--state-filled' : 'token--state-preview'" :data-design="design" tabindex="0" :style="'--token-color-a: ' + color.hexA + ';--token-color-b: ' + color.hexB">
                <div class="token__image" :style="'background-image: url(' + image + ')'"></div>
                <div class="token__header"><img alt="" class="token__color" :src="'./icons/' + color.icon + '.png'">
                    <div class="token__name">{{ name }}</div>
                    <div class="token__values" v-if="power && toughness">{{ power }}/{{ toughness }}</div>
                </div>

                <div class="token__footer">
                    <div class="token__type" v-if="type || subtype">{{ type }} {{ type && subtype ? '&#8211;' : '' }} {{ subtype }}</div>
                    <div class="token__text" v-if="text" v-html="renderedText"></div>
                </div>
            </button>
        </template>

        <template v-else>
            <button type="button" :title="!preview ? 'Add token' : ''" :aria-label="!preview ? 'Add token' : ''" @click="!preview && $emit('create')" class="token" :class="!preview ? 'token--state-empty' : 'token--state-preview'" tabindex="0"></button>
        </template>
    `
}),

app.component('token-form', {
    props: {
      currentToken: Number,
      form: Object,
    },
    emits: ['preview', 'add'],
    methods: {
      addIcon(icon) {
        let iconString = '{' + icon + '}';
        let textarea = this.$refs.textarea;
        let cursorPosition = textarea.selectionEnd;

        this.form.state.text = this.form.state.text.substring(0, cursorPosition) + iconString + this.form.state.text.substring(cursorPosition);
        cursorPosition += iconString.length;

        this.$nextTick(function () {
          textarea.focus();
          textarea.setSelectionRange(cursorPosition, cursorPosition);
        });
      }
    },
    template: `
        <main class="container mt-3 mt-md-5">
            <h1 class="mb-3">Create token</h1>
            <div class="row">
                <div class="col-xs-12 col-md-6 order-xs-1 order-md-2">
                    <div class="token-preview d-flex mb-5 mt-4 mt-md-0 justify-content-center">
                        <div>
                            <div class="h4 text-center">Preview</div>
                            <token v-bind="form.state" :preview="true"></token>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-md-6 order-xs-2 order-md-1">
                    <form>
                        <div class="form-floating mb-3">
                            <select v-model="form.state.design" class="form-select" id="token-design">
                                <option value="minimal">Minimalistic</option>
                                <option value="custom">Custom Design</option>
                            </select>
                            <label for="token-design">Design</label>
                        </div>


                        <div class="form-floating mb-3">
                            <input v-model="form.state.image" @change="$emit('preview-image')" type="file" class="form-control" id="token-image" placeholder="Image">
                            <label for="token-image">Image</label>
                        </div>

                        <template v-if="form.state.design != 'custom'">
                            <div class="form-floating mb-3">
                                <input v-model="form.state.name" type="text" class="form-control" id="token-name" placeholder="Name">
                                <label for="token-name">Name</label>
                            </div>

                            <div class="mb-3">
                                <div class="form-floating">
                                  <div class="colors form-control">
                                      <div class="colors__row mb-2">
                                          <template v-for="color in form.colors.base">
                                              <div class="custom-radio" >
                                                  <input :id="'color-' + color.icon" type="radio" :value="color" v-model="form.state.color" />
                                                  <label :for="'color-' + color.icon"><i :aria-label="'Color: ' + color.icon" class="icon" :style="'background-image: url(icons/' + color.icon + '.png)'"></i></label>
                                              </div>
                                          </template>
                                      </div>
                                      <div class="colors__row">
                                          <template v-for="color in form.colors.duo">
                                              <div class="custom-radio" >
                                                  <input :id="'color-' + color.icon" type="radio" :value="color" v-model="form.state.color" />
                                                  <label :for="'color-' + color.icon"><i :aria-label="'Color: ' + color.icon" class="icon" :style="'background-image: url(icons/' + color.icon + '.png)'"></i></label>
                                              </div>
                                          </template>
                                      </div>
                                    </div>
                                    <label>Color</label>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input v-model="form.state.type" type="text" class="form-control" id="token-type" placeholder="Type">
                                        <label for="token-type">Type</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="form-floating">
                                        <input v-model="form.state.subtype" type="text" class="form-control" id="token-subtype" placeholder="Subtype">
                                        <label for="token-subtype">Subtype</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating ">
                                        <input v-model="form.state.power" type="text" class="form-control" id="token-power" placeholder="Power">
                                        <label for="token-power">Power</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="form-floating">
                                        <input v-model="form.state.toughness" type="text" class="form-control" id="token-toughness" placeholder="Toughness">
                                        <label for="token-toughness">Toughness</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-floating input-group mb-3">
                                <textarea ref="textarea" v-model="form.state.text" class="form-control token-textarea" placeholder="Text" id="token-text"></textarea>
                                <label for="token-text">Text</label>
                                <div class="input-group-text token-textarea__icons">
                                    <div>
                                        <template v-for="icon in form.icons">
                                            <button type="button" @click="addIcon(icon)" title="Add icon" aria-label="Add icon">
                                                <i class="icon" :style="'background-image: url(icons/' + icon + '.png)'"></i>
                                            </button>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <div class="field mb-5">
                            <button class="btn btn-lg btn-primary" type="button" @click="$emit('add')">Create token</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    `
}),

app.mount('#app');
