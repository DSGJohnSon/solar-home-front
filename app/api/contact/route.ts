import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  clientType: string;
  address: string;
  projectTypes: string[];
  buildingType: string;
  message: string;
  surface: string;
}

// ── Palette (hexadécimal, compatible tous clients mail) ──────────────────────
// primary gold : #be9c52   zinc-950 : #09090b   zinc-900 : #18181b
// zinc-800 : #27272a       zinc-500 : #71717a   zinc-400 : #a1a1aa
// zinc-200 : #e4e4e7       zinc-100 : #f4f4f5   zinc-50  : #fafafa

// ── Helpers ───────────────────────────────────────────────────────────────────

function row(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:12px 20px;background:#f4f4f5;border-bottom:1px solid #e4e4e7;border-right:1px solid #e4e4e7;
               font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
               font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;
               color:#71717a;white-space:nowrap;vertical-align:top;width:180px;">
      ${label}
    </td>
    <td style="padding:12px 20px;background:#ffffff;border-bottom:1px solid #e4e4e7;
               font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
               font-size:14px;color:#18181b;vertical-align:top;line-height:1.5;">
      ${value || "—"}
    </td>
  </tr>`;
}

function badge(text: string): string {
  return `<span style="display:inline-block;padding:3px 10px;background:#09090b;
                        font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                        font-size:10px;font-weight:700;text-transform:uppercase;
                        letter-spacing:0.1em;color:#be9c52;margin:2px 4px 2px 0;">${text}</span>`;
}

// ── Template commercial ───────────────────────────────────────────────────────

function buildCommercialHtml(data: ContactFormData, imageCount: number): string {
  const projectBadges =
    data.projectTypes.length > 0
      ? data.projectTypes.map(badge).join("")
      : "—";

  const photoLine =
    imageCount > 0
      ? `<tr>
          <td colspan="2" style="padding:12px 20px;background:#fafafa;border-top:1px solid #e4e4e7;
                                  font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                                  font-size:12px;color:#71717a;">
            📎 &nbsp;<strong>${imageCount} photo${imageCount > 1 ? "s" : ""}</strong> jointe${imageCount > 1 ? "s" : ""} à cet email.
          </td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Nouvelle demande de devis — Solar Home 37</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation"
       style="background:#f4f4f5;padding:48px 16px 64px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" role="presentation"
           style="max-width:600px;width:100%;">

      <!-- ░░ HEADER ░░ -->
      <tr>
        <td style="background:#09090b;padding:0;">
          <!-- bande or -->
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="height:3px;background:#be9c52;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
          </table>
          <!-- contenu header -->
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="padding:32px 36px 28px;">
                <p style="margin:0 0 10px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:10px;font-weight:700;text-transform:uppercase;
                           letter-spacing:0.18em;color:#be9c52;">
                  Solar Home 37
                </p>
                <h1 style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                            font-size:24px;font-weight:700;text-transform:uppercase;
                            letter-spacing:0.02em;color:#ffffff;line-height:1.2;">
                  Nouvelle demande<br />de devis
                </h1>
              </td>
              <td style="padding:32px 36px 28px;text-align:right;vertical-align:top;">
                <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:11px;color:#52525b;line-height:1.6;">
                  ${new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}<br />
                  Formulaire de contact
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ░░ INTRO ░░ -->
      <tr>
        <td style="background:#ffffff;padding:32px 36px 24px;
                   border-left:1px solid #e4e4e7;border-right:1px solid #e4e4e7;">
          <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                     font-size:14px;color:#52525b;line-height:1.7;">
            Une nouvelle demande de devis vient d'être soumise via le site
            <strong style="color:#18181b;">solarhome37.fr</strong>.
            Voici le récapitulatif complet.
          </p>
        </td>
      </tr>

      <!-- ░░ SECTION : CONTACT ░░ -->
      <tr>
        <td style="padding:0 0 1px;border-left:1px solid #e4e4e7;border-right:1px solid #e4e4e7;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="padding:10px 20px 10px 36px;background:#18181b;">
                <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:9px;font-weight:700;text-transform:uppercase;
                           letter-spacing:0.15em;color:#be9c52;">
                  Coordonnées du demandeur
                </p>
              </td>
            </tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                 style="border-collapse:collapse;border:1px solid #e4e4e7;border-top:none;">
            ${row("Nom / Prénom", data.name)}
            ${row("Téléphone", data.phone)}
            ${row("Email", `<a href="mailto:${data.email}" style="color:#be9c52;text-decoration:none;">${data.email}</a>`)}
            ${row("Profil client", data.clientType)}
          </table>
        </td>
      </tr>

      <!-- ░░ SECTION : PROJET ░░ -->
      <tr>
        <td style="padding:24px 0 1px;border-left:1px solid #e4e4e7;border-right:1px solid #e4e4e7;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="padding:10px 20px 10px 36px;background:#18181b;">
                <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:9px;font-weight:700;text-transform:uppercase;
                           letter-spacing:0.15em;color:#be9c52;">
                  Détails du projet
                </p>
              </td>
            </tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                 style="border-collapse:collapse;border:1px solid #e4e4e7;border-top:none;">
            ${row("Adresse du projet", data.address)}
            ${row("Type(s) de projet", projectBadges)}
            ${row("Type de bâtiment", data.buildingType)}
            ${row("Surface / vitrages", data.surface)}
          </table>
        </td>
      </tr>

      <!-- ░░ SECTION : MESSAGE ░░ -->
      <tr>
        <td style="padding:24px 0 0;border-left:1px solid #e4e4e7;border-right:1px solid #e4e4e7;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="padding:10px 20px 10px 36px;background:#18181b;">
                <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:9px;font-weight:700;text-transform:uppercase;
                           letter-spacing:0.15em;color:#be9c52;">
                  Description du projet
                </p>
              </td>
            </tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                 style="border-collapse:collapse;border:1px solid #e4e4e7;border-top:none;">
            <tr>
              <td style="padding:20px 24px;background:#ffffff;
                         font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                         font-size:14px;color:#18181b;line-height:1.75;white-space:pre-wrap;">
                ${data.message || "—"}
              </td>
            </tr>
            ${photoLine}
          </table>
        </td>
      </tr>

      <!-- ░░ FOOTER ░░ -->
      <tr>
        <td style="background:#09090b;padding:24px 36px;
                   border-left:1px solid #27272a;border-right:1px solid #27272a;border-bottom:1px solid #27272a;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td>
                <p style="margin:0 0 4px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:11px;font-weight:700;text-transform:uppercase;
                           letter-spacing:0.12em;color:#be9c52;">
                  Solar Home 37
                </p>
                <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:11px;color:#52525b;line-height:1.6;">
                  Expert en solutions adhésives et décoratives — Vouvray (37)<br />
                  contact@solarhome37.fr
                </p>
              </td>
              <td align="right" style="vertical-align:bottom;">
                <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:10px;color:#3f3f46;">
                  solarhome37.fr
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
  </td></tr>
</table>

</body>
</html>`;
}

