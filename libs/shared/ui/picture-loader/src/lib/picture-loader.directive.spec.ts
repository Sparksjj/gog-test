import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PICTURE_LOADER_CONFIG } from './configs';
import { PictureLoaderDirective } from './picture-loader.directive';

const mockItem = {
  imagesPath: 'test',
  name: 'Test Image',
  width: 200,
  height: 100,
};

describe('PictureLoaderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [TestComponent],
    }).createComponent(TestComponent);
  });
  it('should create an instance', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create picture element with correct attributes', () => {
    const formats = TestBed.inject(PICTURE_LOADER_CONFIG).formats;

    fixture.detectChanges();
    const pictureElement = fixture.nativeElement.querySelector('picture');
    expect(pictureElement).toBeTruthy();

    const imgElement = pictureElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain(`${mockItem.imagesPath}.png`);
    expect(imgElement.alt).toBe(mockItem.name);
    expect(imgElement.width).toBe(mockItem.width);
    expect(imgElement.height).toBe(mockItem.height);

    const sourceElements = pictureElement.querySelectorAll('source');
    expect(sourceElements.length).toBe(3); // Assuming 3 formats

    sourceElements.forEach((source: HTMLSourceElement, index: number) => {
      const format = formats[index];
      expect(source.srcset).toContain(`${mockItem.imagesPath}.${format}`);
      expect(source.type).toBe(`image/${format}`);
    });
  });
});

@Component({
  template: `
    <section
      [libPictureLoader]="item.imagesPath"
      [width]="item.width"
      [height]="item.height"
      [alt]="item.name"
    ></section>
  `,
  imports: [PictureLoaderDirective],
})
class TestComponent {
  item = mockItem;
}
