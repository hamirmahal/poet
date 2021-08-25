import { Bundle, BundleValidationKind } from './bundle'
import { expectErrors, first, loadSuccess, makeBundle, read } from './util.spec'

describe('Bundle validations', () => {
  it(BundleValidationKind.NO_BOOKS, () => {
    const bundle = makeBundle()
    bundle.load('<container xmlns="https://openstax.org/namespaces/book-container" version="1"/>')
    expectErrors(bundle, [BundleValidationKind.NO_BOOKS])
  })
  it(BundleValidationKind.MISSING_BOOK, () => {
    const bundle = loadSuccess(makeBundle())
    const book = first(bundle.books)
    book.load(undefined)
    expectErrors(bundle, [BundleValidationKind.MISSING_BOOK])
  })
})

describe('Happy path', () => {
  let bundle = null as unknown as Bundle

  beforeEach(() => {
    bundle = makeBundle()
    bundle.load(read(bundle.absPath))
  })
  it('loads the book bundle', () => {
    expect(bundle.exists).toBeTruthy()
    expect(bundle.isLoaded).toBeTruthy()
    expect(bundle.books.size).toBe(1)
  })
  it('loads the Book', () => {
    const book = first(bundle.books)
    loadSuccess(book)
  })
  it('loads a Page', () => {
    const book = loadSuccess(first(bundle.books))
    const page = first(book.pages)
    loadSuccess(page)
  })
})
