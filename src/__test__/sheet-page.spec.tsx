import SheetPage from '@/pages/sheet-component';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

describe('SheetPage', () => {
  it('should not violate any a11y issues', async () => {
    render(<SheetPage />);
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
