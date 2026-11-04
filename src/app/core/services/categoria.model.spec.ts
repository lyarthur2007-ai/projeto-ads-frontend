import { TestBed } from '@angular/core/testing';
import { CategoriaModel } from './categoria.model';

describe('CategoriaModel', () => {
  let service: CategoriaModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
