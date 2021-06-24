import { html, customElement, property, css } from 'lit-element';
import { MarkdownDocument } from '../markdown-editor-components/markdown-document';
import { ContainerElement } from './abstract/container-element';
import { List } from './markdown-list';
import { isMarkdownElement } from './functions';

@customElement('markdown-list-item')
export class ListItem extends ContainerElement {
  static styles = css`
    :host {
      position: relative;
      left: 20px;
    }
  `;

  @property({ type: Boolean })
  spread?: boolean

  render() {
    return html`
      <div class='item-container'><slot></slot></div>
    `;
  }

  getDepth(): number {
    let depth = 0;
    let ancestor = this.parentNode;

    while (ancestor != null && !(ancestor instanceof MarkdownDocument)) {
      if (ancestor instanceof List) {
        depth++;
      }

      ancestor = ancestor.parentNode;
    }

    return depth;
  }

  getMarkdown(): string {
    return '  '.repeat(this.getDepth()) + '- ' + this.getTaskMarkdown() + this.getMarkdownWithTextForElement(); // + '\n';
  }

  getTaskMarkdown(): string { return '' }  

  getMarkdownWithTextForElement(): string {
    return Array.from(this.childNodes).map((child) => {
      if (isMarkdownElement(child)) {
        return child.getMarkdown();
      } else {
        return child.textContent?.trim() + '\n'; // trim to avoid extra spaces and end of lines, which could be interpreted as paragraph
      }
    }).join('');
  }
}