// ── Template admin ────────────────────────────────────────────────────────────

function buildAdminHtml(
  data: ContactFormData,
  imageCount: number,
  timestamp: string
): string {
  const base = buildCommercialHtml(data, imageCount);

  // Bannière admin insérée juste après le header, avant l'intro
  const adminBanner = `
      <!-- ░░ BANNIÈRE ADMIN ░░ -->
      <tr>
        <td style="background:#fefce8;border-left:3px solid #be9c52;
                   border-right:1px solid #e4e4e7;padding:16px 24px 16px 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td style="vertical-align:middle;padding-right:16px;">
                <p style="margin:0 0 4px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:10px;font-weight:700;text-transform:uppercase;
                           letter-spacing:0.12em;color:#92400e;">
                  Vue administration
                </p>
                <p style="margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                           font-size:12px;color:#78350f;line-height:1.5;">
                  Deux fichiers sont joints à cet email&nbsp;:
                  <strong>demande-${timestamp}.json</strong>
                  et <strong>demande-${timestamp}.csv</strong>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ░░ INTRO ░░ -->`;

  return base.replace("<!-- ░░ INTRO ░░ -->", adminBanner);
}

// ── Conversion CSV ────────────────────────────────────────────────────────────

function toCSV(data: ContactFormData): string {
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const headers = [
    "Nom",
    "Téléphone",
    "Email",
    "Type client",
    "Adresse projet",
    "Types de projet",
    "Type bâtiment",
    "Surface",
    "Description",
  ];
  const values = [
    data.name,
    data.phone,
    data.email,
    data.clientType,
    data.address,
    data.projectTypes.join(" | "),
    data.buildingType,
    data.surface,
    data.message,
  ];
  return [headers.map(esc).join(","), values.map(esc).join(",")].join("\n");
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const data: ContactFormData = {
      name: (formData.get("name") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      clientType: (formData.get("clientType") as string) ?? "",
      address: (formData.get("address") as string) ?? "",
      projectTypes: formData.getAll("projectTypes") as string[],
      buildingType: (formData.get("buildingType") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
      surface: (formData.get("surface") as string) ?? "",
    };

    if (!data.name || !data.phone || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    // ── Pièces jointes images ────────────────────────────────────────────────
    const photoFiles = formData.getAll("photos") as File[];
    const imageAttachments: { filename: string; content: Buffer }[] = [];

    for (const file of photoFiles) {
      if (file.size === 0) continue;
      const buffer = Buffer.from(await file.arrayBuffer());
      imageAttachments.push({ filename: file.name, content: buffer });
    }

    // ── Pièces jointes données (admin) ────────────────────────────────────────
    const timestamp = new Date()
      .toISOString()
      .slice(0, 19)
      .replace(/[:T]/g, "-");
    const jsonBuffer = Buffer.from(JSON.stringify(data, null, 2), "utf-8");
    const csvBuffer = Buffer.from(toCSV(data), "utf-8");

    const dataAttachments = [
      { filename: `demande-${timestamp}.json`, content: jsonBuffer },
      { filename: `demande-${timestamp}.csv`, content: csvBuffer },
    ];

    const commercialEmail = process.env.RESEND_EMAIL_COMMERCIAL!;
    const adminEmail = process.env.RESEND_EMAIL_ADMIN!;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ??
      "Solar Home 37 <noreply@solarhome37.fr>";
    const subject = `Nouvelle demande de devis — ${data.name}${data.clientType ? ` (${data.clientType})` : ""}`;

    await resend.emails.send({
      from: fromEmail,
      to: commercialEmail,
      subject,
      html: buildCommercialHtml(data, imageAttachments.length),
      attachments: imageAttachments,
    });

    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `[ADMIN] ${subject}`,
      html: buildAdminHtml(data, imageAttachments.length, timestamp),
      attachments: [...imageAttachments, ...dataAttachments],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
