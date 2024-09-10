import { NextResponse } from 'next/server'
import { PDFDocument, StandardFonts } from 'pdf-lib' // Используйте библиотеку для работы с PDF

export async function POST(request: Request) {
  const data = await request.json()
  const {
    companyName,
    companyAddress,
    companyContact,
    typesProducts,
    supplyVolume,
    deliverySchedule,
    paymentTerms,
    logistics,
    qualityStandards,
    legalFinancialAspects,
  } = data

  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  const fontSizeText = 11
  const fontSizeTitle = 14
  const lineSpacing = 16
  const margin = 50
  const maxWidth = 600 - 2 * margin
  let y = 800 - 2 * fontSizeText

  function parseText({ text, font, fontSize, maxWidth }: any) {
    let lines = []
    let words = text.split(' ')
    let line = ''

    for (let word of words) {
      let testLine = line + (line ? ' ' : '') + word
      const width = font.widthOfTextAtSize(testLine, fontSize)
      if (width > maxWidth) {
        lines.push(line)
        line = word
      } else {
        line = testLine
      }
    }
    lines.push(line)

    return lines
  }

  function drawTextRecursive(line: string | Array<string>) {
    if (Array.isArray(line)) {
      // If the line is an array, process each element recursively
      for (let subLine of line) {
        drawTextRecursive(subLine)
      }
    } else {
      page.drawText(line, {
        x: margin,
        y: y,
        size: fontSizeText,
        font: timesRomanFont,
      })
      y -= lineSpacing
    }
  }

  page.drawText('Letter of Intent', {
    x: 250,
    y,
    size: fontSizeTitle,
    font: timesRomanFont,
  })
  y -= lineSpacing * 2

  // Date
  drawTextRecursive(`Date: ${new Date().toLocaleDateString()}`)
  y -= lineSpacing * 0.5

  //From
  drawTextRecursive('From:')
  y -= lineSpacing * 0.5

  drawTextRecursive([companyName, companyAddress, companyContact])
  y -= lineSpacing * 0.5

  // To
  drawTextRecursive('To:')
  y -= lineSpacing * 0.5

  drawTextRecursive([
    'TDA Consulting Trade',
    'tel.: +380676340422',
    'www.tda-consulting-trade.com',
    'e-mail: contact@tda-consulting-trade.com',
  ])
  y -= lineSpacing * 0.5

  // Subject
  drawTextRecursive(
    'Subject: Intent to Cooperate and Purchase Crude Oil and/or Refined Petroleum Products',
  )
  y -= lineSpacing * 0.5

  // Letter
  drawTextRecursive([
    'Dear Topchiy Andriy,',
    ...parseText({
      text: `With this letter, ${companyName} expresses its intention to collaborate with TDA Consulting Trade in the supply of crude oil, as well as refined petroleum products such as gasoline and diesel. We highly value the opportunity for long-term and mutually beneficial cooperation and are ready to discuss terms that will lead to the conclusion of a formal agreement.`,
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 0.5

  // Supply
  drawTextRecursive('Supply Details:')
  y -= lineSpacing * 0.5

  drawTextRecursive(`Type of Product: ${typesProducts.join(', ')}`)
  y -= lineSpacing * 0.5

  drawTextRecursive([
    ...parseText({
      text: `Supply Volume: ${supplyVolume}`,
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 0.5

  drawTextRecursive([
    ...parseText({
      text: `Delivery Schedule: ${deliverySchedule}`,
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 0.5

  drawTextRecursive([
    ...parseText({
      text: `Payment Terms: ${paymentTerms}`,
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 0.5

  drawTextRecursive([
    ...parseText({
      text: `Logistics: ${logistics}`,
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 0.5

  drawTextRecursive([
    ...parseText({
      text: `Quality Standards: ${qualityStandards}`,
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 0.5

  drawTextRecursive([
    ...parseText({
      text: `Legal and Financial Aspects: ${legalFinancialAspects}`,
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 0.5

  drawTextRecursive('Next Steps:')
  y -= lineSpacing * 0.5

  drawTextRecursive([
    ...parseText({
      text: 'We propose to hold a meeting or online negotiations to discuss all the details and develop a final agreement.',
      font: timesRomanFont,
      fontSize: fontSizeText,
      maxWidth: maxWidth,
    }),
  ])
  y -= lineSpacing * 2

  drawTextRecursive('Sincerely,')

  const pdfBytes = await pdfDoc.save()

  return new NextResponse(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="document.pdf"',
    },
  })
}
