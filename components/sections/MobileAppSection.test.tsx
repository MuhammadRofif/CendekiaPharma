import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import MobileAppSection from './MobileAppSection';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockReset();
});

// Unit test: Verify MobileAppSection renders correctly
test('MobileAppSection renders with form and mockup', () => {
  render(<MobileAppSection />);
  
  // Check heading
  expect(screen.getByText('Aplikasi Mobile Segera Hadir')).toBeInTheDocument();
  
  // Check form elements
  expect(screen.getByLabelText('Alamat Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('nama@domain.com')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Beritahu Saya/i })).toBeInTheDocument();
  
  // Check platform availability text
  expect(screen.getByText('Tersedia untuk Android')).toBeInTheDocument();
  expect(screen.getByText('Tersedia untuk iOS')).toBeInTheDocument();
});

// Unit test: Form submission with valid email shows success message
test('Form submission with valid email shows success message', async () => {
  mockFetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true, message: 'Terima kasih! Kami akan memberitahu Anda saat aplikasi diluncurkan.' }),
  });

  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Enter valid email
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  
  // Submit form
  fireEvent.submit(form!);
  
  // Check success message
  await waitFor(() => {
    expect(screen.getByText('Terima kasih! Kami akan memberitahu Anda saat aplikasi diluncurkan.')).toBeInTheDocument();
  });
  
  // Check that fetch was called with correct parameters
  expect(mockFetch).toHaveBeenCalledWith('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: 'test@example.com' }),
  });
  
  // Check that input is cleared
  expect(emailInput).toHaveValue('');
});

// Unit test: Form submission with empty email shows error message
test('Form submission with empty email shows error message', async () => {
  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Submit form without entering email
  fireEvent.submit(form!);
  
  // Check error message
  await waitFor(() => {
    expect(screen.getByText('Alamat email tidak boleh kosong')).toBeInTheDocument();
  });
  
  // Check that fetch was not called
  expect(mockFetch).not.toHaveBeenCalled();
});

// Unit test: Form submission with invalid email format shows error message
test('Form submission with invalid email format shows error message', async () => {
  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Enter invalid email
  fireEvent.change(emailInput, { target: { value: 'invalid' } });
  fireEvent.submit(form!);
  
  // Check error message
  await waitFor(() => {
    expect(screen.getByText('Format email tidak valid. Contoh: nama@domain.com')).toBeInTheDocument();
  });
  
  // Check that fetch was not called
  expect(mockFetch).not.toHaveBeenCalled();
});

// Unit test: Form submission with server error shows error message
test('Form submission with server error shows error message', async () => {
  mockFetch.mockResolvedValueOnce({
    ok: false,
    json: async () => ({ success: false, error: 'Terjadi kesalahan. Silakan coba lagi.' }),
  });

  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Enter valid email
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  
  // Submit form
  fireEvent.submit(form!);
  
  // Check error message
  await waitFor(() => {
    expect(screen.getByText('Terjadi kesalahan. Silakan coba lagi.')).toBeInTheDocument();
  });
});

// Unit test: Form submission with network error shows error message
test('Form submission with network error shows error message', async () => {
  mockFetch.mockRejectedValueOnce(new Error('Network error'));

  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Enter valid email
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  
  // Submit form
  fireEvent.submit(form!);
  
  // Check error message
  await waitFor(() => {
    expect(screen.getByText('Koneksi gagal. Periksa koneksi internet Anda.')).toBeInTheDocument();
  });
});

// Unit test: Form submission with duplicate email shows error message
test('Form submission with duplicate email shows error message', async () => {
  mockFetch.mockResolvedValueOnce({
    ok: false,
    json: async () => ({ success: false, error: 'Email ini sudah terdaftar untuk notifikasi.' }),
  });

  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Enter valid email
  fireEvent.change(emailInput, { target: { value: 'duplicate@example.com' } });
  
  // Submit form
  fireEvent.submit(form!);
  
  // Check error message
  await waitFor(() => {
    expect(screen.getByText('Email ini sudah terdaftar untuk notifikasi.')).toBeInTheDocument();
  });
});

// Unit test: Email input has proper accessibility attributes
test('Email input has proper accessibility attributes', () => {
  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  
  // Check that input has proper type
  expect(emailInput).toHaveAttribute('type', 'email');
  
  // Check that input has placeholder
  expect(emailInput).toHaveAttribute('placeholder', 'nama@domain.com');
});

// Unit test: Error message has proper role for screen readers
test('Error message has proper role for screen readers', async () => {
  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Submit form without entering email
  fireEvent.submit(form!);
  
  // Check that error message has role="alert"
  await waitFor(() => {
    const errorMessage = screen.getByText('Alamat email tidak boleh kosong');
    expect(errorMessage).toHaveAttribute('role', 'alert');
  });
});

// Unit test: Success message has proper role for screen readers
test('Success message has proper role for screen readers', async () => {
  mockFetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true, message: 'Success' }),
  });

  render(<MobileAppSection />);
  
  const emailInput = screen.getByLabelText('Alamat Email');
  const form = emailInput.closest('form');
  
  // Enter valid email and submit
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.submit(form!);
  
  // Check that success message has role="status"
  await waitFor(() => {
    const successMessage = screen.getByText('Terima kasih! Kami akan memberitahu Anda saat aplikasi diluncurkan.');
    expect(successMessage).toHaveAttribute('role', 'status');
  });
});
