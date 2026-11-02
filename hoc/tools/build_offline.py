"""Gộp app + dữ liệu thành 1 file HTML duy nhất để mở thẳng trên máy (không cần mạng/giải nén).
Chạy: python3 hoc/tools/build_offline.py <đường dẫn file ra> [file dữ liệu thêm .js ...]
File dữ liệu thêm (vd. sách đọc chỉ dùng trên máy, không đưa lên repo) tự thêm mình vào SUBJECTS rồi gọi HOC.add."""
import os, sys
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
r = lambda f: open(os.path.join(D, f), encoding='utf-8').read()
html = r('index.html')
html = html.replace('<link rel="manifest" href="manifest.webmanifest">\n', '').replace('<link rel="icon" href="icon.svg">\n', '')
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + r('style.css') + '</style>')
ids = [l.split("'")[1] for l in r('data/index.js').splitlines() if l.strip().startswith('{ id:')]
app = r('app.js').replace('  route();\n})();', '  window.HOC_ROUTE = route;\n})();')
data = ''.join('<script>\n' + r('data/%s.js' % i) + '</script>\n' for i in ids)
data += ''.join('<script>\n' + open(f, encoding='utf-8').read() + '</script>\n' for f in sys.argv[2:])
html = html.replace('<script src="data/index.js"></script>\n<script src="app.js"></script>',
                    '<script>\n' + r('data/index.js') + '</script>\n<script>\n' + app + '</script>\n' + data + '<script>HOC_ROUTE();</script>')
open(sys.argv[1], 'w', encoding='utf-8').write(html)
