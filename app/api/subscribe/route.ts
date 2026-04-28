import { NextRequest, NextResponse } from 'next/server';
import { validateEmail } from '@/lib/utils';
import { promises as fs } from 'fs';
import path from 'path';

interface SubscribeRequest {
  email: string;
}

interface EmailSubscriber {
  email: string;
  subscribedAt: string;
  source: 'mobile-app-section';
}

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'subscribers.json');

/**
 * POST /api/subscribe
 * Handles email subscription for mobile app notifications.
 * 
 * Validates: Requirements 12.3, 12.4
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

    // Read existing subscribers
    let subscribers: EmailSubscriber[] = [];
    try {
      const fileContent = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
      subscribers = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      subscribers = [];
    }

    // Check for duplicate email
    const isDuplicate = subscribers.some(
      (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
    );

    if (isDuplicate) {
      return NextResponse.json(
        { success: false, error: 'Email ini sudah terdaftar untuk notifikasi.' },
        { status: 409 }
      );
    }

    // Add new subscriber
    const newSubscriber: EmailSubscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      source: 'mobile-app-section',
    };

    subscribers.push(newSubscriber);

    // Save to file
    await fs.writeFile(
      SUBSCRIBERS_FILE,
      JSON.stringify(subscribers, null, 2),
      'utf-8'
    );

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
