import { LitElement, html, customElement, css } from 'lit-element';

@customElement('toolbar-separator')
export class ToolbarSeparator extends LitElement {

  static styles = css`
    :host {
    }
    .separator {
      width: 1px;
      background-color: gray;
      height: 24px;
      margin: 0 4px 0 4px;
    }
  `;

  render() {
    return html`
      <div class='separator'></div>
    `;
  }

  firstUpdated() {
  }
}
