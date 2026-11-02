"""Gộp app Văn học Trung Quốc thành 1 file HTML duy nhất để mở thẳng trên máy (không cần mạng/giải nén).
Chạy: python3 vhtq/tools/build_offline.py <đường dẫn file ra>"""
import os, sys
V = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
H = os.path.join(V, '..', 'hoc')
r = lambda d, f: open(os.path.join(d, f), encoding='utf-8').read()
html = r(V, 'index.html')
html = html.replace('<link rel="manifest" href="manifest.webmanifest">\n', '').replace('<link rel="icon" href="../hoc/icon.svg">\n', '')
html = html.replace('<link rel="stylesheet" href="../hoc/style.css">', '<style>\n' + r(H, 'style.css') + '</style>')
app = r(H, 'app.js').replace('  route();\n})();', '  window.HOC_ROUTE = route;\n})();')
html = html.replace('<script src="data/index.js"></script>', '<script>\n' + r(V, 'data/index.js') + '</script>')
html = html.replace('<script src="../hoc/app.js"></script>',
                    '<script>\n' + app + '</script>\n<script>\n' + r(V, 'data/vhtq.js') + '</script>\n<script>HOC_ROUTE();</script>')
open(sys.argv[1], 'w', encoding='utf-8').write(html)
