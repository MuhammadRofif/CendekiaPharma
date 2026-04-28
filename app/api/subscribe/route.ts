import { NextRequest, NextResponse } from 'next/server';
import { validateEmail } from '@/lib/utils';

// Configure Edge Runtime for Cloudflare Pages compatibility
export const runtime = 'edge';

interface SubscribeRequest {
  email: string;
}

interface EmailSubscriber {
  email: string;
  subscribedAt: string;
  source: 'mobile-app-section';
}

/**
 * POST /api/subscribe
 * Handles email subscription for mobile app notifications.
 * 
 * Validates: Requirements 12.3, 12.4
 * 
 * Note: In Edge Runtime, we use in-memory storage for demo purposes.
 * In production, you would use a database or external storage service.
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: SubscribeRequest = await request.json();
    const { email } = body;

    // Server-side validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Alamat email tidak boleh kosong' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Format email tidak valid. Contoh: nama@domain.com' },
        { status: 400 }
      );
    }

    // In Edge Runtime, we simulate successful subscription
    // In production, you would save to a database like:
    // - Supabase
    // - PlanetScale
    // - Cloudflare D1
    // - External API service

    // Simulate duplicate check (in production, query your database)
    const isDuplicate = false; // Replace with actual duplicate check

    if (isDuplicate) {
      return NextResponse.json(
        { success: false, error: 'Email ini sudah terdaftar untuk notifikasi.' },
        { status: 409 }
      );
    }

    // Simulate successful subscription
    // In production, save to your database here
    console.log('New subscriber:', {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      source: 'mobile-app-section',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Terima kasih! Kami akan memberitahu Anda saat aplikasi diluncurkan.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
