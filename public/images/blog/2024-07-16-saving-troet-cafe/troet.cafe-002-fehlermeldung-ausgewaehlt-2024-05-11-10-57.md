Fehlermeldung bei dem Importieren der troet.cafe Datenbank auf einem neuen Server

Alter Server:
- postgresql v10.23 (Ubuntu 10.23-0ubuntu018.04.2)

Neuer Server:
- postgresql v15.7 (Ubuntu 15.7-1.pgdg22.04+1)

Die Datenbank hat sich von ~105GB auf ~40GB verkleinert, es wurden also durch die insgesamt 15 Fehlermeldungen 65GB an Daten verloren. 

Befehl:
`root@pg:/backup# time pg_restore -Fc -v -c -j16 -U mastodon -n public --no-owner --role=mastodon -d mastodon_production /backup/mastodon_production_2024-05-11.sql`

Es gibt zwei Fehler:
- Foreign Key
- Preview Cards on URL

Am Anfang habe Ich ein Beispiel des Foreign-Key Fehlers genommen, später liste Ich alle anderen Aufkommen des Fehlers auf. 


# Der Foreign Key Fehler

Zeile 0019-0021
```
pg_restore: dropping FK CONSTRAINT statuses_tags fk_rails_df0fe11427
pg_restore: while PROCESSING TOC:
pg_restore: from TOC entry 4333; 2606 17283 FK CONSTRAINT statuses_tags fk_rails_df0fe11427 mastodon
pg_restore: error: could not execute query: ERROR:  constraint "fk_rails_df0fe11427" of relation "statuses_tags" does not exist
Command was: ALTER TABLE ONLY public.statuses_tags DROP CONSTRAINT fk_rails_df0fe11427;
```

Zeile 3148-3157
```
pg_restore: launching item 4333 FK CONSTRAINT statuses_tags fk_rails_df0fe11427
pg_restore: creating FK CONSTRAINT "public.statuses_tags fk_rails_df0fe11427"
pg_restore: from TOC entry 4333; 2606 17283 FK CONSTRAINT statuses_tags fk_rails_df0fe11427 mastodon
pg_restore: error: could not execute query: ERROR:  insert or update on table "statuses_tags" violates foreign key constraint "fk_rails_df0fe11427"
DETAIL:  Key (status_id)=(101755460782524913) is not present in table "statuses".
Command was: ALTER TABLE ONLY public.statuses_tags
    ADD CONSTRAINT fk_rails_df0fe11427 FOREIGN KEY (status_id) REFERENCES public.statuses(id) ON DELETE CASCADE;


pg_restore: finished item 4333 FK CONSTRAINT statuses_tags fk_rails_df0fe11427
```

Es gibt fast ausschließlich diese zwei Arten an Fehler, zuerst wird „fk_rails_df0fe11427“ nicht gelöscht und dann kommt der gleiche foreign key „fk_rails_df0fe11427“ in der zweiten Fehlermeldung wieder auf. 


Der Grund warum 65GB fehlen ist wahrscheinlich weil wegen dem FK-Fehler "statuses_tags", "mentions", "statuses_stats", "media_attachments" nicht importiert werden können. 


Die zwei anderen Fehler sind die folgenden:

# preview_cards_on_url

Zeile 0188-0190
```
pg_restore: from TOC entry 4064; 1259 17011 INDEX index_preview_cards_on_url mastodon
pg_restore: error: could not execute query: ERROR:  index "index_preview_cards_on_url" does not exist
Command was: DROP INDEX public.index_preview_cards_on_url;
```

3183-3187
```
pg_restore: error: could not execute query: ERROR:  index row size 2712 exceeds btree version 4 maximum 2704 for index "index_preview_cards_on_url"
DETAIL:  Index row references tuple (217136,5) in relation "preview_cards".
HINT:  Values larger than 1/3 of a buffer page cannot be indexed.
Consider a function index of an MD5 hash of the value, or use full text indexing.
Command was: CREATE UNIQUE INDEX index_preview_cards_on_url ON public.preview_cards USING btree (url);
```

Die beiden Fehler scheinen irgendwie zusammenzuhängen.


# Alle anderen Vorkommen des Foreign Key Fehler

Alle anderen Vorkommen vom FK-Fehler sind folgende 4:

Zeile 0019-0021 und Zeile 3148-3157 für *fk_rails_df0fe11427* wurden schon gezeigt.


## fk_rails_df0fe11427

