---
title: 'Die Rettung vom Troet.Cafe'
created_at: 1721080823000
image: /images/blog/2024-07-16-saving-troet-cafe/thumbnail-saving-troet-cafe.png
description: 'Eine Aufzeichnung der zwei Tage langen Videokonferenz, resultierend aus mehreren Monaten an Recherche zum Beheben der technischen Probleme mit dem sozialen Netzwerk troet.cafe basierend auf der Mastodon Software'
author: Erik Uden
author_image: /images/people/erikuden-resized.webp
author_handle: '@ErikUden@mastodon.de'

---

<center><b>Erstellt am:</b> 2024.05.10 um 15:13  |  <b>Letztes Update:</b> 2024.07.18 um 22:01</center>

<br>

<center style="margin-top: -20px; margin-bottom: -20px">von</center>

<a style="text-decoration: none;" href="https://mastodon.de/@ErikUden" target="_blank" rel="noopener noreferrer"><center><h1>Erik Uden</h1></center></a>

<br/>

<br/>

# Vorwort

Da die Mastodon-Server <a style="text-decoration: none;" href="https://troet.cafe" target="_blank" rel="noopener noreferrer">troet.cafe</a> und <a style="text-decoration: none;" href="https://muenchen.social" target="_blank" rel="noopener noreferrer">muenchen.social</a> schon lange von Datenbankproblemen geplagt waren, so schlimm sogar das Martin sich fast im Januar 2024 dazu entschied diese zu schließen, mussten wir uns zusammensetzen um das große Problem eines Tages anzugehen. Der 11. und 12. Mai sollte das Wochenende sein an dem wir alle Probleme für beide Server beheben würden, letztendlich haben wir nur troet.cafe geschafft und das auch nur auf den letzten Drücker! Was wir alles versucht haben, was für Trugschlüsse und Fehlschritte wir gemacht, sowie in was für Sackgassen wir geraten sind, darüber schreibe Ich höchst ausführlich in diesem ausformulierten Log!

Die ganzen Monate seit Januar gingen wir die Logs der Fehlermeldungen bei der Datenbank durch, tauschten Zugangsdaten zu den Servern aus, haben Expert:Innen von sowohl der DENIC als auch dem offiziellen Mastodon-Team dazu gebracht uns zu helfen. Die ganzen Monate an Arbeit aus unzählbaren Stunden resultierten alle in diesem zwei Tage langen Event. 

Eigentlich bräuchte diese Geschichte, wie Martin, Nick und Ich nun eigentlich zusammengekommen sind und uns für den Aufrechterhalt sowie Wiederaufbau des troet.cafes und muenchen.social getroffen haben, einen eigenen Blogeintrag. Jedoch hebe Ich diesen für einen anderen Tag auf!

Folgendes war der ungefähre Plan den wir am 10. Mai (einen Tag vor der Rettung des troet.cafes) uns notierten:

<br/>

*Wir versuchen die Datenbank auf einen neuen Server zu übertragen und sie dort einzuspielen.*

01. Exakt gleichen Datenbank Cloud-Server bestellen wie für troet.cafe und muenchen.social. (CPX31 | x86 | 160 GB | eu-central)
02. Alle muenchen.social Server herunterfahren. 
03. Die Datenbank vom muenchen.social Datenbankserver exportieren und zum neuen Cloud-Server übertragen.
04. Alle muenchen.social Server wieder hochfahren.
05. Postgresql auf der neusten (*mit Mastodon kompatiblen*) Version auf dem neuen Datenbank-Server aufsetzen. 
06. Einen Weg finden den Datenbank-Export von muenchen.social zu importieren. 
07. Alle Server wieder herunterfahren. 
08. Schritte 1-5 wiederholen. 
09. Den gefundenen, funktionierenden Weg in Echt mit der Live-Datenbank durchführen ohne die alten muenchen.social Server wieder hochzufahren.
10. muenchen.social Web- und Worker-Server umstellen um mit neuer Datenbank zu funktionieren. 
11. muenchen.social Web- und Worker-Server auf neuste Mastodon Version updaten. 
12. All das mit troet.cafe wiederholen. 

<br/><br/>


# Tag 1 der Rettung

**Total:** 10:20 Stunden für und am Tag 1.

## Einführung

Es ist 08:30 (*morgens*). Ich (Erik Uden) bin mit Martin in einem Jitsi Meeting, Nick ist nicht aufzufinden. Martin ist am 01. Tag noch die einzige Person die tatsächlich etwas einstellt und mit Kommandozeile etwas tut, alle anderen (*Anfangs nur Ich, doch ab ~15:40 auch Panda und Jain*) beraten nur. Wir haben recherchiert, Fakten herausgesucht, Skripte geschrieben und diktiert. Martin hat jedoch den relevanten Teil der Arbeit alleine gemacht. 

Martin hatte vor vier (4) Monaten ein Image eines potenziellen DB-Servers erstellt mit v15.7 (Ubuntu 15.7-1.pgdg22.04+1) von Postgresql. Dieses hat er neu aufgesetzt auf einem Cloud-Server der identisch war wie der auf dem die jetzige Datenbank läuft (CPX31 | x86 | 160 GB | eu-central). 

In der Nacht vom 11.05.2024 hat Martin ein pg_dump von der troet.cafe Datenbank (mastodon_production) als ein komprimiertes Dateiformat erstellt und auf diesen neuen Server übertragen. Die komprimierte Datenbank-Datei war lediglich ~10GB groß, die troet.cafe Datenbank, inklusive Indexierung und Überbleibsel/Bloat, war auf der Live-Instanz 99GB groß. An diesem gesamten Tag haben wir nur mit diesen Datensatz gearbeitet. Wir haben zwischenzeitlich eine komprimierte und einen clear-text Export des Datenbank-Schemas gemacht, doch für den gesamten Zeitraum des heutigen Tages war dieser Datensatz der einzige Datensatz mit dem wir gearbeitet haben. 

## Fehler beim Importieren

Auf dem neuen Datenbank-Server hat Martin die Datenbank "mastodon_production" gelöscht um Platz für den import / pg_restore zu machen, welcher die Exportierte Datenbank mit dem gleichen Namen importieren würde. 
```
drop database mastodon_production;
```
*Löscht die Datenbank „mastodon_production“*
</br></br>
```
pg_restore -Fc -v -c -j 16 -U mastodon -n public --no-owner --role=mastodon -d mastodon_production /backup/mastodon_production_2024-05-11.sql
```
*Importiert die SQL-Datei (-Fc | Format custom) „mastodon_production_2024-05-11.sql“ mit 16 cores (-j 16) in eine Datenbank mit dem Namen „mastodon_production“ als User (-U) mastodon, löscht davor alle vorherigen Einträge (-c) und gibt verbose Text aus (-v).*
<br/><br/>

Als dieser Befehl ausgeführt wurde haben wir das erste (1) Meeting beendet und eine kurze Pause gemacht bis es durchgelaufen ist. 

Die resultierende Datenbank war nach dem Import nur 33GB groß. Verglichen zu der 99GB Datenbank auf troet.cafe, so dachten wir, mussten viele Daten verloren gegangen sein. Wir hatten zu diesem Zeitpunkt nicht unrecht, jedoch aus anderen Gründen.

Dies hat den 01. Log erzeugt (`troet.cafe_001.0_pg_restore_psql-15_2024-05-11-10-48.log`) und wurde in 1.5 analysiert (`troet.cafe_001.5_Fehlermeldung-Ausgewaehlt-2024-05-11-10-57.md`). Dieser zeigt alle Fehlermeldungen inzwischen den vielen erfolgreich durchgeführten Befehlen an. 

Es waren zwei (2) unterschiedliche Fehler zu erkennen:
- „foreign key constraints“ Probleme (vier Mal)
- „binary tree filesize / index_preview_cards_on_url“ Probleme (ein Mal)

Ein *Foreign Key Constraint* ist ein Konzept welches Datenbanken-Integrität versichern soll. Einfach gesagt kann ein Eintrag in einer Tabelle einer Datenbank eine Referenz zu einen anderen Eintrag einer anderen Tabelle haben. Wenn Ich auf Mastodon zum Beispiel einen Beitrag favorisiere, dann steht in dem Eintrag meines Accounts in der Tabelle aller Accounts eine Liste in der ein Beitrag steht. Irgendwo, zum Beispiel in der Tabelle aller Beiträge, müsste dieser Beitrag nochmal vorkommen, rein logisch. Wenn ein Datensatz einen anderen Datensatz erwähnt so muss dieser existieren oder Mal existiert haben. Foreign Key Constraints verpflichten diese referenziale Integrität indem sie eine Tabelle nur als vollständig betrachten wenn jeder darin erwähnte Eintrag eines anderen Eintrags auch existiert. Dies war bei einigen Tabellen bei uns nicht der Fall, somit die Fehlermeldung beim Importieren der Datenbank. 

Das *index_preview_cards_on_url* Problem war uns zu diesem Zeitpunkt auch nicht verständlich, schien jedoch weitaus einfacher zu lösen, weshalb wir uns erstmal auf das andere Problem fokussierten (*dies stimmte im Nachhinein auch*). 

Insgesamt gab es also fünf (5) Fehlermeldungen, diese wurden jedoch als fünfzehn (15) angezeigt, da jeder Fehler einen anderen Bedingte, welcher genau so oft ausschlug, jedoch doppelt gezählt wurde. 

### Fehler 1: Foreign Key Constraints

Wir haben die Fehler herausgesucht und auf Mastodon um Hilfe gebeten. Die Menschen die uns helfen wollten/konnten in eine Matrix-Gruppe hinzugefügt und mit den sensiblen Dateien hatten sie die Möglichkeit zu helfen. Die in dieser Gruppe genannten Vorschläge würden erst später relevant werden, zum Anfang der dritten (3) Session des Tages um 15:30. 

Wir stellten folgenden Plan auf: (*dieser wurde nie durchgeführt*):

Wir downgraden postgresql auf die alte Version (10.23), und anstelle einen Dump von der Datenbank zu kopieren und zu restoren, kopieren wir den Datenbankordner (`var/lib/postgresql/10`) auf den neuen Server mit der gleichen postgresql Version, fahren diesen komplett hoch, fixen auf dem neuen Server alles mit REINDEX und REPAIR Befehelen, gucken ob es dann geht / läuft. 

Ggf. dann die Datenbank dumpen und importieren und gucken ob das ohne Probleme geht. Daraufhin ein upgrade auf v15 durchführen. 


Martin setzte daraufhin zwei postgresql Server auf, einen auf der Version 10.23 und den anderen auf der Version 15.7. Alles auf dem gleichen Computer im gleichen Programm. 

Der Port 5433 war für den v10.23 Postgresql-Server vorhergesehen.
Der Port 5432 war für den v15.70 Postgresql-Server vorhergesehen.

Wenn der Anfang eines Befehls „-p 5433“ sagt, dann versuchen wir die Datenbank auf einen Datenbankserver mit der gleichen Version zu importieren, wenn der Anfang eines Befehls „-p 5432“ sagt, dann versuchen wir die Datenbank auf einen Datenbankserver mit höherer Version (v15.7) zu upgraden.   

Da wir uns unsicher waren ob die Foreign-Key Constraints (*FK-Constraints*) ausgelöst wurden durch das nicht in der richtigen Reihenfolge durchgeführte Importieren der Daten, hatten wir den gesamten Prozess auch nur mit einem CPU-Kern (*single-threaded*) durchgeführt, nicht mit mehreren wo viele Aufgaben parallel laufen. Das Resultat war jedoch das gleiche, somit hatte es damit nichts zu tun. 

#### Import bei gleicher Datenbankversion (Fehlgeschlagen)

Als wir die Datenbank nun versuchten bei der gleichen Version (10.23) zu importieren kamen 617 weitere Fehler bei raus. Diesen Log haben wir nicht aufgezeichnet. 

```
pg_restore -p 5433 -Fc -v -c -j 16 -U mastodon -n public --no-owner --role=mastodon -d mastodon_production /backup/mastodon_production_2024-05-11.sql
```
*Importiert die SQL-Datei (-Fc | Format custom) „mastodon_production_2024-05-11.sql“ mit 16 cores (-j 16) in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 10.23 (-p 5433) als User (-U) mastodon, löscht davor alle vorherigen Einträge (-c) und gibt verbose Text aus (-v).*

Sehr viele der Fehler sollen jedoch "table does not exist" beinhaltet haben was uns zu diesem Zeitpunkt nicht schlüssig erschien da diese Tables nicht existieren sollten da wir die Datenbank vor dem Import gelöscht hatten. 

#### Import bei neuer Datenbankversion (Fehlgeschlagen)

Wir gingen also zurück zum vorherigen Problem auf dem v15.7 Datenbank-Server, da wir dachten, dass dort nur fünf (5) Fehler zu beheben waren, was viel einfacher wäre als die 617 Fehler auf dem v10.23 Datenbank-Server. Wir lernten später das dies ein Trugschluss war, denn vier (4) dieser fünf (5) Fehlermeldungen bezogen sich ausschließlich auf Probleme mit gesamten Tables, währenddessen sich die 617 Fehlermeldungen beim Importieren der Datenbank auf dem 10.23 Server sich auf einzelne Einträge bezug. Als wir die Probleme mit den Tables in der v15.7-Datenbank später lösten bekamen wir ähnlich viele Fehlermeldungen. So oder so musste ein Upgrade auf eine höhere Datenbank passieren, deswegen war die Entscheidung nicht falsch, in dem Moment nur Fehlgeleitet. 

Wir verfolgten nun die Idee das Schema der Datenbank zuerst zu importieren und daraufhin die Daten, da wir im Internet gesehen haben das dieses getrennte Importieren wohlmöglich FK-Probleme lösen kann.

#### Import von Datenbank-Schema

