# -*- coding: utf-8 -*-
"""
-------------------------------------------------
   File Name：     TJPU-photo
   Description :    如题
   Author :       wsm
   date：          2019-01-08
-------------------------------------------------
   Change Activity:
                   2019-01-08:
-------------------------------------------------
"""
__author__ = 'wsm'

# http://www.eyw.edu.cn/www/uploads/userup/userface/2017/1711660223.jpg

import requests
import os, sys


class spider:
    '''
    参数说明：
       entrance    入学学年  20**
       s_id        学号前六位  171165  (17--届 11--所在学院 65--所在系)
       class_num   班级号    01
       folder_name 文件夹名称  1701
    '''
    start_url = 'http://www.eyw.edu.cn/www/uploads/userup/userface'
    def __init__(self, entrance, s_id, class_num, folder_name):
        self.entrance = entrance
        self.s_id = s_id
        self.class_num = class_num
        self.folder_name = folder_name

        os.makedirs(str(folder_name))


    def pre_photo(self):
        url = self.start_url + '/' + self.entrance + '/'
        student_id = int(self.s_id + self.class_num + '01')
        for i in range(45):
            # 假定一个班 45 人
            self.get_photo(url, student_id)
            student_id = student_id + 1


    def get_photo(self, url, student_id):
        r = requests.get(url + str(student_id) + '.jpg', allow_redirects=False)
        # 防止 url 不存在 然后跳转到首页
        if r.content:
            photo_name = str(student_id) + '.jpg'
            dirpath = os.path.dirname(os.path.abspath(__file__))
            path = dirpath + '/' + self.folder_name + '/' + photo_name
            with open(path, 'wb') as f:
                f.write(r.content)


TJPU_spider = spider('2017', '171165', '08', '1708')
TJPU_spider.pre_photo()