Zeile 0064-0067 (*fk_rails_59edbe2887*)
```
pg_restore: dropping FK CONSTRAINT mentions fk_rails_59edbe2887
pg_restore: from TOC entry 4308; 2606 17068 FK CONSTRAINT mentions fk_rails_59edbe2887 mastodon
pg_restore: error: could not execute query: ERROR:  constraint "fk_rails_59edbe2887" of relation "mentions" does not exist
Command was: ALTER TABLE ONLY public.mentions DROP CONSTRAINT fk_rails_59edbe2887;
```

Zeile 3120-3129 (*fk_rails_59edbe2887*)
```
pg_restore: launching item 4308 FK CONSTRAINT mentions fk_rails_59edbe2887
pg_restore: creating FK CONSTRAINT "public.mentions fk_rails_59edbe2887"
pg_restore: from TOC entry 4308; 2606 17068 FK CONSTRAINT mentions fk_rails_59edbe2887 mastodon
pg_restore: error: could not execute query: ERROR:  insert or update on table "mentions" violates foreign key constraint "fk_rails_59edbe2887"
DETAIL:  Key (status_id)=(101755432094541962) is not present in table "statuses".
Command was: ALTER TABLE ONLY public.mentions
    ADD CONSTRAINT fk_rails_59edbe2887 FOREIGN KEY (status_id) REFERENCES public.statuses(id) ON DELETE CASCADE;


pg_restore: finished item 4308 FK CONSTRAINT mentions fk_rails_59edbe2887
```

## fk_rails_4a247aac42

Zeile 0071-0074
```
pg_restore: dropping FK CONSTRAINT status_stats fk_rails_4a247aac42
pg_restore: from TOC entry 4344; 2606 17048 FK CONSTRAINT status_stats fk_rails_4a247aac42 mastodon
pg_restore: error: could not execute query: ERROR:  constraint "fk_rails_4a247aac42" of relation "status_stats" does not exist
Command was: ALTER TABLE ONLY public.status_stats DROP CONSTRAINT fk_rails_4a247aac42;
```

Zeile 3158-3167
```
pg_restore: launching item 4344 FK CONSTRAINT status_stats fk_rails_4a247aac42
pg_restore: creating FK CONSTRAINT "public.status_stats fk_rails_4a247aac42"
pg_restore: from TOC entry 4344; 2606 17048 FK CONSTRAINT status_stats fk_rails_4a247aac42 mastodon
pg_restore: error: could not execute query: ERROR:  insert or update on table "status_stats" violates foreign key constraint "fk_rails_4a247aac42"
DETAIL:  Key (status_id)=(101754660123256819) is not present in table "statuses".
Command was: ALTER TABLE ONLY public.status_stats
    ADD CONSTRAINT fk_rails_4a247aac42 FOREIGN KEY (status_id) REFERENCES public.statuses(id) ON DELETE CASCADE;


pg_restore: finished item 4344 FK CONSTRAINT status_stats fk_rails_4a247aac42
```

## fk_rails_3ec0cfdd70

Zeile 0079-0082
```
pg_restore: dropping FK CONSTRAINT media_attachments fk_rails_3ec0cfdd70
pg_restore: from TOC entry 4306; 2606 17023 FK CONSTRAINT media_attachments fk_rails_3ec0cfdd70 mastodon
pg_restore: error: could not execute query: ERROR:  constraint "fk_rails_3ec0cfdd70" of relation "media_attachments" does not exist
Command was: ALTER TABLE ONLY public.media_attachments DROP CONSTRAINT fk_rails_3ec0cfdd70;
```

Zeile 3110-3119
```
pg_restore: launching item 4306 FK CONSTRAINT media_attachments fk_rails_3ec0cfdd70
pg_restore: creating FK CONSTRAINT "public.media_attachments fk_rails_3ec0cfdd70"
pg_restore: from TOC entry 4306; 2606 17023 FK CONSTRAINT media_attachments fk_rails_3ec0cfdd70 mastodon
pg_restore: error: could not execute query: ERROR:  insert or update on table "media_attachments" violates foreign key constraint "fk_rails_3ec0cfdd70"
DETAIL:  Key (status_id)=(101755777385149665) is not present in table "statuses".
Command was: ALTER TABLE ONLY public.media_attachments
    ADD CONSTRAINT fk_rails_3ec0cfdd70 FOREIGN KEY (status_id) REFERENCES public.statuses(id) ON DELETE SET NULL;


pg_restore: finished item 4306 FK CONSTRAINT media_attachments fk_rails_3ec0cfdd70
```