##### Import von Schema aus existierender Datenbank (Fehlgeschlagen)

Als wir jedoch (um 12:23 Uhr) versuchten single-core ausschließlich das Schema des bereits existierenden Dumps zu importieren, gab es wieder Fehlermeldungen. Den Grund dafür verstehe Ich bis heute nicht, doch ein spezifischer Dump mit nur dem Schema löste das Problem. 
Der Befehl war der folgende:
```
root@pg:/etc/postgresql/15/main# pg_restore -p 5432 -Fc -v -c -s -U mastodon -n public --no-owner --role=mastodon -d mastodon_production /backup/mastodon_production_2024-05-11.sql
```
*Importiert das Schema (-s) der SQL-Datei (-Fc | Format custom) „mastodon_production_2024-05-11.sql“, in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 15.7 (-p 5432) als User (-U) mastodon, löscht davor alle vorherigen Einträge (-c), falls diese existieren (--if-exists), und gibt verbose Text aus (-v).*

Dieser Befehl erstellte den 002 Log (`troet.cafe_002.0_pg_restore_schema_psql-15_2024-05-11-12-23`) welchen Ich mir seither nicht mehr angesehen habe. 

##### Import von Schema aus spezifischen Schema-Dump (Erfolgreich)

Daraufhin erstellten wir einen Dump des Schemas der troet.cafe Datenbank und erhofften uns, dass der Import damit besser funktionieren würde. Der Import vom Schema-Dump der troet.cafe Datenbank wurde ohne Probleme oder Fehler importiert. Bei jeden dieser Befehle haben wir vorher immer wieder die Datenbank gedropped oder über den -c Attribute dies automatisch getan.

Der Befehl zum Importieren des Datenbank-Schemas ohne Daten ist der folgende:
```
pg_restore -p 5432 -Fc -v -c --if-exists  -U mastodon -n public --no-owner --role=mastodon -d mastodon_production /backup/mastodon_production-schema.sql
```
*Importiert die SQL-Datei (-Fc | Format custom) „mastodon_production-schema.sql“ welche ausschließlich ein Datenbank-Schema beinhaltet, in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 15.7 (-p 5432) als User (-U) mastodon, löscht davor alle vorherigen Einträge (-c), falls diese existieren (--if-exists), und gibt verbose Text aus (-v).* 

#### Import von Datenbank auf funktionierendes Datenbank-Schema

Als wir daraufhin den gleichen Datenbank-Dump wie vorher auch versuchten mit data-only (-a) auf das perfekt aufgebaute Schema zu importieren kamen 112 Fehlermeldungen (*fast ausschließlich FK-Fehler*) und die Datenbank war wieder nur 33GB groß. Als wir dem Import noch live zugeschaut haben sahen wir das viele Tabellen beim Importieren übersprungen worden, was uns zu diesem Zeitpunkt Angst gemacht hat. Im Nachhinein stellte sich heraus, dass diese Tabellen beim Import übersprungen wurden da sie ja als Teil des Schemas bereits importiert worden. Wir dachten die Tabellen-Einträge (*der Inhalt*) würde auch übersprungen werden, dabei war es nur die Tabelle selbst, da diese bereits existierte und wir ausschließlich anforderten die Daten zu importieren, nicht das bereits importierte Schema. 

Der Befehl uum Importieren der Datenbank-Daten ohne Schema ist der folgende:
```
pg_restore -p 5432 -j 16 -Fc -v -a  -U mastodon -n public --no-owner --role=mastodon -d mastodon_production /backup/mastodon_production_2024-05-11.sql
```
*Importiert die Daten (-a) der SQL-Datei (-Fc | Format custom) „mastodon_production_2024-05-11.sql“ in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 15.7 (-p 5432) als User (-U) mastodon, löscht davor alle vorherigen Einträge (-c) und gibt verbose Text aus (-v).* 

Dieser resultierte in den Log 003 (`troet.cafe_003.0_pg_restore_data-only_psql-15_2024-05-11-13-16`). 

Während der Import lief war es gerade ~13:11 geworden, weshalb wir das Meeting für eine Mittagspause beendeten und um ~15:30 wieder anfangen wollten. Martin nahm sich jedoch keine Mittagspause, denn zur gleichen Zeit berichtete er mir über diesen Import und mit wie vielen Fehlermeldungen er wieder fehlgeschlagen ist. Ich nahm mir auch keine Mittagspause sondern nahm die Zeit einen Beitrag auf Mastodon zu verfassen und mit Interessierten zu kollaborieren um mit den bisher aufgezeichneten Fehlern öffentlich um Hilfe zu bitten. Er verglich zudem die Statistiken der alten Datenbank live auf troet.cafe mit der neuen importierten und stellte fest, dass um die ~6.000.000 Beiträge fehlten, was die Diskrepanz von 99GB zu 33GB untermauerte. Dies stellte sich im Nachhinein als Unsinn heraus, Die Datenbanksoftware Postgresql schätzt lediglich wie viele Einträge in einer gewissen Tabelle sind und trägt dies in den Statistiken ein, da das troet.cafe seit über 6 Jahren auf diesem Server läuft hat es sich massiv überschätzt. Diese Fehleinschätzung seitens der Software führte jedoch weiter dazu das wir einem Fehler hinterherjagten der nicht existierte. 

#### Import von Datenbank auf funktionierendes Datenbank-Schema ohne Trigger

