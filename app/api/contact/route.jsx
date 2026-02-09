import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const {
      name,
      surname,
      email,
      phone,
      message,
      product,
    } = await request.json();
  
    if (!email || !message) {
      return NextResponse.json({
        success: false,
        message: 'Data is required',
      });
    }

    let productText = '';
    if (product) {
      productText = `Produkt: ${product}\n`;
    }

    const { data, error } = await resend.emails.send({
      from: 'GILU <praha@gilu.cz>',
      to: ['praha@gilu.cz'],
      subject: 'Poptávka z gilu.cz',
      text: `
        Jméno: ${name}\n
        Příjmení: ${surname}\n
        Email: ${email}\n
        Telefon: ${phone}\n
        Zpráva: ${message}\n
        ${productText}
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}