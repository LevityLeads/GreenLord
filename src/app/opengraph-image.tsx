import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'GreenLord - UK Landlord EPC Compliance Made Simple';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#003366',
          backgroundImage: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #004488 100%)',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #8dce46 0%, #19b459 50%, #008054 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #8dce46 0%, #19b459 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
              }}
            >
              <span style={{ fontSize: '48px', color: 'white', fontWeight: 'bold' }}>G</span>
            </div>
            <span
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '-2px',
              }}
            >
              GreenLord
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '36px',
              color: '#99bbee',
              textAlign: 'center',
              marginBottom: '40px',
              maxWidth: '900px',
            }}
          >
            UK Landlord EPC Compliance Made Simple
          </div>

          {/* Key info boxes */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
              }}
            >
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#8dce46' }}>2030</span>
              <span style={{ fontSize: '18px', color: '#99bbee' }}>EPC C Deadline</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
              }}
            >
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffd500' }}>45+</span>
              <span style={{ fontSize: '18px', color: '#99bbee' }}>Expert Guides</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
              }}
            >
              <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#17b2b2' }}>4</span>
              <span style={{ fontSize: '18px', color: '#99bbee' }}>Free Tools</span>
            </div>
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '24px',
            color: '#6699dd',
          }}
        >
          greenlord.co.uk
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
