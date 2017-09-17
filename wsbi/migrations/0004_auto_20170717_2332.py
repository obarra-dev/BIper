# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-18 02:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wsbi', '0003_credencialamazon'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlarmaPersonalizada',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('texto', models.CharField(max_length=500)),
                ('pathAudio', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Alejamiento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('distanciaMax', models.IntegerField(default=100)),
                ('origenX', models.CharField(max_length=50)),
                ('origenY', models.CharField(max_length=50)),
                ('alarmaPersonalizada', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='wsbi.AlarmaPersonalizada')),
            ],
        ),
        migrations.CreateModel(
            name='Configuracion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pasosMin', models.IntegerField(default=0)),
                ('pulsoMax', models.IntegerField(default=0)),
                ('pulsoMin', models.IntegerField(default=0)),
                ('credencialAmazon', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wsbi.CredencialAmazon')),
            ],
        ),
        migrations.CreateModel(
            name='Interesado',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('dni', models.IntegerField(default=0)),
                ('email', models.EmailField(max_length=100)),
                ('idTelegram', models.IntegerField(default=0)),
                ('configuracion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wsbi.Configuracion')),
            ],
        ),
        migrations.CreateModel(
            name='PasosHistorico',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('pasosProm', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='PulsosHistorico',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('pulsosProm', models.IntegerField(default=0)),
                ('pulsosMax', models.IntegerField(default=0)),
                ('pulsosMin', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Recordatorio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hora', models.IntegerField(default=0)),
                ('min', models.IntegerField(default=0)),
                ('titulo', models.CharField(max_length=100)),
                ('repeticion', models.IntegerField(default=0)),
                ('alarmaPersonalizada', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='wsbi.AlarmaPersonalizada')),
                ('configuracion', models.ManyToManyField(to='wsbi.Configuracion')),
            ],
        ),
        migrations.CreateModel(
            name='TrayectoriaHistorico',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('camino', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='UsuarioBaston',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('dni', models.IntegerField(default=0)),
                ('mac', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100)),
                ('idTelegram', models.IntegerField(default=0)),
            ],
        ),
        migrations.AddField(
            model_name='trayectoriahistorico',
            name='usuarioBaston',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wsbi.UsuarioBaston'),
        ),
        migrations.AddField(
            model_name='pulsoshistorico',
            name='usuarioBaston',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wsbi.UsuarioBaston'),
        ),
        migrations.AddField(
            model_name='pasoshistorico',
            name='usuarioBaston',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wsbi.UsuarioBaston'),
        ),
        migrations.AddField(
            model_name='configuracion',
            name='usuarioBaston',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='wsbi.UsuarioBaston'),
        ),
        migrations.AddField(
            model_name='alejamiento',
            name='configuracion',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='wsbi.Configuracion'),
        ),
    ]