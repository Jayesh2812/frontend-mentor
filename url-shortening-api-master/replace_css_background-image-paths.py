import os
import re
css_dir = './out/_next/static/css'
pattern = '_next/static/'
# Didn't found a solution to provide a prefix in nextjs to background-image-url in css files
# So here is a python code that does that for me
for css_file_path in os.listdir(css_dir):
    css_file = open(os.path.join(css_dir, css_file_path), 'r+')
    updated_css = re.sub(pattern,'../', css_file.read())
    css_file.write(updated_css)
    css_file.close()
    