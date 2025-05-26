import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_HERO } from '@gog-test/mock-hero';
import { PictureLoaderDirective } from '@gog-test/picture-loader';
import { HeroBanerComponent } from './hero-baner.component';

describe('HeroBanerComponent', () => {
  let component: HeroBanerComponent;
  let fixture: ComponentFixture<HeroBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBanerComponent, PictureLoaderDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroBanerComponent);
    fixture.componentRef.setInput('item', MOCK_HERO);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct initial baner height', () => {
    expect(component.banerHeight()).toBe(370);
  });

  it('should change size on resize event', () => {
    jest.spyOn(component, 'onResize');
    global.dispatchEvent(new Event('resize'));
    expect(component.onResize).toHaveBeenCalled();
  });
});
