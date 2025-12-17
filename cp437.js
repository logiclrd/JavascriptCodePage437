function ConvertUnicodeToCP437(str)
{
	var result = "";

	for (var i = 0; i < str.length; i++)
	{
		switch (str.charCodeAt(i))
		{
			case 0x263A: result += '\u0001'; break; // ☺
			case 0x263B: result += '\u0002'; break; // ☻
			case 0x2665: result += '\u0003'; break; // ♥
			case 0x2666: result += '\u0004'; break; // ♦
			case 0x2663: result += '\u0005'; break; // ♣
			case 0x2660: result += '\u0006'; break; // ♠
			case 0x2022:
			case 0x2219:
			case 0x25CF: result += '\u0007'; break; // ●
			case 0x25D8: result += '\u0008'; break; // ◘
			case 0x25CB: result += '\u0009'; break; // ○
			case 0x25D9: result += '\u000A'; break; // ◙
			case 0x2642: result += '\u000B'; break; // ♂
			case 0x2640: result += '\u000C'; break; // ♀
			case 0x266A: result += '\u000D'; break; // ♪
			case 0x266B:
			case 0x266C: result += '\u000E'; break; // ♬
			case 0x066D:
			case 0x06DE:
			case 0x235F:
			case 0x2605:
			case 0x2606:
			case 0x269D:
			case 0x2721:
			case 0x2726:
			case 0x2727:
			case 0x2729:
			case 0x272A:
			case 0x272B:
			case 0x272C:
			case 0x272D:
			case 0x272E:
			case 0x272F:
			case 0x2730:
			case 0x2734:
			case 0x2735:
			case 0x2736:
			case 0x2737:
			case 0x2738:
			case 0x2739:
			case 0x2742: result += '\u000F'; break; // ✵
			case 0x25B6:
			case 0x2BC8: result += '\u0010'; break; // ⯈
			case 0x25C0:
			case 0x2BC7: result += '\u0011'; break; // ⯇
			case 0x2195: result += '\u0012'; break; // ↕
			case 0x203C: result += '\u0013'; break; // ‼
			case 0x00B6: result += '\u0014'; break; // ¶
			case 0x00A7: result += '\u0015'; break; // §
			case 0x25AC: result += '\u0016'; break; // ▬
			case 0x21A8: result += '\u0017'; break; // ↨
			case 0x2191: result += '\u0018'; break; // ↑
			case 0x2193: result += '\u0019'; break; // ↓
 			case 0x2192: result += '\u001A'; break; // →
			case 0x2190: result += '\u001B'; break; // ←
			case 0x221F: result += '\u001C'; break; // ∟
			case 0x2194: result += '\u001D'; break; // ↔
			case 0x25B2:
			case 0x2BC5: result += '\u001E'; break; // ⯅
			case 0x25BC:
			case 0x2BC6: result += '\u001F'; break; // ⯆
			case 0x0020:
			case 0x00A0: result += ' '; break;
			case 0x0021: result += '!'; break;
			case 0x0022: result += '"'; break;
			case 0x0023: result += '#'; break;
			case 0x0024: result += '$'; break;
			case 0x0025: result += '%'; break;
			case 0x0026: result += '&'; break;
			case 0x0027: result += "'"; break;
			case 0x0028: result += '('; break;
			case 0x0029: result += ')'; break;
			case 0x002A: result += '*'; break;
			case 0x002B: result += '+'; break;
			case 0x002C: result += ','; break;
			case 0x002D: result += '-'; break;
			case 0x002E: result += '.'; break;
			case 0x002F: result += '/'; break;
			case 0x0030: result += '0'; break;
			case 0x0031: result += '1'; break;
			case 0x0032: result += '2'; break;
			case 0x0033: result += '3'; break;
			case 0x0034: result += '4'; break;
			case 0x0035: result += '5'; break;
			case 0x0036: result += '6'; break;
			case 0x0037: result += '7'; break;
			case 0x0038: result += '8'; break;
			case 0x0039: result += '9'; break;
			case 0x003A: result += ':'; break;
			case 0x003B: result += ';'; break;
			case 0x003C: result += '<'; break;
			case 0x003D: result += '='; break;
			case 0x003E: result += '>'; break;
			case 0x003F: result += '?'; break;
			case 0x0040: result += '@'; break;
			case 0x0041: result += 'A'; break;
			case 0x0042: result += 'B'; break;
			case 0x0043: result += 'C'; break;
			case 0x0044: result += 'D'; break;
			case 0x0045: result += 'E'; break;
			case 0x0046: result += 'F'; break;
			case 0x0047: result += 'G'; break;
			case 0x0048: result += 'H'; break;
			case 0x0049: result += 'I'; break;
			case 0x004A: result += 'J'; break;
			case 0x004B: result += 'K'; break;
			case 0x004C: result += 'L'; break;
			case 0x004D: result += 'M'; break;
			case 0x004E: result += 'N'; break;
			case 0x004F: result += 'O'; break;
			case 0x0050: result += 'P'; break;
			case 0x0051: result += 'Q'; break;
			case 0x0052: result += 'R'; break;
			case 0x0053: result += 'S'; break;
			case 0x0054: result += 'T'; break;
			case 0x0055: result += 'U'; break;
			case 0x0056: result += 'V'; break;
			case 0x0057: result += 'W'; break;
			case 0x0058: result += 'X'; break;
			case 0x0059: result += 'Y'; break;
			case 0x005A: result += 'Z'; break;
			case 0x005B: result += '['; break;
			case 0x005C: result += '\\'; break;
			case 0x005D: result += ']'; break;
			case 0x005E: result += '^'; break;
			case 0x005F: result += '_'; break;
			case 0x0060: result += '`'; break;
			case 0x0061: result += 'a'; break;
			case 0x0062: result += 'b'; break;
			case 0x0063: result += 'c'; break;
			case 0x0064: result += 'd'; break;
			case 0x0065: result += 'e'; break;
			case 0x0066: result += 'f'; break;
			case 0x0067: result += 'g'; break;
			case 0x0068: result += 'h'; break;
			case 0x0069: result += 'i'; break;
			case 0x006A: result += 'j'; break;
			case 0x006B: result += 'k'; break;
			case 0x006C: result += 'l'; break;
			case 0x006D: result += 'm'; break;
			case 0x006E: result += 'n'; break;
			case 0x006F: result += 'o'; break;
			case 0x0070: result += 'p'; break;
			case 0x0071: result += 'q'; break;
			case 0x0072: result += 'r'; break;
			case 0x0073: result += 's'; break;
			case 0x0074: result += 't'; break;
			case 0x0075: result += 'u'; break;
			case 0x0076: result += 'v'; break;
			case 0x0077: result += 'w'; break;
			case 0x0078: result += 'x'; break;
			case 0x0079: result += 'y'; break;
			case 0x007A: result += 'z'; break;
			case 0x007B: result += '{'; break;
			case 0x007C: result += '|'; break;
			case 0x007D: result += '}'; break;
			case 0x007E: result += '~'; break;
			case 0x2302: result += '\u007F'; break; // ⌂
			case 0x00C7: result += '\u0080'; break; // Ç
			case 0x00FC: result += '\u0081'; break; // ü
			case 0x00E9: result += '\u0082'; break; // é
			case 0x00E2: result += '\u0083'; break; // â
			case 0x00E4: result += '\u0084'; break; // ä
			case 0x00E0: result += '\u0085'; break; // à
			case 0x00E5: result += '\u0086'; break; // å
			case 0x00E7: result += '\u0087'; break; // ç
			case 0x00EA: result += '\u0088'; break; // ê
			case 0x00EB: result += '\u0089'; break; // ë
			case 0x00E8: result += '\u008A'; break; // è
			case 0x00EF: result += '\u008B'; break; // ï
			case 0x00EE: result += '\u008C'; break; // î
			case 0x00EC: result += '\u008D'; break; // ì
			case 0x00C4: result += '\u008E'; break; // Ä
			case 0x00C5: result += '\u008F'; break; // Å
			case 0x00C9: result += '\u0090'; break; // É
			case 0x00E6: result += '\u0091'; break; // æ
			case 0x00C6: result += '\u0092'; break; // Æ
			case 0x00F4: result += '\u0093'; break; // ô
			case 0x00F6: result += '\u0094'; break; // ö
			case 0x00F2: result += '\u0095'; break; // ò
			case 0x00FB: result += '\u0096'; break; // û
			case 0x00F9: result += '\u0097'; break; // ù
			case 0x00FF: result += '\u0098'; break; // ÿ
			case 0x00D6: result += '\u0099'; break; // Ö
			case 0x00DC: result += '\u009A'; break; // Ü
			case 0x00A2: result += '\u009B'; break; // ¢
			case 0x00A3: result += '\u009C'; break; // £
			case 0x00A5: result += '\u009D'; break; // ¥
			case 0x20A7: result += '\u009E'; break; // ₧
			case 0x0192: result += '\u009F'; break; // ƒ
			case 0x00E1: result += '\u00A0'; break; // á
			case 0x00ED: result += '\u00A1'; break; // í
			case 0x00F3: result += '\u00A2'; break; // ó
			case 0x00FA: result += '\u00A3'; break; // ú
			case 0x00F1: result += '\u00A4'; break; // ñ
			case 0x00D1: result += '\u00A5'; break; // Ñ
			case 0x00AA: result += '\u00A6'; break; // ª
			case 0x00BA: result += '\u00A7'; break; // º
			case 0x00BF: result += '\u00A8'; break; // ¿
			case 0x2310: result += '\u00A9'; break; // ⌐
			case 0x00AC: result += '\u00AA'; break; // ¬
			case 0x00BD: result += '\u00AB'; break; // ½
			case 0x00BC: result += '\u00AC'; break; // ¼
			case 0x00A1: result += '\u00AD'; break; // ¡
			case 0x00AB: result += '\u00AE'; break; // «
			case 0x00BB: result += '\u00AF'; break; // »
			case 0x2591: result += '\u00B0'; break; // ░
			case 0x2592: result += '\u00B1'; break; // ▒
			case 0x2593: result += '\u00B2'; break; // ▓[e]
			case 0x2502: result += '\u00B3'; break; // │
			case 0x2524: result += '\u00B4'; break; // ┤
			case 0x2561: result += '\u00B5'; break; // ╡
			case 0x2562: result += '\u00B6'; break; // ╢
			case 0x2556: result += '\u00B7'; break; // ╖
			case 0x2555: result += '\u00B8'; break; // ╕
			case 0x2563: result += '\u00B9'; break; // ╣
			case 0x2551: result += '\u00BA'; break; // ║
			case 0x2557: result += '\u00BB'; break; // ╗
			case 0x255D: result += '\u00BC'; break; // ╝
			case 0x255C: result += '\u00BD'; break; // ╜
			case 0x255B: result += '\u00BE'; break; // ╛
			case 0x2510: result += '\u00BF'; break; // ┐
			case 0x2514: result += '\u00C0'; break; // └
			case 0x2534: result += '\u00C1'; break; // ┴
			case 0x252C: result += '\u00C2'; break; // ┬
			case 0x251C: result += '\u00C3'; break; // ├
			case 0x2500: result += '\u00C4'; break; // ─
			case 0x253C: result += '\u00C5'; break; // ┼
			case 0x255E: result += '\u00C6'; break; // ╞
			case 0x255F: result += '\u00C7'; break; // ╟
			case 0x255A: result += '\u00C8'; break; // ╚
			case 0x2554: result += '\u00C9'; break; // ╔
			case 0x2569: result += '\u00CA'; break; // ╩
			case 0x2566: result += '\u00CB'; break; // ╦
			case 0x2560: result += '\u00CC'; break; // ╠
			case 0x2550: result += '\u00CD'; break; // ═
			case 0x256C: result += '\u00CE'; break; // ╬
			case 0x2567: result += '\u00CF'; break; // ╧
			case 0x2568: result += '\u00D0'; break; // ╨
			case 0x2564: result += '\u00D1'; break; // ╤
			case 0x2565: result += '\u00D2'; break; // ╥
			case 0x2559: result += '\u00D3'; break; // ╙
			case 0x2558: result += '\u00D4'; break; // ╘
			case 0x2552: result += '\u00D5'; break; // ╒
			case 0x2553: result += '\u00D6'; break; // ╓
			case 0x256B: result += '\u00D7'; break; // ╫
			case 0x256A: result += '\u00D8'; break; // ╪
			case 0x2518: result += '\u00D9'; break; // ┘
			case 0x250C: result += '\u00DA'; break; // ┌
			case 0x2588: result += '\u00DB'; break; // █
			case 0x2584: result += '\u00DC'; break; // ▄
			case 0x258C: result += '\u00DD'; break; // ▌
			case 0x2590: result += '\u00DE'; break; // ▐
			case 0x2580: result += '\u00DF'; break; // ▀
			case 0x03B1: result += '\u00E0'; break; // α
			case 0x00DF: result += '\u00E1'; break; // ß
			case 0x0393: result += '\u00E2'; break; // Γ
			case 0x03C0: result += '\u00E3'; break; // π
			case 0x03A3: result += '\u00E4'; break; // Σ
			case 0x03C3: result += '\u00E5'; break; // σ
			case 0x00B5: result += '\u00E6'; break; // µ
			case 0x03C4: result += '\u00E7'; break; // τ
			case 0x03A6: result += '\u00E8'; break; // Φ
			case 0x0398: result += '\u00E9'; break; // Θ
			case 0x03A9: result += '\u00EA'; break; // Ω
			case 0x03B4: result += '\u00EB'; break; // δ
			case 0x221E: result += '\u00EC'; break; // ∞
			case 0x03C6: result += '\u00ED'; break; // φ
			case 0x03B5: result += '\u00EE'; break; // ε
			case 0x2229: result += '\u00EF'; break; // ∩
			case 0x2261: result += '\u00F0'; break; // ≡
			case 0x00B1: result += '\u00F1'; break; // ±
			case 0x2265: result += '\u00F2'; break; // ≥
			case 0x2264: result += '\u00F3'; break; // ≤
			case 0x2320: result += '\u00F4'; break; // ⌠
			case 0x2321: result += '\u00F5'; break; // ⌡
			case 0x00F7: result += '\u00F6'; break; // ÷
			case 0x2248: result += '\u00F7'; break; // ≈
			case 0x00B0: result += '\u00F8'; break; // °
			case 0x2219: result += '\u00F9'; break; // ∙
			case 0x00B7: result += '\u00FA'; break; // ·
			case 0x221A: result += '\u00FB'; break; // √
			case 0x207F: result += '\u00FC'; break; // ⁿ
			case 0x00B2: result += '\u00FD'; break; // ²
			case 0x25A0: result += '\u00FE'; break; // ■

			default:
				// "replacement character" -- CP437 doesn't have this character, but
				// it apparently doesn't have the input character either
				result += '\uFFFD';
				break;
		}
	}

	return result;
}
