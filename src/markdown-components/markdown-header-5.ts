import { html, customElement, css } from 'lit-element';
import { Heading } from './abstract/heading';

@customElement('markdown-header-5')
export class Header5 extends Heading {
  depth = 5;

  static styles = css`
    :host {
      position: relative;
      min-height: 1em;
    }
    h5 {
      font-size: (--header5-font-size);
    }
  `;

  render() {
    return html`<h5><slot></slot></h5>`;
  }
}