Während dieses Zeitraums hatte Jain auf Mastodon ein paar Tipps wie wir unsere Probleme lösen könnten, vor allem kam die Idee auf, das man am Anfang und ans Ende der Datenbank einen Text schreiben könnte, welcher Foreign-Key Checks überspringen würde, und somit die Fehlermeldungen bei uns vorbei wären. Dies wurde der Konsens und wurde unabhängig auch von (https://chaos.social/@leyrer) wiederholt, sowie drei weiteren Personen mir als Direktnachricht auf Matrix geschrieben.

Die dabei genannten StackOverflow Artikel waren die Folgenden:
- https://stackoverflow.com/questions/5359968/restore-postgresql-db-from-backup-without-foreign-key-constraint-issue
- https://dba.stackexchange.com/questions/118117/restoring-from-pg-dump-with-foreign-key-constraints

Der Text wäre:

Anfang: `SET session_replication_role = replica;` 

Ende: `SET session_replication_role = origin;` 

Diese Lösung haben wir letztendlich nicht genommen, doch sie führte uns in die richtige Richtung. Zuerst haben wir zu diesem Zeitpunkt mit keinem clear-text Datendump gearbeitet, sondern mit einer komprimierten SQL-Datei (*zu diesem Zeitpunkt praktisch eine Binary*), somit wäre das Einfügen von Text am Anfang sowie am Ende nicht möglich gewesen, außer wir hätten ein weiteres clear-text Backup der troet.cafe Datenbank angefertigt, was bei 99GB einfach von der größe nicht mehr möglich gewesen wäre. Selbst wenn wäre es schwierig eine Text-Datei von der größe zu bearbeiten. 



##### Importieren der Daten über die --disable-triggers Flag (Erfolgreich)

Es hat uns vielleicht bis 15:30 gedauert um hier ohne funktionierenden Lösungsweg für unsere Probleme anzukommen, jedoch ging diese Lösung in die richtige Richtung. Foreign Key Constraints sind nichts essenzielles für eine Datenbank, man kann sie (*unter anderem*) einfach deaktivieren über das Argument "--disable-triggers" am Ende vom Befehl. Wir hatten also das gleiche Vorgehen wie sonst auch: Die jetzige Datenbank droppen (*löschen*), daraufhin nur das Schema importieren, welches ja immer ohne Fehler stattfand, mit dem Unterschied das wir daraufhin ausschließlich die Daten vom Dump importieren ohne Trigger. 

Der Befehl zum Importieren des Datenbank-Schemas bleibt der folgende:
```
pg_restore -p 5432 -Fc -v -c --if-exists -U mastodon -n public --no-owner --role=mastodon -d mastodon_production /backup/mastodon_production-schema.sql
```
*Importiert die SQL-Datei (-Fc | Format custom) „mastodon_production-schema.sql“ welche ausschließlich ein Datenbank-Schema beinhaltet, in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 15.7 (-p 5432) als User (-U) mastodon, löscht davor alle vorherigen Einträge (-c), falls diese existieren (--if-exists), und gibt verbose Text aus (-v).*

Es ist anzumerken das man hier nicht ausschließlich das Schema importieren muss da wir mit einem Dump agierten der ausschließlich das Schema beinhaltete. 


Daraufhin führten wir den gleichen Befehl, zum ausschließlichen Importieren der Daten im Dump, neu durch, aber mit der Flag "--disable-triggers" am Ende. Ungefähr so sah das aus:

```
pg_restore -p 5432 -j 16 -Fc -a -v -U mastodon -n public --no-owner --role=mastodon --disable-triggers -d mastodon_production /backup/mastodon_production_2024-05-11.sql
```
*Importiert die SQL-Datei (-Fc | Format custom) „mastodon_production_2024-05-11.sql“ mit 16 cores (-j 16) in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 15.7 (-p 5432) als User (-U) mastodon, erzeugt dabei keinen Index und beachtet keine Foreign-Key Constraints (--disable-triggers), löscht davor alle vorherigen Einträge (-c) und gibt verbose Text aus (-v).*

Dieser Import gab viele Fehlermeldungen aus und hat nicht funktioniert. Es resultierte in eine Datenbank mit der Größe von 36GB. Die Fehlermeldungen haben wir nicht aufgezeichnet doch sie bezogen sich vor allem auf Rechte und das es uns nicht befugt sei gewisse Trigger zu überspringen.

Wir hatten gleichzeitig Angst, dass weil der Dump erstellt wurde währenddessen troet.cafe lief, es deshalb so viele Ungereimtheiten in der Datenbank gäbe. Die Integrität des Dumps selbst wurde in Frage gestellt und ob wir nicht einen neuen anfertigen müssten. Jain jedoch war der festen Überzeugung das der Dump einwandfrei war, somit nur irgendwas am Import falsch lief. Jain hatte letztendlich absolut recht mit dieser Annahme. 

##### Elevated Privileges (Erfolgreich)

Es stellte sich jedoch heraus das man erhöhtew Privilegien benötigte um die Flag „*--disable-triggers*“ richtig zu benutzen, sogar Superuser Privileges. Foreign-Key Constraints sowie die Indexierung wurden nicht übersprungen, die Fehlermeldungen wurden also nur erweitert mit Fehlern des Rechte-Systems. 

Wir haben also den Mastodon Postgresql User zum Superuser erstellt mit folgenden Befehl:
`ALTER USER mastodon WITH SUPERUSER;` (*als postgres User innerhalb von psql auszuführen*)

Als wir den Import der Datenbank-Daten mit der Flag "*--disable-triggers*" ausführten lief es ohne Probleme und alle Daten wurden ohne Foreign-Key Constraints Fehler importiert. Der am Anfang benannte *index_preview_cards_on_url* Fehler blieb jedoch bestehen, auch wenn er im Log (vielleicht) nicht als Fehler auftauchte. Für den Moment war das für uns noch kein Problem, da wir uns auf die Lösung dieses einen Fehlers fokussierten. Der FK-Fehler wurde somit gelöst, da wir das Überprüfen von FK Constraints und das Indezieren übersprungen haben. 

Die Datenbank hatte letztendlich wieder eine Größe von 33GB. 

#### Vergleich der Datenbank-Größe

##### Vergleich über das Zählen der Einträge in einer Tabelle

Wir fanden zeitgleich heraus, dass der Weg wie die Größe der Datenbanken-Tabellen über Statistiken verglichen werden ungenau ist, genau so wie das ledigliche Vergleichen der Größen der Datenbanken. Um nicht auf die Ausgabe der Statistiken von Postgresql vertrauen zu müssen haben wir sowohl die neue als auch die alte Datenbank auf den jeweiligen Servern ausgewählt und gebeten die Anzahl der von Beiträgen in der jeweiligen Tabelle genau zu zählen:

`select count (id) from statuses;` </br>
(gucken wie viele Einträge es in der Tabelle „Statuses“  es gibt)

Es ergaben sich folgende Ergebnisse:
- 10,202,452 (*live troet.cafe Instanz*)
- 10,584,135 (*Datenbank-dump von dieser Nacht*)

Nicht nur gab es keine Diskrepanz von über 6.000.000 Beiträgen mehr, wie die Statistik am Anfang behauptete, sondern hatte troet.cafe nun weniger Beiträge als der Datenbank-Export dieser Nacht! Martin hatte sofort eine Idee wieso dies sein könnte: Es läuft am Wochenende immer ein Purge-Command welcher alle sehr alten Beiträge von externen Instanzen löscht, dieser muss genau nachdem das Backup erstellt wurde, gelaufen sein. 

Das wichtigste ist jedoch das wir nun wissen das alle Beiträge, und bei mehreren Vergleichen jede Tabelle der Datenbank, erfolgreich übertragen wurde und wir uns keine Sorgen machen müssen. 

Wir haben es endlich geschafft und dieses große Problem gelöst! Uns fiel natürlich ein Stein vom Herzen, doch wir wussten noch nicht wie schwierig das zweite Problem zu lösen sein mag.


##### Vergleich über Database-Bloat

Einige Fragen blieben jedoch weiterhin ungeklärt: Warum waren die Datenbanken trotzdem so unterschiedlich groß? Die eine sollte ja lediglich eine Kopie der anderen sein. Eine Reduzierung der Größe von 99GB auf 33GB kann keineswegs normal sein, auch wenn wir nachgewiesen haben das alle Beiträge auf beiden Instanzen vorhanden sind.

Naja, auf der einen Seite bleibt der zweite Fehler übrig dessen Lösung einiges in dieser Diskrepanz erklärt, auf der anderen Seite...

Diese Datenbank läuft nun seit über sechs (6) Jahren! Dabei passieren Mal Fehler und Ungereimtheiten bleiben stehen. 

Panda schlug also ein Skript aus dem Postgresql Wiki vor welches die sogenannten „wasted bytes“ der einzelnen Tabellen in der Datenbank zeigt, also die Anzahl an Bytes welche praktisch nur Müll sind. Dies sind noch nichteinmal die Wasted Bytes des Index, heißt die gesamte Diskrepanz kann und muss sich nicht hiermit erklären. 

Das Skript: https://wiki.postgresql.org/wiki/Show_database_bloat

Dadurch stellte sich für uns heraus, dass die Datenbank wirklich nur 30GB klein ist, der Rest ist der Index dieser Datenbank sowie einfach übergebliebener Müll. 

Jain schrieb das Skript zudem so um, dass es von einem User ausgeführt und in eine Datei ge-piped werden konnte. Beide Dateien, sowohl vom neuen als auch vom alten Server existieren, Martin muss sie mir nur lediglich zusenden.

https://pastebin.com/n0jD4EGM

Die Erklärung der Diskrepanz erklärte sich somit für uns zu einem Teil, doch das nicht-Erstellen eines Indexes bereitete uns Probleme und der Fakt, dass wir bisher nur eines der zwei (2) Probleme gelöst haben machte uns auch Sorgen!

ENDE VON LÖSUNG DES ERSTEN PROBLEMS

### Fehler 2: index_preview_cards_on_url

Das Problem war eine Tabelle namens „index_preview_cards_on_url“, vor allem die Erstellung dessen Index. Bei jeder bisherigen Durchführung des Imports des Datenbank-Dumps konnte diese Tabelle nicht importiert werden da es die maximale Größe des bitrees (*binary trees*) überschritten hat. Das Problem war also das diese Tabelle zu groß war um sie zu indexieren. Wir haben gedacht, dass die Art der Indexierung das Problem sei, dabei war die Größe unserer Tabelle einfach nicht mehr angebracht. 

Es handelt sich bei diesem Datensatz um die Vorschau-Bilder welche sich beim Beifügen eines Links zu einem Beitrag generieren. Manchmal wird für einen Link ein Bild vom Artikel oder ein Thumbnail vom YouTube-Video beigefügt, all das muss lokal auf dem Mastodon-Server gespeichert werden und in dieser Tabelle wird es gespeichert. Man könnte sich denken das diese Daten unwichtig sind, und das sind sie auch, doch leider können wir ohne sie den Mastodon-Server nicht starten.  

Die genaue Fehlermeldung aus dem ersten Log sah so aus:

```
pg_restore: error: could not execute query: ERROR:  index row size 2712 exceeds btree version 4 maximum 2704 for index "index_preview_cards_on_url"
DETAIL:  Index row references tuple (217136,5) in relation "preview_cards".
HINT:  Values larger than 1/3 of a buffer page cannot be indexed.
Consider a function index of an MD5 hash of the value, or use full text indexing.
Command was: CREATE UNIQUE INDEX index_preview_cards_on_url ON public.preview_cards USING btree (url);
```

Es wurde uns vorgeschlagen anstelle von der jetzigen Indexierungsmethode MD5 hashes zu benutzen. Im folgenden versuchten wir krampfhaft dies umzusetzen (*anstelle uns zu fragen warum die Tabelle überhaupt so groß ist*). 


Wir guckten erstmal ob die Tabelle index_preview_cards_on_url bei beiden Datenbank-Servern leer ist:

`select count (id) from preview_cards;` 
- 0000000000 (*live troet.cafe Instanz*)
- 19.255.796 (*Datenbank-dump von dieser Nacht*)

Es sind also fast 20 Millionen Einträge in dieser Tabelle welche alle nicht übertragen wurden! Wir müssen sie importieren ohne das beim Import sofortig ein Index aufgebaut wird, denn das scheitert und dann werden die Daten verworfen. Es gibt die Möglichkeit in einem clear-text Dump des Schemas die Erstellung eines Indexes auszukommentieren um somit als erstes die Daten zu importieren und sich dann später über den Index Sorgen zu machen, z.B. über das Editieren oder Löschen einiger Daten innerhalb der zu großen Tabelle. Anfangs hatten wir noch die Idee lediglich die Index-Methode zu ändern, da dies ja von der Fehlermeldung empfohlen wird. Im folgenden versuchen wir genau dies über das ledigliche Exportieren eines clear-text Dumps da diese nicht so detailliert ist wie ein custom-format dump. Nach mehreren Stunden Arbeit am 02. Tag wird sich jedoch herausstellen das die Daten innerhalb dieser Tabelle Fehlerhaft waren und nie bereinigt wurden, dennoch ist das Importieren der Daten durch auskommentieren der Erstellung des Indexes im clear-text Schema der notwendige Schritt dafür gewesen. 

##### Das Editieren der Index-Methode dank Clear-Text Datenbank-Schema (Fehlgeschlagen)

Wenn wir jetzt das Schema rausdumpen von der live instanz um es als text (nicht mehr binary/komprimiert, also uneditierbar) zu haben, dann würde sich ggf. die Index-Methode zu md5-Hashing ändern. Der Grund dafür was passiver Natur, denn Panda und Jain sahen im clear-text Export des Datenbank-Schemas keine Erwähnung der Indexing-Methode. Ein custom Format Dump (*so wie wir ihn bisher gemacht hatten*) beinhaltet weitaus mehr Informationen, wobei ein clear-text Dump direkter und ungenauer ist. Demnach haben sie vermutet, dass eventuell die einzige Indexierungsmethode genommen wird die möglich war: md5, da keine andere Spezifikation vorgenommen werden würde. Ob das stimmt oder nicht wissen wir bis heute nicht, doch es hat letztendlich nicht funktioniert, führte uns aber auf die richtige Fährte. 

Wir führen also folgenden Befehl auf dem live troet.cafe Datenbank-Server aus um einen clear-text Dump der mastodon_production Datenbank zu erstellen:
`pg_dump -s -d mastodon_production schema.sql`
Dies dauert wenige Sekunden, da ja lediglich die Beschreibung der Datenbank (*also alle Tabellen und Namen der Tabellen*) exportiert werden, nicht aber die Daten selbst. 

Ich schaute in die neu erstellte „schema.sql“ mit Nano indem Ich nach „index_preview_cards“ suchte und die genaue Zeile fand in der die Indexierung der Preview-Cards (*Vorschaubilder*) im Schema zementiert wurde. Dort wurde überall „btree“ als Index erwähnt, Ich bin mir jedoch nicht sicher ob btree eine Methode zur Indexierung ist oder ob man einen binary-tree auch mit md5 Hashes erstellen kann, da Ich einfach zu uninformiert über das Thema bin. Jain und Panda waren sich auch unsicher und dachten jedoch, dass das fehlende Benennen einer Methode zur Erstellung des Binary-Trees (*also eine Indexierungsmethode*) wohlmöglich bedeutet, dass md5 verwendet wird. 

Nachdem Ich diesen Schema-Dump auf den neuen Datenbank-Server übertragen hatte, ging Ich auf diesen, machte mich selbst zum postgres user, öffnete postgresql, löschte die bisher fehlerhaft importierte Mastodon-Datenbank, erstellte eine neue, leere Datenbank mit gleichen Namen, hab Postgresql verlassen und zu guter letzt importierte Ich das clear-Text Schema und darauf die Daten innerhalb des Datenbank-Dumps. 

```su - postgres``` </br>
*Macht mich zum postgres user*

```psql``` </br>
*Öffnet die Postgresql Software*

```drop database mastodon_production;``` </br>
*Löscht die mastodon_production Datenbank*

```CREATE DATABASE mastodon_production;``` </br>
*Erstellt eine leere mastodon_production Datenbank*

```\q``` </br>
*Verlässt die Postgresql Software*

```cat /backup/schema.sql | psql -d mastodon_production -U mastodon -``` </br>
*Importiert das Datenbank-Schema-Dump in die mastodon_production Datenbank als User mastodon*
=> Hier ungefähr ist ein Fehler für den 02. Tag aufgekommen. Wir wussten zwar nun das wir durch das Importieren eines clear-Text Schemas nicht die Indexierungsmethode ändern, dieser Weg also nicht Helfen würde, doch beinhaltete die Lösung eine ähnliche Herangehensweise welche ein clear-Text Schema welches mit genau diesem Befehl importiert wird benötigt. Was wir beim kopieren dieses Befehls jedoch missachteten war, dass wir ihn als postgres User ausführten. Auch wenn wir im Befehl eindeutig den Postgresql-User mastodon als Auszuführenden dieses Imports definieren macht dies den User mastodon lediglich zum Besitzenden der Tabellen **innerhalb** der Datenbank, nicht aber zum Besitzenden der Datenbank selbst! Somit war als *Owner* der Datenbank der User postgres angegeben, was später massiv Probleme und auch mehrere Stunden an Recherche sowie Trugschlüssen auslöste. 

```psql``` </br>
*Öffnet die Postgresql Software*

```\dt``` </br>
*Zeigt alle Tabellen im jetzigen Schema*

```\q``` </br>
*Verlässt die Postgresql Software*

```pg_restore -p 5432 -j 16 -Fc -a -v -U mastodon -n public --no-owner --role=mastodon --disable-triggers -d mastodon_production /backup/mastodon_production_2024-05-11.sql``` </br>
*Importiert die SQL-Datei (-Fc | Format custom) „mastodon_production_2024-05-11.sql“ mit 16 cores (-j 16) in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 15.7 (-p 5432) als User (-U) mastodon, erzeugt dabei keinen Index und beachtet keine Foreign-Key Constraints (--disable-triggers), löscht davor alle vorherigen Einträge (-c) und gibt verbose Text aus (-v).*

Daraufhin bekamen wir die gleiche Fehlermeldung:

```
pg_restore: while PROCESSING TOC:
pg_restore: from TOC entry 4578; 0 16631 TABLE DATA preview_cards mastodon
pg_restore: error: COPY failed for table "preview_cards": ERROR:  index row size 2712 exceeds btree version 4 maximum 2704 for index "index_preview_cards_on_url"
DETAIL:  Index row references tuple (214829,14) in relation "preview_cards".
HINT:  Values larger than 1/3 of a buffer page cannot be indexed.
Consider a function index of an MD5 hash of the value, or use full text indexing.
CONTEXT:  COPY preview_cards, line 3910668 
```
Demnach war die Theorie, dass clear-text Dumps des Datenbank-Schemas durch das Nicht-definieren der Indexierungsmethode einfach die Indexierungsmethode nehmen welche funktioniert, falsch. Es wurde wieder eine andere Hashfunktion verwendet auch wenn md5 empfohlen. 

Als wir weiter versuchten gegen diese Windmühle zu kämpfen fanden wir folgende Information: In der Dokumentation von Postgresql steht drin, dass in Version 12 dieser Software die maximale binary-tree länge um 8 Byte verkürzt wurde, somit funktioniert die Datenbank auf Version 15.7 nicht mehr. Zur Erinnerung: wir importieren gerade eine Datenbank erstellt in Postgresql-10.23 auf eine Datenbank mit der Postgresql-15.7 Version. Diese Änderung in Version 12 verhindert also das einfache importieren und weitermachen da nun die Art und Weise wie Indexes funktionieren sich änderte. 

##### Das Auskommentieren der Erstellung eines Indexes im Clear-Text Dump (Erfolgreich)

Was die vorherigen Methoden erwiesen war, dass wir zwar fast alle Daten erfolgreich übertragen konnten, doch die über 19.000.000 Einträge der preview_cards Tabelle aufgrund des Indexierungsfehlers nicht in der neuen Datenbank vorhanden waren. In der vorherigen Postgresql Version (10) war ein Index einer solchen Datenbank-Tabelle komplett okay, doch dank der Reduzierung von 8 Byte ist dieser in der neusten Version (12) nicht möglich. Unsere Idee war es nun zuerst die Daten zu übertragen und danach erst einen Index aufzubauen. Momentan scheitert das Importieren der Daten am Index, doch was wenn wir das Erstellen des Indexes überspringen, lediglich die Daten importieren, so verändern das eine Indexierung möglich wäre, und dann erst die Erstellung des Indexes starten? Die vorherige Methode versuchte ausschließlich die Art des Indexes zu verändern um die Erstellung zu ermöglichen, jetzt versuchen wir die Daten zu verändern damit der gleiche Index sich aufbauen kann.

Da wir an der Live-Datenbank nichts rumfuschen wollten, doch diese der einzige Ort war wo die preview_cards Daten überhaupt gespeichert waren, mussten wir einen Weg finden eine neue Datenbank aufzubauen in welche die Tabelle und Daten preview_cards übertragen wurden und vorhanden sind, um diese dann dort zu editieren. Das können wir tun indem wir explizit nur die Daten übertragen und nicht den Erfolg des Übertragens der Daten davon abhängig machen ob auch ein Index erstellt werden kann. Diese Methode erwies sich als Erfolgreich!

Wir nahmen also wieder den clear-text Datenbank-Schema-Dump, doch anstelle ihn nur anzusehen editierten wir nun die spezifische Zeile (*Zeile 5598 eines 20221206114142-Schemas*) raus welche definierte das für preview_cards_on_url ein btree/binary-tree Index erstellt werden musste:

Ich nahm diese Zeile...
`CREATE UNIQUE INDEX index_preview_cards_on_url ON public.preview_cards USING btree (url);` </br>

...und kommentierte zwei Bindestriche `--` davor um diese zu einem Kommentar zu machen:
`-- CREATE UNIQUE INDEX index_preview_cards_on_url ON public.preview_cards USING btree (url);` </br>

Somit würde kein Index namens „*index_preview_cards_on_url*“ mehr für die Tabelle „*preview_cards*“ erstellt werden. 

Würden wir also dieses Schema auf eine leere Datenbank importieren so würde beim Import der Daten kein Index für diese preview_cards aufgebaut werden. Zudem fanden wir etwas innerhalb der Mastodon-Dokumentation was sich ziemlich perfekt nach der Lösung unseres Problems anhörte. Eine „maintenance task“, also Wartungsaufgabe zur Behebung von „[Index-Korruption](https://docs.joinmastodon.org/admin/troubleshooting/index-corruption/)“. Exakt unser Problem! Nur brauchen wir einen, am besten unseren, Mastodon-Server, welcher diese Wartungsarbeit ausführen kann. Wir befinden uns momentan auf dem neuen Datenbank-Server, welcher ausschließlich Postgresql und Redis installiert hat, nicht aber die Mastodon-Web/-Worker Programme welche hierführ notwendig wären (*tootctl*). Somit war der Plan diese Server für den Moment, in dem wir die Datenbankfehler beheben wollen, wie Frankenstein's Monster zusammenzubasteln. Wir fahren einen alten Worker-Server hoch, verbinden ihn mit der neuen Datenbank und führen dann die Wartungsarbeit aus. 

So die Idee. Diese scheiterte letztendlich daran das um die Index-Korruption zu beheben wir einen Index brauchten, da aber keiner aufgebaut wurde konnte die Korruption auch nicht behoben werden. Das Problem **äußerte** sich lediglich im Index, lag aber an den Daten. Später löschten wir lediglich zu große preview_cards URL Einträge (*Links*) und der Schrecken hatte somit ein Ende. 

Dennoch verfolgten wir den Plan des Auskommentieren des Indexes, was notwendig war um die Daten zu übertragen und sie überhaupt in einer anderen Datenbank zu modifizieren / teilweise zu löschen. Hätten wir an der Live-Datenbank Dinge editiert hätte es kein zurück mehr gegeben, hätten wir Fehler gemacht, somit war diese Vorsicht notwendig. 

Wir löschten also die fehlerhaft importierte Datenbank (*Daten und Schema*) auf dem neuen Datenbank-Server um nun die neue Methode auszuprobieren:

Import des clear-text Dump des Datenbank-Schemas mit auskommentierter Indexierung für *preview_cards*. 

Es funktionierte wie erwartet ohne Probleme. 

Wir importierten nun die Daten der Datenbank. 

Dies funktionierte ohne Probleme. 

Da wir nun auch tatsächlich die Daten importierten sollte die Datenbank auch größer werden. 

Sie war 44GB groß nach Import inklusive preview_cards_on_url Tabelle!

Wir dachten wir hätten durch das Überspringen der Trigger beim Import der Datenbank-Daten dafür gesorgt, dass kein Index für alle Daten erstellt werden würde, dies war nicht der Fall, dennoch starteten wir eine Re-Indexierung welche dank unserer Auskommentierung spezifisch die problematische *preview_cards* Tabelle überspringen sollte. 

`REINDEX (verbose) database mastodon_production;`

Die Datenbank war nach dem Re-Index nur noch 40GB (*-4GB*) groß, das lag daran das nach dem vollständigen Import der Daten die Erstellung eines Indexes viel effizienter ist als die Erstellung eines Indexes die während des Daten-Imports stattfindet. Einfach gesagt weiß der Re-Index wo alle Daten sind und wie viele es überhaupt gibt, ein Index der während des Imports erstellt wird muss alles indexieren ohne zu wissen was noch kommt, auch wenn es ineffizient ist. 

Nun versuchten wir den auskommentierten *preview_cards_on_url* Index wieder einzubauen!

`mastodon_production=# CREATE UNIQUE INDEX index_preview_cards_on_url ON public.preview_cards USING btree (url);` 

Folgendes war die Fehlermeldung:

```
ERROR:  index row size 2712 exceeds btree version 4 maximum 2704 for index "index_preview_cards_on_url"
DETAIL:  Index row references tuple (214829,14) in relation "preview_cards".
HINT:  Values larger than 1/3 of a buffer page cannot be indexed.
Consider a function index of an MD5 hash of the value, or use full text indexing. 
```

Die gleiche wie zuvor, diesmal nur innerhalb von Postgresql, nicht in der Kommandozeile. Hier realisierten wir nun, dass sich der Fehler vielleicht beim Erstellen des Indexes zeigt, doch 19 Millionen Einträge für eine solch irrelevante Tabelle nicht normal sein können, somit der Fehler bei den Daten liegt, nicht dem Index der krampfhaft versucht diese unübersichtlichen Daten zu ordnen. 

In diesem Moment erhofften uns jedoch weiterhin, dass die Wartungsaufgabe die wir gefunden hatten unser Problem lösen würde, dafür stöberte jemand durch den Quellcode dessen durch um zu gucken was überhaupt passiert um die *preview URLs* zu deduplizieren. 

Nach dem durchlesen des Quellcodes kamen wir zum entschluss, dass die Wartungsaufgabe problemlos durchlaufen würde und alle unsere Probleme lösen würde. Den Index ließen wir, für den Moment, so wie er ist. Hiernach beendeten wir unsere Aufgaben für den Tag, fuhren das troet.cafe wieder hoch mit allen alten Servern und Diensten und Ich sammelte alle über den Tag gewonnenen Erkenntnisse aus diesem Protokoll zusammen und fügte sie in einen Plan zusammen. Wir dachten ja, wir wären dem Problem so nahe, das wir morgen lediglich diesen Plan ausführen müssten um das troet.cafe zu retten. Nichts könnte ferner von der Realität gewesen sein!

Wie vorhin bereits erwähnt stellte sich im Nachhinein heraus, dass das Problem bei den Daten lag und wir lediglich spezifische URLs aus der *preview_cards* Tabelle heraussuchen und löschen mussten. Wir hingen uns jedoch später an der gesamten *maintenance task* Aufgabe auf, dass wir unfassbare Arbeit vollrichteten um die Datenbank-Schema-Version anzupassen, sodass das Skript der Wartungsaufgabe überhaupt funktioniert, was uns mehrere Stunden kostete. Das wir gleichzeitig auch die alten Web-/Worker-Server mit der neuen Datenbank verbinden mussten war eine wichtige Aufgabe, da wir diese dann später nicht vollrichten mussten, jedoch war dieses Tappen im Dunkeln und immer wieder in Sackgassen geraten manchmal sehr demoralisierend. Umso größer war dann das Geschrei vor Freude als es letztendlich am zweiten Tag nach einer 12-Stunden Videokonferenz funktionierte!


## Die (gedachte) Lösung aller Probleme (Fehlgeschlagen)

Das genaue Übertragen und Updaten der troet.cafe Datenbank auf einen neuen Server funktioniert also wie folgt:

1. Troet.Cafe herunterfahren
2. Datenbank-Dump erstellen und Server offline lassen. 
3. Datenbank-Schema-Clear-Text-Dump erstellen und Server offline lassen. 
4. Beides auf neuen Server übertragen auf dem eine psql Datenbank der Version 15.7 eingerichtet ist. 
5. Das clear-text Datenbank-Schema so editieren, dass "CREATE UNIQUE INDEX" für index_preview_cards_on_url auskommentiert ist.
6. Das clear-text Datenbank-Schema importieren mit folgenden Befehl: 

`cat /backup/schema-2024-05-11.sql | psql -d mastodon_production -U mastodon -` 

(damit anerkannt wird das er superuser ist)

7. Den Mastodon Postgresql-User zum Superuser benennen mit folgenden Befehl:

`ALTER USER mastodon WITH SUPERUSER;` (*als postgres User innerhalb von psql auszuführen*)

8. Die Datenbank-Dump-Daten importieren als Superuser mit der Flag *--disable-triggers*

`pg_restore -p 5432 -j 16 -Fc -a  -v  -U mastodon -n public --no-owner --role=mastodon --disable-triggers -d mastodon_production /backup/mastodon_production-2024-05-12.sql` 

9. Den Index (außer den von *index_preview_cards_on_url*) neu aufbauen mit folgenden Befehl:

`REINDEX (verbose) database mastodon_production;` 

10. Die Service- und Worker-Server auf den neuen Datenbankserver umstellen.
11. Folgenden tootctl Befehl von einen der Service- oder Worker-Server zur Lösung von Index-Korruption ausführen:

`RAILS_ENV=production bin/tootctl maintenance fix-duplicates` 

12. In der Zukunft nach jedem Datenbank-Update den REINDEX Befehl aus Punkt 9 verwenden um dieses Problem zu vermeiden. 

13. Troet.Cafe wieder hochfahren und alles läuft wie vorher nur besser und auf einer neuen Version!

So war die Idee, welche letztendlich daran scheiterte, dass wir dachten wir wären kurz davor das Problem zu lösen doch auf viele Probleme einfach noch nicht gestoßen sind weil wir diese nicht erdenken konnten! Zudem haben wir uns an der *maintenance task* Aufgehangen, welche unser Problem leider nicht löste. 

ENDE VON TAG 1

# Tag 2 der Rettung

**Total:** 21:32h für Tag 2. 

Ich habe ab 08:05 mit Nick geschrieben, es geht im besser und er möchte gerne an diesem Meeting teilnehmen. Ab 08:15 betrete Ich das Meeting mit Nick, ab 08:35 tritt Martin bei. Heute mache fast ausschließlich Ich alles an der Kommandozeile, Martin berät und Ich gebe ein. Manchmal kommen mir auch eigene Ideen, doch bevor Ich große Befehle ausführe (*vor allem an der Datenbank und nach großen Änderungen an der Herangehensweise*) frage Ich drei bis vier Mal nach ob Ich es wirklich ausführen soll.

Anfangs sind wir noch ekzentrisch, fröhlich und gespannt auf einen *kurzen* Arbeitstag, da wir dachten, dass wir am gestrigen Tag jedes mögliche Problem gelöst hatten und nun einen klaren Plan vor Augen haben. Leider hätte dieses Sentiment nicht weiter von der Realität entfernt sein können. 

Am Vorabend hatte Ich noch, nachdem alle Meetings endlich vorbei waren, unsere Vorgehensweise, Erkenntnisse und Logs an sowohl unsere interne Gruppe an Datenbank-Expert:Innen geschrieben, sowie Rodirik, dieser war nicht in der Gruppe ist aber dennoch ein Experte (*in vielen Dingen*)!

Rodirik schrieb mir um 08:08 am Morgen das unsere Vorgehensweise gefährlich sei, da die „--disable-triggers“ Flag wichtige Einträge im Datenbank-Schema (*Trigger*) überspringen würde. Er schaute sich unsere genauen Logs, das Datenbank-Schema sowie unsere eingegebenen Befehle an und kam um 08:42 zum entschluss das doch alles okay sei. Er habe in die Datenbank geguckt, diese enthält keine Trigger. Er erklärte mir daraufhin was ein Trigger im Kontext einer Datenbank ist, Ich verstehe es immer noch nicht. 

Unser Plan war es einen *smoke test* durchzuführen, was wir letztendlich auch taten, doch definitiv nicht so früh wie wir es uns erhofften! Ein *smoke test* oder Rauchtest ist eine Überprüfung nach dem Motto „wo Rauch ist, ist auch Feuer“. Da wir nie 100% sicherstellen können das bei einem übertragen der Datenbank wirklich alles richtig gelaufen ist, müssen wir den Mastodon-Server hochfahren, alle Leute den Dienst benutzen lassen und potenzielle Fehlermeldungen einrieseln lassen. Wenn Menschen nur schreiben das Videos schlecht hochladen, ihre Benachrichtigungen oder Home-Timeline langsam / veraltet ist, dann ist alles gut, denn das ist normal nachdem ein Server für mehrere Stunden ausgeschaltet ist und einen halben Tag an Arbeit aufeinmal nacharbeiten muss. Aber wenn ein User schreibt seine Beiträge/Bilder/irgendwas seien weg, oder es ist vom Admin-Interface aus eindeutig zu sehen das irgendwas fehlt, dann ist das der Rauch und irgendwo ist das Feuer. Alle Beiträge welche im Zeitraum des Rauchtests gemacht werden könnten potenziell verschwinden, da wir im Fall das irgendwas schief läuft den Server wieder herunterfahren, alles auf den vorherigen Stand umstellen, und die alte Datenbank wieder anstellen würden, somit alle Beiträge die auf der neuen Datenbank gemacht wurden für ewig verloren wären. Wir stellten die Neu-Registrationen für diesen Zeitraum auch aus, da jemand einen Account auf der neuen Datenbank erstellen würde, doch am nächsten Tag ohne Account erwachen würde für den Fall das wir es wieder zurückgestellt haben. 

Letztendlich lief alles super und es gab weder Rauch noch Feuer, dennoch war es wichtig diese Sicherheitsmaßnahme zu treffen!

Wir besprachen unsere genaue Strategie von Gestern, wir hatten einen exakten, von mir angefertigten, Schritt-für-Schritt Plan der jeden Erfolg unserer Vorgehensweise aus dem gestrigen Protokoll herauspickte und in eine simple Anweisung herunterbrach. Doch auch der Plan hatte seine Lücken. Hier eine bessere Ausformulierung vom tatsächlichen Plan:

Es gibt genau acht (8) Server oder Dienste um die wir uns für diese Operation kümmern müssen und die perfekt im Einklang miteinander ab- oder angeschaltet, sowie einzelne Dienste darauf ab- oder ausgeschaltet, oder umgezogen werden müssen:

- Load Balancer (*Verteilung zu allen Web-Servern*)
- web1-Server (*Mastodon-Web*)
- web2-Server (*Mastodon-Web*)
- web3-Server (*Mastodon-Web*)
- work3-Server (*Sidekiq*)
- work4-Server (*Sidekiq*)
- Alter Datenbank-Server (*Postgresql, Redis, ElasticSearch*)
- Neuer Datenbank-Server (*Postgresql, Redis*)

Der Load-Balancer sowie alle Web- und Worker-Server müssen abgeschaltet werden damit troet.cafe offline geht und die Datenbank nicht weiter manipuliert wird während des Export-Prozesses (*nicht das dies ein Problem sei, doch um die Datenbank mit allen Daten auf dem neuen Server zu haben darf die alte Datenbank nicht weiter beschrieben werden währenddessen wir umziehen*). 

Der alte Datenbank-Server muss online bleiben um die Datenbank und Redis umzuziehen, später müssen dort die beiden Dienste heruntergefahren werden, jedoch ElasticSearch muss aufrechterhalten bleiben, da der Umzug zu kompliziert fürs erste wäre. Heißt der Server der alten Datenbank muss online bleiben jedoch ohne die Datenbank bereitzustellen. 

Wir fingen damit an den *Load Balancer*, ein von Hetzner bereitgestelltes Tool zum Verteilen aller Anfragen von Usern, aka der „Load“, herunterzufahren. Eher mussten wir jeden einzelnen Web-Server aus dem Load-Balancer entfernen damit dieser nicht mehr auf einen Server verwies wenn eine Anfrage an troet.cafe gemacht wurde. In der Zukunft sollten wir uns überlegen einen Maintenance-Server aus genau diesem Grund zu haben, dieser sollte lediglich eine statische Seite bereitstellen welche besagt, dass wir momentan Wartungsarbeiten haben. Es wäre zumindest besser als das die Leute welche versuchen auf troet.cafe zu sehen einfach eine Fehlermeldung bekommen, doch wir dachten uns nachdem wir es seit Monaten ankündigen und weil wir ja nur „ein paar Stunden“ (*letztendlich waren es ~11*) offline wären, bräuchten wir es für diese Operation nicht. 

Der Load-Balancer wurde also Handlungsunfähig gemacht, ungefähr um 09:20 (*ab genau diesem Punkt war das troet.cafe nicht mehr zu erreichen*), daraufhin haben wir alle Web- und Worker-Server über den Befehl „halt“ heruntergefahren / angehalten. 

Nun wo die Datenbank nicht mehr weiter über den laufenden Dienst von troet.cafe editiert wird müssen wir sie exportieren und auf den neuen Datenbank-Server übertragen. Am Vortag hatten wir lediglich die Datenbank während des laufenden Dienstes exportiert, was ggf. für Fehler in der Datenbank sorgte. Um heute sicherzustellen, dass auch alle Daten beim pg_dump exportiert werden mussten vorher alle Web- und Worker-Dienste heruntergefahren werden. 

Dabei ist uns aufgefallen das der alte Datenbank-Server neben der Datenbank und ElasticSearch auch noch die Redis-Datenbank am laufen hatte, also überlegten wir uns einen schnellen Plan diese auch umzuziehen. 
Auch wenn der alte Datenbank-Server keine laufenden Mastodon-Dienste (*Web, Worker, puma, etc.*) haben sollte haben wir diese heruntergefahren. Auch Redis und ElasticSearch wurden heruntergefahren.

Wegen mir gerade nicht mehr bekannten Komplikationen bei dem Export des Dumps (*ggf. fiel uns erst während der ersten Exports auf das noch einige Web-/Worker-Dienste laufen könnten, zudem haben wir ein paar Flags hinzugefügt*) haben wir den Prozess (*pg_dump*) drei Mal gestartet und abgebrochen, der vierte Export der troet.cafe Datenbank war dann letztendlich der Finale. 

Um 09:30 war das finale dump der alten troet.cafe Datenbank mit den folgenden Befehl in Auftrag gegeben worden:

`su mastodon --c "pg_dump --quote-all-identifiers -Fc mastodon_production > /backup/mastodon_production-manuelles-backup.sql"` 

Dies sollte nur 20 Minuten dauern. Es hat letztendlich 38 Minuten bis 10:08 gedauert den pg_dump zu erstellen.  
Doch zurück zu 09:35.

Auf den neuen Datenbank-Server deinstallierte Ich nun die alte v10 von Postgresql welche wegen Tests am Vortag noch installiert waren. 

Auf den neuen DB-Server habe Ich Redis auf der neusten Version installiert. Daraufhin habe Ich den Redis-Server auf dem alten Datenbank-Server heruntergefahren wodurch sich die finale dump.rdb erstellte und nicht weiterhin verändert wurde. Diese dump.rdb habe Ich zum neuen Server via SCP kopiert und dort abgelegt wo diese Datei vom neuen Redis-Server gesucht werden würde (*Standort Eintragen*). Ich änderte die Permissions welche vom SCP Transfer verfälscht wurden, sodass auch Redis diese Datei besitzt und diese editieren kann. Daraufhin startete Ich den Redis-Server neu. 

Es war nun 10:02. 

Zu diesem Zeitpunkt stellten wir fest das wir die komplizierte Konfiguration von ElasticSearch nicht rüberkopieren können, oder dies den Rahmen für den heutigen Tag sprengen würde. Deswegen entschieden wir uns den alten Datenbank-Server am laufen zu lassen ausschließlich für die den ElasticSearch-Dienst, wobei die Datenbank sowie der Redis-Server abgeschaltet bleibt. Am 02.06.2024 hat Martin jedoch ElasticSearch umgezogen und den Index auf den neuen Servern neu aufgebaut. 

Um 10:04 war das Backup fast fertig erstellt (*wir erkannten die Vollständigkeit des Backups/Dumps dadurch an das wir guckten wie groß die resultierende komprimierte Datei war, je näher sie an dem gestrig gesehen Wert von ~9,2 GB war, desto näher dachten wir wäre der Backup-Prozess am Ende*). 


Um 10:08, ungefähr 38 Minuten nachdem wir den Export gestartet haben, war der Dump fertig. Die ~90GB Datenbank ist nun auf 9,2 GB (komprimiert) runtergebrochen. 

Daraufhin erstellten wir einen clear-text Dump vom Schema der troet.cafe Datenbank. Das Schema hat sich zum Vortag nicht geändert, dennoch wollte Ich auf Nummer sicher gehen und keine alte Datei verwenden. 

`pg_dumo -s -d mastodon_production >schema-2024-05-12.sql` 

Wir stoppten den Postgresql v10 Server auf dem alten Datenbank-Server ein letztes Mal um 10:09. Da nun der Dump erstellt war benötigten wir pg_dump Dienste oder andere Befehle nicht mehr. 

Martin hat das Schema via SCP auf den neuen Datenbank-Server übertragen. 

Daraufhin hat Martin den Dump übertragen mit 116MB/s, also fast die vollen 1Gbit/s ausgeschöpft. Es dauerte ungefähr eine Minute und 20 Sekunden.

Ich ging via SSH wieder auf den neuen Datenbank-Server, fand das clear-text Schema und bearbeitete die relevanten Zeilen um 10:17. 

Einer der Fehler beim Importieren des Schemas kam beim Aufbauen des Indexes einer spezifischen Tabelle (*preview_cards_on_url*), da dort zu viele Einträge drin waren, deswegen kommentierten wir die Erstellung des Indexes aus. 

Mit zwei Bindestrichen haben wir die Erstellung des Indexes aus dem DB-Schema auskommentiert:
`-- CREATE UNIQUE INDEX index_preview_cards_on_url ON public.preview_cards USING btree (url);` 

Beim ersten Import des Schemas kam eine Fehlermeldung auf, dies lag daran das wir es versuchten als Postgresql User zu importieren nicht aber als Root-User. Zudem hätten wir zuvor die existierenden Datenbanken droppen sollen. Wir verwendeten zugleich den falschen Befehl aus dem Protokoll des gestrigen Tages. 

Wir droppten erneut alle existierenden Datenbanken auf dem neuen Datenbank-Server. 

```su - postgres``` </br>
*Macht mich zum postgres user*

```psql``` </br>
*Öffnet die Postgresql Software*

```drop database mastodon_production;``` </br>
*Löscht die mastodon_production Datenbank*



Wir erstellten die Datenbank namentlich und führten den richtigen Schema-only Import-Befehl aus.



```CREATE DATABASE mastodon_production;``` </br>
*Erstellt eine leere mastodon_production Datenbank*

```\q``` </br>
*Verlässt die Postgresql Software*

Daraufhin nahmen wir den richtigen Befehl und das modifizierte Schema war um 10:24 angelegt. Dieses modifizierte Schema würde keinen Index für `preview_cards_on_url` beim Importieren der Daten erstellen und somit nicht daran scheitern. 

`cat /backup/schema.sql | psql -d mastodon_production -U mastodon -` </br>
*Importiert das Datenbank-Schema-Dump in die mastodon_production Datenbank als User mastodon*

**Notiz:** Hier haben wir einen signifikanten Fehler gemacht, nämlich das die Tabellen der Datenbank zwar als 
User Mastodon importiert wurden, die Datenbank selbst jedoch erstellt wurde als User „postgres“ oder SuperUser.
 Der *Owner* der Datenbank war somit ein nicht-Mastodon User, was später große Probleme auslöste. 

Nun können wir die Daten überhaupt importieren, dann modifizieren, ggf. auch löschen, ohne sie an der Live-Datenbank verändern zu müssen. Hätten wir an der originalen Datenbank die Daten verändert und irgendwas falsch gemacht, dann wären diese Datensätze, sowie troet.cafe selbst, irreversibel zerstört. So kompliziert dieser Prozess war, er war absolut notwendig um nichts falsch zu machen, denn um überhaupt herauszufinden wo der Fehler liegt müssen wir an den Daten experimentieren können, das geht nur in einer exakten Kopie der Datenbank welche wir jetzt das erste Mal geschaffen haben. 

Martin sendete mir das Passwort für die Datenbank und den Mastodon-User. Wir sollten dieses Passwort dringend ändern da es in vielen Chat-Logs sowie einigen unverschlüsselten Datentransfers benutzt wurde. Der Befehl zur Datenbankimportierung (pg_restore) mit ausschließlich den Daten wurde erfolgreich gestartet um 10:27. 

Der Befehl muss ungefähr so ausgesehen haben:
```pg_restore -p 5432 -j 16 -Fc -a  -v  -U mastodon -n public --no-owner --role=mastodon --disable-triggers -d mastodon_production /backup/mastodon_production-2024-05-12.sql``` </br>
*Importiert ausschließlich die Daten (-a) innerhalb der SQL-Datei (-Fc | Format custom) „mastodon_production_2024-05-12.sql“ mit 16 cores (-j 16) in eine Datenbank mit dem Namen „mastodon_production“ auf einem Postgresql-Server mit der Version 15.7 (-p 5432) als User (-U) mastodon, erzeugt dabei keinen Index und beachtet keine Foreign-Key Constraints (--disable-triggers), löscht davor alle vorherigen Einträge (-c) und gibt den Text verbös aus (-v).*

Es war notwendig das aus dem kompletten Datenbank-Backup ausschließlich die Daten, nicht auch das Schema, importiert wurden, da wir das Schema extra separat modifiziert und dann importiert haben, somit ist der „-a“ Tag notwendig.  

Die Datenbank war ohne Fehlermeldung um 10:40 importiert worden und hatte eine Größe von 44GB. Wir waren uns immer noch unsicher ob wirklich alle Daten erfolgreich importiert wurden und hatten ohne Index auch wenig Möglichkeiten dies zu überprüfen. Die alte/Live Troet.Cafe Datenbank war 99GB groß, deshalb entsteht leicht die Idee das irgendwas während des Imports schiefgelaufen ist. Wir erstellten den Index also manuell und verglichen danach die Anzahl der Einträge einiger Tabellen beider Datenbanken. 

Als erstes müssen wir den Index neu aufbauen, da wir dessen vollständige Erstellung über das modifizierte Schema verhindert haben. Der REINDEX Befehl hat im Normalfall zudem den Nebeneffekt die Größe einer Datenbank zu verringern, da die Daten nun vollständig importiert sind und ein im Nachhinein erstellter Index die Daten besser sortiert vorfindet, somit der Index kleiner wird. 

Folgende Befehle wurden als postgres User in psql ausgeführt:

`\c mastodon_production` 

`REINDEX (verbose) database mastodon_production;` (um 10:45 ausgeführt)

Nachdem der REINDEX ohne Fehlermeldungen ausgeführt wurde mussten wir beide Datenbanken vergleichen um Sicherzustellen das alle Daten erfolgreich importiert wurden. Folgende Befehle wurden sowohl auf dem alten und neuen troet.cafe Datenbankserver innerhalb der psql-Software als postgres User ausgeführt. 

Wir gehen in Postgresql über `psql` und wählen die mastodon_production Datenbank aus `\c mastodon_production`.

Wir zählten die Einträge aller gespeicherten Status (*ja, die Mehrzahl von „Status“ ist „Status“*). 
`select count (id) from statuses;` 

- 10.108.999 (Neue troet.cafe Datenbank)
- 10.108.999 (Alte troet.cafe Datenbank)

Wir zählten die Einträge aller gespeicherten User via „public.accounts“ aka „accounts“ dessen Domain nicht existiert, also die lokale Instanz ist.

`select count(*) from public.accounts where domain IS NULL;` 

- 51.148 (Neue troet.cafe Datenbank)
- 51.148 (Alte troet.cafe Datenbank)

Wir zählten zuletzt auch die Einträge in der „preview_cards“ Tabelle da diese in der Vergangenheit ja Probleme bereitete:

`select count (id) from preview_cards;` 

- 19.268.713 (Neue troet.cafe Datenbank)
- 19.268.713 (Alte troet.cafe Datenbank)

Notiz: Der Fakt das fast 20.000.000 Einträge in dieser eher unnötigen Tabelle waren wird später relevant. 

In jedem Fall exakt gleich. **Keine Fehler**. Alle importiert. Heureka!

Das zählen der preview_cards Tabelle dauerte unproportional lang beim alten Server. 

Da wir uns nun sicher sein konnten, dass alle Daten der alten Datenbank erfolgreich rüberkopiert wurden konnten wir um 11:14 Postgresql auf dem alten Datenbank-Server herunterfahren. Die stichprobenartigen Tests waren alle Erfolgreich. Der alte Datenbank-Server selbst konnte nicht heruntergefahren werden, da dieser noch ElasticSearch installiert hatte. 


Nun kommt der schwere Teil: die einzelnen Worker- und Web-server sind immer noch heruntergefahren oder gestoppt (halt). Wir mussten die Datenbank so weit auf dem neuen Server vorbereiten um die alte Datenbank herunterfahren zu können. Denn wenn wir die Worker- und Web-Server wieder hochfahren dann würden sie versuchen sich mit der alten Datenbank zu verbinden, ab dem Punkt hätten wir zwei unterschiedliche Datenbanken und die ganze Arbeit bis zu diesem Punkt wäre umsonst. Deshalb mussten wir Postgresql auf dem alten Datenbankserver herunterfahren, sodass die sich aufbauenden Verbindungen der Worker- und Web-Server scheitern und keine Änderung an der alten Datenbank vornehmen. Wir müssen die Worker- und Web-Server hochfahren und daraufhin deren Mastodon-Konfiguration ändern, sodass sie sich mit dem neuen Datenbank-Server sowie dessen Postgresql und Redis verbinden und die Datenbankänderungen dort vornehmen. Das Hochfahren der Worker- und Web-Server würde zudem nicht dafür sorgen, dass troet.cafe online erscheint, da einerseits die Datenbank-Anfragen scheitern und zudem der Loadbalancer weiterhin offline ist. 

Der jetzige Plan verfolgt immer noch eine tootctl Funktion auszuführen welche unsere Datenbank so reparieren soll wo wir das Problem verorten (`bin/tootctl maintenance fix-duplicates`). 

Da wir jedoch anfangs nur einen Server benötigten um diesen Befehl auszuführen, fuhren wir auch nur einen Server hoch: work3. Dieser hat keine Web-Dienste und somit existiert keine Gefahr das troet.cafe wieder online erscheint. 

Wir entschieden uns nun ElasticSearch nicht vom alten Datenbank-Server umzuziehen, da dies eine komplizierte Konfiguration hat. 

Ich habe Anfangs ausversehen den web3-Server über das Hetzner-Panel neugestartet, nicht den worker3-Server, was ein kleines Problem war. Wir stoppten den web3-Server wieder und starteten nun den worker3-Server neu. 

Im worker3-Server unter `home/mastodon/live/` editierten wir die `.env.production` Datei um neue IP Adressen unter den Sektionen für Redis und Postgresql zu setzen. Wir setzten die IPs auf den neuen Datenbank-Server, da dieser die gleichen Passwörter usw. hatte sollte eigentlich alles funktionieren. 

Ich machte uns nun zum Mastodon-User über `su mastodon` um den folgenden Befehl als mastodon auszuführen. 

Da der worker3-Server nun mit dem neuen Datenbank-Server verbunden sein sollte über das Ändern der Konfig-Datei konnten wir den folgenden Maintenance-Befehl ausführen:
`RAILS_ENV=production bin/tootctl maintenance fix-duplicates` 

Wir bekamen folgende Fehlermeldung:
`authentification failure` vom worker3, wir vermuteten ein falsches Passwort. 

Martin schaut daraufhin nach und stellt viel um und erkennt am *pgbouncer* des neuen Datenbank-Servers noch ein falsches Setup. 


INSERT WHERE NECESSARY
```

Dies war jedoch in Wahrheit das Problem des Erstellens der *mastodon_production* Datenbank auf dem neuen Datenbank-Server als postgres-User. Wie vorher im Protokoll erwähnt besitzt der User welcher über pgbouncer versucht die mastodon_production Datenbank zu editieren diese gar nicht sondern der postgres User da der diese erstellt hat. 

Vielleicht war das Setup tatsächlich falsch, doch das eigentliche Problem war der falsche Besitzer der Datenbank. 


```

Wir mussten dem Mastodon-User auf dem Datenbank-Server wegen einem vorherigen Befehl die SuperUser Rechte geben, wir haben ihm nun die SuperUser Rechte wieder entzogen, da wir dachten das dies vielleicht der Grund für die `authentication failure` war. Folgender Befehl wurde genutzt:

`ALTER USER mastodon WITH NOSUPERUSER;` (um 11:38) 

Das ist eine Auflistung aller User sowie deren Rechte im Postgresql auf dem neuen Datenbank-Server 
```
                                   List of roles
 Role name |                         Attributes                         | Member of 
-----------+------------------------------------------------------------+-----------
 mastodon  | Create DB                                                  | {}
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS | {}
```

Beim Analysieren der Logs der Datenbank auf dem neuen Datenbank-Server stellte sich heraus das sie es war die den User mastodon nicht drauf lässt. 

(erklärung von pgbouncer einfügen)

Um 11:46 vermuteten wir, dass der pgbouncer vielleicht nicht die Rechte hat um die Datenbank zu editieren. Wir dachten auch es sei eine IP-Beschränkung und das dabei ein Fehler stattfand, was sich nach einiger Überprüfung und dem Ausschlussverfahren aber auch als falsch herausstellte. 

Daraufhin haben wir nachgedacht das es eventuell an der Userlist liegen könnte, also die Liste an Usern über welche der pgbouncer verwalten kann mit Beifügung des gehashten md5 Passwort des jeweiligen Users. Wir kopierten also die Userlist mit den gehashten md5 Passwörtern vom alten Datenbank-Server zum neuen. 
 
Die `pgbouncer.ini` Datei wurde editiert und die Einstellungen angepasst. 

(nicht sicher was das ist)
```
https://github.com/felx/mastodon-documentation/blob/master/Running-Mastodon/PgBouncer-guide.md
https://github.com/felx/mastodon-documentation/blob/master/Running-Mastodon/PgBouncer-guide.md#configuring-pgbouncer-1
```
 
Wir verifizierten um 12:03 anhand von journalctl (*der Logs der Datenbank*) das es funktioniert. Der worker3-Server konnte nun mit dem Datenbank-Server kommunizieren!

Weil die Userlist nicht vorhanden war konnte pgbouncer das Passwort nicht verifizeren und somit galt unsere Aktion und unser User als unauthentifiziert, deshalb `authentication failure`.

Da jetzt die tootctl Software vom worker3-Server die Datenbank des neuen Datenbank-Servers editieren konnte schien uns eigentlich nichts mehr im Weg zu sein. Das Mastodon-Fix Skript (*maintenance task*) um alle unsere Probleme zu lösen und eine Kopie der Datenbank welche alle diese Probleme hatte. So leicht war es dann leider auch nicht...
 
Wir führten den gleichen Befehl wieder um 12:05 aus. 

`RAILS_ENV=production bin/tootctl maintenance fix-duplicates` 

Daraufhin bekamen wir eine Antwort welche die komplette Zeit des restlichen Tages einnehmen sollte...

## Das Ändern der Datenbank-Schema-Version

> "Your version of the database schema is more recent than this script, this may cause unexpected errors."

- Vom alten Worker-Server. 

*Was bedeutet das?* Naja, das Skript von tootctl welches unsere Datenbank-Probleme lösen sollte war veraltet, denn das Datenbank-Schema wies sich als eine zu neue Version aus. Da sich das Schema von Datenbanken oftmals verändern kann wird in jeder Datenbank eine Versionsnummer gespeichert, so können Skripte welche gewisse Probleme lösen sollen gucken ob sie überhaupt dieser Datenbank helfen würden, oder vielleicht ausversehen Dinge verändern welche die Datenbank weiter kaputtmachen. Wenn eine Datenbank eine neue Tabelle mit neuen Daten hinzugefügt bekommt weil Mastodon ein neues Feature hat, zum Beispiel, dann könnte ein Skript welches gewisse Daten nach einem gewissen Schema löscht vielleicht mit diesen neuen Daten gar nicht umgehen. Deshalb, wenn gravierende Veränderungen an einer Datenbank und dessen Aufbau (Schema) gemacht werden, dann wird die Versionsnummer geändert. Jedes Fix-Skript / jede *maintenance task* hat ein Spektrum an Versionen von Datenbank-Schemen mit denen es arbeiten kann, doch ab einer gewissen Version wird ein neues Skript benötigt. Im Normalfall wird das Skript ge-updated wenn sich auch die Datenbank updated. Im Normalfall sollten diese Versionsnummern niemals inkompatibel miteinander sein. **Troet.Cafe ist kein Normalfall.** 

Doch wie weit auseinander sind nun diese Versionen und was können wir tun um das richtige Skript über die Datenbank laufen zu lassen?

Wir guckten also in unser installiertes Fix-Skript und sahen folgende Versionsnummern

```
MIN_SUPPORTED_VERSION = 2019_10_01_213028 # rubocop:disable Style/NumericLiteral
MAX_SUPPORTED_VERSION = 2022_11_04_133904 # rubocop:disable Style/NumericLiteral
```

Alternativ kann man das auch [hier](https://github.com/mastodon/mastodon/blob/b7b03e8d26a4344ef331ba667c16311110a0d6dd/lib/mastodon/maintenance_cli.rb#L17) nachlesen!

Unser Mastodon-Fix-Skript unterstützt also Datenbank-Schemen von der Version *2019_10_01_213028* bis zu *2022_11_04_133904*. 
Welche Version hatte also unsere Datenbank? 
Mit diesem Befehl zeigt man die letzten Fünf (5) Versionen unseres Mastodon-Datenbank-Schemas an:

`SELECT version FROM schema_migrations order by version desc limit 5;` 

Unser Output:

```
    version     
----------------
 20221206114142
 20221104133904
 20221101190723
 20221025171544
 20221021055441
(5 rows)
```

Unsere Datenbank-Schema-Version war also `2022_12_06_114142`, also genau einen Monat und zwei Tage zu alt für das Fix-Skript. Wie das passieren konnte ist uns bis heute unklar. Martin hat die Vermutung aufgestellt, dass es daran liegt das er Mal ein Update versucht hat welches gescheitert ist, jedoch bereits so weit ausgeführt wurde, dass das Datenbank-Schema ge-updated wurde und somit auch dessen Versionsnummer. 

Naja, nun haben wir den Salat. Eine perfektes Skript welches alle unsere Probleme lösen sollte, doch eine Datenbank welche mit diesem Skript nicht kompatibel ist. Wir hatten die Möglichkeit das gleiche Skript auszuführen trotz Warnung, denn es könnte genausogut möglich sein, dass unsere Datenbank nur die Schema-Versionsnummer ge-updated bekommen hat, das eigentlich Schema aber nicht anders ist. Somit ein neueres Skript welches über Vergleich der Versionsnummern kompatibel mit unserer Datenbank ist ggf. nicht funktionieren würde. Ich meine mich daran erinnern zu können, dass Rodirik sagte, dass das Schema von der troet.cafe Datenbank dem eines Mastodon-Servers der gleichen Version abweicht. Deshalb versuchten wir es mit einer neueren Version. 

Um 12:19 generierten wir diesen Abgleich des Mastodon-Worker Servers um zu gucken auf welcher Version / auf welchen Standpunkt sich dessen Programme befanden. 

```
root@work3:/home/mastodon/live/lib/mastodon# ls -lah
total 220K
drwxrwxr-x  2 mastodon mastodon 4,0K Mai 12 12:18 .
drwxrwxr-x 18 mastodon mastodon 4,0K Jul  6  2023 ..
-rw-rw-r--  1 mastodon mastodon  23K Jul  6  2023 accounts_cli.rb
-rw-rw-r--  1 mastodon mastodon 2,0K Okt  6  2019 cache_cli.rb
-rw-rw-r--  1 mastodon mastodon 1,4K Nov 19  2022 canonical_email_blocks_cli.rb
-rw-rw-r--  1 mastodon mastodon 2,6K Apr  7  2023 cli_helper.rb
-rw-rw-r--  1 mastodon mastodon 9,7K Mär 23  2023 domains_cli.rb
-rw-rw-r--  1 mastodon mastodon 3,6K Apr 28  2022 email_domain_blocks_cli.rb
-rw-rw-r--  1 mastodon mastodon 4,7K Apr 28  2022 emoji_cli.rb
-rw-rw-r--  1 mastodon mastodon 1,8K Mai  7  2022 feeds_cli.rb
-rw-rw-r--  1 mastodon mastodon 3,9K Jan 15  2021 ip_blocks_cli.rb
-rw-rw-r--  1 mastodon mastodon  31K Nov 19  2022 maintenance_cli.rb
-rw-rw-r--  1 mastodon mastodon  15K Mär 23  2023 media_cli.rb
-rw-rw-r--  1 mastodon mastodon  36K Apr 29  2022 migration_helpers.rb
-rw-rw-r--  1 mastodon mastodon  627 Mär 23  2023 premailer_webpack_strategy.rb
-rw-rw-r--  1 mastodon mastodon 1,9K Okt  6  2019 preview_cards_cli.rb
-rw-rw-r--  1 mastodon mastodon  530 Mai  7  2022 rack_middleware.rb
-rw-rw-r--  1 mastodon mastodon 1,5K Mär 23  2023 redis_config.rb
-rw-rw-r--  1 mastodon mastodon 3,8K Nov 19  2022 search_cli.rb
-rw-rw-r--  1 mastodon mastodon 1,2K Mai  7  2022 settings_cli.rb
-rw-rw-r--  1 mastodon mastodon  784 Mär 27  2023 sidekiq_middleware.rb
-rw-rw-r--  1 mastodon mastodon 5,1K Apr 28  2022 snowflake.rb
-rw-rw-r--  1 mastodon mastodon  11K Mär 23  2023 statuses_cli.rb
-rw-rw-r--  1 mastodon mastodon 5,2K Aug 10  2020 upgrade_cli.rb
-rw-rw-r--  1 mastodon mastodon 1006 Feb 16 21:14 version.rb
```
Um 12:47 stellten wir eine unerklärte Diskrepanz in der Datenbank verglichen zur Versionsnummer fest. Die troet.cafe Datenbank hatte keine „software_updates“ Tabele, obwohl diese ab Version 4.2.0 existieren sollte. Die Selbstklassifikation der Datenbank (*über die Versionsnummer*) muss also falsch und modifiziert worden sein. 

Für den Moment sollten wir keine weitere Lösung für dieses Problem finden. 

## Fortführung der Suche nach einer Lösung zum pgbouncer Problem (Erfolgreich)

Wir fügten die gleichen UFW (*Universal Firewall*) Regeln auf dem neuen Datenbank-Server ein wie auf dem Alten. Wir verbindeten den worker3-Server direkt mit dem neuen Datenbank-Server und überbrückten so pgbouncer, sodass dieses uns nicht mehr im Problem stehen sollte für den Fall, dass das Berechtigungsproblem von pgbouncer aus kommt. 

Es war nun 13:39 und wir hatten weiterhin keine Lösungen für das Problem gefunden sowie tausende Fehlermeldungen durchforstet. Im *tootctl-maintenance-2024-05-12-13-30.log* lassen sich genau diese Fehlermeldungen durchlesen. Das Hauptproblem war weiterhin der *permission denied* Error, den wir bis jetzt nicht verstehen konnten. Jedes Programm hatte die richtigen Berechtigungen, jeder Ordner auch. Wir konnten nicht verstehen warum der worker3-Server nicht in der lage war auf den neuen Datenbank-Server, trotz identischer Konfiguration zugreifen konnte. 

Das Problem der Datenbank war in einem undefinierbaren Zustand. Das beste was wir bisher erreicht haben war eine „bessere“ Fehlermeldung der Migrations-Skripts beim Updaten des worker3-Servers auf die Version 4.2.1.  

Wir beendeten das Meeting um 13:44 (*nach 5 Stunden, 25 Minuten und 29 Sekunden, da es um 08:17 startete*) für eine wohlverdiente Mittagspause. Ich machte jedoch nicht sofort eine Pause, sondern durchforstete das Protokoll um irgendwas zu finden was wir übersehen haben könnten, irgendeinen Grund welcher dieses Verhalten erklären könnte. Nachdem Ich aber ein paar Ideen gesammelt hatte legte Ich mich auch kurz hin um 14:50. 


Wir nahmen das Meeting wieder auf um 16:03. 

Wir versuchten nun das Fix-Skript zu updaten und mussten somit die worker3-Server Mastodon-Version updaten auf 4.2.0. Das Problem dabei war eine der Dependencies namens *json-canonicalization*, denn diese benötigte eine Version laut der *gemfile.lock*, welche nicht mehr existiert. Anscheinend war diese Version mit einer Vulnerability versehen, somit mussten wir die gemfile.lock manuell editieren und die benötigte Version von json-canonicalization zu 0.3.3 ändern. Daraufhin verfolgten wir die Update-Anleitung von v4.2.0 weiterhin!

Nachdem wir die Mastodon-Version des worker3-Servers geupdated hatten führten wir die Migration der Datenbank um 16:18 manuell durch:

`SKIP_POST_DEPLOYMENT_MIGRATIONS=true RAILS_ENV=production bundle exec rails db:migrate` 

Daraufhin bekamen wir eine Fehlermeldung die alles erklären sollte. Ich habe sie nicht notiert, doch uns wurde nun klar *wo* der Authentification-Error lag!

Nick hatte mit allem Recht. Als Ich damals anwies das wir die neu aufgesetzte Datenbank nicht weiter untersuchen müssten, haben wir ein kritisches Detail übersehen. Aufgrunddessen das wir das klartext Datenbank-Schema und daraufhin die Datenbank-Daten auf diese besondere Weise importierten gehörte zwar dem mastodon-User (in postgresql) jede Tabelle innerhalb der Datenbank, doch die Datenbank selbst gehörte dem postgres user. Die fehlende Berechtigung hatte nicht etwa der Mastodon Debian user, oder pgbouncer, sondern der mastodon Postgresql User, denn ihm gehörte das was er editieren sollte nichteinmal. 

Ich loggte mich also als postgres User (*SuperUser*) in der Postgresql Datenbank auf dem neuen Datenbank-Server ein und führte folgenden Befehl aus:
`ALTER DATABASE mastodon_production OWNER TO "mastodon";` 

Nun konnte der pgbouncer oder externe worker3-Server überhaupt die Datenbank editieren 

Um 17:05 löschten wir den gesamten Index der neuen Datenbank um sie daraufhin mit md5 (*anstelle von btree*) über einen psql Befehl aufzubauen. 

Als mastodon User innerhalb von Postgresql ausgeführt:
`CREATE INDEX index_preview_cards_on_url ON public.preview_cards USING hash (url)` 

Dieser scheint auch in irgendeiner Form gescheitert zu sein. Nach einer längeren Analyse des Datenbank-Schemas sowie der Fehlermeldung meldete sich hier Patrick ein und brachte die notwendige Idee. Was ist wenn das Problem gar nicht das Aufbauen des Indexes ist, sondern dieser Index zur scheitert weil etwas mit den Daten nicht in ordnung ist? Klar sind 19 Millionen Einträge viel, aber ganz und gar nicht ist das die größte Tabelle innerhalb einer Datenbank! Postgresql kann weitaus mehr. Das 7/8 Byte Limit des Indexes bezog sich keineswegs auf die größe des Indexes selbst, sondern auf die Größe eines einzelnen Eintrags. Das war der springende Punkt. 

Wir überlegten trotzdem ob wir langfristig einen 
cronjob Einrichten der preview_cards und dessen URLs rauswirft, denn eine Tabelle mit so vielen Einträgen, vor allem bei so irrelevanten Daten, ist nicht akzeptabel. 

Um 17:12 generierten wir zum ersten Mal eine Liste an allen Links die in dieser Tabelle gespeichert wurden, von Alt zu Neu. Wir zeigten lediglich die ersten 5 Einträge an, denn die gesamten 19.000.000 auszugeben wäre nicht machbar. 
```
                                                  url                                                   | id |         created_at         
--------------------------------------------------------------------------------------------------------+----+----------------------------
 https://youtu.be/IPSbNdBmWKE                                                                           |  1 | 2018-05-01 07:10:15.725173
 https://techcrunch.com/2018/04/30/jan-koum-quits-facebook/                                             |  2 | 2018-05-01 07:13:48.155344
 https://9to5mac.com/2018/04/30/cambridge-analytica-twitter/                                            |  3 | 2018-05-01 08:12:02.275943
 https://fediverse.party/                                                                               |  4 | 2018-05-03 12:43:54.610303
 https://blog.online.net/2018/05/03/introducing-scaleway-nextgen-nvme-cloud-servers-with-hot-snapshots/ |  5 | 2018-05-03 15:49:04.626933
(5 rows)
```
Notiz: Der erste YouTube Link führt zum Erklärungsvideo von Mastodon! Es ist der Link aus dem Beitrag den Martin am 01. Mai 2018 gemacht hat, was wahrscheinlich der [erste Beitrag von troet.cafe](https://troet.cafe/@martinmuc/99952797514332520) war!

mastodon_production=> 

\d preview_cards;

17:14

mastodon_production=> select max(length(url)) from preview_cards;
 max  
------
 9150
(1 row)

mastodon_production=> select count(*) from preview_cards where length(url)>1000;
 count 
-------
   780
(1 row)


mastodon_production=> select count(*) from preview_cards where length(url)>2000;
 count 
-------
   357
(1 row)

```
https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%250AGenerate%2520an%2520RDF-based%2520FAQ%2520using%2520RDF-Turtle%2520and%2520terms%2520from%2520the%2520schema.org%2520vocabulary%253A%2520How%2520much%2520does%2520it%2520cost%2520to%2520use%2520ChatGPT%253F%2520During%2520the%2520initial%2520research%2520preview%252C%2520ChatGPT%2520is%2520free%2520to%2520use.%2520How%2520does%2520ChatGPT%2520work%253F%2520ChatGPT%2520is%2520fine-tuned%2520from%2520GPT-3.5%252C%2520a%2520language%2520model%2520trained%2520to%2520produce%2520text.%2520ChatGPT%2520was%2520optimized%2520for%2520dialogue%2520by%2520using%2520Reinforcement%2520Learning%2520with%2520Human%2520Feedback%2520%28RLHF%29%2520%25E2%2580%2593%2520a%2520method%2520that%2520uses%2520human%2520demonstrations%2520to%2520guide%2520the%2520model%2520toward%2520desired%2520behavior.%2520Why%2520does%2520the%2520AI%2520seem%2520so%2520real%2520and%2520lifelike%253F%2520These%2520models%2520were%2520trained%2520on%2520vast%2520amounts%2520of%2520data%2520from%2520the%2520internet%2520written%2520by%2520humans%252C%2520including%2520conversations%252C%2520so%2520the%2520responses%2520it%2520provides%2520may%2520sound%2520human-like.%2520It%2520is%2520important%2520to%2520keep%2520in%2520mind%2520that%2520this%2520is%2520a%2520direct%2520result%2520of%2520the%2520system%27s%2520design%2520%28i.e.%2520maximizing%2520the%2520similarity%2520between%2520outputs%2520and%2520the%2520dataset%2520the%2520models%2520were%2520trained%2520on%29%2520and%2520that%2520such%2520outputs%2520may%2520be%2520inaccurate%252C%2520untruthful%252C%2520and%2520otherwise%2520misleading%2520at%2520times.%2520Can%2520I%2520trust%2520that%2520the%2520AI%2520is%2520telling%2520me%2520the%2520truth%253F%2520ChatGPT%2520is%2520not%2520connected%2520to%2520the%2520internet%252C%2520and%2520it%2520can%2520occasionally%2520produce%2520incorrect%2520answers.%2520It%2520has%2520limited%2520knowledge%2520of%2520world%2520and%2520events%2520after%25202021%2520and%2520may%2520also%2520occasionally%2520produce%2520harmful%2520instructions%2520or%2520biased%2520content.%2520We%27d%2520recommend%2520checking%2520whether%2520responses%2520from%2520the%2520model%2520are%2520accurate%2520or%2520not.%2520If%2520you%2520find%2520an%2520answer%2520is%2520incorrect%252C%2520please%2520provide%2520that%2520feedback%2520by%2520using%2520the%2520%2522Thumbs%2520Down%2522%2520button.%2520Who%2520can%2520view%2520my%2520conversations%253F%2520As%2520part%2520of%2520our%2520commitment%2520to%2520safe%2520and%2520responsible%2520AI%252C%2520we%2520review%2520conversations%2520to%2520improve%2520our%2520systems%2520and%2520to%2520ensure%2520the%2520content%2520complies%2520with%2520our%2520policies%2520and%2520safety%2520requirements.%2520Will%2520you%2520use%2520my%2520conversations%2520for%2520training%253F%2520Yes.%2520Your%2520conversations%2520may%2520be%2520reviewed%2520by%2520our%2520AI%2520trainers%2520to%2520improve%2520our%2520systems.%2520Can%2520you%2520delete%2520my%2520data%253F%2520Yes%252C%2520please%2520follow%2520the%2520data%2520deletion%2520process%2520here%253A%2520https%253A%252F%252Fhelp.openai.com%252Fen%252Farticles%252F6378407-how-can-i-delete-my-account%2520Can%2520you%2520delete%2520specific%2520prompts%253F%2520No%252C%2520we%2520are%2520not%2520able%2520to%2520delete%2520specific%2520prompts%2520from%2520your%2520history.%2520Please%2520don%27t%2520share%2520any%2520sensitive%2520information%2520in%2520your%2520conversations.%2520Can%2520I%2520see%2520my%2520history%2520of%2520threads%253F%2520How%2520can%2520I%2520save%2520a%2520conversation%2520I%25E2%2580%2599ve%2520had%253F%2520Yes%252C%2520you%2520can%2520now%2520view%2520and%2520continue%2520your%2520past%2520conversations.%2520Where%2520do%2520you%2520save%2520my%2520personal%2520and%2520conversation%2520data%253F%2520For%2520more%2520information%2520on%2520how%2520we%2520handle%2520data%252C%2520please%2520see%2520our%2520Privacy%2520Policy%2520and%2520Terms%2520of%2520Use.%2520How%2520can%2520I%2520implement%2520this%253F%2520Is%2520there%2520any%2520implementation%2520guide%2520for%2520this%253F%2520ChatGPT%2520is%2520being%2520made%2520available%2520as%2520a%2520research%2520preview%2520so%2520we%2520can%2520learn%2520about%2520its%2520strengths%2520and%2520weaknesses.%2520It%2520is%2520not%2520available%2520in%2520the%2520API.%2520Do%2520I%2520need%2520a%2520new%2520account%2520if%2520I%2520already%2520have%2520a%2520Labs%2520or%2520Playground%2520account%253F%2520If%2520you%2520have%2520an%2520existing%2520account%2520at%2520labs.openai.com%2520or%2520beta.openai.com%252C%2520then%2520you%2520can%2520login%2520directly%2520at%2520chat.openai.com%2520using%2520the%2520same%2520login%2520information.%2520If%2520you%2520don%27t%2520have%2520an%2520account%252C%2520you%27ll%2520need%2520to%2520sign-up%2520for%2520a%2520new%2520account%2520at%2520chat.openai.com.
```

```
https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fjson&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520%2520%2520%2522%2540context%2522%253A%2520%2522http%253A%252F%252Fschema.org%252F%2522%252C%250A%2520%2520%2520%2520%2522%2540type%2522%253A%2520%2522SoftwareApplication%2522%252C%250A%2520%2520%2520%2520%2522%2540id%2522%253A%2520%2522https%253A%252F%252Fxibbon.com%252F%2523softwareApplication%2522%252C%250A%2520%2520%2520%2520%2522name%2522%253A%2520%2522La%2520Terminal%2522%252C%250A%2520%2520%2520%2520%2522operatingSystem%2522%253A%2520%2522iOS%252C%2520MacOS%252C%2520Windows%2522%252C%250A%2520%2520%2520%2520%2522applicationCategory%2522%253A%2520%2522Terminal%2520Emulator%2522%252C%250A%2520%2520%2520%2520%2522feature%2522%253A%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522Fully%2520Native%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522description%2522%253A%2520%2522Provides%2520a%2520fully-native%252C%2520first-class%2520touch%2520experience%2520for%2520command-line%2520hackers%2520on%2520iPhone%2520and%2520iPad%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522iCloud%2520for%2520Everyone%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522description%2522%253A%2520%2522Makes%2520it%2520easy%2520to%2520switch%2520between%2520your%2520iPhone%252C%2520iPad%252C%2520and%2520Mac%2520by%2520syncing%2520your%2520settings%2520and%2520keys%2520over%2520iCloud%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522Live%2520Backgrounds%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522description%2522%253A%2520%2522Sports%2520a%2520fully%2520themeable%2520experience%2520accented%2520with%2520beautifully%2520captivating%2520live-effect%2520backgrounds%2520powered%2520by%2520Metal%2520Performance%2520Shaders%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522Inline%2520graphics%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522description%2522%253A%2520%2522Allows%2520to%2520view%2520graphical%2520output%252C%2520such%2520as%2520plots%252C%2520graphs%252C%2520and%2520images%252C%2520in-place%2520in%2520the%2520terminal%2520while%2520you%2520work%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522Built%2520on%2520open%2520source%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522description%2522%253A%2520%2522Provides%2520a%2520comprehensive%2520terminal%2520emulator%2520experience%2520based%2520on%2520the%2520popular%2520open%2520source%2520SwiftTerm%2520library%2520with%2520powerful%2520client%2520amenities%2520for%2520serious%2520c
ommand-line%2520aficionados%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%252
0%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522Secure%2520Enclave%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522des
cription%2522%253A%2520%2522Stores%2520your%2520private%2520keys%2520in%2520the%2520secure%2520enclave%2520so%2520your%2520private%2520key%2520can%2520never%2520be%2520found%2520in%2520plain%2520text%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522Linux%2520and%2520Mac%2520and%2520Windows%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522description%2522%253A%2520%2522A%2520terminal%2520emulator%2520that%2520support%2520Windows-aware%2520to%2520ensure%2520PowerShell%2520power%2520users%2520can%2520enjoy%2520a%2520delightful%2520ssh%2520experience%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522name%2522%253A%2520%2522International%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2522description%2522%253A%2520%2522Renders%2520internationalized%2520output%2520and%2520supports%2520internationalized%2520input%252C%2520including%2520native%2520iOS%2520dictation%2520and%2520international%2520keyboards%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%255D%252C%250A%2520%2520%2520%2520%2522screenshot%2522%253A%2520%2522https%253A%252F%252Fxibbon.com%252Fimages%252Fphone.png%2522%250A%257D%250A%250A
```


mastodon_production=> select id,created_at from preview_cards where length(url)>5000 order by created_at asc;
    id    |         created_at         
----------+----------------------------
  6375495 | 2022-12-25 19:30:26.319969
  6629965 | 2023-01-05 21:41:26.766335
  6816706 | 2023-01-12 17:07:12.834289
 10406136 | 2023-06-16 15:40:57.290047
(4 rows)

mastodon_production=> select id,created_at from preview_cards where length(url)>2730 order by created_at asc;
    id    |         created_at         
----------+----------------------------
   492035 | 2019-11-22 06:30:30.96322
  5409918 | 2022-11-17 11:34:21.534693
  5526640 | 2022-11-22 06:13:03.428188
  6253977 | 2022-12-20 20:18:22.889246
  6375495 | 2022-12-25 19:30:26.319969
  6629965 | 2023-01-05 21:41:26.766335
  6816706 | 2023-01-12 17:07:12.834289
  7510492 | 2023-02-07 19:37:00.54026
  8976161 | 2023-04-12 16:57:48.884316
 10406136 | 2023-06-16 15:40:57.290047
 10720068 | 2023-07-01 10:23:44.5331
 14268222 | 2023-11-15 22:55:13.850201
 14657797 | 2023-11-29 18:27:16.006649
 15104912 | 2023-12-15 08:16:27.722657
 15686193 | 2024-01-08 11:23:11.878902
(15 rows)



def vacuum_cached_images!
    preview_cards_past_retention_period.find_each do |preview_card|
      preview_card.image.destroy
      preview_card.save
    end
  end
  
17:40


17:44
keine db einträge von tootctl gelöscht 

mastodon_production=> BEGIN; DELETE FROM preview_cards WHERE created_at <= '2024-02-12';
BEGIN
DELETE 16672362


mastodon_production=> BEGIN; DELETE FROM preview_cards WHERE created_at <= '2024-02-12';
BEGIN
DELETE 16672362
mastodon_production=*> commit;
COMMIT
mastodon_production=> select count (id) from preview_cards;
  count  
---------
 2596351
(1 row)

mastodon_production=> 


18:00

```
mastodon_production=> select * from webhooks;
 id | url | events | secret | enabled | created_at | updated_at | template 
----+-----+--------+--------+---------+------------+------------+----------
(0 rows)

```

materialized_view?

passwort von Mastodon user ändern weil es jeder kennt :D


18:12

mastodon_production=> select version from schema_migrations order by version desc limit 5;
    version     
----------------
 20230907150100
 20230904134623
 20230822081029
 20230818142253
 20230818141056
 
 es versucht ein repopulate in einer nicht populated view
 
 ```
 
  schemaname | matviewname | matviewowner | tablespace | hasindexes | ispopulated |                                            definition                                             
------------+-------------+--------------+------------+------------+-------------+---------------------------------------------------------------------------------------------------
 public     | instances   | mastodon     |            | t          | f           |  WITH domain_counts(domain, accounts_count) AS (                                                 +
            |             |              |            |            |             |          SELECT accounts.domain,                                                                 +
            |             |              |            |            |             |             count(*) AS accounts_count                                                           +
            |             |              |            |            |             |            FROM accounts                                                                         +
            |             |              |            |            |             |           WHERE (accounts.domain IS NOT NULL)                                                    +
            |             |              |            |            |             |           GROUP BY accounts.domain                                                               +
            |             |              |            |            |             |         )                                                                                        +
            |             |              |            |            |             |  SELECT domain_counts.domain,                                                                    +
            |             |              |            |            |             |     domain_counts.accounts_count                                                                 +
            |             |              |            |            |             |    FROM domain_counts                                                                            +
            |             |              |            |            |             | UNION                                                                                            +
            |             |              |            |            |             |  SELECT domain_blocks.domain,                                                                    +
            |             |              |            |            |             |     COALESCE(domain_counts.accounts_count, (0)::bigint) AS accounts_count                        +
            |             |              |            |            |             |    FROM (domain_blocks                                                                           +
            |             |              |            |            |             |      LEFT JOIN domain_counts ON (((domain_counts.domain)::text = (domain_blocks.domain)::text))) +
            |             |              |            |            |             | UNION                                                                                            +
            |             |              |            |            |             |  SELECT domain_allows.domain,                                                                    +
            |             |              |            |            |             |     COALESCE(domain_counts.accounts_count, (0)::bigint) AS accounts_count                        +
            |             |              |            |            |             |    FROM (domain_allows                                                                           +
            |             |              |            |            |             |      LEFT JOIN domain_counts ON (((domain_counts.domain)::text = (domain_allows.domain)::text)));
 
 ```


nick hat das neue datenbankschema exportiert

ich habe keine ahnung was eine materialized view ist

aelect auf eine table doch für die datenbank ist es ein table und es 

materialized view heißt das es die daten in einer view zwischenspeichert in einer table

eine view kann sich aus mehreren tablen zusammenstellen

REFRESH MATERIALIZED VIEW public.instances;
danach
18:25 der befehl (maintenance script tootctl) hat 100% funktioniert 

es waren nicht die webhooks sondern das "finished"

wir schreiben die firewall regeln nochmal um (18:30)

wir machen ein snapshot

anscheinend gibt es eine fixed policy notification "foreign key"

39GB datenbank

rbenv install (scheitert)

git -C /home/mastodon/.rbenv/plugins/ruby-build pull

rbenv install (geht)

für nächsten April machen wir aus troet.cafe ne andere Seite


datenbank:

root@pg:/home# ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
22                         ALLOW IN    159.69.89.221             
22                         ALLOW IN    188.34.207.90             
Anywhere                   ALLOW IN    116.203.82.164            
Anywhere                   ALLOW IN    162.55.63.189             
Anywhere                   ALLOW IN    167.235.146.56            
Anywhere                   ALLOW IN    195.201.1.28              
Anywhere                   ALLOW IN    168.119.122.106           
22/tcp                     ALLOW IN    84.140.81.88              
22/tcp                     ALLOW IN    87.163.228.105            
22/tcp                     ALLOW IN    159.69.18.103             
22/tcp                     ALLOW IN    Anywhere                  
22/tcp                     ALLOW IN    2a01:4f8:1c0c:7f80::1     
22/tcp (v6)                ALLOW IN    Anywhere (v6)   


etckeeper

19:09

19:14

nick macht mit multi-irgendwas die updates der web1,web2,web3,worker4 auf 4.2.8

nick macht auch die streaming server

wir machen nix mit elasticsearch

19:40 starten neuen elasticsearch zeugs

kurz davor fertig zu sein

loadbalancer an dann ding an

kurz davor

19:41

19:59

auf worker:
systemctl restart mastodon-sk-pull.service mastodon-sk-push.service mastodon-sidekiq mastodon-sidekiq-schedulers.service

auf web: einfach restart lol

20:02 lb anschalten instanz hoch
(wir haben es erst so 20:03 oder 20:04 angeschaltet, und es war erst so 20:05 online weil Erik noch ne lange Rede darüber gehalten hat wie alles schief laufen wird)


20:15 es scheint alles zu funktionieren

um zu "tröt!" zu verändern

Anpassung von Übersetzungen lokal auf den Webservern.

https://vhs.social/@admin/109359411953821552

Wie holen wir uns #Tröt zurück?

1. Datei "live/app/javascript/mastodon/locales/de.json" öffnen
2. dort "compose_form.publish" suchen, hinten "Tröt" reinschreiben
3. Für den Trötifanten 🐘: "compose_form.publish_loud" suchen, hinten "{publish} \ud83d\udc18!" reinschreiben
4. Leere Datei erstellen z.B. "touch live/app/javascript/styles/empty.scss" (kann später wieder weg)
5. "RAILS_ENV=production bundle exec rails assets:precompile" laden
6. neu laden: "systemctl restart mastodon-web"

13:10:17 um 21:25 Beendet.

Wir hatten eine Videokonferenz die 13 Stunden, 10 Minuten und 21 Sekunden lang war. Wir haben um 08:15 angefangen und um 21:25 beendet. 

# Glossar

- **Mastodon:** Die dezentrale Social Media Software
- **mastodon:** Der User welcher sowohl als in der Postgresql-Software sowie innerhalb der Debian-Umgebung für die Mastodon-Software Befehle ausführt. 
- **Postgresql:** Die Datenbank-Software.
- **postgres:** Der SuperUser der Datenbanksoftware. 
- **Datenbank-Schema:** Die Struktur der Datenbank, sozusagen eine Auflistung der Namen an Tabellen welche eine Datenbank enthält, jedoch keine Daten. 
- **Datenbank-Daten:** Die Daten innerhalb einer Datenbank (*gelöst vom Schema*). 
- **pgbouncer:**

## Zeitaufwendung

Termine für den ersten Tag:
- `08:30 - 09:55 (01:25h) Meeting mit Martin und Erik Uden`
- `10:21 - 13:10 (02:49h) Meeting mit Martin und Erik Uden`
- `15:41 - 18:45 (03:04h) Meeting mit Martin, Erik Uden, Jain und Panda`
- `18:45 - 21:47 (03:02h) Aufbereitung des Protokolls von Erik Uden`

Termine für den zweiten Tag:
- `2024.05.12 | 08:15 - 21:25 (13:10h) Meeting mit Martin, Erik Uden, Nick, Rodirik, Patrick, Jain, Panda, André und Osmodia`
- `2024.05.14 | 13:05 - 13:40 (00:35h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.05.14 | 15:40 - 17:27 (01:47h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.05.20 | 12:51 - 13:07 (00:16h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.05.22 | 22:55 - 23:09 (00:14h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.05.24 | 14:02 - 14:10 (00:08h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.06.13 | 18:00 - 21:05 (03:05h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.07.15 | 11:35 - 12:35 (01:00h) Aufarbeitung des Protokolls von Erik Uden`

Termine für beide Tage:
- `2024.07.16 | 11:24 - 12:33 (01:09h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.07.18 | 11:29 - 12:01 (00:30h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.07.19 | 13:25 - 14:41 (01:16h) Aufarbeitung des Protokolls von Erik Uden`
- `2024.07.19 | 18:40 - 22:01 (03:21h) Aufarbeitung des Protokolls sowie der Webseite join-mastodon.de von Erik Uden`

Insgesamt: (muss noch ausgerechnet werden)